const proxy = require('http-proxy-middleware');
const { exec } = require('child_process');
// const mockServer = require('./_mock');

module.exports = function setupProxy(app) {
  const PORT = process.env.PORT || 4000;
  const localEnv = process.env.REACT_APP_MOCK || 'prod';
  const config = {
    // 'dev': '121.40.165.183:8080',
    // 'dev': '172.21.13.149:443',
    dev: 'http://libra-world.com:8080',
    mock: `http://localhost:${PORT}`,
  };
  const devProxy = proxy('/api', {
    target: config[localEnv],
    changeOrigin: true,
    pathRewrite: {
      '^/api': '/api',
    },
  });
  app.use(devProxy);

  // fake-login
  app.get('/fake-login', (req, res) => {
    const cookies = req.query.cookies;
    if (cookies) {
      const cookieList = cookies
        .split(';')
        .filter(t => t)
        .map(item => ({ key: item.split('=')[0], val: item.split('=')[1] }));

      cookieList.forEach(item =>
        res.cookie(item.key, item.val, { expires: new Date(Date.now() + 8 * 3600000), path: '/' })
      );
      res.redirect('/');
    }
  });

  if (localEnv === 'mock') {
    const childProcess = exec(`PORT=${PORT} yarn mock`);
    process.on('exit', () => {
      childProcess.kill();
    });
  }
};

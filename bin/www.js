#! /usr/bin/env node
const mockServer = require('../_mock');

const PORT = process.env.PORT || 4000;

mockServer.listen(PORT, 'localhost', () => {
  console.log(`listen port ${PORT}`);
  // throw Error();
});

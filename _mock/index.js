const express = require('express');
const app = express();
const router = express.Router();

router.get('xxx', (req, res) => {
  res.json({
    success: true,
    data: {
      onlineCount: 100,
      hisCount: 12,
    },
  });
});

router.post('/api/online', (req, res) => {
  res.json({ success: true });
});
router.get('/api/canoffline', (req, res) => {
  res.json({ success: false });
});
router.post('/api/offline', (req, res) => {
  res.json({ success: true });
  // res.status(500).json({ error: 'message' });
});
app.use(router);

module.exports = app;

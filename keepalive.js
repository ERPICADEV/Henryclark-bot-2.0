// keepalive.js
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Henry Bot 2.0 is alive!'));

app.listen(process.env.PORT || 3000, () => {
  console.log('✅ Keepalive server running');
});

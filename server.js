const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('www'));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`FF Hub running on http://127.0.0.1:${PORT}`);
});

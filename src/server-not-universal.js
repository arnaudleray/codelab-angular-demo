const express = require('express');
const app = express();

// Run the app by serving the static files in the dist directory
app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default Heroku port
const HOST = '0.0.0.0';
const PORT = process.env.PORT || 8080;
app.listen(PORT, HOST, () => {
  console.log(`listening on http://${HOST}:${PORT}!`);
});

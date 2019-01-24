const express = require('express');
const fs = require('fs');
const path = require('path');
const { renderToString } = require('react-dom/server');

const fileBuild = './dist/server.js';
const fileBuildExist= path.resolve(__dirname, fileBuild);

if(!fs.existsSync(fileBuildExist)) {
  console.log('please run `npm run build:ssr');
  process.exit();
}

const app = express();
app.use(express.static('client/dist'));
app.get('/', (req, res) => {
  const html = renderMarkup(renderToString(require(fileBuild).default()));
  console.log('html', html);
  res
    .status(200)
    .send(html);
});
app.listen(3000);

function renderMarkup(html) {
  return `<!DOCTYPE html>
<html>
  <head>
    <title>Webpack SSR</title>
    <meta charset='utf-8' />
  </head>
  <body>
    <div id='root'>${html}</div>
    <script src='bundle.js'></script>
  </body>
</html>`;
}
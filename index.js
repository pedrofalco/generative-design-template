import express from 'express';
import { headless } from './public/utils/headless.js';
import { bundle } from './public/utils/bundle.js';
import { render } from './public/utils/render.js';

const resolution = 2048;
const aspect_ratio = 1/1;

const app = express();
const PORT = 3000; 
const server = app.listen(PORT, () => console.log(`listening @ ${PORT} --> http://localhost:${PORT}`));

app.use(express.static('build/'));
app.use(express.json({
    limit: '2mb'
}));

let isHeadless = process.argv.includes("false") ? false : true;
let max = process.argv[3] || 5;

if (process.argv.includes("--h")) {
  headless(isHeadless);
}

if (process.argv.includes("--e")) {
  render(max);
};

if (process.argv.includes("--b")) {
  bundle();
  server.close();
};

export { server, PORT, resolution, aspect_ratio };
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const port = process.env.PORT || 3100;

console.clear()
const app = express();

// // const dataPath = join(__dirname, 'data', 'data.json');
// const data = JSON.parse(fs.readFileSync('./config/data.json', 'utf-8'));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log(`Abrime => http://localhost:${port}/`);
})
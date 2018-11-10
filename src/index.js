require('dotenv').config();
import express from 'express';
import demoPaths from './data/routes/demoPaths'
import bodyParser from 'body-parser'

const cors = require('cors')
const app = express();

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
}))

app.get('/', (req, res) => {
	return res.status(200).json("HOME")
});

app.post('/demo', (req, res) => demoPaths.postDemo(req, res))


app.listen(8080, () => console.log('Running server on port localhost:8080'));
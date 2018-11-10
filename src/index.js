require('dotenv').config();
import express from 'express';
import demoPaths from './data/routes/demoPaths'

const cors = require('cors')
const app = express();

app.use(cors());

app.get('/', (req, res) => {
	return res.status(200).json("HOME")
});

app.post('/demo', (req, res) => demoPaths.postDemo(req, res))


app.listen(8080, () => console.log('Running server on port localhost:8080'));
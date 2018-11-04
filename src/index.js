require('dotenv').config();
import express from 'express';

const cors = require('cors')
const app = express();

app.use(cors());

app.get('/', (req, res) => {
	return res.status(200).json("HOME")
});


app.listen(8080, () => console.log('Running server on port localhost:8080'));
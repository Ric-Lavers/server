require('dotenv').config();
import express from 'express';
import demoRoutes from './data/routes/demoRoutes'
import bodyParser from 'body-parser'

const cors = require('cors')
const app = express();

app.use(cors());
app.use(bodyParser.json({type: '*/*'}))
app.use(bodyParser.urlencoded({
	extended: true
}))

app.get('/', (req, res) => {
	return res.status(200).json("HOME")
});

app.use('/demo', demoRoutes)


app.listen(8080, () => console.log('Running server on port localhost:8080'));
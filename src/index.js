require('dotenv').config();
import 'babel-polyfill'
import express from 'express';
import bodyParser from 'body-parser'
import demoRoutes from './data/routes/demoRoutes'
import personRoutes from './data/routes/personRoutes'
import messagesRoutes from './data/routes/messagesRoutes'
import galleryRoutes from './data/routes/galleryRoutes'

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
app.use('/person', personRoutes)
app.use('/message', messagesRoutes)
app.use('/gallery', galleryRoutes)


app.listen(8080, () => console.log('Running server on port localhost:8080'));
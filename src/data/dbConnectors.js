require('dotenv').config()
import mongoose from 'mongoose'

import {
	demoSchema,
	personSchema,
	messageSchema,
	imageSchema,
} from './mongoSchemas';

if (process.env.APP_ENV==='development'){
	var MONGO_URI=process.env.DEVELOPMENT_MONGO_URI
}else {
	var MONGO_URI=process.env.PROD_MONGO_URI
}
//Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, {useNewUrlParser: true });

const Demo = mongoose.model('demo', demoSchema);
const Person = mongoose.model('person', personSchema);
const Message = mongoose.model('message', messageSchema);
const Image = mongoose.model('image', imageSchema);

export {
	Demo,
	Person,
	Message,
	Image,
}
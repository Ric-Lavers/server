require('dotenv').config()
import mongoose from 'mongoose'

import {
	demoSchema,
	personSchema,
	messageSchema,
} from './mongoSchemas';

var MONGO_URI=process.env.DEVELOPMENT_MONGO_URI

//Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, {useNewUrlParser: true });

const Demo = mongoose.model('demo', demoSchema);
const Person = mongoose.model('person', personSchema);
const Message = mongoose.model('message', messageSchema);

export {
	Demo,
	Person,
	Message,
}
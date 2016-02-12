import express from 'express';
import _ from 'underscore';
import {developmentSetup, startServer} from './helpers';
import classicRouter from './classicRouter';
import apiRouter from './apiRouter';
import Wire from '../libs/wire/server';

var app = express();

app.set('views', './apps/manager/distribution');
app.use(express.static('./apps/manager/distribution'));
developmentSetup(app);

app.use('/', classicRouter);
app.use('/api', apiRouter);

var port = process.env.PORT || 7015;
var server = startServer(app, port, 'localhost');

var wire = new Wire(server), messageStore = [];

var messageCollection = wire.collection('messages', {
	insert: options => {
		messageStore.push(options);

		console.log(messageStore);
		return options;
	},
	update: (id, options) => {
		var currentMessage = _.findWhere(messageStore, {id});
		currentMessage = Object.assign(currentMessage, options);

		return currentMessage;
	},
	destroy: id => {
		return true;
	}
});

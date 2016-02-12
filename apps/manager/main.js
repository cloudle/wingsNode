import WireClient from '../../libs/wire/client';
import {Component} from 'react';

console.log("Just another hello world message..");

var Connection = new WireClient('localhost:7015');
global.Wire = Connection;

global.wireMessage = (options, collectionType = "messages", actionType = "insert") => {
	var message = {data: options, collectionType, actionType};

	Connection.io.emit('wireMessage', message);
};

Connection.io.on('wireMessage', message => console.log(message));
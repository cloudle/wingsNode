import express from 'express';
//import setupAuthentication from './authentication';

var classicRouter = express.Router();

//setupAuthentication(classicRouter);

classicRouter.get('/', (req, res) => {
	res.render('index', {});
});

export default classicRouter;
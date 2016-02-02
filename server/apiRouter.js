import express from 'express';

var apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
	res.json({message: 'Yay!'});
});

export default apiRouter;

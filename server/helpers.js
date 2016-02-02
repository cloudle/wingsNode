import config from '../webpack.config.dev';
var webpack = require('webpack');

var compiler = webpack(config);

export function developmentSetup (serverInstance) {
	serverInstance.use(require('webpack-dev-middleware')(compiler, {
		noInfo: true,
		publicPath: config.output.publicPath
	}));

	serverInstance.use(require('webpack-hot-middleware')(compiler));
}

export function startServer (app, port, host = 'localhost') {
	return app.listen(port, host, (error) => {
		if (error) {
			console.log(error)
		} else {
			console.log(`Server is running under port: ${port}`);
		}
	})
}
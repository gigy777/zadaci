import http, { request } from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import routes from './routes';
import config from './config.json';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

let app = express();
app.server = http.createServer(app);

// logger
app.use(morgan('dev'));

app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json());

// api router
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api/v1/',routes());
app.use('', (req,res)=>{
    res.status(200).json('Welcome to zadatak 5');
});
app.server.listen(config.port, () => {
	console.log(`Started on port ${app.server.address().port}`);
});

export default app;
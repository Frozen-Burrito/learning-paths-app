import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import morganMiddleware from './utils/morganMiddleware';
import Log from './utils/logger';

import { ApiRouter } from './routes';

class App {
	public app: express.Application = express();
	public apiRouter: ApiRouter = new ApiRouter();
	
	constructor() {
		this.config();
		this.setupMongoDB();
	}

	private config(): void {
		dotenv.config({ path: './src/.env.development'});
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: false }));

		this.app.use(morganMiddleware);
		
		this.app.use('/api', this.apiRouter.router);
	}

	private async setupMongoDB(): Promise<void> {
		try {
			let mongoUri: string = process.env.MONGO_URI || '';
			const dbConnection = await mongoose.connect(mongoUri, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useCreateIndex: true
			});
	
			Log.debug(`MongoDB connected: ${dbConnection.connection.host}`);
	
		} catch (error) {
			Log.error(`An error occurred while connecting to MongoDB: ${error}`);
		}
	}
}

export default new App().app;
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import morganMiddleware from './utils/morganMiddleware';
import Log from './utils/logger';

import { Routes } from './routes';

class App {
	private NODE_ENV: string | undefined = process.env.NODE_ENV;

	public app: express.Application = express();
	public router: Routes = new Routes();
	
	constructor() {
		this.config();
		this.setupMongoDB();
		this.router.routes(this.app);
	}

	private config(): void {
		dotenv.config({ path: './.env.development'});
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: false }));

		this.app.use(morganMiddleware);
		// if (this.NODE_ENV == "development") {
		// 	this.app.use(morgan('dev'));
		// }
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
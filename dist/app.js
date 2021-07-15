"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const morganMiddleware_1 = __importDefault(require("./utils/morganMiddleware"));
const logger_1 = __importDefault(require("./utils/logger"));
const routes_1 = require("./routes");
class App {
    constructor() {
        this.NODE_ENV = process.env.NODE_ENV;
        this.app = express_1.default();
        this.router = new routes_1.Routes();
        this.config();
        this.setupMongoDB();
        this.router.routes(this.app);
    }
    config() {
        dotenv_1.default.config();
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(morganMiddleware_1.default);
        // if (this.NODE_ENV == "development") {
        // 	this.app.use(morgan('dev'));
        // }
    }
    setupMongoDB() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let mongoUri = process.env.MONGO_URI || '';
                const dbConnection = yield mongoose_1.default.connect(mongoUri, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useCreateIndex: true
                });
                logger_1.default.debug(`MongoDB connected: ${dbConnection.connection.host}`);
            }
            catch (error) {
                logger_1.default.error(`An error occurred while connecting to MongoDB: ${error}`);
            }
        });
    }
}
exports.default = new App().app;

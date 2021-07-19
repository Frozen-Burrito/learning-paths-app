import winston from 'winston';

const ERRORS_FILENAME = 'logs/errors.log';
const ALL_FILENAME = 'logs/all.log';

const levels: winston.config.AbstractConfigSetLevels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4
}

const getLogLevel = () => {
    const env = process.env.NODE_ENV || 'development';
    const isDev = env == 'development';
    return isDev ? 'debug' : 'warn';
}

enum logColors {
    error = 'red',
    warn = 'yellow',
    info = 'white',
    http = 'blue',
    debug = 'white',
}

winston.addColors(logColors);

const format = winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    winston.format.colorize({ all: true }),
    winston.format.printf(
        (info) => `${info.timestamp} ${info.level}: ${info.message}`,
    )
);

const transports = [
    new winston.transports.Console(),
    new winston.transports.File({
        filename: ERRORS_FILENAME
    }),
    new winston.transports.File({ filename: ALL_FILENAME }),
];

const Logger = winston.createLogger({
    level: getLogLevel(),
    levels,
    format,
    transports
});

export default Logger;
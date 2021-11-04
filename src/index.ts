import "source-map-support/register";
import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    // More about levels: https://github.com/winstonjs/winston#logging
    new winston.transports.File({ filename: `./error.log`, level: 'error' }),
    new winston.transports.File({ filename: `./combined.log` }),
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  ],
});


export default logger;
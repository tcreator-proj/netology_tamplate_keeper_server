const express = require('express');
const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = process.env.LOG_LEVEL;


const app = express(); 
const port: number = 4000;

logger.info('log4js log info');
logger.debug('log4js log debug');
logger.error('log4js log error');

app.get('/', (request: any, response: any) => {
    response.send("Hello, World");
})

app.listen(port, () => {
    console.log("There is server")
})
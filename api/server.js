const express = require('express');
const helmet = require('helmet');

//routes
const projectRouter = require('./projects/project-router');
const resourceRouter = require('./resources/resource-router');
const taskRouter = require('./tasks/task-router');

const server = express();

server.use(helmet());
server.use(express.json());

//Check to make sure these routes are correct
server.use('/api/project',projectRouter ),
server.use('/api/resource',resourceRouter ),
server.use('/api/task',taskRouter ),


module.exports = server;
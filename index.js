require('dotenv').config();

const Server = require('./config/Server.config');

const server = new Server()
server.listen();
const express = require('express');
const cors = require('cors');
// const fileUpload = require('express-fileupload');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        // PATHS
        this.paths = {
        }
        // Midddelware
        this.middelwares();
    }

    middelwares() {
        // CORS
        this.app.use(cors());
        // USE JSON
        this.app.use(express.json());
        // PUBLIC DIRECTORY
        this.app.use(express.static('public'));
        // carga de archivos
        // this.app.use(fileUpload({
        //     useTempFiles: true,
        //     tempFileDir: '/tmp/',
        //     createParentPath: true
        // }));
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server run in PORT: ', this.port);
        })
    }
}
module.exports = Server;
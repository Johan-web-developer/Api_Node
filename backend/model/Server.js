
const express = require('express');
const cors = require('cors');
const router = express.Router();
const routeCampers = require('../routes/campers.routes')
const routeTrainers = require('../routes/trainers.routes');
const routeEquipos = require('../routes/equipos_computo.routes');
const routeSalones = require('../routes/salones.routes');
const routeJornadas = require('../routes/jornadas.routes')

class Server {
    constructor() {
        this.app = express();
        this.middleware();
        this.port = process.env.PORT;
        this.routes();
    }


    middleware() {
        this.app.use(express.json());
        this.app.use((req, res, next) => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            next();
          });
    }

    routes() {
        this.app.use('/api/', routeCampers);
        this.app.use('/api/trainers', routeTrainers);
        this.app.use('/api/equipo_computo', routeEquipos);
        this.app.use('/api/salones/', routeSalones);
        this.app.use('/api/jornadas/', routeJornadas)

    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port : ${this.port}`);
        });
    }
}

module.exports = Server;
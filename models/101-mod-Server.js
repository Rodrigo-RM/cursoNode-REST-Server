//  SERVIDOR
// -------------------------------
// 
// EXPRESS
const Express = require('express');
const Cors = require('cors');

// 
class CL_SERVER {

    constructor() {

        // Init
        this.App = Express();
        this.wPort = process.env.PORT || 4000;
        // rutas def
        this.wRutaPath_Usuarios = '/api/usuarios';

        // Middlewares: agrega +funcionalidades al WebServer
        this.mtServ_MiddleWares();

        // Rutas
        this.mtServ_Routes();
    }

    // ROUTS
    mtServ_Routes() {

        // middleware - ruta
        this.App.use(this.wRutaPath_Usuarios, require('../routes/106-route-users'));
    };

    // LISTEN
    mtServ_Listen() {
        this.App.listen(this.wPort, () => {
            console.log(`WEB-Server running and listening at http://localhost:${this.wPort}`);
        })
    };

    // MIDDLEWARES
    mtServ_MiddleWares() {

        // Cors
        this.App.use(Cors());

        // Formato Data. Lectura y Parseo Body-request
        this.App.use(Express.json());

        // Directorio Publico
        this.App.use(Express.static('public'));



    };


}

module.exports = CL_SERVER
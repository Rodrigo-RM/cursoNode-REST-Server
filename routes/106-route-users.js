// 
//  ROUTAS DE USUARIOS
// 

const { Router } = require('express');
// 
// controladores de rutas - USUARIOS
const {
    fnContUSERS_GET,
    fnContUSERS_POST,
    fnContUSERS_PUT,
    fnContUSERS_DELETE,
    fnContUSERS_PATCH
} = require('../controllers/106-control-users');

//
const _Router = Router();
// 


// Muestra si hace acá
// _Router.get('/', (req, res) => {
//     // res.status(403).json({  // para responder con error
//     res.json({
//         msg: 'Server-Route: GET ...'
//     });
// });

// RUTAS con Controladores:

_Router.get('/', fnContUSERS_GET);

_Router.post('/', fnContUSERS_POST);

_Router.put('/:_userId', fnContUSERS_PUT);

_Router.delete('/', fnContUSERS_DELETE);

_Router.patch('/', fnContUSERS_PATCH);

// export
module.exports = _Router;
0
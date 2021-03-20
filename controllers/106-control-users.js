// Controladores de Rutas de Usuarios
//

const { response, request } = require('express');
// 

// El método GET  solicita una representación de un recurso específico.
const fnContUSERS_GET = (req = request, res = response) => {
    // 
    // const wParams = req.query

    // Esta destructuración permite capturar todos los
    // parámetros que llegan y obviar los que no son enviados

    const { q, name = 'not Name present', apiKey, page = 1, limit } = req.query;

    // 
    res.json({
        msg: 'Controller-User-Route: GET ...',
        q,
        name,
        apiKey,
        page,
        limit
    });
}

// El método POST se utiliza para enviar una entidad a un recurso en específico, 
// causando a menudo un cambio en el estado o efectos secundarios en el servidor.
// CREATE
const fnContUSERS_POST = (req, res = response) => {
    // 
    // const DataBody = req.body;
    const { id, name, age } = req.body;

    res.json({
        msg: 'Controller-User-Route: POST ...',
        id,
        nombre: name,
        age
    });
}

// El modo PUT reemplaza todas las representaciones actuales del recurso 
// UPDATE
const fnContUSERS_PUT = (req, res = response) => {
    // 
    // const { wUserId } = req.params;
    const wUserId = req.params._userId;
    // 
    res.json({
        msg: 'Controller-User-Route: PUT ...',
        id: wUserId
    });
}

// El método PATCH  es utilizado para aplicar modificaciones parciales a un recurso.
const fnContUSERS_PATCH = (req, res = response) => {
    res.json({
        msg: 'Controller-User-Route: PATCH ...'
    });
}

// El método DELETE borra un recurso en específico.
const fnContUSERS_DELETE = (req, res = response) => {
    res.json({
        msg: 'Controller-User-Route: DELETE ...'
    });
}


module.exports = {
    fnContUSERS_GET,
    fnContUSERS_POST,
    fnContUSERS_PUT,
    fnContUSERS_PATCH,
    fnContUSERS_DELETE,
}
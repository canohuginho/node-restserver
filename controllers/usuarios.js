const { request, response } = require('express');

const usuariosGet = (req = request, res = response) => {
    const { q, dato, page = 1 } = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        dato,
        page
    });
}

const usuariosPut = (req = request, res = response) => {
    const id = req.params.id;

    //Mandar estatus de aceptacion o error
    //res.status(400).json({
    res.json({
        msg: 'put API - controlador',
        id
    });
}

const usuariosPost = (req = request, res = response) => {
    const body = req.body;

    res.json({
        msg: 'post API - controlador',
        body
    });
}

const usuariosDelete = (req = request, res = response) => {
    res.json({
        msg: 'delete API - controlador'
    });
}

const usuariosPatch = (req = request, res = response) => {
    res.json({
        msg: 'patch API - controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}
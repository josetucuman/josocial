const { Router } = require('express')
const home = require('../controller/home')
const img = require('../controller/image')
const rutas = Router();

module.exports = app => {
    rutas.get('/', home.index);
    rutas.get('/about', home.about)
    rutas.get('/images/:img_id', img.index);
    rutas.post('/images', img.crearImagen);
    rutas.post('/images/:img_id/likes', img.likearImagen);
    rutas.post('/images/:img_id/comentar', img.comentarImagen);
    rutas.delete('/images/:img_id', img.deleteImagen);
    app.use(rutas)
};
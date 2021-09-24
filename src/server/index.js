const path = require('path');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const multer = require('multer')
const express = require('express');
const rutas = require('../routes');
const errorHandler = require('errorhandler');

module.exports = app => {

    //Settings del proyecto
    app.set('port', process.env.PORT || 4400);
    app.set('views', path.join(__dirname, 'views'));
    app.engine('.hbs', exphbs({
        defaultLayout: 'main',
        partialsDir: path.join(app.get('views'), 'partials'),
        layoutsDir: path.join(app.get('views'), 'layouts'),
        extname: '.hbs', 
        helpers: require('./helpers')
    }));
    app.set('view engine', '.hbs');

    // Middleware
    app.use(morgan('dev'));
    app.use(multer({dest: path.join(__dirname, '../public/upload/temp')}).single('image'));
    app.use(express.urlencoded({extended: false}))
    app.use(express.json());



    // Rutas 
    rutas(app)


    // Archivos estaticos
    app.use('/public',express.static(path.join(__dirname, '../public')))

    // Manejo de errores 
    if ('development' === app.get('env')){
        app.use(errorHandler)
    }


    return app

}
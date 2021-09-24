require('dotenv').config()
const express = require('express');

const config = require('./server')

const app = config(express());

require('./databases')

app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en el puerto =====>>> ${app.get('port')}`)
})


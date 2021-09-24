const mongoose = require('mongoose');
const { databaseMongo } = require('./keys')


mongoose.connect(databaseMongo.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('EL servicio de MongoDB esta conectado OK!!!'))
    .catch(errors => console.error(errors))
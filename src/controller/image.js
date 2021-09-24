const ctrlImage = {};

ctrlImage.index = (req, res) => {
    res.send('Hola desde IMAGENES')
}

ctrlImage.crearImagen = (req, res) => {
    res.send('Hola desde crearImagen')
}

ctrlImage.likearImagen = (req, res) => {}

ctrlImage.comentarImagen = (req, res) => {}

ctrlImage.deleteImagen = (req, res) => {}

module.exports = ctrlImage;
const ctrlHome = {};

ctrlHome.index = (req, res) =>{
    res.send('Hola Mundo desde CONTROLLER!!!')
}

ctrlHome.about = (req, res) =>{
    res.send('A cerca de mi...')
}

module.exports = ctrlHome;
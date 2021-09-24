const ctrlHome = {};

ctrlHome.index = (req, res) =>{
    res.render('index')
}

ctrlHome.about = (req, res) =>{
    res.send('A cerca de mi...')
}

module.exports = ctrlHome;
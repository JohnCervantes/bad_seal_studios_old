const moongose = require('mongoose');

const temp = moongose.Schema({
    category: String,
    name: String,
    pic: String,
    url: String,
    text: String,
    date: String
}, { collection: 'projectPanels' })

const temp1 = moongose.Schema({
    url: String,
    title: String,
    banner: String,
    content: String,
    links: String,
}, { collection: 'projects' })


module.exports = {
    GetProjectPanels: moongose.model('GetProjectPanels', temp),
    GetProject: moongose.model('GetProject', temp1)
}


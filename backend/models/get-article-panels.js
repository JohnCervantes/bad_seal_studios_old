const moongose = require('mongoose');

const temp = moongose.Schema({
    url: String,
    header: String,
    date: String,
    pic: String,
    text: String,
},{collection: 'articlePanels'})

const temp1 = moongose.Schema({
    url: String,
    date: String,
    banner: String,
    title: String,
    content: String,
},{collection: 'articles'})


module.exports = {
    GetArticlePanels: moongose.model('GetArticlePanels', temp),
    GetArticle: moongose.model('GetArticle', temp1 )
 }


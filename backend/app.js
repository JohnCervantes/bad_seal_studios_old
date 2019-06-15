//node js import syntax
const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { GetArticlePanels } = require('./models/get-article-panels');
const { GetArticle } = require('./models/get-article-panels');
const { GetProjectPanels } = require('./models/get-project-panels');
const { GetProject } = require('./models/get-project-panels');

//qY9N8U31vUwVhPxs << password
mongoose.connect("mongodb+srv://john:qY9N8U31vUwVhPxs@cluster0-qiz6c.mongodb.net/test?retryWrites=true")
    .then(() => {
        console.log("Connected to db");
    }).catch(() => {
        console.log("Connection failed");
    });

//middlewares
//app.use('path', (req, res, next) => {} );
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");

    next();
});

// // Redirect to HTTPS
// app.use(function (req, res, next) {
//     // Insecure request?
//     if (req.get('x-forwarded-proto') == 'http') {
//         // Redirect to https://
//         return res.redirect('https://' + req.get('host') + req.url);
//     }

//     next();
// });

app.use("/", express.static(path.join(__dirname, "dist")));

app.get('/api/articlePanels', (req, res, next) => {
    const currentPage = +req.query.page;
    const articleQuery = GetArticlePanels.find();
    if (currentPage) {
        articleQuery.sort({ '_id': -1 }).skip(5 * (currentPage - 1)).limit(5);
    }
    articleQuery.then(documents => {
        res.json(documents);
    });
});

app.get('/api/articles', (req, res, next) => {
    GetArticle.find().then(documents => {
        res.json(documents);
    });
});

app.get('/api/projectPanels', (req, res, next) => {
    const currentPage = +req.query.page;
    const articleQuery = GetProjectPanels.find();
    if (currentPage) {
        articleQuery.skip(5 * (currentPage - 1)).limit(5);
    }
    articleQuery.then(documents => {
        res.json(documents);
    });
});

app.get('/api/projects', (req, res, next) => {
    GetProject.find().then(documents => {
        res.json(documents);
    });
});

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});


//node js export syntax
module.exports = app;





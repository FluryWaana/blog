const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const articleRoutes = require('./routes/article');
const userRoutes = require('./routes/user');
const roleRoutes = require('./routes/role');
const app = express();

// Connexion DB
mongoose.connect('mongodb://ocruser:ocruser@127.0.0.1:27017/ocr?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(
        () => console.log('Connexion à MongoDB réussie !')
    )
    .catch(
        () => console.log('Connexion à MongoDB échouée !')
    );

// CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Parser JSON
app.use(bodyParser.json());

// Routes
app.use('/api/articles', articleRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/roles', roleRoutes);

module.exports = app;

const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()

const url = "mongodb://localhost:5001/blog";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false}))

app.get('/', (req, res) => {
    const articles = [{
        title: 'Test Article 1',
        createdAt: new Date(),
        description: 'Here is my first test article to be displayed on the home page of my blog website.'
    },
    {
        title: 'Wonderful Weather',
        createdAt: new Date(),
        description: 'Did you get to go outside and check out the weather this week? It has been amazing. I am so ready for spring! Go outside and smell some roses.'
    }]
    res.render('articles/index', { articles: articles })
})

app.use('/articles', articleRouter)

app.listen(5001)
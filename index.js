const express = require('express')
const app = express()
const path = require('path')
const allQuotes = require('./static/quotes.json')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.set('static', path.join(__dirname, '/static'))

app.get('/', (req, res) => {
    const randNum = Math.floor(Math.random() * (1643 - 1) + 1)
    try {
        const quoteText = allQuotes[randNum].text
        const quoteAuthor = allQuotes[randNum].author
        res.render('home.ejs', { quoteText, quoteAuthor })
    } catch {
        const quoteText = 'Something went wrong. Please refresh the page.'
        const quoteAuthor = 'Developer'
        res.render('home.ejs', { quoteText, quoteAuthor })
    }
})

app.listen(8080, () => {
    console.log('Listening on port 8080')
})
const express = require('express')
const robots = require('express-robots-txt')
const app = express()
const path = require('path')
const allQuotes = require('./static/quotes.json')

app.use(express.static('static'))
app.use(robots(__dirname + '/robots.txt'))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.set('static', path.join(__dirname, '/static'))

const PORT = process.env.PORT || 80

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

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

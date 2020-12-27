const express = require('express')
const path = require('path')
const engQuotes = require('./static/eng_quotes.json')
const ruQuotes = require('./static/rus_quotes.json')

const app = express()

app.use(express.static('static'))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.set('static', path.join(__dirname, '/static'))

const PORT = process.env.PORT || 80

app.get('/', (req, res) => {
    const randNum = Math.floor(Math.random() * (1643 - 1) + 1)
    try {
        const quoteText = engQuotes[randNum].text
        const quoteAuthor = engQuotes[randNum].author
        res.render('home.ejs', { quoteText, quoteAuthor, randNum })
    } catch {
        const quoteText = 'Something went wrong. Please refresh the page.'
        const quoteAuthor = 'Developer'
        res.render('home.ejs', { quoteText, quoteAuthor, randNum })
    }
})

app.get('/ru/', (req, res) => {
    const randNum = Math.floor(Math.random() * (999 - 1) + 1)
    try {
        const quoteText = ruQuotes[randNum].text
        const quoteAuthor = ruQuotes[randNum].author
        res.render('ru_quote.ejs', { quoteText, quoteAuthor, randNum })
    } catch {
        const quoteText = 'Something went wrong. Please refresh the page.'
        const quoteAuthor = 'Developer'
        res.render('ru_quote.ejs', { quoteText, quoteAuthor, randNum })
    }
})

app.get('/en/id=:quoteid', (req, res) => {
    const { quoteid } = req.params
    try {
        const quoteText = engQuotes[quoteid].text
        const quoteAuthor = engQuotes[quoteid].author
        res.render('quotebyid.ejs', {
            quoteText,
            quoteAuthor,
            randNum: quoteid,
        })
    } catch {
        const quoteText = 'Всё сломалось!! Перезагрузи страницу.'
        const quoteAuthor = 'Зломорда'
        res.render('quotebyid.ejs', {
            quoteText,
            quoteAuthor,
            randNum: quoteid,
        })
    }
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

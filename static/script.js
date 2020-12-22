const refreshOnSpace = document.querySelector('body')
const touch = document.querySelector('.quoteText')

refreshOnSpace.addEventListener('keyup', function (event) {
    if (event.code === 'Space') window.location.reload()
})

touch.addEventListener('touchstart', () => window.location.reload())

const refreshOnSpace = document.querySelector('.container')
refreshOnSpace.addEventListener('keyup', function (event) {
    if (event.code === 'Space') window.location.reload()
})

let touchEvent = document.querySelector('body'),
    touchStart,
    touchEnd

touchEvent.addEventListener('touchstart', (eve) => {
    touchStart = eve.changedTouches[0].clientX
})

touchEvent.addEventListener('touchend', (eve) => {
    touchEnd = eve.changedTouches[0].clientX
    if (touchStart - touchEnd !== 0) {
        window.location.reload()
    }
})

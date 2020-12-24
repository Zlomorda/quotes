const refreshOnSpace = document.querySelector('body')
refreshOnSpace.addEventListener('keyup', function (event) {
    console.log('da')
    if (event.code === 'Space') window.location.reload()
})

let touchEvent = document.querySelector('.container'),
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

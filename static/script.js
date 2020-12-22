window.onload = function () {
    document.querySelector('body').addEventListener('keyup', function (e) {
        if (e.code === 'Space') window.location.reload()
    })
}

window.onload = function () {
    document.querySelector('body').addEventListener('mouseup', function (e) {
        if (e.button === 0) window.location.reload()
    })
}

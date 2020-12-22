window.onload = function () {
    document.querySelector('body').addEventListener('keyup', function (e) {
        if (e.code === 'Space') window.location.reload()
    })
}

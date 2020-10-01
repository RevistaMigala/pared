const changeBackgroundColor = () => {
    // Elements
    const display = document.querySelector(".piece-2")
    const body = document.querySelector('body')

    // Positions
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    const topOffset = vh - display.getBoundingClientRect().top
    const bottomOffset = vh - display.getBoundingClientRect().bottom

    // Results
    const topOpacity = topOffset / (vh / 2)
    const bottomOpacity = bottomOffset / (vh / 2)

    if (topOpacity > 0 && topOpacity < 1) {
        body.style["background-color"] = `rgba(0, 0, 0, ${topOpacity})`
    }
    if (topOpacity > 1) {
        body.style["background-color"] = 'rgba(0, 0, 0, 1)'
    }
    if (bottomOpacity > 0 && bottomOpacity < 1) {
        body.style["background-color"] = `rgba(0, 0, 0, ${1 - bottomOpacity})`
    }
    if (topOpacity < 0 || bottomOpacity > 1) {
        body.style["background-color"] = 'rgba(0, 0, 0, 0)'
    }
}

window.addEventListener('load', changeBackgroundColor)
window.addEventListener('scroll', changeBackgroundColor)

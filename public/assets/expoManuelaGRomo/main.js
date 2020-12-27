document.addEventListener('DOMContentLoaded', async () => {
    this.images = await Image.fetch()
    setImage('default')
    const textArray = getTexts()
    textArray.forEach((text) => {
        text.addEventListener('mouseover', renderImage)
        text.addEventListener('touchstart', renderImageTouch)
        text.addEventListener('touchend', removeClass)
    })
})

const getTexts = () => {
    const texts = document.querySelector('.text-scroll').children

    return [...texts]
}

const renderImage = (event) => {
    const id = event.target.id
    setImage(id)
}

const renderImageTouch = (event) => {
    renderImage(event)
    event.target.className = 'touch-selected'
}

const removeClass = (event) => {
    event.target.className = ''
}

const setImage = (id) => {
    const imageSrc = Image.getSrcById(id, this.images)
    const img = new Image(imageSrc)
    const imgDiv = document.querySelector('.image-scroll')
    imgDiv.innerHTML = img.html
}

class Image {
    constructor (src) {
        this.src = src
        this.html = this.html()
    }

    static getSrcById (id, images) {
        const defaultImg = 'http://migala.mx/recursos/pared/manuelaGRomo/casapropia.png'
        const img = images.find((image) => image._id === id)
        return (img) ? img.image_url : defaultImg
    }

    static async fetch () {
        try {
            const res = await fetch('/services/casapropia')
            const body = await res.json()

            return body
        } catch (error) {
            console.log(error)
        }
    }

    html () {
        return `<img src="${this.src}">`
    }
}

// Config
class Viewport {
    constructor (viewportName, sliderName) {
        this.imageUrl = 'http://migala.mx/recursos/pared/helioSantos/$id.jpg'
        this.viewport = document.getElementById(viewportName)
        this.slider = document.getElementById(sliderName)
        this.bullets = Array.from(this.slider.querySelectorAll('.bullet'))
        this.arrows = Array.from(this.slider.querySelectorAll('.arrow'))
        this.imageIds = this.bullets.map((bullet) => bullet.id)
        this.img = this.viewport.querySelector('#viewport-image')
        this.link = this.viewport.querySelector('a')
        this.imageIndex = 0
        this.arrows.forEach((arrow, i) => {
            arrow.addEventListener('click', (event) => {
                this.replaceImage(i)
            })
        })
    }

    setDefaultImage () {
        this.visibleId = this.imageIds[this.imageIndex]
        const url = this.imageUrl.replace('$id', this.visibleId)
        this.img.src = url
        this.link.href = url
        this.highlightBullet()
    }

    replaceImage (i) {
        const addend = (i === 0) ? -1 : 1
        if ((this.imageIndex + addend) < 0
            || (this.imageIndex + addend) >= this.imageIds.length) {
            return
        }

        this.imageIndex += addend
        const url = this.imageUrl.replace('$id', this.imageIds[this.imageIndex])
        this.img.src = url
        this.link.href = url
        this.highlightBullet()
    }

    highlightBullet() {
        this.bullets.forEach((bullet) => bullet.className = 'bullet')
        const mainBullet = this.bullets[this.imageIndex]
        mainBullet.className += ' highlight'
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const viewports = Array.from(document.querySelectorAll('.images-container'))
    viewports.forEach((_, i) => {
        const viewport = new Viewport(`viewport-${i + 1}`, `images-${i + 1}`)
        viewport.setDefaultImage()
    })
})

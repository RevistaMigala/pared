document.addEventListener("DOMContentLoaded", () => {
    const rotator = document.querySelector('.sliderRotate')
    const zoom = document.querySelector('.sliderZoom')
    let rotationIndex = 360
    let zoomIndex = 600
    let yIndex = (600 - zoomIndex) / 600 * 200
    let positionIndex = 360 + 45
    let touchIdentifier
    let xInitial

    document.querySelector('.piece-1').addEventListener("touchmove", (event) => {
        xInitial = (touchIdentifier === event.targetTouches[0].identifier)
            ? xInitial
            : event.targetTouches[0].pageX

        touchIdentifier = event.targetTouches[0].identifier
        const toRotate = (event.targetTouches[0].pageX - xInitial) * .5
        xInitial = event.targetTouches[0].pageX

        const slider = document.querySelector('.sliderRotate')
        if ((parseInt(slider.value) + toRotate) <= 0) {
            slider.value = 0
        } else if ((parseInt(slider.value) + toRotate) >= 360) {
            slider.value = 360
        } else {
            slider.value = parseInt(slider.value) + toRotate
        }
        rotationIndex = slider.value
        positionIndex = rotationIndex + 45
        yIndex = (600 - zoomIndex) / 600 * 200
        setIndexes(Math.ceil(rotationIndex / 90))
        const piece = document.querySelector('.piece-1')
        piece.style.transform = `translateZ(-${zoomIndex}px) rotateY(${rotationIndex}deg) translateY(${yIndex}px)`
    })

    rotator.addEventListener('input', (event) => {
        rotationIndex = event.target.value
        positionIndex = rotationIndex + 45
        yIndex = (600 - zoomIndex) / 600 * 200
        setIndexes(Math.ceil(rotationIndex / 90))
        const piece = document.querySelector('.piece-1')
        piece.style.transform = `translateZ(-${zoomIndex}px) rotateY(${rotationIndex}deg) translateY(${yIndex}px)`
    })

    zoom.addEventListener('input', (event) => {
        zoomIndex = event.target.value
        yIndex = (600 - zoomIndex) / 600 * 200
        const container =  document.querySelector('.container')
        let containerHeight = 1000 + (yIndex * 2.25)
        container.style['height'] = containerHeight + 'px'

        const piece = document.querySelector('.piece-1')
        piece.style.transform = `translateZ(-${zoomIndex}px) rotateY(${rotationIndex}deg) translateY(${yIndex}px)`
    })
})

const setIndexes = (position) => {
    switch (position) {
      case 4:
          changePositions(3, 1, 2, 4)
          break
      case 3:
          changePositions(1, 2, 4, 3)
          break
      case 2:
          changePositions(2, 4, 3, 1)
          break
      case 1:
          changePositions(4, 3, 1, 2)
          break
      default:
          changePositions(4, 1, 2, 3)
          break;
    }
    return
}

const changePositions = (front, left, back, right) => {
    document.querySelector('.part-front').style['z-index'] = front
    document.querySelector('.part-left').style['z-index'] = left
    document.querySelector('.part-back').style['z-index'] = back
    document.querySelector('.part-right').style['z-index'] = right
}

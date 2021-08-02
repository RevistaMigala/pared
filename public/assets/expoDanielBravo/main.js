const sources = {
    f4: {
        url: 'http:///www.migala.mx/recursos/pared/danielBravo/Hueyo_F4.wav',
        preview: 'http:///www.migala.mx/recursos/pared/danielBravo/Hueyo_F4.jpg',
        mediaType: 'audio',
        nextAction: `randomPath(['v3', 'v6'])`,
    },
    v3: {
        url: 'http:///www.migala.mx/recursos/pared/danielBravo/Hueyo_V3.mp4',
        mediaType: 'video',
        nextAction: `insertModal('e1')`,
    },
    e1: {
        url: 'http:///www.migala.mx/recursos/pared/danielBravo/Hueyo_E1.wav',
        preview: 'http:///www.migala.mx/recursos/pared/danielBravo/Hueyo_E1.jpg',
        mediaType: 'audio',
        nextAction: `hideModal()`,
    },
    v6: {
        url: 'http:///www.migala.mx/recursos/pared/danielBravo/Hueyo_V6.mp4',
        mediaType: 'video',
        nextAction: `insertModal('v2')`,
    },
    v2: {
        url: 'http:///www.migala.mx/recursos/pared/danielBravo/Hueyo_V2.mp4',
        mediaType: 'video',
        nextAction: `insertModal('v4')`,
    },
    v4: {
        url: 'http:///www.migala.mx/recursos/pared/danielBravo/Hueyo_V4.mp4',
        mediaType: 'video',
        nextAction: `insertModal('e3')`,
    },
    e3: {
        url: 'http:///www.migala.mx/recursos/pared/danielBravo/Hueyotenco.mp4',
        mediaType: 'video',
        nextAction: `hideModal()`,
    },
    v10: {
        url: 'http:///www.migala.mx/recursos/pared/danielBravo/Hueyo_V10.mp4',
        mediaType: 'video',
        nextAction: `insertModal('f9')`,
    },
    f9: {
        url: 'http:///www.migala.mx/recursos/pared/danielBravo/Hueyo_F9.wav',
        preview: 'http:///www.migala.mx/recursos/pared/danielBravo/Hueyo_F9.jpg',
        mediaType: 'audio',
        nextAction: `insertModal('f6')`,
    },
    f6: {
        url: 'http:///www.migala.mx/recursos/pared/danielBravo/Hueyo_F6.wav',
        preview: 'http:///www.migala.mx/recursos/pared/danielBravo/Hueyo_F6.jpg',
        mediaType: 'audio',
        nextAction: `insertModal('v1')`,
    },
    v1: {
        url: 'http:///www.migala.mx/recursos/pared/danielBravo/Hueyo_V1.mp4',
        mediaType: 'video',
        nextAction: `insertModal('e2')`,
    },
    e2: {
        url: 'http:///www.migala.mx/recursos/pared/danielBravo/Hueyo_E2.wav',
        mediaType: 'audio',
        preview: 'http:///www.migala.mx/recursos/pared/danielBravo/Hueyo_E2.jpg',
        nextAction: `hideModal()`,
    },
    f2: {
        url: 'http:///www.migala.mx/recursos/pared/danielBravo/Hueyo_F2.wav',
        preview: 'http:///www.migala.mx/recursos/pared/danielBravo/Hueyo_F2.jpg',
        mediaType: 'audio',
        nextAction: `randomPath(['v5', 'v7'])`,
    },
    v5: {
        url: 'http:///www.migala.mx/recursos/pared/danielBravo/Hueyo_V5.mp4',
        mediaType: 'video',
        nextAction: `insertModal('f7')`,
    },
    f7: {
        url: 'http:///www.migala.mx/recursos/pared/danielBravo/Hueyo_F7.wav',
        preview: 'http:///www.migala.mx/recursos/pared/danielBravo/Hueyo_F7.jpg',
        mediaType: 'audio',
        nextAction: `insertModal('v2')`,
    },
    v7: {
        url: 'http:///www.migala.mx/recursos/pared/danielBravo/Hueyo_V7.mp4',
        mediaType: 'video',
        nextAction: `insertModal('v3')`,
    },
    v8: {
        url: 'http:///www.migala.mx/recursos/pared/danielBravo/Hueyo_V8.mp4',
        mediaType: 'video',
        nextAction: `insertModal('v1')`,
    },
    f8: {
        url: 'http:///www.migala.mx/recursos/pared/danielBravo/Hueyo_F8.wav',
        preview: 'http:///www.migala.mx/recursos/pared/danielBravo/Hueyo_F8.jpg',
        mediaType: 'audio',
        nextAction: `insertModal('f3')`,
    },
    f3: {
        url: 'http:///www.migala.mx/recursos/pared/danielBravo/Hueyo_F3.wav',
        preview: 'http:///www.migala.mx/recursos/pared/danielBravo/Hueyo_F3.jpg',
        mediaType: 'audio',
        nextAction: `randomPath(['f8', 'v4'])`,
    },
    f5: {
        url: 'http:///www.migala.mx/recursos/pared/danielBravo/Hueyo_F5.wav',
        preview: 'http:///www.migala.mx/recursos/pared/danielBravo/Hueyo_F5.jpg',
        mediaType: 'audio',
        nextAction: `randomPath(['v4', 'v10'])`,
    },
    v9: {
        url: 'http:///www.migala.mx/recursos/pared/danielBravo/Hueyo_V9.mp4',
        mediaType: 'video',
        nextAction: `insertModal('f6')`,
    },
    f1: {
        url: 'http:///www.migala.mx/recursos/pared/danielBravo/Hueyo_F1.wav',
        preview: 'http:///www.migala.mx/recursos/pared/danielBravo/Hueyo_F1.jpg',
        mediaType: 'audio',
        nextAction: `randomPath(['f8', 'f10'])`,
    },
    f10: {
        url: 'http:///www.migala.mx/recursos/pared/danielBravo/Hueyo_F10.wav',
        preview: 'http:///www.migala.mx/recursos/pared/danielBravo/Hueyo_F10.jpg',
        mediaType: 'audio',
        nextAction: `insertModal('f9')`,
    },
}

class mediaModal {
    constructor () {
        this.modal = document.querySelector('#media-modal')
        this.modal.innerHTML = ''
        this.hide()
    }

    insertMedia (media) {
        this.modal.innerHTML = media
        this.show()
    }

    show () {
        this.modal.className = this.modal.className.replace('hidden', '')
    }

    hide () {
        const modal = document.querySelector('#media-modal')
        modal.innerHTML = ''
        modal.className += ' hidden'
    }
}

class Source {
    constructor ({ url, preview, mediaType, nextAction }) {
        this.url = url
        this.preview = preview
        this.mediaType = mediaType
        this.nextAction = nextAction
        this.containers = {
           audio: this.audioContainer,
           video: this.videoContainer,
        }

    }

    container () {
        const mediaContainer = this.containers[this.mediaType]
        return mediaContainer(this.url, this.nextAction, this.preview)
    }

    audioContainer (source, nextAction, preview) {
        return `<div class="media-object">
          <img src="${preview}">
          <audio
            src="${source}"
            autoplay
            controls>
          </audio>
        </div>
        <div class='media-control' onclick="${nextAction}">→</div>`
    }

    videoContainer (source, nextAction) {
        return `<div class="media-object">
          <video src="${source}"
            autoplay
            controls>
          </video>
        </div>
        <div class='media-control' onclick="${nextAction}">→</div>`
    }
}

const modal = new mediaModal()

const insertModal = (destination) => {
    console.log('destination', destination)
    const mediaObject = sources[destination]
    const mediaPrototype = new Source(mediaObject)
    const mediaHtml = mediaPrototype.container()
    modal.insertMedia(mediaHtml)
}

const hideModal = () => {
    modal.hide()
}

const randomPath = (paths) => {
    const path = paths[Math.floor(Math.random() * paths.length)]
    return insertModal(path)
}

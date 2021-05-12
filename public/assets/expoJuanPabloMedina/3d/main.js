class ImageModal {
  constructor () {
      this.modal = document.querySelector('#image-modal')
      this.modal.addEventListener('click', this.hide)
  }

  replaceImage (imageUrl) {
      this.modal.style['background-image'] = `url(${imageUrl})`
  }

  show () {
      this.modal.className = this.modal.className.replace('hidden', '')
  }

  hide (event) {
      event.target.style['background-image'] = ''
      event.target.className += ' hidden'
  }
}

class Model {
  constructor () {
    this.vw = (window.innerWidth) ? window.innerWidth * .8 : 800
    this.vh = (window.innerHeight) ? window.innerHeight * .8 : 800 * .8
    this.scene
    this.renderer
    this.camera
    this.model
    this.layers
    this.control
    this.castVector
    this.raycaster
    this.planes = {}
    this.modelPath = '/assets/3dmodels/elpanoramayanoestadisponible.glb'
    this.texturePath = '/assets/3dmodels/textures/'
    this.imageModal = new ImageModal()
    this.canvas = document.querySelector('#c')
    this.backgroundColor = 0xffffff
    this.images = Array.from(Array(15), (x = this.texturePath, i) => `${x}${i + 1}.jpg`)
    this.positions = [
      { x: .6, y: -5, z: -5 },
      { x: .4, y: -1, z: -9 },
      { x: .3, y: 4, z: -6 },
      { x: .3, y: -.1, z: -4 },
      { x: .4, y: -2, z: -3 },
      { x: .2, y: -4.5, z: 2 },
      { x: -5.8, y: -2.7, z: 0 },
      { x: -14.8, y: .3, z: 0.2 },
      { x: -15.4, y: 2.3, z: -0.2 },
      { x: -.9, y: -1, z: 1.5 },
      { x: .1, y: 5, z: 5 },
      { x: .4, y: 4, z: 7 },
      { x: .5, y: 1, z: 4.5 },
      { x: .3, y: -1, z: 7 },
      { x: .4, y: -5, z: 6 },
    ]
  }

  load () {
    this.initScene()
    this.addCamera()
    this.addLights()
    this.loadModel()
    this.addControls()
    this.addImages()
    this.addEventListeners()
  }

  resizeRendererToDisplaySize (renderer) {
    const canvas = this.renderer.domElement
    let width = window.innerWidth * .8
    let height = window.innerHeight * .8
    let canvasPixelWidth = canvas.width / window.devicePixelRatio
    let canvasPixelHeight = canvas.height / window.devicePixelRatio

    const needResize = (canvasPixelWidth !== width || canvasPixelHeight !== height)
    if (needResize) {
      this.renderer.setSize(width, height, true)
    }
    return needResize
  }

  initScene () {
      this.scene = new THREE.Scene()
      this.scene.background = new THREE.Color(this.backgroundColor)
      this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true })
      this.renderer.setPixelRatio(window.devicePixelRatio)
      this.renderer.setSize(this.vw, this.vh)
      this.renderer.gammaOutput = true
      this.renderer.gammaFactor = 3
  }

  addCamera () {
    this.camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      1000
    )
    this.camera.position.x = 90
    this.camera.zoom = 3
  }

  addLights () {
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.70)
    const ambientLight = new THREE.AmbientLight(0x2f2f2f)

    this.scene.add(hemiLight)
    this.scene.add(ambientLight)
  }

  loadModel () {
    this.loader = new THREE.GLTFLoader()
    this.loader.load(this.modelPath, (gltf) => {
      this.model = gltf.scene
      this.model.scale.set(10, 10, 10)
      this.scene.add(this.model)
    })
  }

  addControls () {
    this.control = new THREE.OrbitControls(this.camera, this.renderer.domElement)
  }

  addImages () {
    this.images.forEach((url, index) => {
      const loader = new THREE.TextureLoader()
      loader.load(url, (texture) => {
        const scale = 450
        const variation = scale / (1 - (.3 * Math.random()))
        const [imageW, imageH] = [
          texture.image.width / variation,
          texture.image.height / variation
        ]
        const geometry = new THREE.PlaneGeometry(imageW, imageH);
        const material = new THREE.MeshBasicMaterial({ map: texture })
        const plane = new THREE.Mesh( geometry, material )
        plane.rotation.y = Math.PI / 2
        const position = this.positions[index]
        this.scene.add(plane)
        this.planes[plane.uuid] = url
        plane.position.set(position.x, position.y, position.z)
      })
    })
  }

  addEventListeners () {
    this.raycaster = new THREE.Raycaster()
    this.castVector = new THREE.Vector2()

    this.canvas.addEventListener('touchstart', (event) => this.imageAction(event, this))
    this.canvas.addEventListener('click', (event) => this.imageAction(event, this))
  }

  imageAction (event, context) {
    // Set raycaster
    const { y, bottom } = event.target.getBoundingClientRect()
    const [ clientX, clientY ] = (event.type === 'touchstart')
      ? [ event.targetTouches[0].clientX, event.targetTouches[0].clientY ]
      : [ event.clientX, event.clientY ]
    const canvasCenter = (window.innerHeight - bottom - y)
    const relativeY = clientY + (canvasCenter / 2)
    context.castVector.x = ((clientX / window.innerWidth) * 2 - 1) * 1.25
    context.castVector.y = ((relativeY / window.innerHeight) * 2 - 1) * -1.25
    context.raycaster.setFromCamera(context.castVector, this.camera)

    // Handle interactions
    const intersects = context.raycaster.intersectObjects(context.scene.children)
    if (intersects.length > 0) {
      const id = intersects[0].object.uuid
      const imageUrl = context.planes[id]
      context.imageModal.show()
      context.imageModal.replaceImage(imageUrl)
    }
  }
}

const model = new Model()

function update () {
  model.control.update()
  if (model.resizeRendererToDisplaySize(model.renderer)) {
    const canvas = model.renderer.domElement
    model.camera.aspect = canvas.clientWidth / canvas.clientHeight
    model.camera.updateProjectionMatrix()
  }
  model.renderer.render(model.scene, model.camera)
  requestAnimationFrame(update)
}

model.load()
update(model)

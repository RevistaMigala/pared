// Setup
document.getElementById('rotation').value = 1.8
document.getElementById('zoom').value = 5
const defaultModel = 'casa-bosque'
const d = (new Date()).getHours()
let currentDaytime = (d > 5 && d < 19) ? 'dia' : 'noche'
const vw = (window.innerWidth > 800) ? 800 * .8 : window.innerWidth * .8
const vh = vw

let scene,
    camera,
    renderer,
    myCanvas = document.getElementById('canvas');

// Renderer
renderer = new THREE.WebGLRenderer({
    canvas: myCanvas,
    antialias: true,
    alpha: true,
})
renderer.setClearColor(0x000000, 0)
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(vw, vh)

// Camera
camera = new THREE.PerspectiveCamera(6, vw / vh, 0.1, 1000)

// Scene
scene = new THREE.Scene()
// scene.background = new THREE.Color(0xffffff, 0)

// Lights
let light = new THREE.AmbientLight(0xffffff, .95)
let light2 = new THREE.AmbientLight(0x404040, .5)

let spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set(0, 0, 10);
scene.add(spotLight);

scene.add(light)

let spotLight2 = new THREE.SpotLight( 0xffffff );
spotLight.position.set(0, 10, 10);
scene.add(spotLight2);

let spotLight3 = new THREE.SpotLight( 0xffffff );
spotLight.position.set(0, 5, 10);
scene.add(spotLight3);

scene.add(light2)

// Model
let loader = new THREE.GLTFLoader();
loader.load(`/assets/expoAlejandra/3dmodels/${defaultModel}-${currentDaytime}-1-0.glb`, handle_load);

let mesh, mixer

function handle_load(gltf) {
  mesh = gltf.scene.children[0]
  scene.add(mesh)
  mesh.position.z = -7
  mesh.position.y = -.2
}

// Controls
let controls = new THREE.OrbitControls(camera, renderer.domElement)
controls.enabled = false

// Change model
function changeModel (model) {
    const modelurl = `/assets/expoAlejandra/3dmodels/${model}-${currentDaytime}-1-0.glb`
    document.getElementById('model').innerHTML = model
    console.log(modelurl)
    scene.remove(mesh);
    mesh.geometry.dispose();
    mesh.material.dispose();
    loader.load(modelurl, handle_load)
}

// Change daytime
function changeDaytime (daytime) {
    currentDaytime = daytime
    const currentModel = document.getElementById('model').innerHTML
    changeModel(currentModel)
}

// Rotate model
let rotator = document.querySelector('.sliderRotate')
let rotationIndex = 1.8
let touchIdentifier
let xInitial

document.getElementById('canvas').addEventListener("touchmove", (event) => {
    xInitial = (touchIdentifier === event.targetTouches[0].identifier)
        ? xInitial
        : event.targetTouches[0].pageX

    touchIdentifier = event.targetTouches[0].identifier
    const toRotate = (event.targetTouches[0].pageX - xInitial) * .0064
    xInitial = event.targetTouches[0].pageX

    const slider = document.querySelector('.sliderRotate')
    if ((parseFloat(slider.value) + toRotate) <= 0) {
        slider.value = 0
    } else if ((parseFloat(slider.value) + toRotate) >= 6.4) {
        slider.value = 6.4
    } else {
        slider.value = parseFloat(slider.value) + toRotate
    }
    rotationIndex = slider.value
})

// Render
function animate() {
  	requestAnimationFrame(animate)
    camera.position.set(0, 0, document.getElementById("zoom").value)
    controls.update()
    mesh.rotation.y = document.getElementById('rotation').value
  	renderer.render(scene, camera)
}
animate()

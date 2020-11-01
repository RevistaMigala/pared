(function() {
  // Elements
  const closeButton = '<input type="button" value="x" id="remove-action">',
    audio1 = '<audio class="action-element" src="http://migala.mx/recursos/pared/linaVelazquez/Audio1.mp3" controls>',
    audio2 = '<audio class="action-element" src="http://migala.mx/recursos/pared/linaVelazquez/Audio2.mp3" controls>',
    audio3 = '<audio class="action-element" src="http://migala.mx/recursos/pared/linaVelazquez/Audio3.mp3" controls>',
    map = '<iframe class="action-element" width="560" height="315" src="https://www.google.com/maps/embed?pb=!4v1604074408449!6m8!1m7!1sdgKheES1Dz-TFVWENiKwCQ!2m2!1d6.959738127539058!2d-75.41868016559151!3f24.19!4f0.20000000000000284!5f0.7820865974627469" width="600" height="450" frameborder="0" style="border:0;" aria-hidden="false" tabindex="0"> </iframe>',
    video = '<iframe class="action-element" width="560" height="315" src="https://www.youtube.com/embed/Wc607NxmbKM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    loaderAnim = document.getElementById('js-loader'),
    addLayer = document.getElementById('add-layer'),
    removeLayer = document.getElementById('remove-layer'),
    actionContainer = document.querySelector('.action-container-hidden')

  // Config
  let childrenCount = 13,
    vw = (window.innerWidth) ? window.innerWidth : 800,
    vh = (window.innerHeight && window.innerHeight > vw) ? window.innerHeight * .6 : 800 * .8

  // Set our main variables
  let scene,
    renderer,
    camera,
    model,
    layers,
    controls

    init()

    function init() {
      const canvas = document.querySelector('#c');
      const MODEL_PATH = '/assets/expoLinaVelasquez/3d/profundo-lite.glb'
      const backgroundColor = 0xf1f1f1;

      // Init the scene
      scene = new THREE.Scene();
      scene.background = new THREE.Color(backgroundColor);
      scene.fog = new THREE.Fog(backgroundColor, 60, 100);

      // Init the renderer
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
      renderer.shadowMap.enabled = true;
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(vw, vh)
      // document.body.appendChild(renderer.domElement);

      // Add a camera
      camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 40
      camera.position.x = 0;
      camera.position.y = 0;
      // Add lights
      let hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.61);
      hemiLight.position.set(0, 50, 0);
      // Add hemisphere light to scene
      scene.add(hemiLight);

      let d = 8.25;
      let dirLight = new THREE.DirectionalLight(0xffffff, 0.54);
      dirLight.position.set(-8, 12, 8);
      dirLight.castShadow = true;
      dirLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
      dirLight.shadow.camera.near = 0.1;
      dirLight.shadow.camera.far = 1500;
      dirLight.shadow.camera.left = d * -1;
      dirLight.shadow.camera.right = d;
      dirLight.shadow.camera.top = d;
      dirLight.shadow.camera.bottom = d * -1;
      // Add directional Light to scene
      scene.add(dirLight);

      // Floor
      let floorGeometry = new THREE.PlaneGeometry(5000, 5000, 1, 1);
      let floorMaterial = new THREE.MeshPhongMaterial({
        color: 0xf1f1f1,
        shininess: 0,
      });

      let floor = new THREE.Mesh(floorGeometry, floorMaterial);
      floor.rotation.x = -0.5 * Math.PI; // This is 90 degrees by the way
      floor.receiveShadow = true
      floor.position.y = -11
      scene.add(floor);

      let geometry = new THREE.SphereGeometry(8, 32, 32);

      // Loader
      let loader = new THREE.GLTFLoader()
      loader.load(
        MODEL_PATH,
        function(gltf) {
          model = gltf.scene
          let fileAnimations = gltf.animations
          model.traverse(o => {
            if (o.isMesh) {
              o.castShadow = true
              o.receiveShadow = true
            }
          });
          // Set the models initial scale
          model.scale.set(7, 7, 7)
          model.position.y = 0
          scene.add(model)
          loaderAnim.remove()
          layers = model.children.sort(function(a, b) {
              return parseInt(a.name) - parseInt(b.name)
          })
        },
        undefined,
        function(error) {
          console.error(error);
        }
      )

      removeLayer.addEventListener('click', () => {
          if (childrenCount <= 1) {
            return
          }
          childrenCount -= 1
          if (childrenCount === 12) {
            actionContainer.className = 'action-container'
            actionContainer.innerHTML = closeButton + audio1
            document.querySelector('#remove-action').addEventListener('click', () => {
                actionContainer.className = 'action-container-hidden'
            })
          }
          if (childrenCount === 9) {
            console.log('action twitter')
          }
          if (childrenCount === 7) {
            actionContainer.className = 'action-container'
            actionContainer.innerHTML = closeButton + video
            document.querySelector('#remove-action').addEventListener('click', () => {
                actionContainer.className = 'action-container-hidden'
            })
          }
          if (childrenCount === 6) {
            actionContainer.className = 'action-container'
            actionContainer.innerHTML = closeButton + audio2
            document.querySelector('#remove-action').addEventListener('click', () => {
                actionContainer.className = 'action-container-hidden'
            })
          }
          if (childrenCount === 2) {
            actionContainer.className = 'action-container'
            actionContainer.innerHTML = closeButton + audio3
            document.querySelector('#remove-action').addEventListener('click', () => {
                actionContainer.className = 'action-container-hidden'
            })
          }
          if (childrenCount === 1) {
            actionContainer.className = 'action-container'
            actionContainer.innerHTML = closeButton + map
            document.querySelector('#remove-action').addEventListener('click', () => {
                actionContainer.className = 'action-container-hidden'
            })

            console.log('map')
          }
          model.children = layers.slice(0, childrenCount)
      })

      addLayer.addEventListener('click', () => {
          if (childrenCount >= 13) {
            return
          }
          childrenCount += 1
          if (childrenCount === 13) {
            actionContainer.className = 'action-container'
            actionContainer.innerHTML = closeButton + audio1
            document.querySelector('#remove-action').addEventListener('click', () => {
                actionContainer.className = 'action-container-hidden'
            })

            console.log('action 1')
          }
          if (childrenCount === 9) {
            console.log('action twitter')
          }
          if (childrenCount === 7) {
            actionContainer.className = 'action-container'
            actionContainer.innerHTML = closeButton + video
            document.querySelector('#remove-action').addEventListener('click', () => {
                actionContainer.className = 'action-container-hidden'
            })
          }
          if (childrenCount === 6) {
            actionContainer.className = 'action-container'
            actionContainer.innerHTML = closeButton + audio2
            document.querySelector('#remove-action').addEventListener('click', () => {
                actionContainer.className = 'action-container-hidden'
            })

            console.log('action 2')
          }
          if (childrenCount === 2) {
            actionContainer.className = 'action-container'
            actionContainer.innerHTML = closeButton + audio3
            document.querySelector('#remove-action').addEventListener('click', () => {
                actionContainer.className = 'action-container-hidden'
            })

            console.log('action 3')
          }

          model.children = layers.slice(0, childrenCount)
      })

      controls = new THREE.OrbitControls (camera, renderer.domElement)
    }

    update()

    function update() {
      controls.update();
      if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }
      renderer.render(scene, camera);
      requestAnimationFrame(update);
    }

    function resizeRendererToDisplaySize(renderer) {
      const canvas = renderer.domElement;
      let width = window.innerWidth;
      let height = window.innerHeight;
      let canvasPixelWidth = canvas.width / window.devicePixelRatio;
      let canvasPixelHeight = canvas.height / window.devicePixelRatio;

      const needResize =
        canvasPixelWidth !== width || canvasPixelHeight !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    }
})();

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const canvas = ref(null)

function run() {
  // Sizes
  const sizes = {
    width: window?.innerWidth,
    height: window?.innerHeight,
  }

  // Cursor
  const cursor = {
    x: 0,
    y: 0,
  }

  // Scene
  const scene = new THREE.Scene()
  scene.background = new THREE.Color('rgb(22, 24, 28)')

  // Camera
  const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100000)
  camera.position.set(0, 0, -5)
  camera.rotation.set(0, Math.PI, 0)
  scene.add(camera)

  // Axis helper
  // const axes = new THREE.AxesHelper(10);
  // scene.add(axes);

  // Lights
  const ambientLight = new THREE.AmbientLight('rgb(255, 255, 255)', 0.2)
  scene.add(ambientLight)

  const pointLigth = new THREE.PointLight('rgb(255, 255, 255)', 10, 4)
  // const pointLigthHelper = new THREE.PointLightHelper(pointLigth);
  pointLigth.position.set(-0.5, 2, -1)

  scene.add(pointLigth)
  // scene.add(pointLigthHelper);

  const spotLight = new THREE.SpotLight('rgb(255, 255, 255)', 0.9, 60, 9.5)
  // const spotLightHelper = new THREE.PointLightHelper(spotLight);
  spotLight.position.set(0, 3, -5)

  scene.add(spotLight)
  // scene.add(spotLightHelper);

  // Controls
  // const controls = new OrbitControls(camera, canvas.value);
  // controls.enableDamping = true;

  // Renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    antialias: true,
    alpha: true,
  })
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.render(scene, camera)

  // Mesh
  // const mesh = new THREE.Mesh(
  //     new THREE.BoxGeometry(1, 1, 1),
  //     new THREE.MeshStandardMaterial({color: 'rgb(255, 255, 255)'})
  // );
  // mesh.position.set(0, 1, 0);
  // scene.add(mesh);

  // Platform
  const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(6, 8),
    new THREE.MeshStandardMaterial({ color: 'rgb(236, 240, 241)' }),
  )
  plane.rotation.x = -Math.PI * 2 ** -1
  plane.position.y = -1
  // scene.add(plane)

  // Canvas Size settings
  const sizeSettings = () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.render(scene, camera)
  }

  // Update cursor coordinates
  const updateCursor = (e: MouseEvent) => {
    cursor.x = (e.clientX / sizes.width) - 2 ** -1
    cursor.y = -((e.clientY / sizes.height) - 2 ** -1)
  }

  // Animate mesh
  // const velocity = new THREE.Vector2();
  // const dampingFactor = 0.05;

  // const animateMesh = () => {
  //     mesh.rotation.x += (velocity.y - mesh.rotation.x) * dampingFactor;
  //     mesh.rotation.y += (velocity.x - mesh.rotation.y) * dampingFactor;

  //     velocity.x = cursor.x;
  //     velocity.y = cursor.y;

  //     window.requestAnimationFrame(animateMesh);

  //     renderer.render(scene, camera);
  // }

  // Rotate mesh
  /* const clock = new THREE.Clock();
        const rotateMesh = () => {
            const elapsedTime = clock.getElapsedTime();

            mesh.rotation.x = elapsedTime * Math.pow(2, -1);
            mesh.rotation.y = elapsedTime * Math.pow(2, -1);

            renderer.render(scene, camera);

            window.requestAnimationFrame(rotateMesh);
        } */

  const init = () => {
    renderer.render(scene, camera)

    window.requestAnimationFrame(init)

    // controls.update();
  }

  // GLTF Loader
  const loader = new GLTFLoader()

  let obj: any = null
  loader.load('_nuxt/assets/purple_crystal/scene.gltf', (gltf: any) => {
    obj = gltf.scene
    obj.scale.set(1, 1, 1)
    obj.position.set(0, 1.5, -0.25)

    scene.add(obj)

    const velocity = new THREE.Vector2()
    const dampingFactor = 0.05
    const clock = new THREE.Clock()

    const animateCrystal = () => {
      const elapsedTime = clock.getElapsedTime()

      obj.rotation.x += (velocity.y - obj.rotation.x) * dampingFactor
      obj.rotation.y += (velocity.x - obj.rotation.y) * dampingFactor
      obj.position.y = Math.sin(elapsedTime * 0.05) + 2 ** 0.05

      velocity.x = cursor.x
      velocity.y = cursor.y

      renderer.render(scene, camera)
      window.requestAnimationFrame(animateCrystal)
    }

    // camera.lookAt(obj.position)

    animateCrystal()
  })

  window?.addEventListener('resize', sizeSettings)
  window?.addEventListener('mousemove', updateCursor)
  // animateMesh();
  // rotateMesh();
  init()
}

onMounted(() => {
  run()
})
</script>

<template>
  <canvas ref="canvas" />
</template>

<style scoped lang="scss">
    canvas {
        display: block;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
    }
</style>

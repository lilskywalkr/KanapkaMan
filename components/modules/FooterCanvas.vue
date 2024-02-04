<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const route = useRoute()
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
  camera.position.set(0, 1, -4)
  camera.rotation.set(Math.PI * 2 ** -3, Math.PI, 0)
  scene.add(camera)

  // Lights
  const ambientLight = new THREE.AmbientLight('rgb(255, 255, 255)', 0.2)
  scene.add(ambientLight)

  const pointLigth = new THREE.PointLight('rgb(255, 255, 255)', 10, 4)
  pointLigth.position.set(-0.5, 2, -1)

  scene.add(pointLigth)

  const spotLight = new THREE.SpotLight('rgb(255, 255, 255)', 0.9, 60, 9.5)
  spotLight.position.set(0, 3, -5)

  scene.add(spotLight)

  // Renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    antialias: true,
    alpha: true,
  })
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.render(scene, camera)

  // Update cursor coordinates
  const updateCursor = (e: MouseEvent) => {
    cursor.x = (e.clientX / sizes.width) - 2 ** -1
    cursor.y = -((e.clientY / sizes.height) - 2 ** -1)
  }

  const init = () => {
    renderer.render(scene, camera)

    window.requestAnimationFrame(init)
  }

  // GLTF Loader
  const loader = new GLTFLoader()

  let obj: any = null
  const src: string = `${useRequestURL().origin}//publuc/vintage_desktop_computer/scene.gltf`;
  loader.load(src, (gltf: any) => {
    obj = gltf.scene
    obj.scale.set(1.5, 1.5, 1.5)
    obj.position.set(-0.8, 0.3, -1)

    scene.add(obj)

    const clock = new THREE.Clock()

    const animateComputer = () => {
      const elapsedTime = clock.getElapsedTime()

      obj.rotation.y = Math.sin(elapsedTime * 0.05) * 0.5
      obj.position.y = Math.cos(elapsedTime * 0.05) * 0.1

      renderer.render(scene, camera)
      window.requestAnimationFrame(animateComputer)
    }

    animateComputer()
  })

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

  window?.addEventListener('resize', sizeSettings)
  window?.addEventListener('mousemove', updateCursor)

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

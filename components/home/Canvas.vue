<script setup lang="ts">
import * as THREE from 'three'

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
  scene.background = new THREE.Color('#141618')

  // Camera
  const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100000)
  camera.position.set(0, 1, 5)
  scene.add(camera)

  // Axis helper

  // const axes = new THREE.AxesHelper(10)

  // scene.add(axes);

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
  renderer.setPixelRatio(Math.min(window?.devicePixelRatio, 2))
  renderer.render(scene, camera)

  // Mesh
  const meshes: any = []

  for (let i = 0; i < 3; i++) {
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshNormalMaterial(),
    )

    meshes.push(mesh)
  }

  meshes[0].position.set(-1.5, 1, 0)
  meshes[1].position.set(0, 1, -1.5)
  meshes[2].position.set(1.5, 1, 1.5)

  scene.add(...meshes)

  // Canvas Size settings
  const sizeSettings = () => {
    sizes.width = window?.innerWidth
    sizes.height = window?.innerHeight

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window?.devicePixelRatio, 2))
    renderer.render(scene, camera)
  }

  // Update cursor coordinates
  const updateCursor = (e: any) => {
    cursor.x = (e.clientX / sizes.width) - 2 ** -1
    cursor.y = -((e.clientY / sizes.height) - 2 ** -1)
  }

  // Rotate mesh
  const clock = new THREE.Clock()
  const rotateMesh = () => {
    const elapsedTime = clock.getElapsedTime()

    meshes.forEach((mesh: any) => {
      mesh.rotation.x = elapsedTime * 2 ** -1
      mesh.rotation.y = elapsedTime * 2 ** -1
    })

    meshes[0].position.x = (Math.sin(elapsedTime * 0.7)) * 1.5
    meshes[0].position.y = (Math.cos(elapsedTime * 0.7) + 1) * 1.5

    meshes[1].position.x = Math.sin(elapsedTime * 0.4) + 1
    meshes[1].position.y = Math.cos(elapsedTime * 0.4)

    renderer.render(scene, camera)

    window?.requestAnimationFrame(rotateMesh)
  }

  const init = () => {
    renderer.render(scene, camera)

    window?.requestAnimationFrame(init)

    // controls.update();
  }

  window?.addEventListener('resize', sizeSettings)
  window?.addEventListener('mousemove', updateCursor)
  rotateMesh()
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
        position: fixed;
        left: 50vw;
        top: 50vw;
        transform: translate(-50vw, -50vw);
        z-index: -2;
    }
</style>

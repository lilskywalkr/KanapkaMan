<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const canvas = ref(null)
let ctx = null // Store canvas context
let loadedImages = [] // Store loaded images

// Array to hold information about each image
const images = [
  { src: '_nuxt/assets/floating_images/ruby.png', x: 500, y: 300, angle: 0, speed: 0.3, directionX: 0, directionY: 0 },
  { src: '_nuxt/assets/floating_images/flutter.png', x: 500, y: 300, angle: 45, speed: 0.5, directionX: 0, directionY: 0 },
  { src: '_nuxt/assets/floating_images/firebase.png', x: 500, y: 300, angle: 15, speed: 0.7, directionX: 0, directionY: 0 },
  { src: '_nuxt/assets/floating_images/vue.png', x: 500, y: 300, angle: 45, speed: 0.1, directionX: 0, directionY: 0 },
  { src: '_nuxt/assets/floating_images/swift.png', x: 500, y: 300, angle: 45, speed: 0.9, directionX: 0, directionY: 0 },
  { src: '_nuxt/assets/floating_images/mongo.png', x: 500, y: 300, angle: 45, speed: 0.4, directionX: 0, directionY: 0 },
  // Add more images as needed
]

function loadImage(src: string) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = src
    img.onload = () => resolve(img)
    img.onerror = error => reject(error)
  })
}

function drawImage(ctx: any, img: string, x: number, y: number) {
  ctx.drawImage(img, x, y)
}

function randomDirection() {
  return Math.random() < 0.5
    ? 1
    : -1
}

async function run() {
  ctx = canvas.value.getContext('2d')

  // Load images
  const imagePromises = images.map(image => loadImage(image.src))
  loadedImages = await Promise.all(imagePromises)

  // Initialize random directions
  images.forEach((image) => {
    image.directionX = randomDirection()
    image.directionY = randomDirection()
  })

  // Start animation loop
  animate()
}

function animate() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)

  // Update canvas size
  canvas.value.width = window.innerWidth
  canvas.value.height = window.innerHeight

  images.forEach((image, index) => {
    // Move image
    image.x += image.speed * image.directionX
    image.y += image.speed * image.directionY

    // Check boundaries and change direction
    if (image.x < 0 || image.x > canvas.value.width)
      image.directionX *= -1

    if (image.y < 0 || image.y > canvas.value.height)
      image.directionY *= -1

    drawImage(ctx, loadedImages[index], image.x, image.y)
  })

  requestAnimationFrame(animate)
}

onMounted(() => {
  run()
})

// Listen for window resize event
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})

function handleResize() {
  canvas.value.width = window.innerWidth
  canvas.value.height = window.innerHeight
}

window.addEventListener('resize', handleResize)
</script>

<template>
  <canvas
    ref="canvas"
    width="800"
    height="600"
  />
</template>

<style scoped lang="scss">
canvas {
  position: absolute;
  left: 0;
  top: 0;
}
</style>

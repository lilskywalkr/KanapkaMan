<script setup lang="ts">
import { onMounted, ref } from 'vue'

const canvas = ref(null)

// Array to hold information about each image
const images = [
  { src: '_nuxt/assets/floating_images/ruby.webp', x: 400, y: 300, angle: 0, speed: 0.3, directionX: 0, directionY: 0 },
  { src: '_nuxt/assets/floating_images/flutter.webp', x: 400, y: 300, angle: 45, speed: 0.5, directionX: 0, directionY: 0 },
  { src: '_nuxt/assets/floating_images/firebase.webp', x: 400, y: 300, angle: 15, speed: 0.7, directionX: 0, directionY: 0 },
  { src: '_nuxt/assets/floating_images/vue.webp', x: 400, y: 300, angle: 45, speed: 0.1, directionX: 0, directionY: 0 },
  { src: '_nuxt/assets/floating_images/swift.webp', x: 400, y: 300, angle: 45, speed: 0.9, directionX: 0, directionY: 0 },
  { src: '_nuxt/assets/floating_images/mongo.webp', x: 400, y: 300, angle: 45, speed: 0.4, directionX: 0, directionY: 0 },
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
  const ctx = canvas.value.getContext('2d')

  // Load images
  const imagePromises = images.map(image => loadImage(image.src))
  const loadedImages = await Promise.all(imagePromises)

  // Initialize random directions
  images.forEach((image) => {
    image.directionX = randomDirection()
    image.directionY = randomDirection()
  })

  // Start animation loop
  function animate() {
    ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)

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

  animate()
}

onMounted(() => {
  run()
})
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
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: -2;
    }
</style>

<template>
  <div ref="canvasContainer" class="scene-container">
    <canvas ref="canvasRef" id="experience-canvas"></canvas>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  EffectComposer, 
  RenderPass, 
  BloomEffect, 
  EffectPass, 
  NoiseEffect,
  VignetteEffect,
  ChromaticAberrationEffect
} from 'postprocessing'

// Register GSAP Plugins

gsap.registerPlugin(ScrollTrigger)

let scene, camera, renderer, animationFrameId, composer
let masterTimeline
let ambientLight

const setupCinematics = () => {
  // Instant Responsiveness (1.5 scrub for liquid-fast connection)
  masterTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.5 
    }
  })

  // We use a normalized 100-unit timeline for perfect scroll mapping
  // 0 to 20: The majestic Earth drift (Hero)
  masterTimeline.to(camera.position, {
    x: 10,
    y: 5,
    z: 32,
    ease: 'none',
    duration: 20
  }, 0)

  // 20 to 50: The Great Swoosh (Earth to Moon)
  masterTimeline.to(camera.position, {
    x: 45,
    y: 25,
    z: 10,
    ease: 'none',
    duration: 30
  }, 20)

  // 50 to 90: Deep Moon Zoom (Phases 2 & 3)
  masterTimeline.to(camera.position, {
    x: 18,
    y: 11,
    z: -18,
    ease: 'sine.inOut',
    duration: 40
  }, 50)

  masterTimeline.to(camera.rotation, {
    x: -0.2,
    y: 0.5,
    ease: 'sine.inOut',
    duration: 40
  }, 50)

  // 90 to 120: Stable Orbital Shift
  masterTimeline.to(camera.position, {
    x: -5,
    y: 12,
    z: 18,
    ease: 'sine.inOut',
    duration: 30
  }, 90)

  // 120 to 160: APPROACHING EVENT HORIZON (Acceleration)
  masterTimeline.to(camera.position, {
    x: -28.5,
    y: 15.2,
    z: -58.5,
    ease: 'sine.in',
    duration: 40
  }, 120)

  masterTimeline.to(camera.rotation, {
    x: -Math.PI / 8,
    y: Math.PI / 4,
    ease: 'sine.inOut',
    duration: 40
  }, 120)
}

onMounted(() => {
  initEngine()
  createStarfield()
  createNebularClouds()
  createLunarSurface()
  createEarth()
  createSpaceStation()
  createCrystallineDebris()
  setupLighting()
  createLunarBase()
  createBlackHole()
  setupCinematics()
  animate()
})

const canvasRef = ref(null)
const initEngine = () => {
  scene = new THREE.Scene()
  
  camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 2000)
  camera.position.set(0, 10, 30) 
  
  const canvas = canvasRef.value
  renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance'
  })
  
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.shadowMap.enabled = true
  renderer.toneMapping = THREE.ReinhardToneMapping
  renderer.toneMappingExposure = 1.2
  
  // Post-Processing
  composer = new EffectComposer(renderer)
  composer.addPass(new RenderPass(scene, camera))

  const bloom = new BloomEffect({
    intensity: 2.5,
    luminanceThreshold: 0.1,
    luminanceSmoothing: 0.9,
    mipmapBlur: true
  })
  
  const noise = new NoiseEffect({ premultiply: true })
  noise.blendMode.opacity.value = 0.03

  composer.addPass(new EffectPass(camera, bloom, noise))
}

let sun

const setupLighting = () => {
  ambientLight = new THREE.AmbientLight(0xffffff, 0.05)
  scene.add(ambientLight)

  sun = new THREE.DirectionalLight(0xffffff, 4.5)
  sun.position.set(30, 40, 30)
  sun.castShadow = true
  
  const rimLight = new THREE.SpotLight(0x0070e0, 100, 100, 0.4, 1)
  rimLight.position.set(-30, 20, -60)
  scene.add(rimLight)
  
  sun.shadow.mapSize.width = 2048
  sun.shadow.mapSize.height = 2048
  
  scene.add(sun)

  // Step 34: Ultra-High Fidelity Post-Processing
  composer = new EffectComposer(renderer)
  composer.addPass(new RenderPass(scene, camera))

  const bloom = new BloomEffect({
    intensity: 3.0, // Aggressive bloom for photorealism
    luminanceThreshold: 0.1,
    luminanceSmoothing: 0.9,
    mipmapBlur: true
  })
  
  const vignette = new VignetteEffect({
    offset: 0.3,
    darkness: 0.6
  })

  const chromaticAberration = new ChromaticAberrationEffect({
    offset: new THREE.Vector2(0.001, 0.001)
  })

  const noise = new NoiseEffect({ premultiply: true })
  noise.blendMode.opacity.value = 0.02

  composer.addPass(new EffectPass(camera, bloom, chromaticAberration, vignette, noise))
}

let stars

const createStarfield = () => {
  const starGeo = new THREE.BufferGeometry()
  const starCount = 8000
  const positions = new Float32Array(starCount * 3)
  const colors = new Float32Array(starCount * 3)

  for (let i = 0; i < starCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 400
    const isBlue = Math.random() > 0.8
    colors[i] = isBlue ? 0.7 : 0.9      
    colors[i+1] = isBlue ? 0.8 : 0.95   
    colors[i+2] = isBlue ? 1.0 : 1.0    
  }

  starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  starGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3))

  const starMat = new THREE.PointsMaterial({
    size: 0.12,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    sizeAttenuation: true
  })

  stars = new THREE.Points(starGeo, starMat)
  scene.add(stars)
}

const createNebularClouds = () => {
  const cloudCount = 50
  const cloudGroup = new THREE.Group()
  
  for (let i = 0; i < cloudCount; i++) {
    const geo = new THREE.SphereGeometry(Math.random() * 20 + 10, 8, 8)
    const mat = new THREE.MeshBasicMaterial({
      color: i % 2 === 0 ? 0x0B3D91 : 0x4400ff,
      transparent: true,
      opacity: 0.05,
      side: THREE.BackSide
    })
    const cloud = new THREE.Mesh(geo, mat)
    cloud.position.set(
      (Math.random() - 0.5) * 400,
      (Math.random() - 0.5) * 200,
      (Math.random() - 0.5) * 400
    )
    cloudGroup.add(cloud)
  }
  scene.add(cloudGroup)
}

let station
const createSpaceStation = () => {
  station = new THREE.Group()
  const mat = new THREE.MeshStandardMaterial({ color: 0x888888, metalness: 1, roughness: 0.1 })
  
  const core = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 6, 12), mat)
  core.rotation.z = Math.PI / 2
  station.add(core)
  
  for (let i = 0; i < 2; i++) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(2, 0.1, 8, 32), mat)
    ring.position.x = (i - 0.5) * 4
    ring.rotation.y = Math.PI / 2
    station.add(ring)
  }
  
  station.position.set(10, 5, -10)
  station.scale.set(0.5, 0.5, 0.5)
  scene.add(station)
}

let debris
const createCrystallineDebris = () => {
  const geo = new THREE.IcosahedronGeometry(0.1, 0)
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 1, roughness: 0, transparent: true, opacity: 0.8 })
  debris = new THREE.InstancedMesh(geo, mat, 500)
  
  const matrix = new THREE.Matrix4()
  for (let i = 0; i < 500; i++) {
    matrix.setPosition(
      (Math.random() - 0.5) * 100,
      (Math.random() - 0.5) * 50,
      (Math.random() - 0.5) * 100
    )
    debris.setMatrixAt(i, matrix)
  }
  scene.add(debris)
}

let moon
const textureLoader = new THREE.TextureLoader()

const createLunarSurface = () => {
  // Ultra-high resolution segments for smooth displacement and lighting
  const moonGeo = new THREE.SphereGeometry(15, 512, 512)
  
  const moonMat = new THREE.MeshPhysicalMaterial({
    color: 0xcccccc, // Brighter to showcase detail
    roughness: 0.9,
    metalness: 0.0,
    bumpScale: 0.1,
    displacementScale: 0.35, 
    displacementBias: -0.15,
    clearcoat: 0.0, 
  })
  
  // Loading high-quality map with anisotropy to fix blurriness
  textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/moon_1024.jpg', (texture) => {
    // Sharpness fixes
    texture.anisotropy = renderer.capabilities.getMaxAnisotropy()
    texture.minFilter = THREE.LinearMipmapLinearFilter
    texture.magFilter = THREE.LinearFilter
    
    moonMat.map = texture
    moonMat.bumpMap = texture
    moonMat.displacementMap = texture
    moonMat.needsUpdate = true
  })
  
  moon = new THREE.Mesh(moonGeo, moonMat)
  moon.position.set(20, 10, -30)
  moon.castShadow = true
  moon.receiveShadow = true
  scene.add(moon)
}

let earth

const createEarth = () => {
  const earthGeo = new THREE.SphereGeometry(5, 64, 64)
  const earthMat = new THREE.MeshStandardMaterial({
    emissive: 0x2244ff,
    emissiveIntensity: 0.2
  })

  textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg', (tex) => {
    earthMat.map = tex
    earthMat.needsUpdate = true
  })

  earth = new THREE.Mesh(earthGeo, earthMat)
  // Positioned for "Big Earth" hero reveal behind "BEYOND ORBIT"
  earth.position.set(0, -5, 5) 
  earth.scale.set(4, 4, 4) // Massive Earth reveal
  scene.add(earth)
  
  // Step 14: Multi-Layer Atmosphere Glow
  // Layer 1: Sharp Inner Edge
  const glowGeo = new THREE.SphereGeometry(5.1, 64, 64)
  const glowMat = new THREE.MeshBasicMaterial({
    color: 0x00aaff,
    transparent: true,
    opacity: 0.2,
    side: THREE.BackSide
  })
  earth.add(new THREE.Mesh(glowGeo, glowMat))

  // Layer 2: Soft Outer Scattering
  const glowGeoOuter = new THREE.SphereGeometry(5.5, 64, 64)
  const glowMatOuter = new THREE.MeshBasicMaterial({
    color: 0x0044ff,
    transparent: true,
    opacity: 0.08,
    side: THREE.BackSide
  })
  earth.add(new THREE.Mesh(glowGeoOuter, glowMatOuter))
}

let lunarBase, baseLight

const createLunarBase = () => {
  lunarBase = new THREE.Group()
  const podMat = new THREE.MeshStandardMaterial({ color: 0x333333, metalness: 0.8, roughness: 0.2 })
  
  for (let i = 0; i < 3; i++) {
    const pod = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.3, 0.8, 8), podMat)
    pod.position.x = (i - 1) * 3
    pod.castShadow = true
    pod.receiveShadow = true
    lunarBase.add(pod)
  }
  
  const emitterGeo = new THREE.SphereGeometry(0.2, 8, 8)
  const emitterMat = new THREE.MeshBasicMaterial({ color: 0x00f2ff })
  const emitter = new THREE.Mesh(emitterGeo, emitterMat)
  emitter.position.set(0, 0.5, 0)
  lunarBase.add(emitter)
  
  baseLight = new THREE.PointLight(0x00f2ff, 2, 12)
  baseLight.position.set(0, 1, 0)
  lunarBase.add(baseLight)

  lunarBase.position.set(0, -5.5, 12)
  scene.add(lunarBase)
}

let blackHole, accretionParticles, lensingHalo
const createBlackHole = () => {
  blackHole = new THREE.Group()
  
  // Singularity (Event Horizon)
  const singularityGeo = new THREE.SphereGeometry(2.5, 32, 32)
  const singularityMat = new THREE.MeshBasicMaterial({ color: 0x000000 })
  const singularity = new THREE.Mesh(singularityGeo, singularityMat)
  blackHole.add(singularity)
  
  // Particle-Based Accretion Disk (8,000+ points)
  const partCount = 12000
  const partGeo = new THREE.BufferGeometry()
  const positions = new Float32Array(partCount * 3)
  const partColors = new Float32Array(partCount * 3)
  
  for (let i = 0; i < partCount; i++) {
    const angle = Math.random() * Math.PI * 2
    const radius = 5 + Math.random() * 4
    const i3 = i * 3
    positions[i3] = Math.cos(angle) * radius
    positions[i3 + 1] = (Math.random() - 0.5) * 0.5
    positions[i3 + 2] = Math.sin(angle) * radius
    
    // Gradient: Hotter/White in center, Orange on outside
    const ratio = (radius - 5) / 4
    partColors[i3] = 1.0
    partColors[i3 + 1] = 0.5 + (1 - ratio) * 0.5
    partColors[i3 + 2] = (1 - ratio) * 0.4
  }
  
  partGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  partGeo.setAttribute('color', new THREE.BufferAttribute(partColors, 3))
  
  const partMat = new THREE.PointsMaterial({
    size: 0.05,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
  })
  
  accretionParticles = new THREE.Points(partGeo, partMat)
  blackHole.add(accretionParticles)
  
  // Gravitational Lensing (The Halo Ring)
  const haloGeo = new THREE.TorusGeometry(6.2, 0.4, 2, 100)
  const haloMat = new THREE.MeshStandardMaterial({
    color: 0xffcc00, 
    emissive: 0xff9900,
    emissiveIntensity: 10,
    transparent: true,
    opacity: 0.4,
    side: THREE.DoubleSide
  })
  lensingHalo = new THREE.Mesh(haloGeo, haloMat)
  lensingHalo.rotation.y = Math.PI / 2 
  blackHole.add(lensingHalo)
  
  // Intense Volumetric Glow (Orange/Gold)
  const pointLight = new THREE.PointLight(0xffa500, 80, 50)
  blackHole.add(pointLight)
  
  blackHole.position.set(-30, 15, -60)
  scene.add(blackHole)
}

const animate = () => {
  animationFrameId = requestAnimationFrame(animate)
  const elapsed = performance.now() * 0.001

  if (stars) stars.rotation.y += 0.0001
  if (moon) moon.rotation.y += 0.0002
  if (earth) earth.rotation.y += 0.0005
  if (station) {
    station.rotation.x += 0.001
    station.rotation.y += 0.002
  }
  if (debris) {
    debris.rotation.y += 0.0005
  }

  if (accretionParticles) {
    accretionParticles.rotation.y += 0.04
    lensingHalo.rotation.z -= 0.015
  }
  
  // Keep lens flare facing the camera
  const flare = scene.children.find(c => c.geometry?.type === 'PlaneGeometry' && c.material?.blending === THREE.AdditiveBlending)
  if (flare) flare.lookAt(camera.position)
  
  if (baseLight) {
    baseLight.intensity = 2 + Math.sin(elapsed * 10) * 0.5 + (Math.random() * 0.2)
  }
  
  if (composer) {
    composer.render()
  } else {
    renderer.render(scene, camera)
  }
}


onUnmounted(() => {
  if (animationFrameId) cancelAnimationFrame(animationFrameId)
  if (renderer) {
    renderer.dispose()
    renderer.forceContextLoss()
  }
  if (composer) composer.dispose()
})
</script>

<style scoped>
.scene-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background: black;
}

#experience-canvas {
  width: 100%;
  height: 100%;
}
</style>

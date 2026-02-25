<template>
  <div id="app-container">
    <!-- Unreal Engine Persistent Header -->
    <header class="ue-nav">
      <div class="ue-logo">
        FLVA <span>SPACE</span>
      </div>
     
   
    </header>

    <!-- Unreal Engine Page Content -->
    <main class="page-wrapper">
      
      <!-- High-Impact Hero -->
      <section class="section hero-section">
        <h1>BEYOND ORBIT</h1>
        <p>Experience the next generation of space exploration powered by real-time orbital simulation and high-fidelity physics.</p>
      </section>

      <!-- Glassmorphic Feature Grid -->
      <section class="section">
        <div class="feature-grid">
          
          <div class="glass-card feature-card">
            <span class="card-tag">Rendering</span>
            <h3>Lumen Orbit</h3>
            <p>Fully dynamic global illumination that reacts instantly to solar flares and atmospheric changes.</p>
            <a href="#" class="card-cta">Explore Technology</a>
          </div>

          <div class="glass-card feature-card">
            <span class="card-tag">Physics</span>
            <h3>Nanite Debris</h3>
            <p>Render millions of crystalline fragments in real-time with pixel-perfect detail and zero lag.</p>
            <a href="#" class="card-cta">View Documentation</a>
          </div>

          <div class="glass-card feature-card">
            <span class="card-tag">Production</span>
            <h3>Virtual Horizon</h3>
            <p>Seamlessly blend physical sets with digital orbital environments for unparalleled immersion.</p>
            <a href="#" class="card-cta">Case Studies</a>
          </div>

        </div>
      </section>

      <!-- NEW: Lunar Exploration Runway -->
      <section class="section hero-section">
        <span class="card-tag">Mission Phase 02</span>
        <h1>LUNAR EXPLORATION</h1>
        <p>Descending towards the Shackleton Crater. Establishing permanent presence on the lunar south pole.</p>
      </section>

      <!-- NEW: Orbital Defense Runway -->
      <section class="section hero-section">
        <span class="card-tag">Mission Phase 03</span>
        <h1>ORBITAL INFRASTRUCTURE</h1>
        <p>Deploying modular life support and defense arrays to secure the frontier for future pioneers.</p>
      </section>

      <!-- Event Horizon Section -->
      <section class="section hero-section">
        <span class="card-tag">Critical Point</span>
        <h1>EVENT HORIZON</h1>
        <p>You are approaching the point of no return. Gravity becomes infinite. Time stands still.</p>
        <a href="#" class="download-btn">ENTER SINGULARITY</a>
      </section>

    </main>
    
    <SpaceScene />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
import SpaceScene from './components/SpaceScene.vue'

gsap.registerPlugin(ScrollTrigger)

let lenis

onMounted(() => {
  // Initialize Lenis Smooth Scroll
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  // Sync ScrollTrigger with Lenis
  lenis.on('scroll', ScrollTrigger.update)

  // Feature Card Animations
  const cards = document.querySelectorAll('.glass-card')
  cards.forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'expo.out',
      delay: i * 0.2
    })
  })

  // Hero Title Animations
  gsap.utils.toArray('.hero-section h1').forEach(h1 => {
    gsap.from(h1, {
      scrollTrigger: {
        trigger: h1,
        start: 'top 80%'
      },
      y: 50,
      opacity: 0,
      duration: 1.5,
      ease: 'power4.out'
    })
  })
})

onUnmounted(() => {
  if (lenis) lenis.destroy()
})
</script>

<style>
/* Global resets move to style.css in Step 2 */
</style>

import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EffectComposer, RenderPass, BloomEffect, EffectPass, NoiseEffect, BrightnessContrastEffect } from 'postprocessing';

gsap.registerPlugin(ScrollTrigger);

class SpaceExperience {
    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;
    private renderer: THREE.WebGLRenderer;
    private composer: EffectComposer;
    private particles: THREE.Points;
    private moon: THREE.Mesh;
    private earth: THREE.Mesh;
    private lunarBase: THREE.Group;
    private clock: THREE.Clock;
    private textureLoader: THREE.TextureLoader;
    private ambientLight: THREE.AmbientLight;

    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({
            canvas: document.querySelector('#experience-canvas') as HTMLCanvasElement,
            antialias: false, // Turned off for postprocessing performance
            powerPreference: 'high-performance',
            alpha: true
        });
        this.clock = new THREE.Clock();
        this.textureLoader = new THREE.TextureLoader();

        this.init();
        this.createEnvironment();
        this.setupLighting();
        this.setupPostProcessing();
        this.setupScrollAnimations();
        this.setupInteractivity();
        this.animate();

        window.addEventListener('resize', () => this.onWindowResize());
    }

    private init() {
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.camera.position.set(0, 15, 40);
    }

    private async setupPostProcessing() {
        this.composer = new EffectComposer(this.renderer);
        this.composer.addPass(new RenderPass(this.scene, this.camera));

        const bloom = new BloomEffect({
            intensity: 1.5,
            luminanceThreshold: 0.2,
            luminanceSmoothing: 0.9,
            mipmapBlur: true
        });

        const noise = new NoiseEffect({ premultiply: true });
        noise.blendMode.opacity.value = 0.05;

        const bc = new BrightnessContrastEffect({ contrast: 0.2 });

        this.composer.addPass(new EffectPass(this.camera, bloom, noise, bc));
    }

    private createEnvironment() {
        // Particles
        const partGeo = new THREE.BufferGeometry();
        const partCount = 10000;
        const posArray = new Float32Array(partCount * 3);
        for (let i = 0; i < partCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 200;
        }
        partGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const partMat = new THREE.PointsMaterial({ size: 0.05, color: 0xffffff, transparent: true, opacity: 0.8 });
        this.particles = new THREE.Points(partGeo, partMat);
        this.scene.add(this.particles);

        // Moon
        const moonGeo = new THREE.SphereGeometry(20, 128, 128);
        const moonMat = new THREE.MeshStandardMaterial({ color: 0x888888, roughness: 0.9 });
        this.textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/moon_1024.jpg', (tex: THREE.Texture) => {
            moonMat.map = tex;
            moonMat.needsUpdate = true;
        });
        this.moon = new THREE.Mesh(moonGeo, moonMat);
        this.moon.position.set(0, -25, 0);
        this.scene.add(this.moon);

        // Earth
        const earthGeo = new THREE.SphereGeometry(8, 64, 64);
        const earthMat = new THREE.MeshStandardMaterial({ emissive: 0x001144, emissiveIntensity: 0.5 });
        this.textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg', (tex: THREE.Texture) => {
            earthMat.map = tex;
            earthMat.needsUpdate = true;
        });
        this.earth = new THREE.Mesh(earthGeo, earthMat);
        this.earth.position.set(40, 20, -60);
        this.scene.add(this.earth);

        // Base
        this.lunarBase = new THREE.Group();
        const baseMat = new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.9, roughness: 0.1 });
        const pod = new THREE.Mesh(new THREE.CylinderGeometry(2, 2.2, 1, 32), baseMat);
        this.lunarBase.add(pod);

        const dome = new THREE.Mesh(new THREE.SphereGeometry(1.5, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2),
            new THREE.MeshStandardMaterial({ color: 0x00f2ff, transparent: true, opacity: 0.4, emissive: 0x00f2ff, emissiveIntensity: 2 }));
        dome.position.y = 0.5;
        this.lunarBase.add(dome);

        this.lunarBase.position.set(0, -5.2, 15);
        this.scene.add(this.lunarBase);
    }

    private setupLighting() {
        this.ambientLight = new THREE.AmbientLight(0xffffff, 0.05);
        this.scene.add(this.ambientLight);

        const sun = new THREE.DirectionalLight(0xffffff, 2);
        sun.position.set(20, 30, 20);
        this.scene.add(sun);

        const baseLight = new THREE.PointLight(0x00f2ff, 5, 15);
        baseLight.position.set(0, -4, 15);
        this.scene.add(baseLight);
    }

    private setupScrollAnimations() {
        const masterTl = gsap.timeline({
            scrollTrigger: {
                trigger: 'body',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1.5,
            }
        });

        // Intro
        masterTl.to(this.camera.position, { x: 0, y: 10, z: 25, duration: 4 });

        // Dive into base
        masterTl.to(this.camera.position, { y: -3, z: 20, duration: 4 });
        masterTl.to(this.camera.rotation, { x: -0.3, duration: 4 }, "<");

        // Solar Flare Animation (Red shift)
        masterTl.to(this.ambientLight, { intensity: 2, color: 0xff0000, duration: 2 }, "+=1");
        masterTl.to('.mission-control', { opacity: 1, duration: 1 }, "<");

        // Cards
        masterTl.to('.features', { opacity: 1, y: -20, stagger: 0.2, duration: 2 });

        // Final Out
        masterTl.to(this.camera.position, { y: 30, z: 80, duration: 6 });
        masterTl.to(this.camera.rotation, { x: -0.8, duration: 6 }, "<");
        masterTl.to('.final-cta', { opacity: 1, scale: 1.1, duration: 2 }, "-=2");
    }

    private setupInteractivity() {
        // Card Tilt
        const cards = document.querySelectorAll('.feature-card');
        cards.forEach(card => {
            card.addEventListener('mousemove', (e: any) => {
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                gsap.to(card, {
                    rotateY: x * 20,
                    rotateX: -y * 20,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            });
            card.addEventListener('mouseleave', () => {
                gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.5 });
            });
        });

        // Launch Button
        const btn = document.querySelector('.launch-btn');
        btn?.addEventListener('click', () => {
            gsap.to(this.camera.position, { z: 400, duration: 3, ease: 'expo.in' });
            gsap.to('body', { opacity: 0, duration: 2, delay: 1 });
            setTimeout(() => location.reload(), 4000);
        });
    }

    private onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.composer.setSize(window.innerWidth, window.innerHeight);
    }

    private animate() {
        requestAnimationFrame(() => this.animate());
        const elapsed = this.clock.getElapsedTime();

        this.particles.rotation.y = elapsed * 0.01;
        this.earth.rotation.y = elapsed * 0.02;
        this.moon.rotation.y = elapsed * 0.002;

        if (this.composer) this.composer.render();
    }
}

new SpaceExperience();

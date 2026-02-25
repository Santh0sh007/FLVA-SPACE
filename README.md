# Mission: Lunar Rescue

An immersive, interactive 3D cinematic experience built with Three.js and Vue 3. Journey through the cosmos, from the majesty of Earth to the event horizon of a black hole.

[**View Live Demo**](https://Santh0sh007.github.io/FLVA-SPACE/)

## Features

- **Ultra-High Fidelity Moon**: Detailed lunar surface with 512-segment geometry, displacement mapping for 3D craters, and anisotropy-corrected textures for razor-sharp visuals.
- **Cinematic Scroll Animation**: GSAP-driven camera paths that synchronize perfectly with your scroll, creating a liquid-smooth journey.
- **Atmospheric Earth**: Multi-layer atmospheric scattering and glow effects for a realistic orbital view.
- **Black Hole Finale**: A procedurally generated black hole with an accretion disk (8,000+ particles) and gravitational lensing effects.
- **Interactive Space Elements**: Space station models, crystalline debris, and dyanmic lighting systems.
- **Advanced Post-Processing**: Real-time bloom, chromatic aberration, vignette, and grain effects for a premium cinematic look.

## Tech Stack

- **Core**: [Vue 3](https://vuejs.org/)
- **3D Engine**: [Three.js](https://threejs.org/)
- **Animation**: [GSAP](https://greensock.com/gsap/) (ScrollTrigger)
- **Post-Processing**: [pmndrs/postprocessing](https://github.com/pmndrs/postprocessing)
- **Build Tool**: [Vite](https://vitejs.dev/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Project optimized for modern versions including v23+)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Santh0sh007/FLVA-SPACE.git
   ```

2. Navigate to the project directory:
   ```bash
   cd space
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

### Build & Deploy

To build the production-ready bundle:
```bash
npm run build
```

To deploy to GitHub Pages:
```bash
npm run deploy
```

## License

This project is created for educational and demonstration purposes. Textures and assets are derived from NASA Scientific Visualization Studio and Three.js examples.

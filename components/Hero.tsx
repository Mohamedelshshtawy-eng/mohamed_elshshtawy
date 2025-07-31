// "use client"

// import { useEffect, useRef } from "react"
// import { motion } from "framer-motion"
// import * as THREE from "three"
// import { TypeAnimation } from "react-type-animation"
// import Image from "next/image"

// export default function Hero() {
//   const mountRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     if (!mountRef.current) return

//     // Three.js setup
//     const scene = new THREE.Scene() 
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
//     const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

//     renderer.setSize(window.innerWidth, window.innerHeight)
//     renderer.setClearColor(0x000000, 0)
//     mountRef.current.appendChild(renderer.domElement)

//     // Create particles
//     const particlesGeometry = new THREE.BufferGeometry()
//     const particlesCount = 1000
//     const posArray = new Float32Array(particlesCount * 3)

//     for (let i = 0; i < particlesCount * 3; i++) {
//       posArray[i] = (Math.random() - 0.5) * 10
//     }

//     particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

//     const particlesMaterial = new THREE.PointsMaterial({
//       size: 0.005,
//       color: 0x00ffff,
//       transparent: true,
//       opacity: 0.8,
//     })

//     const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
//     scene.add(particlesMesh)

//     camera.position.z = 3

//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate)

//       particlesMesh.rotation.x += 0.001
//       particlesMesh.rotation.y += 0.002

//       renderer.render(scene, camera)
//     }
//     animate()

//     // Handle resize
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight
//       camera.updateProjectionMatrix()
//       renderer.setSize(window.innerWidth, window.innerHeight)
//     }
//     window.addEventListener("resize", handleResize)

//     return () => {
//       window.removeEventListener("resize", handleResize)
//       if (mountRef.current && renderer.domElement) {
//         mountRef.current.removeChild(renderer.domElement)
//       }
//       renderer.dispose()
//     }

  
//   }, [])

//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Three.js Background */}
//       <div ref={mountRef} className="absolute inset-0 z-0" />

//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-black/50 z-10" />

//       <div className="relative z-20 container mx-auto px-4 py-20">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Column - Text Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="space-y-6"
//           >
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="text-5xl lg:text-7xl font-bold"
//             >
//               <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
//                 Mohamed Elshshtawy
//               </span>
//             </motion.h1>

//             <div className="text-xl lg:text-2xl text-slate-300 h-20">
//               <TypeAnimation
//                 sequence={[
//                   "Full Stack Developer",
//                   2000,
//                   "Chemistry and Zoology Scientist",
//                   2000,
//                   "Data Scientist",
//                   2000,
//                   "AI/ML Engineer",
//                   2000,
//                 ]}
//                 wrapper="span"
//                 speed={50}
//                 repeat={Number.POSITIVE_INFINITY}
//                 className="text-cyan-400"
//               />
//             </div>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6 }}
//               className="text-lg text-slate-400 max-w-2xl leading-relaxed"
//             >
//               Passionate about bridging science and technology. With a background in Chemistry and Zoology, I bring
//               analytical thinking to modern web development, creating innovative solutions that make a difference.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.8 }}
//               className="flex flex-col sm:flex-row gap-4"
//             >
//               <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
//                 View My Work
//               </button>
//               <button className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300">
//                 Download CV
//               </button>
//             </motion.div>
//           </motion.div>

//           {/* Right Column - Photo */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="relative flex justify-center"
//           >
//             <div className="relative">
//               {/* Animated Border */}
//               <motion.div
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
//                 className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 p-1"
//               >
//                 <div className="w-full h-full rounded-full bg-black" />
//               </motion.div>

//               {/* Profile Image */}
//               <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-transparent">
//                 <Image src="/my.png" alt="Profile" fill className="object-cover" />
//               </div>

//               {/* Floating Elements */}
//               <motion.div
//                 animate={{ y: [-10, 10, -10] }}
//                 transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
//                 className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full opacity-80"
//               />
//               <motion.div
//                 animate={{ y: [10, -10, 10] }}
//                 transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
//                 className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-80"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }
'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import * as THREE from 'three'
import { TypeAnimation } from 'react-type-animation'
import Image from 'next/image'
import gsap from 'gsap'
import MarqueeBar from './MarqueeBar'
import dynamic from 'next/dynamic'
export default function Hero() {
  const mountRef = useRef<HTMLDivElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)

  const MarqueeBar = dynamic(() => import("./MarqueeBar"), {
  ssr: false, 
})

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    mountRef.current.appendChild(renderer.domElement)

    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 1000
    const posArray = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: 0x00ffff,
      transparent: true,
      opacity: 0.8,
    })

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particlesMesh)

    camera.position.z = 3

    const animate = () => {
      requestAnimationFrame(animate)
      particlesMesh.rotation.x += 0.001
      particlesMesh.rotation.y += 0.002
      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Three.js Background */}
      <div ref={mountRef} className="absolute inset-0 z-0" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-black/50 z-10" />

      <div className="relative z-20 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl lg:text-7xl font-bold"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Mohamed Elshshtawy
              </span>
            </motion.h1>

            <div className="text-xl lg:text-2xl text-slate-300 h-20">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'Chemistry and Zoology Scientist',
                  2000,
                  'Data Scientist',
                  2000,
                  'AI/ML Engineer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-cyan-400"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-slate-400 max-w-2xl leading-relaxed"
            >
              Passionate about bridging science and technology. With a background in Chemistry and Zoology, I bring
              analytical thinking to modern web development, creating innovative solutions that make a difference.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
                View My Work
              </button>
              <button className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300">
                Download CV
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Animated Border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 p-1"
              >
                <div className="w-full h-full rounded-full bg-black" />
              </motion.div>

              {/* Profile Image */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-transparent">
                <Image src="/my.png" alt="Profile" fill className="object-cover" />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full opacity-80"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-80"
              />
            </div>
          </motion.div>
        </div>
      </div>
     <MarqueeBar/>
    {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-black/80 py-3 border-t border-cyan-500">
        <div className="animate-marquee whitespace-nowrap text-cyan-300 text-lg font-semibold px-4">
          <span className="mx-8">Tawash Company</span>
          <span className="mx-8">Farada Company</span>
          <span className="mx-8">Medical Aetrex</span>
          <span className="mx-8">Tawash Company</span>
          <span className="mx-8">Farada Company</span>
          <span className="mx-8">Medical Aetrex</span>
        </div>
      </div> */}

    </section>
  )
}

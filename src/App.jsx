
// import { Canvas } from '@react-three/fiber'
// import { OrbitControls } from '@react-three/drei'
// import Cyl from './Cyl'
// import { useState, useEffect } from 'react'

// const App = () => {
//   const [time, setTime] = useState(new Date())

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(new Date())
//     }, 1000)
//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <div className="w-full h-screen relative bg-black overflow-hidden">
//       {/* 3D Canvas */}
//       <Canvas camera={{ fov: 35, position: [0, 0.5, 5] }}> 
//         <OrbitControls />
//         <ambientLight intensity={0.5} />
//         <group position={[0, 0.5, 0]}>   {/* cylinder উপরে তোলা */}
//           <Cyl />
//         </group>
//         <spotLight
//           position={[10, 10, 10]}
//           angle={0.15}
//           penumbra={1}
//           decay={0}
//           intensity={Math.PI}
//         />
//         <directionalLight position={[0, 0, 3]} />
//       </Canvas>

//       {/* Scrolling line */}
// <div className="absolute bottom-30 w-full overflow-hidden">
//   <div className="flex whitespace-nowrap animate-scroll">
//     <p className="text-2xl font-semibold text-white/50 
//      mr-12">
//        Frontend Developer • 🚀 React • JavaScript (ES6+) • 🎨 React Three Fiber • 💡 Three.js • 🎬 GSAP (Web Animations) • 🎨 TailwindCSS • ⚛️

//     </p>
//     <p className="text-2xl font-semibold text-white/30 mr-12">
//       Frontend Developer • 🚀 React • JavaScript (ES6+) • 🎨 React Three Fiber • 💡 Three.js • 🎬 GSAP (Web Animations) • 🎨 TailwindCSS • ⚛️ 

//     </p>
//   </div>
// </div>

//       Button
//       <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
//         <button className="bg-gradient-to-r from-red-600 to-pink-600 text-white text-lg px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition">
//         <a
//     href="/Rabbi-Hossain-CV.pdf"
//     download="Rabbi-Hossain-CV.pdf"
//   >
//     📄 Download My CV
//   </a>
//         </button>
//       </div> 
//       <div className="absolute top-5 left-5">
//         <span className="text-white/80 text-lg font-mono">
//           {time.toLocaleDateString()} | {time.toLocaleTimeString()}
//         </span>
//       </div>
//     </div>
//   )
// }

// export default App



import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Cyl from './Cyl'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const App = () => {
  const [time, setTime] = useState(new Date())
  const [loading, setLoading] = useState(true) // ← Add loading state

  // Clock update
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  // Loader timeout
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(t)
  }, [])

  // Loading screen
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-black">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full"
        />
      </div>
    )
  }

  return (
    <div className="w-full h-screen relative bg-black overflow-hidden">
      {/* 3D Canvas */}
      <Canvas camera={{ fov: 35, position: [0, 0.5, 5] }}>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <group position={[0, 0.5, 0]}>
          <Cyl />
        </group>
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <directionalLight position={[0, 0, 3]} />
      </Canvas>

      {/* Scrolling line */}
      <div className="absolute bottom-30 w-full overflow-hidden">
        <div className="flex whitespace-nowrap animate-scroll">
          <p className="text-2xl font-semibold text-white/50 mr-12">
            Frontend Developer • 🚀 React • JavaScript (ES6+) • 🎨 React Three Fiber • 💡 Three.js • 🎬 GSAP (Web Animations) • 🎨 TailwindCSS • ⚛️
          </p>
          <p className="text-2xl font-semibold text-white/50 mr-12">
            Frontend Developer • 🚀 React • JavaScript (ES6+) • 🎨 React Three Fiber • 💡 Three.js • 🎬 GSAP (Web Animations) • 🎨 TailwindCSS • ⚛️
          </p>
        </div>
      </div>

      {/* Download button */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <button className="bg-gradient-to-r from-red-600 to-pink-600 text-white text-lg px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition">
          <a
            href="/Rabbi-Hossain-CV.pdf"
            download="Rabbi-Hossain-CV.pdf"
          >
            📄 Download My CV
          </a>
        </button>
      </div>

      {/* Clock */}
      <div className="absolute top-5 left-5">
        <span className="text-white/80 text-lg font-mono">
          {time.toLocaleDateString()} | {time.toLocaleTimeString()}
        </span>
      </div>
    </div>
  )
}

export default App

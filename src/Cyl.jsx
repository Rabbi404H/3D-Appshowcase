


import { useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

const Cyl = () => {
  const tex = useTexture("./3rd.png")
  const cyl = useRef(null)

  useFrame((state, delta) => {
    cyl.current.rotation.y += delta  // smooth rotate
  })

  return (
    <group rotation={[0, 1.4, 0.5]}>
      <mesh ref={cyl}>
        <cylinderGeometry args={[1, 1, 1, 32, 1, true]} />
        <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
      </mesh>
    </group>
  )
}

export default Cyl

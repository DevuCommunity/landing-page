import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei';

function Model(props) {
  const { scene } = useGLTF('/public/assets/monster.glb'); // Carga el modelo GLB
  return <primitive object={scene} scale={1} />; // Renderiza el modelo con un escalado
}

/*
<ambientLight intensity={0.5} />
<directionalLight position={[0, 5, 5]} intensity={1} />
*/

export const DevuMonster = () => {
  return (
    <Canvas style={{ width: "100%" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 5]} intensity={1} />
      <Model />
      <OrbitControls />
    </Canvas>
  )
}
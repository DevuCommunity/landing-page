import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';

function Model() {
  const { scene } = useGLTF('/public/assets/monster.glb'); // Carga el modelo GLB
  const modelRef = useRef();

   // Estado para el movimiento del shake
   const [shaking, setShaking] = useState(false);

   // Animación de shaking
   const { shakeRotation } = useSpring({
     shakeRotation: shaking ? [0, 0, 0.1] : [0, 0, 0.1],
     config: { tension: 300, friction: 10 },
     onRest: () => setShaking(false), // Detener agitación al finalizar
   });
 
   // Movimiento de suspensión suave
   useFrame(({ clock }) => {
      const t = clock.getElapsedTime();
      modelRef.current.rotation.y = -1 * Math.sin(t / 3) * 0.3; // Rotación suave en Y
   });

   useFrame(({ clock }) => {
    if (Math.floor(clock.getElapsedTime()) % 8 === 0) {
      setShaking(true);
    } else {
      setShaking(false);
    }
  });

  return (
    <animated.group ref={modelRef} rotation={shakeRotation}>
      <primitive object={scene} scale={1} />
    </animated.group>
  );
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
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}
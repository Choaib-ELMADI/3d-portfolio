import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'

import '../Hero.css'

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={ 0.15 } groundColor="black" />
      <pointLight intensity={ 1 } />
      <spotLight 
        position={ [-20, 50, 10] }
        angle={ 0.12 }
        penumbra={ 1 }
        intensity={ 1 }
        castShadow
        shadow-mapSize={ 1024 }
      />
      <primitive 
        object={ computer.scene }
        scale={ isMobile ? 0.6 : 0.8 }
        position={ isMobile ? [0, -3, -1.5] : [0, -2.5, -1.5] }
        rotation={ [-0.01, -0.2, -0.1] }
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 700px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaChange = (e) => {
      setIsMobile(e.matches);
    }

    mediaQuery.addEventListener('change', handleMediaChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    }
  }, [])
  

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={ <CanvasLoader /> }>
        <OrbitControls 
          enableZoom={ false } 
          maxPolarAngle={ Math.PI / 2 }
          minPolarAngle={ Math.PI / 2 }
        />
        <Computers isMobile={ isMobile } />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas
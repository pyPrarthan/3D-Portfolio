import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

// Ball Component: Renders a floating ball with a decal
const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]); // Load the texture from the provided image URL

  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={4}>
      {/* Lighting setup */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[0, 0, 1]} intensity={0.8} />
      {/* Geometry */}
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {/* Decal */}
        <Decal
          position={[0, 0, 1]}
          rotation={[Math.PI * 2, 0, Math.PI / 2]}
          scale={0.9} // Adjusted for better fitting
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

// BallCanvas Component: Renders the Ball inside a Canvas
const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="always" // Continuous rendering for smooth animations
      dpr={[1, 2]} // Device pixel ratio for better resolution
      gl={{ preserveDrawingBuffer: true }} // Enable image preservation
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Sphere, MeshDistortMaterial, useTexture } from "@react-three/drei";

import CanvasLoader from "./CanvasLoader";

const Ball = ({ icon }) => {
  const texture = useTexture(icon); // ✅ hook is now inside Canvas child

  return (
    <Sphere args={[1, 32, 32]} scale={2}>
      <MeshDistortMaterial
        map={texture}
        distort={0.5}
        speed={2}
        metalness={0.7}
        roughness={0.2}
      />
    </Sphere>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, position: [0, 0, 5] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 2, 1]} />
        <Ball icon={icon} />
        <OrbitControls enableZoom={false} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;

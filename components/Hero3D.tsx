"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Center, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

function HeroModel() {
  // lädt /public/models/hero.glb
  const { scene } = useGLTF("/models/abstract_shape.glb");

  return (
    // Center richtet das Modell automatisch aus (Pivot, Bounds, Scaling)
    <Center disableZ>
      <primitive object={scene} />
    </Center>
  );
}
// Optional: Preload beim Start
// useGLTF.preload("/models/hero.glb");

export default function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 3.2], fov: 55 }} gl={{ alpha: true }}>
      {/* Licht & Umgebung für schöne Reflektionen */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 4, 5]} intensity={1.3} />
      <Suspense fallback={null}>
        <Environment preset="studio" />  {/* macht die „Studio-Highlights“ */}
        <HeroModel />
      </Suspense>
      <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.6} />
    </Canvas>
  );
}

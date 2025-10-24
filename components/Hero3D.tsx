"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { Suspense } from "react";
function Blob() {
return (
<Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.2}>
<mesh>
<icosahedronGeometry args={[1.4, 1]} />
<meshStandardMaterial metalness={0.15} roughness={0.25}
color="#57c1ff" />
</mesh>
</Float>
);
}
export default function Hero3D() {
return (
<Canvas camera={{ position: [0, 0, 4], fov: 55 }}>
<ambientLight intensity={0.5} />
<directionalLight position={[3, 4, 5]} intensity={1.2} />
<Suspense fallback={null}>
<Blob />
</Suspense>
<OrbitControls enablePan={false} enableZoom={false} autoRotate
autoRotateSpeed={0.6} />
</Canvas>
);
}
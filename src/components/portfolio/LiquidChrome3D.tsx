import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float, Environment, Lightformer } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

function Blob() {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.x = t * 0.15;
      mesh.current.rotation.y = t * 0.2;
    }
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={mesh} scale={1.6}>
        <icosahedronGeometry args={[1, 64]} />
        {/* @ts-ignore drei type */}
        <MeshDistortMaterial
          color="#ffffff"
          roughness={0.05}
          metalness={1}
          distort={0.45}
          speed={1.6}
          envMapIntensity={1.4}
        />
      </mesh>
    </Float>
  );
}

function Ring() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((s) => {
    if (ref.current) ref.current.rotation.z = s.clock.getElapsedTime() * 0.3;
  });
  return (
    <mesh ref={ref} rotation={[Math.PI / 2.4, 0, 0]} scale={2.4}>
      <torusGeometry args={[1, 0.012, 16, 200]} />
      <meshStandardMaterial color="#ff6ad5" emissive="#ff6ad5" emissiveIntensity={0.6} metalness={1} roughness={0.2} />
    </mesh>
  );
}

export function LiquidChrome3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ff6ad5" />
      <directionalLight position={[-5, -3, 2]} intensity={0.9} color="#5ad9ff" />
      <pointLight position={[0, 4, 3]} intensity={0.6} color="#c4ff6a" />
      <Suspense fallback={null}>
        <Environment resolution={256}>
          <Lightformer intensity={4} color="#ff6ad5" position={[-3, 2, 4]} scale={[6, 6, 1]} />
          <Lightformer intensity={3} color="#5ad9ff" position={[3, -2, 4]} scale={[6, 6, 1]} />
          <Lightformer intensity={2.5} color="#c4ff6a" position={[0, 4, -3]} scale={[8, 4, 1]} />
          <Lightformer intensity={2} color="#ffb86a" position={[2, -3, -2]} scale={[6, 4, 1]} />
        </Environment>
        <Blob />
        <Ring />
      </Suspense>
    </Canvas>
  );
}

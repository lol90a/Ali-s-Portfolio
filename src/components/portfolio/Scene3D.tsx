import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, Lightformer, MeshTransmissionMaterial } from "@react-three/drei";
import { useRef, Suspense, useMemo, useEffect, useState } from "react";
import * as THREE from "three";

function Knot({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.x = t * 0.1 + mouse.current.y * 0.25;
      ref.current.rotation.y = t * 0.15 + mouse.current.x * 0.35;
    }
  });
  return (
    <Float speed={1} rotationIntensity={0.25} floatIntensity={0.7}>
      <mesh ref={ref} scale={1.15}>
        <torusKnotGeometry args={[1, 0.32, 140, 20]} />
        {/* @ts-ignore drei type */}
        <MeshTransmissionMaterial
          backside={false}
          samples={3}
          thickness={0.5}
          chromaticAberration={0.03}
          anisotropy={0.2}
          distortion={0.15}
          distortionScale={0.3}
          temporalDistortion={0}
          transmission={1}
          ior={1.4}
          roughness={0.08}
          color="#ffffff"
        />
      </mesh>
    </Float>
  );
}

function Particles({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
    }
    return arr;
  }, [count]);
  useFrame((s) => {
    if (ref.current) ref.current.rotation.y = s.clock.getElapsedTime() * 0.02;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.012} color="#9aa0aa" transparent opacity={0.6} sizeAttenuation depthWrite={false} />
    </points>
  );
}

export function Scene3D({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const [enabled, setEnabled] = useState(true);
  const [particleCount, setParticleCount] = useState(300);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.innerWidth < 640;
    if (reduce) setEnabled(false);
    setParticleCount(small ? 120 : 300);
  }, []);

  if (!enabled) return null;

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 42 }}
      dpr={[1, 1.25]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      frameloop="always"
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 4, 5]} intensity={1.1} color="#ffffff" />
      <directionalLight position={[-5, -3, 2]} intensity={0.6} color="#3B82F6" />
      <Suspense fallback={null}>
        <Environment resolution={128} frames={1}>
          <Lightformer intensity={2.5} color="#ffffff" position={[-3, 2, 4]} scale={[5, 5, 1]} />
          <Lightformer intensity={2} color="#3B82F6" position={[3, -2, 4]} scale={[5, 5, 1]} />
          <Lightformer intensity={1.2} color="#ffffff" position={[0, 4, -3]} scale={[6, 3, 1]} />
        </Environment>
        <Knot mouse={mouse} />
        <Particles count={particleCount} />
      </Suspense>
    </Canvas>
  );
}

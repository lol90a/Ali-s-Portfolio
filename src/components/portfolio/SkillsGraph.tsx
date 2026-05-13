import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, Suspense, useMemo } from "react";
import { Text, Billboard } from "@react-three/drei";
import * as THREE from "three";

const SKILLS = [
  { name: "Rust", pos: [0, 1.6, 0] },
  { name: "Solana", pos: [-2.2, 0.4, 0.4] },
  { name: "Ethereum", pos: [2.2, 0.4, 0.4] },
  { name: "Web3", pos: [-1.4, -1.4, -0.3] },
  { name: "Node.js", pos: [1.4, -1.4, -0.3] },
  { name: "WebGL", pos: [0, 0, 1.6] },
] as const;

function Graph() {
  const group = useRef<THREE.Group>(null!);
  useFrame((s) => {
    if (group.current) group.current.rotation.y = s.clock.getElapsedTime() * 0.15;
  });

  const lines = useMemo(() => {
    const arr: { a: THREE.Vector3; b: THREE.Vector3 }[] = [];
    for (let i = 0; i < SKILLS.length; i++) {
      for (let j = i + 1; j < SKILLS.length; j++) {
        arr.push({
          a: new THREE.Vector3(...SKILLS[i].pos),
          b: new THREE.Vector3(...SKILLS[j].pos),
        });
      }
    }
    return arr;
  }, []);

  return (
    <group ref={group}>
      {lines.map((l, i) => {
        const geom = new THREE.BufferGeometry().setFromPoints([l.a, l.b]);
        return (
          <line key={i}>
            {/* @ts-ignore */}
            <primitive object={geom} attach="geometry" />
            <lineBasicMaterial color="#3B82F6" transparent opacity={0.2} />
          </line>
        );
      })}
      {SKILLS.map((s) => (
        <group key={s.name} position={s.pos as any}>
          <mesh>
            <sphereGeometry args={[0.14, 32, 32]} />
            <meshStandardMaterial color="#ffffff" emissive="#3B82F6" emissiveIntensity={0.6} />
          </mesh>
          <Billboard>
            <Text
              position={[0, 0.34, 0]}
              fontSize={0.18}
              color="#ffffff"
              anchorX="center"
              anchorY="middle"
            >
              {s.name}
            </Text>
          </Billboard>
        </group>
      ))}
    </group>
  );
}

export function SkillsGraph() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <Suspense fallback={null}>
        <Graph />
      </Suspense>
    </Canvas>
  );
}

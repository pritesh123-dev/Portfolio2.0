"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/* ── Rotating particle sphere ─────────────────────────── */
function Particles() {
  const pointsRef = useRef<THREE.Points>(null!);
  const count = typeof window !== "undefined" && window.innerWidth < 768 ? 1200 : 3500;

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Distribute on layered spheres
      const layer = Math.random();
      let r: number;
      if (layer < 0.15) r = Math.random() * 0.4;           // inner core
      else if (layer < 0.8) r = 1.0 + Math.random() * 0.8; // main shell
      else r = 1.8 + Math.random() * 0.7;                   // outer halo

      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      // Violet / cyan / white distribution
      const t = Math.random();
      if (t < 0.55) {
        // violet
        colors[i * 3] = 0.486; colors[i * 3 + 1] = 0.227; colors[i * 3 + 2] = 0.929;
      } else if (t < 0.85) {
        // cyan
        colors[i * 3] = 0.133; colors[i * 3 + 1] = 0.827; colors[i * 3 + 2] = 0.933;
      } else {
        // near-white
        colors[i * 3] = 0.9; colors[i * 3 + 1] = 0.9; colors[i * 3 + 2] = 0.98;
      }
    }
    return { positions, colors };
  }, [count]);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return geo;
  }, [positions, colors]);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = clock.elapsedTime * 0.04;
    pointsRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.02) * 0.08;
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        vertexColors
        size={0.006}
        sizeAttenuation
        transparent
        opacity={0.88}
        depthWrite={false}
      />
    </points>
  );
}

/* ── Floating wireframe shape ─────────────────────────── */
function FloatingShape({
  position,
  color,
  speed = 1,
  scale = 1,
}: {
  position: [number, number, number];
  color: string;
  speed?: number;
  scale?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const originY = position[1];

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = clock.elapsedTime * 0.25 * speed;
    meshRef.current.rotation.y = clock.elapsedTime * 0.18 * speed;
    meshRef.current.position.y =
      originY + Math.sin(clock.elapsedTime * 0.5 * speed) * 0.12;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <icosahedronGeometry args={[0.18, 1]} />
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.35}
        emissive={color}
        emissiveIntensity={0.4}
      />
    </mesh>
  );
}

/* ── Mouse-reactive camera ────────────────────────────── */
function CameraRig() {
  useFrame(({ camera, mouse }) => {
    camera.position.x += (mouse.x * 0.25 - camera.position.x) * 0.025;
    camera.position.y += (mouse.y * 0.15 - camera.position.y) * 0.025;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

/* ── Root export ──────────────────────────────────────── */
export default function ParticleScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 2.2], fov: 70 }}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[2, 2, 2]} intensity={1.5} color="#7C3AED" />
      <pointLight position={[-2, -1, -1]} intensity={0.8} color="#22D3EE" />

      <Particles />

      <FloatingShape position={[-1.4, 0.6, -0.4]} color="#7C3AED" speed={0.7} scale={1.1} />
      <FloatingShape position={[1.5, -0.4, -0.3]} color="#22D3EE" speed={1.1} scale={0.9} />
      <FloatingShape position={[0.9, 1.1, -0.9]} color="#10B981" speed={0.6} scale={0.8} />
      <FloatingShape position={[-1.0, -0.9, -0.5]} color="#a78bfa" speed={0.95} scale={1.0} />

      <CameraRig />
    </Canvas>
  );
}

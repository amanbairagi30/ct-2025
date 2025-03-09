import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { Decal, useTexture } from "@react-three/drei";

export function Trophy() {
  const trophyRef = useRef<Mesh>(null);

  useFrame(() => {
    if (trophyRef.current) {
      trophyRef.current.rotation.y += 0.005;
    }
  });

  const logoTexture = useTexture(
    "https://res.cloudinary.com/dazeowi1e/image/upload/v1741502121/Icon-removebg-preview_xb4f1s.png"
  );

  // Enhanced golden material with better metallic properties
  const goldMaterial = {
    color: "#FFD700",
    metalness: 1,
    roughness: 0.1,
    clearcoat: 0.8,
    clearcoatRoughness: 0.1,
    reflectivity: 0.5,
  };

  const bodyRef = useRef<Mesh>(null);

  return (
    <group ref={trophyRef}>
      {/* Base */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.61, 1, 1, 32]} />
        <meshPhysicalMaterial
          color="#C0C0C0"
          metalness={1}
          roughness={0.15}
          clearcoat={0.5}
          reflectivity={0.8}
        />
      </mesh>

      {/* Main body - tapered column */}
      <mesh ref={bodyRef} position={[0, 2.5, 0]}>
        <cylinderGeometry args={[0.9, 0.4, 3, 32]} />
        <meshPhysicalMaterial {...goldMaterial} />
        <Decal
          position={[0, 1, 0.5]} // Centered on the front of the trophy
          rotation={[0, 0, 0]}
          scale={[0.8, 0.8, 1]} // Adjust size of the logo
          map={logoTexture}
        />
        <Decal
          position={[0, 1, -0.5]} // Centered on the back of the trophy
          rotation={[0, Math.PI, 0]}
          scale={[0.8, 0.8, 1]} // Adjust size of the logo
          map={logoTexture}
        />
      </mesh>
      {/* Trophy Text - Front */}
      <mesh position={[0, 0.01, 0]} rotation={[Math.PI * 0.5, 0, 0]}>
        <torusGeometry args={[1, 0.05, 16, 100]} />
        <meshPhysicalMaterial color="#000" />
      </mesh>
      <mesh position={[0, 0.95, 0]} rotation={[Math.PI * 0.5, 0, 10]}>
        <torusGeometry args={[0.6, 0.05, 16, 100]} />
        <meshPhysicalMaterial color="#000" />
      </mesh>
      {/* Top sphere */}
      <mesh position={[0, 4.2, 0]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshPhysicalMaterial
          {...goldMaterial}
          clearcoat={1}
          clearcoatRoughness={0.41}
        />
      </mesh>
    </group>
  );
}

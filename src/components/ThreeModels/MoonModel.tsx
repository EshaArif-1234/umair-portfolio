"use client";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Float } from "@react-three/drei";
import OrbitRing from "./OrbitRing";
import Particles from "./Particles";

const MoonModel = () => {
  // Define the moon texture object
  const moonTextureData = { name: "Moon", logo: "/public/assets/ textures/moon.jpg" };

  // Load the texture using the logo path
  const moonTexture = useLoader(TextureLoader, moonTextureData.logo);

  return (
    <group>
    {/* Floating moon sphere with texture */}
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.5}>
      <mesh>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial map={moonTexture} />
      </mesh>
    </Float>

    {/* Orbit ring around the moon */}
    <OrbitRing />

    {/* Particle system floating around the orbit */}
    <Particles count={200} />
  </group>
  );
};

export default MoonModel;
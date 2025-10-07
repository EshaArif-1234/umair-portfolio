"use client";
import React from 'react';
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Float } from "@react-three/drei";
import OrbitRing from "./OrbitRing";
import Particles from "./Particles";
// Import the texture from assets
import moonTextureSrc from "../../assets/textures/moon.jpg";

const MoonModel = () => {
  // Use the imported texture with error handling
  const moonTexture = useLoader(TextureLoader, moonTextureSrc, undefined, (error) => {
    console.error('Error loading moon texture:', error);
  });
  
  // Log texture loading status
  React.useEffect(() => {
    if (moonTexture) {
      console.log('Moon texture loaded successfully');
      // Set color space for better color reproduction
      moonTexture.colorSpace = 'srgb';
    }
  }, [moonTexture]);

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
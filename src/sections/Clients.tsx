'use client';
import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';

interface Client {
  name: string;
  logo: string;
}

const clients: Client[] = [
//   { name: 'HealthCare Pro', logo: '/clients/careplus.png' },
//   { name: 'MediClaim Solutions', logo: '/clients/healthcarepro.png' },
//   { name: 'BillingCorp', logo: '/clients/medsolutions.png' },
//   { name: 'RX Revenue', logo: '/clients/wellnessinc.png' },
];

const RotatingLogo: React.FC<{ texture: string }> = ({ texture }) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  // Use a placeholder if texture fails to load
  const [loadedTexture, setLoadedTexture] = React.useState<string | null>(texture);
  const onTextureError = () => {
    console.error(`Failed to load texture: ${texture}`);
    setLoadedTexture(null);
  };

  return (
    <mesh ref={meshRef} position={[Math.random() * 6 - 3, Math.random() * 6 - 3, Math.random() * 6 - 3]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={loadedTexture ? undefined : '#415a77'} map={loadedTexture ? useLoader(THREE.TextureLoader, loadedTexture, undefined, onTextureError) : null} />
    </mesh>
  );
};

const ClientsSection: React.FC = () => {
  return (
    <section id="clients" className="py-20 px-4 md:px-10 bg-gradient-to-b from-transparent to-[#0d1b2a] dark:to-[#e0e1dd]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1b263b] dark:text-[#e0e1dd] mb-4">Trusted By Clients</h2>
        <p className="text-[#415a77] dark:text-[#778da9] max-w-2xl mx-auto mb-10">
          Working with a variety of medical billing clients across different specialties and regions.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center items-center mt-10 max-w-4xl mx-auto">
          {clients.map((client, index) => (
            <div key={index} className="flex justify-center items-center h-20 w-40 mx-auto">
              <img
                src={client.logo}
                alt={client.name}
                className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
                onError={(e) => {
                  console.error(`Failed to load image: ${client.logo}`);
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML += `<div class="h-16 flex items-center justify-center text-gray-500">${client.name}</div>`;
                }}
              />
            </div>
          ))}
        </div>

        {/* 3D Logos - Commented out to prevent rendering errors */}
        {/* <div className="mt-16 h-[300px]">
          <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <OrbitControls enableZoom={false} />
            {clients.map((client, index) => (
              <RotatingLogo texture={client.logo} key={index} />
            ))}
          </Canvas>
        </div> */}
      </div>
    </section>
  );
};

export default ClientsSection;

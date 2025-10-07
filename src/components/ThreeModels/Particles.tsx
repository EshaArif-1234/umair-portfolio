"use client";
import { useMemo, useRef, useEffect } from "react";
import * as THREE from 'three';

const Particles = ({ count = 150 }) => {
  const particlesRef = useRef<THREE.Points>(null);
  const texture = useMemo(() => {
    // Create a canvas for the particle texture
    const canvas = document.createElement('canvas');
    const size = 64;
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext('2d');
    
    if (context) {
      // Create a circular gradient for soft edges
      const gradient = context.createRadialGradient(
        size / 2, size / 2, 0,
        size / 2, size / 2, size / 2
      );
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.7, 'rgba(200, 200, 255, 0.8)');
      gradient.addColorStop(1, 'rgba(150, 150, 255, 0)');
      
      // Draw the circle
      context.fillStyle = gradient;
      context.beginPath();
      context.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
      context.fill();
    }
    
    return new THREE.CanvasTexture(canvas);
  }, []);

  const positions = useMemo(() => {
    const temp: number[] = [];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * 2 * Math.PI;
      const radius = 2.2 + Math.random() * 0.1;
      const x = radius * Math.cos(angle);
      const y = (Math.random() - 0.5) * 0.3;
      const z = radius * Math.sin(angle);
      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        map={texture}
        size={0.05}
        transparent={true}
        alphaTest={0.01}
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default Particles;
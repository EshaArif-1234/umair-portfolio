"use client";
import { useMemo } from "react";

const Particles = ({ count = 150 }) => {
  const positions = useMemo(() => {
    const temp: number[] = [];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * 2 * Math.PI;
      const radius = 2.2 + Math.random() * 0.1; // Adjusted to match ring size
      const x = radius * Math.cos(angle);
      const y = (Math.random() - 0.5) * 0.3; // Increased spread
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
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial color="#ffffff" size={0.03} /> {/* Increased particle size */}
    </points>
  );
};

export default Particles;
import React from "react";

interface OrbitRingProps {
  innerRadius?: number;
  outerRadius?: number;
  color?: string;
  rotation?: [number, number, number];
}

const OrbitRing: React.FC<OrbitRingProps> = ({
  innerRadius = 2.2, // Increased from 1.5
  outerRadius = 2.3, // Increased from 1.6
  color = "#ffffff",
  rotation = [Math.PI / 2, 0, 0],
}) => (
  <mesh rotation={rotation}>
    <ringGeometry args={[innerRadius, outerRadius, 64]} />
    <meshBasicMaterial color={color} side={2} />
  </mesh>
);

export default OrbitRing;
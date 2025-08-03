import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const MedicalBillingModel: React.FC<{ position?: [number, number, number]; scale?: number }> = ({ position = [0, 0, 0], scale = 1 }) => {
  const group = useRef<any>();
  const { scene } = useGLTF('/assets/models/medical_billing_model.glb');

  // Optional: Add subtle rotation animation
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={group} position={position} scale={[scale, scale, scale]}>
      <primitive object={scene} />
    </group>
  );
};

export default MedicalBillingModel;

// Preload the model for better performance
useGLTF.preload('/assets/models/medical_billing_model.glb');

import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

const MedicalModel = ({ url }: { url: string }) => {
  const model = useGLTF(url);
  const ref = useRef<Group>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={ref} scale={0.6} position={[2, 0, -4]}>
      <primitive object={model.scene} />
    </group>
  );
};

export default MedicalModel;

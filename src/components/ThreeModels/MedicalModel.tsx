// MedicalModel.tsx
import { useGLTF, useEnvironment, OrbitControls, ContactShadows, Stage } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import { Canvas } from '@react-three/fiber';

interface MedicalModelProps {
  url: string;
}

const Model = ({ url }: MedicalModelProps) => {
  const { scene } = useGLTF(url);
  const ref = useRef<Group>(null);

  // Smooth rotation
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={ref} scale={0.8}>
      <primitive object={scene} />
    </group>
  );
};

const MedicalModel = ({ url }: MedicalModelProps) => {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 5], fov: 50 }}
      style={{ width: '100%', height: '100vh', background: 'radial-gradient(circle at center, #e0f7fa, #ffffff)' }}
    >
      <Suspense fallback={null}>
        {/* Beautiful lighting */}
        <Stage
          environment="city"
          intensity={1}
          shadows={{ type: 'accumulative', bias: -0.0001 }}
          adjustCamera
        >
          <Model url={url} />
        </Stage>

        {/* Soft ground shadows */}
        <ContactShadows
          position={[0, -0.8, 0]}
          opacity={0.5}
          scale={10}
          blur={2.5}
          far={10}
        />

        {/* Orbit control for user interaction */}
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={0}
        />
      </Suspense>
    </Canvas>
  );
};

export default MedicalModel;

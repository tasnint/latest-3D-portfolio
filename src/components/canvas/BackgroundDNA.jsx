
// BackgroundDNA.jsx
import React, { useRef, useLayoutEffect } from 'react';
import { useFrame, useLoader, extend } from '@react-three/fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

extend({ GLTFLoader });

const BackgroundDNA = () => {
  const mesh = useRef();
  const { nodes } = useLoader(THREE.GLTFLoader, './desktop_pc/dna.glb');
  useLayoutEffect(() => {
    // Adjust the DNA nodes to fit the background
  }, [nodes]);

  useFrame(() => {
    // Optional: animate or rotate the DNA
  });

  return (
    <mesh ref={mesh} scale={[5, 5, 5]} position={[0, 0, -10]}>
      <primitive object={nodes.DNA} />
      <meshBasicMaterial attach="material" color="purple" transparent opacity={0.5} />
    </mesh>
  );
};

export default BackgroundDNA;


"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import { MeshStandardMaterial } from "three";

const Model = ({ modelPath }: { modelPath: string }) => {
  const { scene } = useGLTF(modelPath);
  console.log("Loaded Model:", scene);

  // Apply a green or blue material
  scene.traverse((obj) => {
    if (obj.isMesh) {
      obj.material = new MeshStandardMaterial({ color: "green" }); // Change to "blue" if needed
    }
  });

  return <primitive object={scene} position={[0, -1, 0]} scale={250} />; // Increased scale
};

const GLTFModel = ({ modelPath }: { modelPath: string }) => {
  return (
    <div className="w-[600px] h-[300px]">
      <Canvas
      style={{ display: "block", width: "100%", height: "300px" }}
      camera={{ position: [0, 0, 15], fov: 40 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <Suspense fallback={null}>
          <Model modelPath={modelPath} />
        </Suspense>
        <OrbitControls enableZoom={false} /> {/* Prevent manual zoom */}
      </Canvas>
    </div>
  );
};

export default GLTFModel;

import GLTFModel from "./GLTFModel";

export default function GLTFModelViewer() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-2xl font-bold mb-4">3D Model Viewer</h1>
      <GLTFModel modelPath="/assets/bolt.gltf" />
    </main>
  );
}

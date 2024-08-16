"use state"
import React, { useRef, useEffect } from 'react';
import * as BABYLON from '@babylonjs/core';

const Avatar3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const canvas = mountRef.current;
    const engine = new BABYLON.Engine(canvas, true);
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 4, 10, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    const light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);

    // Create a sphere avatar
    const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2 }, scene);
    const material = new BABYLON.StandardMaterial("material", scene);
    material.diffuseColor = new BABYLON.Color3(0, 0.5, 1);
    sphere.material = material;

    engine.runRenderLoop(() => {
      sphere.rotation.y += 0.01;
      scene.render();
    });

    window.addEventListener('resize', () => {
      engine.resize();
    });

    return () => {
      engine.dispose();
    };
  }, []);

  return <canvas ref={mountRef} style={{ width: '100%', height: '100%' }} />;
};

export default Avatar3D;

"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function CanvasBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#0a0510"); 
    scene.fog = new THREE.FogExp2("#0a0510", 0.0015);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 400;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    const particleCount = 2000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorRoseGold = new THREE.Color("#ffb6c1");
    const colorSoftPink = new THREE.Color("#ff6a88"); 

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2000;

      const isRose = Math.random() > 0.5; 
      const mixedColor = isRose ? colorRoseGold : colorSoftPink;
      
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 3.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    let targetX = 0;
    let targetY = 0;

    const onPointerMove = (event: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;
      if (event instanceof TouchEvent) {
        clientX = event.touches[0].clientX;
        clientY = event.touches[0].clientY;
      } else {
        clientX = event.clientX;
        clientY = event.clientY;
      }
      targetX = (clientX - window.innerWidth / 2) * 0.05;
      targetY = (clientY - window.innerHeight / 2) * 0.05;
    };

    document.addEventListener("mousemove", onPointerMove);
    document.addEventListener("touchmove", onPointerMove);

    let animationFrameId: number;
    const render = () => {
      animationFrameId = requestAnimationFrame(render);
      // Smooth, slow rotation for elegance
      particles.rotation.x += 0.0003;
      particles.rotation.y += 0.0005;

      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (-targetY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    render();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", onPointerMove);
      document.removeEventListener("touchmove", onPointerMove);
      cancelAnimationFrame(animationFrameId);
      mountRef.current?.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 z-0 pointer-events-none bg-[#0a0510]" />;
}
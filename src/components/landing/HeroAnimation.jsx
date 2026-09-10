'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Three.js interactive 3D looping scene for the hero section
export default function HeroAnimation({ className = '' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    // Never fall back to window.innerWidth: when the container has not been
    // laid out yet that produces a canvas far wider than its column, which
    // overflows the page on narrow screens. Start small and let the
    // ResizeObserver below snap to the real size on the first layout pass.
    const width = container.clientWidth || 1;
    const height = container.clientHeight || 480;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.maxWidth = '100%';
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xd4e2ff, 2.0);
    directionalLight.position.set(5, 8, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x8bc34a, 2.5, 20);
    pointLight.decay = 0;
    pointLight.position.set(-4, -2, 4);
    scene.add(pointLight);

    // Group to hold all rotating elements
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // Central 3D core: layered floating rings and geometric core
    const coreGroup = new THREE.Group();
    masterGroup.add(coreGroup);

    // 1. Central faceted icosahedron
    const coreGeo = new THREE.IcosahedronGeometry(1.5, 1);
    const coreMat = new THREE.MeshPhongMaterial({
      color: 0x111111,
      emissive: 0x1a1a24,
      specular: 0x6295ea,
      shininess: 90,
      flatShading: true,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreGroup.add(coreMesh);

    // 2. Wireframe outer cage
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x5588ff,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireMesh = new THREE.Mesh(coreGeo, wireMat);
    wireMesh.scale.set(1.08, 1.08, 1.08);
    coreGroup.add(wireMesh);

    // 3. Orbital Ring 1 (Horizontal tilt)
    const ring1Geo = new THREE.TorusGeometry(2.4, 0.04, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x222222,
      roughness: 0.2,
      metalness: 0.1,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    masterGroup.add(ring1);

    // 4. Orbital Ring 2 (Vertical accent)
    const ring2Geo = new THREE.TorusGeometry(2.9, 0.035, 16, 100);
    const ring2Mat = new THREE.MeshPhongMaterial({
      color: 0x82b1ff,
      specular: 0xffffff,
      shininess: 80,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.z = Math.PI / 5;
    masterGroup.add(ring2);

    // 5. Floating satellite nodes / micro-spheres representing data tokens
    const satellites = [];
    const satGeo = new THREE.SphereGeometry(0.14, 16, 16);
    const satMats = [];
    const satColors = [0x111111, 0x66a6ff, 0x9be282, 0xffbe5c];

    for (let i = 0; i < 8; i += 1) {
      const angle = (i / 8) * Math.PI * 2;
      const radius = 2.4 + (i % 2) * 0.5;
      const satMat = new THREE.MeshPhongMaterial({
        color: satColors[i % satColors.length],
        shininess: 100,
      });
      satMats.push(satMat);
      const sat = new THREE.Mesh(satGeo, satMat);
      sat.userData = {
        angle,
        radius,
        speed: 0.012 + (i % 3) * 0.004,
        yOffset: (i % 2 === 0 ? 1 : -1) * 0.4,
      };
      masterGroup.add(sat);
      satellites.push(sat);
    }

    // 6. Floating particle dust cloud around the sculpture
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 8;
      particlePos[i + 1] = (Math.random() - 0.5) * 8;
      particlePos[i + 2] = (Math.random() - 0.5) * 6;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x445566,
      size: 0.05,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 1.5;
      targetY = y * 1.5;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Responsive resize
    const onResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight || 480;
      if (!newWidth) return;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', onResize);

    const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(onResize) : null;
    observer?.observe(container);

    // Loop Animation
    const clock = new THREE.Clock();
    let frame;

    const animate = () => {
      frame = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      masterGroup.rotation.y = elapsedTime * 0.35 + mouseX;
      masterGroup.rotation.x = Math.sin(elapsedTime * 0.25) * 0.2 + mouseY * 0.5;

      coreMesh.rotation.y -= 0.008;
      coreMesh.rotation.x += 0.005;
      wireMesh.rotation.y = coreMesh.rotation.y;
      wireMesh.rotation.x = coreMesh.rotation.x;

      ring1.rotation.z += 0.01;
      ring2.rotation.y += 0.012;
      ring2.rotation.z -= 0.008;

      // Orbit satellites
      satellites.forEach((sat) => {
        sat.userData.angle += sat.userData.speed;
        sat.position.x = Math.cos(sat.userData.angle) * sat.userData.radius;
        sat.position.z = Math.sin(sat.userData.angle) * sat.userData.radius;
        sat.position.y = Math.sin(sat.userData.angle * 2 + elapsedTime) * 0.5 + sat.userData.yOffset;
      });

      particles.rotation.y = -elapsedTime * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      observer?.disconnect();

      [coreGeo, ring1Geo, ring2Geo, satGeo, particleGeo].forEach((geo) => geo.dispose());
      [coreMat, wireMat, ring1Mat, ring2Mat, particleMat, ...satMats].forEach((mat) => mat.dispose());

      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className={className} aria-label="Interactive abstract 3D sculpture" />;
}

'use client';

import { useEffect, useRef } from 'react';

export default function Sculpture() {
  const sceneRef = useRef(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return undefined;

    let frame;
    let time = 0;
    let pointerX = 0;
    let pointerY = 0;

    const move = (event) => {
      const bounds = scene.getBoundingClientRect();
      pointerX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 18;
      pointerY = ((event.clientY - bounds.top) / bounds.height - 0.5) * -14;
    };

    const animate = () => {
      time += 0.01;
      scene.style.setProperty('--scene-rotate', `${time * 18 + pointerX}deg`);
      scene.style.setProperty('--scene-tilt', `${Math.sin(time * 0.7) * 5 + pointerY}deg`);
      scene.style.setProperty('--orbit-rotate', `${time * -28}deg`);
      frame = requestAnimationFrame(animate);
    };

    scene.addEventListener('pointermove', move);
    frame = requestAnimationFrame(animate);
    return () => {
      scene.removeEventListener('pointermove', move);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <div className="relative isolate grid h-[365px] place-items-center [--orbit-rotate:0deg] min-[521px]:h-[455px]" ref={sceneRef} aria-label="Interactive abstract 3D sculpture">
    <div className="pointer-events-none absolute h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle,#9ed2ff88,transparent_68%)] blur-[18px]" />
    <div className="absolute h-[125px] w-[250px] rounded-[50%] border-2 border-[#222] opacity-75 [transform:rotateX(67deg)_rotateZ(var(--orbit-rotate))] min-[521px]:w-[310px]" />
    <div className="absolute h-[150px] w-[280px] rounded-[50%] border-2 border-[#74a8dc] opacity-80 [transform:rotateY(67deg)_rotateZ(calc(var(--orbit-rotate)*-1))] min-[521px]:w-[360px]" />
    <div className="relative z-[1] h-[115px] w-[115px] bg-gradient-to-br from-[#141414] via-[#38414e] to-[#050505] shadow-[20px_22px_30px_rgba(26,28,27,.33)] [clip-path:polygon(50%_0,93%_25%,100%_72%,63%_100%,15%_78%,0_31%)] [transform:perspective(550px)_rotateX(var(--scene-tilt,0deg))_rotateY(var(--scene-rotate,0deg))] min-[521px]:h-[150px] min-[521px]:w-[150px]"><span className="absolute inset-[16%] bg-gradient-to-br from-[#151719] via-[#7595b9] to-[#0e0e0e] opacity-60 [clip-path:inherit]" /></div>
    {Array.from({ length: 8 }, (_, index) => <i className="absolute h-[13px] w-[13px] rounded-full bg-[#17202c] shadow-[0_0_14px_#6ba8de] animate-[orbit_7s_linear_infinite] even:bg-[#91c46f] even:shadow-[0_0_14px_#91c46f] min-[521px]:[transform-origin:180px_0] [transform-origin:140px_0]" key={index} style={{ animationDelay: `${-index - 1}s` }} />)}
    <div className="pointer-events-none absolute inset-5 opacity-40 [background-image:radial-gradient(#52687b_1px,transparent_1px)] [background-size:25px_25px] [mask-image:radial-gradient(circle,black,transparent_72%)]" />
  </div>;
}

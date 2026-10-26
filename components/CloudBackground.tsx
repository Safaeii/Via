"use client";

import { useEffect, useRef } from "react";

export default function CloudBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let effect: { destroy: () => void } | undefined;
    let mounted = true;

    async function initVanta() {
      const THREE = await import("three");
      const CLOUDS = (await import("vanta/dist/vanta.clouds.min")).default;

      if (!mounted || !vantaRef.current) return;

      effect = CLOUDS({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        backgroundColor: 0x354387,
        skyColor: 0x6895d7,
        speed: 0.3,
      });
    }

    initVanta();

    return () => {
      mounted = false;
      effect?.destroy();
    };
  }, []);

  return <div ref={vantaRef} className="absolute inset-0 z-0" />;
}
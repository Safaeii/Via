"use client";

import { useEffect, useRef } from "react";

export default function FogBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let effect: { destroy: () => void } | undefined;
    let mounted = true;

    async function initFog() {
      try {
        const THREE = await import("three");
        const FOG = (await import("vanta/dist/vanta.fog.min")).default;

        if (!mounted || !backgroundRef.current) return;

        effect = FOG({
          el: backgroundRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          highlightColor: 0x93c5a0,
          midtoneColor: 0x4b8b82,
          lowlightColor: 0x234b52,
          baseColor: 0xdceee5,
          blurFactor: 0.6,
          speed: 0.8,
          zoom: 1,
        });
      } catch (error) {
        console.error("Vanta Fog error:", error);
      }
    }

    initFog();

    return () => {
      mounted = false;
      effect?.destroy();
    };
  }, []);

  return (
    <div
      ref={backgroundRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
    />
  );
}
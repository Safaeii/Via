"use client";

import { useEffect, useRef } from "react";

export default function CloudBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let effect: { destroy: () => void } | undefined;
    let mounted = true;

    async function initVanta() {
      try {
        const THREE = await import("three");
        const CLOUDS = (
          await import("vanta/dist/vanta.clouds.min")
        ).default;

        if (!mounted || !vantaRef.current) return;

        effect = CLOUDS({
          el: vantaRef.current,
          THREE,

          mouseControls: true,
          touchControls: true,
          gyroControls: false,

          minHeight: 200,
          minWidth: 200,

          // رنگ‌های هماهنگ با Via
          backgroundColor: 0x0e7490, // فیروزه‌ای تیره
          skyColor: 0x87ceeb, // آبی آسمانی

          // سرعت حرکت ابرها
          speed: 0.3,
        });
      } catch (error) {
        console.error("Cloud background error:", error);
      }
    }

    initVanta();

    return () => {
      mounted = false;
      effect?.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
    />
  );
}
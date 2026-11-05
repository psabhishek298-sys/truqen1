import { useEffect, useRef, type RefObject } from 'react';

interface HeroDotGridProps {
  containerRef: RefObject<HTMLElement | null>;
}

export function HeroDotGrid({ containerRef }: HeroDotGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !container || !context) return;

    const spacing = 30;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pointer = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      active: false,
      lastMove: 0,
      lastFrame: 0,
    };
    let width = 0;
    let height = 0;
    let ratio = 1;
    let frame = 0;

    const draw = (now: number) => {
      frame = 0;
      const delta = Math.min(40, now - (pointer.lastFrame || now));
      pointer.lastFrame = now;
      const follow = 1 - Math.exp(-delta / 55);
      pointer.x += (pointer.targetX - pointer.x) * follow;
      pointer.y += (pointer.targetY - pointer.y) * follow;
      context.clearRect(0, 0, width, height);
      const cols = Math.ceil(width / spacing);
      const rows = Math.ceil(height / spacing);
      const age = now - pointer.lastMove;
      const waveActive = pointer.active && age < 1050;
      const waveFront = age * 0.32;

      for (let row = 0; row <= rows; row += 1) {
        for (let col = 0; col <= cols; col += 1) {
          const x = col * spacing + spacing / 2;
          const y = row * spacing + spacing / 2;
          const dx = x - pointer.x;
          const dy = y - pointer.y;
          const distance = Math.hypot(dx, dy);
          const waveDistance = distance - waveFront;
          const influence = waveActive
            ? Math.exp(-(waveDistance * waveDistance) / (2 * 38 * 38)) * Math.exp(-age / 900)
            : 0;
          const displacement = influence * 7;
          const offsetX = distance > 0 ? (dx / distance) * displacement : 0;
          const offsetY = distance > 0 ? (dy / distance) * displacement : 0;
          const alpha = 0.2 + influence * 0.42;

          context.beginPath();
          context.fillStyle = `rgba(212, 21, 20, ${alpha})`;
          context.arc(x + offsetX, y + offsetY, 1.7 + influence * 0.45, 0, Math.PI * 2);
          context.fill();
        }
      }

      if (waveActive || Math.abs(pointer.targetX - pointer.x) + Math.abs(pointer.targetY - pointer.y) > 0.25) {
        frame = requestAnimationFrame(draw);
      }
    };

    const scheduleDraw = () => {
      if (!frame) frame = requestAnimationFrame(draw);
    };

    const resize = () => {
      const bounds = container.getBoundingClientRect();
      ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      scheduleDraw();
    };

    const onPointerMove = (event: PointerEvent) => {
      if (reduceMotion) return;
      const bounds = container.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      const inside = x >= 0 && y >= 0 && x <= bounds.width && y <= bounds.height;
      if (!inside) {
        if (pointer.active) {
          pointer.active = false;
          pointer.lastMove = performance.now();
          scheduleDraw();
        }
        return;
      }

      pointer.targetX = x;
      pointer.targetY = y;
      pointer.active = true;
      pointer.lastMove = performance.now();
      scheduleDraw();
    };

    const observer = new ResizeObserver(resize);
    observer.observe(container);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    resize();

    return () => {
      observer.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [containerRef]);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 h-full w-full" />;
}

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;

    const initParticles = () => {
      particles = [];
      const isMobile = width < 768;
      const numParticles = isMobile ? 30 : 60;

      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 2, // 2-4px
          opacity: Math.random() * 0.2 + 0.3, // 0.3-0.5
        });
      }
    };

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === canvas.parentElement) {
          width = entry.contentRect.width;
          height = entry.contentRect.height;
          canvas.width = width;
          canvas.height = height;
          initParticles();
        }
      }
    });

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw particles
      particles.forEach((p, i) => {
        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          // Bounce off walls
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(74, 124, 111, ${p.opacity})`;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            // Opacity fades with distance
            const lineOpacity = (1 - distance / 150) * 0.15;
            ctx.strokeStyle = `rgba(74, 124, 111, ${lineOpacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(draw);
      }
    };

    if (prefersReducedMotion) {
      // Just draw once
      draw();
    } else {
      draw();
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      resizeObserver.disconnect();
    };
  }, [prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10 h-full w-full bg-[#0B1215]"
      aria-hidden="true"
    />
  );
}

"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const POP_THRESHOLD = 7;
const PARTICLE_COUNT = 16;
const RESET_DELAY_MS = 1600;

const HeartPath = "M12 21s-7.5-4.6-10-9.3C0.4 8.4 2.4 4 6.3 4c2 0 3.6 1.1 4.7 2.7C12.1 5.1 13.7 4 15.7 4c3.9 0 5.9 4.4 4.3 7.7C19.5 16.4 12 21 12 21z";

const HeartSvg = ({ size = "1em" }: { size?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="block">
    <path d={HeartPath} />
  </svg>
);

const SparkleSvg = ({ size = "1em" }: { size?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="block">
    <path d="M12 2l1.6 6.4L20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6L12 2z" />
  </svg>
);

interface Particle {
  id: number;
  angle: number;
  distance: number;
  delay: number;
  size: number;
  rotation: number;
  type: "heart" | "sparkle";
}

const buildParticles = (): Particle[] =>
  Array.from({ length: PARTICLE_COUNT }, (_, i) => {
    const angle = (Math.PI * 2 * i) / PARTICLE_COUNT + (Math.random() - 0.5) * 0.5;
    return {
      id: Date.now() + i,
      angle,
      distance: 70 + Math.random() * 50,
      delay: Math.random() * 80,
      size: 7 + Math.random() * 7,
      rotation: (Math.random() - 0.5) * 180,
      type: i % 3 === 0 ? "sparkle" : "heart",
    };
  });

export default function ClickableHeart() {
  const [clicks, setClicks] = useState(0);
  const [popping, setPopping] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [pulseKey, setPulseKey] = useState(0);
  const [popKey, setPopKey] = useState(0);
  const heartRef = useRef<HTMLSpanElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const particleRefs = useRef<Map<number, HTMLSpanElement | null>>(new Map());
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeAnimations = useRef<Animation[]>([]);
  const [magnet, setMagnet] = useState({ x: 0, y: 0 });

  const prefersReducedMotion = useCallback(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, []);

  // Magnetic cursor pull: nudge the heart toward the cursor when it's nearby.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const RADIUS = 80;
    const STRENGTH = 6;

    const handleMove = (e: MouseEvent) => {
      const btn = buttonRef.current;
      if (!btn) return;
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist > RADIUS) {
        setMagnet({ x: 0, y: 0 });
        return;
      }
      const t = 1 - dist / RADIUS;
      setMagnet({ x: dx * t * (STRENGTH / RADIUS), y: dy * t * (STRENGTH / RADIUS) });
    };

    const handleLeave = () => setMagnet({ x: 0, y: 0 });

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseout", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseout", handleLeave);
    };
  }, []);

  // Trigger pop animation on the heart and particles when popping flips on.
  useEffect(() => {
    if (!popping) return;
    if (prefersReducedMotion()) return;

    const animations: Animation[] = [];
    const heartEl = heartRef.current;
    if (heartEl) {
      const a = heartEl.animate(
        [
          { transform: "scale(1)", opacity: 1, offset: 0 },
          { transform: "scale(1.6)", opacity: 1, offset: 0.18 },
          { transform: "scale(0.2)", opacity: 0, offset: 1 },
        ],
        { duration: 480, easing: "cubic-bezier(0.34, 1.56, 0.64, 1)", fill: "forwards" }
      );
      animations.push(a);
    }

    particles.forEach((p) => {
      const el = particleRefs.current.get(p.id);
      if (!el) return;
      const dx = Math.cos(p.angle) * p.distance;
      const dy = Math.sin(p.angle) * p.distance;
      const a = el.animate(
        [
          { transform: "translate(-50%, -50%) scale(0.3)", opacity: 0, offset: 0 },
          {
            transform: `translate(-50%, -50%) translate(${dx * 0.4}px, ${dy * 0.4 - 8}px) rotate(${p.rotation * 0.5}deg) scale(1)`,
            opacity: 1,
            offset: 0.25,
          },
          {
            transform: `translate(-50%, -50%) translate(${dx}px, ${dy}px) rotate(${p.rotation}deg) scale(0.6)`,
            opacity: 0,
            offset: 1,
          },
        ],
        {
          duration: 1100,
          delay: p.delay,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          fill: "forwards",
        }
      );
      animations.push(a);
    });

    activeAnimations.current = animations;
  }, [popping, particles, popKey, prefersReducedMotion]);

  const handleClick = () => {
    if (popping) return;
    const next = clicks + 1;
    setPulseKey((k) => k + 1);

    if (next >= POP_THRESHOLD) {
      setParticles(buildParticles());
      setPopKey((k) => k + 1);
      setPopping(true);
      if (resetTimer.current) clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => {
        // Cancel any forwards-filled animations so the heart can re-grow.
        activeAnimations.current.forEach((a) => {
          try {
            a.cancel();
          } catch {}
        });
        activeAnimations.current = [];
        // Re-grow the heart from 0 to 1.
        const heartEl = heartRef.current;
        if (heartEl && !prefersReducedMotion()) {
          heartEl.animate(
            [
              { transform: "scale(0)", opacity: 0 },
              { transform: "scale(1.1)", opacity: 1, offset: 0.7 },
              { transform: "scale(1)", opacity: 1 },
            ],
            { duration: 420, easing: "cubic-bezier(0.34, 1.56, 0.64, 1)" }
          );
        }
        setClicks(0);
        setPopping(false);
        setParticles([]);
        particleRefs.current.clear();
      }, RESET_DELAY_MS);
    } else {
      setClicks(next);
    }
  };

  const scale = 1 + clicks * 0.13;
  const glowAmount = clicks > 0 ? `drop-shadow(0 0 ${4 + clicks * 2.5}px rgba(157,250,5,${0.35 + clicks * 0.07}))` : "none";

  return (
    <span className="relative inline-flex items-center justify-center" style={{ width: "1.4em", height: "1.4em" }}>
      <button
        ref={buttonRef}
        type="button"
        onClick={handleClick}
        aria-label={popping ? "Heart popped" : `Heart, clicked ${clicks} of ${POP_THRESHOLD}`}
        className="absolute inset-0 inline-flex items-center justify-center text-yellowgreen focus-visible:outline-none focus-visible:text-yellowgreenselection cursor-pointer rounded-full"
      >
        <span
          ref={heartRef}
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center motion-safe:transition-transform motion-safe:duration-300 will-change-transform"
          style={{
            transform: popping ? undefined : `translate(${magnet.x}px, ${magnet.y}px) scale(${scale})`,
            transitionTimingFunction: "cubic-bezier(0.34, 1.8, 0.64, 1)",
            filter: glowAmount,
            fontSize: "0.95em",
          }}
        >
          <HeartSvg size="1em" />
        </span>

        <span
          key={pulseKey}
          aria-hidden="true"
          className="absolute inset-0 rounded-full motion-safe:animate-heart-pulse pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(157,250,5,0.45) 0%, transparent 60%)" }}
        />

        {clicks > 0 && !popping && (
          <span
            key={`count-${pulseKey}`}
            aria-hidden="true"
            className="absolute -top-3 left-1/2 text-[0.55em] font-semibold text-yellowgreen motion-safe:animate-count-rise pointer-events-none whitespace-nowrap"
            style={{ transform: "translateX(-50%)" }}
          >
            +{clicks}
          </span>
        )}

        {popping &&
          particles.map((p) => (
            <span
              key={p.id}
              ref={(el) => {
                if (el) particleRefs.current.set(p.id, el);
              }}
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 text-yellowgreen pointer-events-none"
              style={{ fontSize: `${p.size}px`, transform: "translate(-50%, -50%) scale(0.3)", opacity: 0 }}
            >
              {p.type === "heart" ? <HeartSvg size="1em" /> : <SparkleSvg size="1em" />}
            </span>
          ))}

      </button>
    </span>
  );
}

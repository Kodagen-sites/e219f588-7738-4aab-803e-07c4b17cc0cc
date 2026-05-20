"use client";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  AnimatePresence,
  type Variants,
} from "framer-motion";
import {
  ReactNode,
  useRef,
  useState,
  useEffect,
  type ElementType,
} from "react";

/* ---------- FadeUp ---------- */
export function FadeUp({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: reduced ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------- StaggerChildren ---------- */
export function StaggerChildren({
  children,
  staggerDelay = 0.08,
  className,
}: {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}

/* ---------- TextReveal (word-split rise — E2 entrance) ---------- */
export function TextReveal({
  as: Tag = "h1",
  children,
  className,
  delay = 0,
}: {
  as?: ElementType;
  children: string;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  const words = children.split(" ");
  const MotionTag = motion(Tag);

  if (reduced) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ staggerChildren: 0.05, delayChildren: delay }}
    >
      {words.map((w, i) => (
        <span
          key={i}
          style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}
        >
          <motion.span
            style={{ display: "inline-block", whiteSpace: "pre" }}
            variants={{
              hidden: { y: "100%", opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}

/* ---------- MagneticButton ---------- */
import NextLink from "next/link";

type MagneticProps = {
  strength?: number;
  children: ReactNode;
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent) => void;
};

export function MagneticButton({
  strength = 18,
  children,
  className,
  href,
  type = "button",
  onClick,
}: MagneticProps) {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const reduced = useReducedMotion();

  function onMove(e: React.MouseEvent) {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setOffset({
      x: ((e.clientX - cx) / rect.width) * strength,
      y: ((e.clientY - cy) / rect.height) * strength,
    });
  }
  function onLeave() {
    setOffset({ x: 0, y: 0 });
  }

  return (
    <motion.span
      style={{ display: "inline-block" }}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 240, damping: 22 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {href ? (
        <NextLink href={href} ref={ref as any} className={className} onClick={onClick}>
          {children}
        </NextLink>
      ) : (
        <button
          type={type}
          ref={ref as any}
          className={className}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </motion.span>
  );
}

/* ---------- CardTiltLayer ---------- */
export function CardTiltLayer({
  children,
  className,
  max = 8,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const reduced = useReducedMotion();

  function onMove(e: React.MouseEvent) {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: -y * max, ry: x * max });
  }
  function onLeave() {
    setTilt({ rx: 0, ry: 0 });
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------- NumberCounter ---------- */
export function NumberCounter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      setN(to);
      return;
    }
    const el = ref.current;
    if (!el) return;
    let started = false;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          started = true;
          const duration = 1500;
          const t0 = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - t0) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(to * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, reduced]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

/* ---------- ScrollProgress ---------- */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0%" }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-accent z-[100] origin-left"
    />
  );
}

/* ---------- FilmGrain ---------- */
export function FilmGrain() {
  return <div className="film-grain pointer-events-none" />;
}

/* ---------- Vignette ---------- */
export function Vignette({ color = "#0a0a09" }: { color?: string }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1]"
      style={{
        background: `radial-gradient(ellipse at center, transparent 50%, ${color}cc 100%)`,
      }}
    />
  );
}

/* ---------- ScrollHint ---------- */
export function ScrollHint() {
  return (
    <motion.div
      aria-hidden
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] uppercase text-ink/50 font-mono z-10 pointer-events-none"
      animate={{ y: [0, 6, 0] }}
      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
    >
      Scroll
    </motion.div>
  );
}

/* ---------- Marquee ---------- */
export function Marquee({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const doubled = [...items, ...items];
  return (
    <div className={`overflow-hidden whitespace-nowrap py-6 border-y border-line ${className ?? ""}`}>
      <div className="inline-flex animate-marquee">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="mx-10 font-display text-3xl md:text-5xl italic text-ink/90"
          >
            {item} <span className="text-accent mx-4">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- ImageRevealMask ---------- */
export function ImageRevealMask({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      {children}
      <motion.div
        className="absolute inset-0 bg-bg"
        initial={{ x: "0%" }}
        whileInView={{ x: "100%" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: reduced ? 0 : 1.1, delay, ease: [0.7, 0, 0.3, 1] }}
      />
    </div>
  );
}

export { AnimatePresence };

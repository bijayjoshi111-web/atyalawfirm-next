"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 6, suffix: "+", label: "Years of Excellence" },
  { value: 150, suffix: "+", label: "Cases Won" },
  { value: 5, suffix: "+", label: "Expert Attorneys" },
  { value: 95, suffix: "%", label: "Client Satisfaction" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1800;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="bg-[#f2e7dc] scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-[#472e18]/15">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="py-12 md:py-16 px-4 md:px-8 border-[#472e18]/15 border-r even:border-r-0 md:even:border-r md:last:border-r-0 [&:nth-child(-n+2)]:border-b md:[&:nth-child(-n+2)]:border-b-0"
            >
              <div className="font-display text-5xl md:text-7xl text-[#472e18] leading-none mb-3">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="eyebrow text-[#a68365] !text-[0.6875rem]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

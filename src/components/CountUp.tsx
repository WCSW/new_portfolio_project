import { useState, useEffect, useRef } from "react";

interface CountUpProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const CountUp = ({ end, suffix = "+", duration = 2000 }: CountUpProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [started, end, duration]);

  return (
    <div ref={ref} className="text-4xl font-heading font-bold text-foreground">
      {count}
      <span className="text-primary">{suffix}</span>
    </div>
  );
};

export default CountUp;

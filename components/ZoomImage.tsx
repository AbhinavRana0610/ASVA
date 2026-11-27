"use client";

import Image from "next/image";
import { useRef, type PointerEvent } from "react";

// Amazon-style hover zoom: the image magnifies inside its frame and pans to
// follow the mouse. Touch and pen input are ignored so taps still navigate.
export default function ZoomImage({
  src,
  alt,
  sizes,
  className = "",
  zoom = 2.4,
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  zoom?: number;
}) {
  const img = useRef<HTMLImageElement>(null);

  const move = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !img.current) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    img.current.style.transformOrigin = `${x}% ${y}%`;
    img.current.style.transform = `scale(${zoom})`;
  };

  const reset = () => {
    if (img.current) img.current.style.transform = "scale(1)";
  };

  return (
    <div className="absolute inset-0 cursor-zoom-in overflow-hidden" onPointerEnter={move} onPointerMove={move} onPointerLeave={reset}>
      <Image ref={img} src={src} alt={alt} fill sizes={sizes} className={`transition-transform duration-300 ease-out ${className}`} />
    </div>
  );
}

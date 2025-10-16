"use client";

import { Works } from "@/data/works";
import { motion, MotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface CardProps {
  i: number;
  item: Works;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}

const Card = ({ i, item, progress, range, targetScale }: CardProps) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        ref={container}
        className="flex flex-col relative w-[min(90vw,1000px)] h-auto min-h-[420px] md:h-[460px] rounded-2xl p-6 origin-top bg-[color:var(--muted)] border border-[color:var(--border)] text-[color:var(--foreground)]"
        style={{ scale }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
          {/* Project Visual */}
          <div className="relative overflow-hidden rounded-2xl">
            {item.image ? (
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 1024px) 90vw, 50vw"
                className="object-cover"
              />
            ) : (
              <div className={`w-full h-full bg-gradient-to-br ${item.gradient} flex items-center justify-center relative`}>
                <div className="text-8xl mb-4">{item.emoji}</div>
                <div className="absolute inset-0 bg-black/10 dark:bg-black/20 backdrop-blur-sm"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-[color:var(--muted)]/60 border border-[color:var(--border)] backdrop-blur-sm rounded-lg p-3">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-transparent border border-[color:var(--border)] rounded-full text-xs text-[color:var(--foreground)]/80 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Project Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold mb-3">{item.name}</h2>
              
              <div className="flex flex-wrap gap-2 mb-3">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-transparent rounded-full text-xs text-[color:var(--foreground)]/80 border border-[color:var(--border)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-2 text-gray-300">
                {item.description.map((desc, index) => (
                  <p key={index} className="text-sm leading-relaxed">
                    {desc}
                  </p>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-4">
              {item.buttons?.map((button, index) => (
                <motion.a
                  key={index}
                  href={button.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    index === 0
                      ? "bg-[color:var(--warna-putih)] text-black hover:opacity-90"
                      : "bg-[color:var(--muted)] text-[color:var(--foreground)] hover:bg-[color:var(--muted)]/80 border border-[color:var(--border)]"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {button.name}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Project Number */}
        <div className="absolute top-4 right-4 w-12 h-12 bg-[color:var(--foreground)]/10 backdrop-blur-sm rounded-full flex items-center justify-center text-[color:var(--foreground)] font-bold">
          {String(i + 1).padStart(2, '0')}
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
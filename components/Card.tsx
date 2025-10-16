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
        className="flex flex-col relative h-[450px] w-[900px] max-w-[90vw] rounded-2xl p-6 origin-top bg-gray-900 border border-gray-800"
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
                className="object-cover"
              />
            ) : (
              <div className={`w-full h-full bg-gradient-to-br ${item.gradient} flex items-center justify-center relative`}>
                <div className="text-8xl mb-4">{item.emoji}</div>
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-white/20 rounded-full text-xs text-white font-medium"
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
          <div className="flex flex-col justify-between text-white">
            <div>
              <h2 className="text-xl font-bold mb-3">{item.name}</h2>
              
              <div className="flex flex-wrap gap-2 mb-3">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-800 rounded-full text-xs text-gray-300 border border-gray-700"
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
                      ? "bg-white text-gray-900 hover:bg-gray-100"
                      : "bg-gray-800 text-white hover:bg-gray-700 border border-gray-700"
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
        <div className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold">
          {String(i + 1).padStart(2, '0')}
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
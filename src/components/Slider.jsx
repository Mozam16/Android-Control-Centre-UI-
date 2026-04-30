import React from "react";
import { motion } from "framer-motion";

export default function Slider({ value, setValue, icon: Icon }) {
  const dragHeight = 180;

  return (
    <div className="relative h-32 w-14 bg-black/40 rounded-3xl overflow-hidden">
      <motion.div
        className="absolute bottom-0 left-0 w-full bg-white rounded-2xl"
        style={{ height: `${value}%` }}
      />

      <motion.div
        drag="y"
        dragConstraints={{ top: -dragHeight, bottom: 0 }}
        onDrag={(e, info) => {
          const delta = (-info.delta.y / dragHeight) * 100;
          setValue((prev) => Math.max(0, Math.min(100, prev + delta)));
        }}
        className="absolute inset-0 cursor-grab"
      />

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-gray-500 pointer-events-none">
        <Icon size={16} />
      </div>
    </div>
  );
}
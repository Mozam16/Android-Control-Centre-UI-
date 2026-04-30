import React, { useRef } from "react";
import { motion } from "framer-motion";

export default function CircleToggle({ icon: Icon, active, onTap, onHold }) {
  const holdRef = useRef(null);

  const handleDown = () => {
    holdRef.current = setTimeout(() => {
      onHold && onHold();
    }, 250);
  };

  const handleUp = () => {
    clearTimeout(holdRef.current);
  };

  return (
    <motion.button
      whileTap={{ scale: 0.92 }}
      onClick={onTap}
      onMouseDown={handleDown}
      onMouseUp={handleUp}
      onMouseLeave={handleUp}
      onTouchStart={handleDown}
      onTouchEnd={handleUp}
      className={`w-14 h-14 rounded-full flex items-center justify-center transition ${
        active ? "bg-blue-500 text-white" : "bg-black/40 text-white"
      }`}
    >
      <Icon size={22} />
    </motion.button>
  );
}
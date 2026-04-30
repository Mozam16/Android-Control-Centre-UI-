import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function PopupPanel({ title, children, onClose }) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 30 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="w-90 rounded-3xl bg-zinc-900/75 backdrop-blur-3xl border border-white/10 p-5 text-white shadow-2xl"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <button onClick={onClose}>
            <X size={22} />
          </button>
        </div>

        <div className="mt-8 space-y-5">{children}</div>
      </motion.div>
    </div>
  );
}
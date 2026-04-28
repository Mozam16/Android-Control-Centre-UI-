import React, { useState } from "react";
import {
  Wifi,
  Bluetooth,
  Airplay,
  Plane,
  Radio,
  Flashlight,
  Bell,
  MapPin,
  Lock,
  SquareScissors,
  Contrast,
  Calculator,
  Video,
  Moon,
  Music2,
  BatteryMedium,
  ScanLine,
  Sun,
  Headphones,
  Volume2,
} from "lucide-react";
import { motion } from "framer-motion";

import ControlCenter from "./ControlCenter";

/* ---------------- TOGGLE BUTTON ---------------- */
const CircleToggle = ({ icon: Icon, active, onClick }) => (
  <motion.button
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
    className={`w-14 h-14 rounded-full flex items-center justify-center transition ${
      active ? "bg-blue-500 text-white" : "bg-black/40 text-white"
    }`}
  >
    <Icon size={22} />
  </motion.button>
);

/* ---------------- SLIDER ---------------- */
const Slider = ({ value, setValue, icon: Icon }) => {
  const height = 180; // drag area height in px
  return (
    <div className="relative h-32 w-15 bg-black/40 rounded-3xl flex items-end p-1 overflow-hidden">
     
      {/* Filled level */}
      <motion.div
        className="absolute bottom-0 left-0 w-full bg-white rounded-2xl"
        style={{ height: `${value}%` }}
      />
      {/* Drag handle */}
      <motion.div
        drag="y"
        dragConstraints={{ top: -height, bottom: 0 }}
        onDrag={(e, info) => {
          // convert pixel movement → percentage
          const deltaPercent = (-info.delta.y / height) * 100;
          setValue((prev) =>
            Math.max(0, Math.min(100, prev + deltaPercent))
          );
        }}
        className="absolute bottom-0 left-0 w-full h-full cursor-grab active:cursor-grabbing"
      />
      {/* Icon */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-gray-500 pointer-events-none">
        <Icon size={16} />
      </div>
    </div>
  );
};
/* ---------------- MAIN APP ---------------- */
export default function App() {
  const [active, setActive] = useState({});
  const [brightness, setBrightness] = useState(70);
  const [volume, setVolume] = useState(40);

  const toggle = (k) =>
    setActive((prev) => ({ ...prev, [k]: !prev[k] }));

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')] bg-cover bg-center">
      
      {/* BLUR LAYER */}
      <div className="min-h-screen backdrop-blur-2xl bg-black/40 flex items-center justify-center">
        
        <div className="w-90 p-4 rounded-3xl text-white">

          {/* TOP SECTION */}
          <div className="grid grid-cols-2 gap-4">
            
            {/* WIFI / BT / DATA CONTAINER */}
            <div className="bg-black/50 rounded-3xl p-3 grid grid-cols-2 gap-3">
              <CircleToggle icon={Wifi} active={active.wifi} onClick={() => toggle("wifi")} />
              <CircleToggle icon={Bluetooth} active={active.bt} onClick={() => toggle("bt")} />

              <div className="col-span-2 bg-white/10 rounded-2xl p-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  ⇅
                </div>
                <p className="text-sm">Airtel NG</p>
              </div>
            </div>

            {/* MUSIC */}
            <div className="bg-black/50 rounded-3xl p-3 flex flex-col justify-between">
              <div>
                <p className="text-sm font-semibold">Praise Fest 2.0</p>
                <p className="text-xs text-gray-400">Blessing Lopez</p>
              </div>
              <div className="flex justify-between mt-3">
                <span>⏮</span>
                <span>▶</span>
                <span>⏭</span>
              </div>
            </div>
          </div>

          {/* MIDDLE SECTION */}
          <div className="flex gap-4 mt-4 items-start">

            {/* LEFT SIDE */}
            <div className="flex flex-col gap-3 w-40">

              {/* DATA USAGE */}
              <div className="bg-black/50 rounded-3xl p-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-full" />
                <div>
                  <p className="text-sm">247/1500 MB</p>
                  <p className="text-xs text-gray-400">Used today</p>
                </div>
              </div>

              {/* AIRPLANE + HOTSPOT */}
              <div className="flex gap-3">
                <CircleToggle icon={Plane} active={active.plane} onClick={() => toggle("plane")} />
                <CircleToggle icon={Radio} active={active.hotspot} onClick={() => toggle("hotspot")} />
              </div>

            </div>

            {/* SLIDERS */}
            <div className="flex gap-6">
              <Slider value={brightness} setValue={setBrightness} icon={Sun} />
              <Slider value={volume} setValue={setVolume} icon={Volume2} />
            </div>
          </div>

          {/* ICON GRID */}
          <div className="grid grid-cols-4 gap-4 mt-4">
            <CircleToggle icon={Flashlight} active={active.flash} onClick={() => toggle("flash")} />
            <CircleToggle icon={Bell} active={active.bell} onClick={() => toggle("bell")} />
            <CircleToggle icon={MapPin} active={active.loc} onClick={() => toggle("loc")} />
            <CircleToggle icon={Lock} active={active.lock} onClick={() => toggle("lock")} />

            <CircleToggle icon={SquareScissors} active={active.cut} onClick={() => toggle("cut")} />
            <CircleToggle icon={Contrast} active={active.contrast} onClick={() => toggle("contrast")} />
            <CircleToggle icon={Calculator} active={active.calculator} onClick={() => toggle("calculator")} />
            <CircleToggle icon={Video} active={active.video} onClick={() => toggle("video")} />
            <CircleToggle icon={Moon} active={active.moon} onClick={() => toggle("moon")} />
            <CircleToggle icon={Music2} active={active.music} onClick={() => toggle("music")} />
            <CircleToggle icon={BatteryMedium} active={active.battery} onClick={() => toggle("battery")} />

            <CircleToggle icon={ScanLine} active={active.scan} onClick={() => toggle("scan")} />
          </div>

          {/* BOTTOM HANDLE */}
          <div className="flex justify-center mt-4">
            <div className="w-12 h-1 bg-white/40 rounded-full" />
          </div>

        </div>
      </div>
    </div>
  );
}
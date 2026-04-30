import React, { useState, useRef } from "react";
import {
  Wifi,
  WifiHigh,
  Bluetooth,
  Plane,
  Radio,
  Flashlight,
  Bell,
  MapPin,
  Lock,
  Scissors,
  Contrast,
  Calculator,
  Video,
  Moon,
  Music2,
  BatteryMedium,
  ScanLine,
  Sun,
  Volume2,
  Laptop,
  Headphones,
  Baby,
  Focus,
  Captions,
  Plus,
  ChevronDown,
  ChevronUp,
  SkipBack,
  SkipForward,
  Play,
  Pause,
  X,
  Droplets,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ---------------- TOGGLE ---------------- */
function CircleToggle({
  icon: Icon,
  active,
  onTap,
  onHold,
}) {
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
        active
          ? "bg-blue-500 text-white"
          : "bg-black/40 text-white"
      }`}
    >
      <Icon size={22} />
    </motion.button>
  );
}

/* ---------------- SLIDER ---------------- */
function Slider({ value, setValue, icon: Icon }) {
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
          const delta =
            (-info.delta.y / dragHeight) * 100;

          setValue((prev) =>
            Math.max(0, Math.min(100, prev + delta))
          );
        }}
        className="absolute inset-0 cursor-grab"
      />

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-gray-500">
        <Icon size={16} />
      </div>
    </div>
  );
}

/* ---------------- PANEL ---------------- */
function PopupPanel({
  title,
  children,
  onClose,
}) {
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
          <h2 className="text-2xl font-semibold">
            {title}
          </h2>

          <button onClick={onClose}>
            <X size={22} />
          </button>
        </div>

        <div className="mt-8 space-y-5">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

/* ---------------- APP ---------------- */
export default function App() {
  const [showUI, setShowUI] = useState(false);
  const [active, setActive] = useState({});
  const [panel, setPanel] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [brightness, setBrightness] = useState(70);
  const [volume, setVolume] = useState(40);
  const [playing, setPlaying] = useState(false);

  const toggle = (key) =>
    setActive((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));

  const wifiNetworks = [
    "Newnet",
    "MTN Fibre",
    "Airtel Home",
    "Office WiFi",
  ];

  const bluetoothDevices = [
    {
      name: "DESKTOP-U07UIU3",
      icon: Laptop,
    },
    {
      name: "P47",
      icon: Headphones,
    },
    {
      name: "SPARKLE",
      icon: Headphones,
    },
    {
      name: "BAS-06",
      icon: Headphones,
    },
  ];

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')] bg-cover bg-center overflow-hidden">
      <div
        className="min-h-screen bg-black/40 backdrop-blur-2xl flex items-center justify-center p-4"
        onClick={() => {
          if (!panel) setShowUI(false);
        }}
      >
        {!showUI && (
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation();
              setShowUI(true);
            }}
            className="px-7 py-4 rounded-full bg-white text-black font-semibold shadow-xl"
          >
            Open Control Center
          </motion.button>
        )}

        {showUI && panel === null && (
          <motion.div
            onClick={(e) => e.stopPropagation()}
            animate={{
              y: expanded ? 35 : 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="w-90 rounded-3xl text-white"
          >
            {/* TOP */}
            <div className="grid grid-cols-2 gap-4">
              {/* WIFI / BT */}
              <div className="bg-black/50 rounded-3xl p-3 grid grid-cols-2 gap-3">
                <CircleToggle
                  icon={Wifi}
                  active={active.wifi}
                  onTap={() => toggle("wifi")}
                  onHold={() => setPanel("wifi")}
                />

                <CircleToggle
                  icon={Bluetooth}
                  active={active.bt}
                  onTap={() => toggle("bt")}
                  onHold={() =>
                    setPanel("bluetooth")
                  }
                />

                <div className="col-span-2 bg-white/10 rounded-2xl p-3 flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    ⇅
                  </div>

                  <p className="text-sm">
                    Airtel NG
                  </p>
                </div>
              </div>

              {/* MUSIC */}
              <div className="bg-black/50 rounded-3xl p-3 flex flex-col justify-between">
                <div className="flex gap-3 items-center">
                  <img
                    src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300"
                    className="w-14 h-14 rounded-2xl object-cover"
                  />

                  <div>
                    <p className="text-sm font-semibold">
                      Praise Fest 2.0
                    </p>

                    <p className="text-xs text-gray-400">
                      Blessing Lopez
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-3">
                  <button className="p-2 rounded-full bg-white/10">
                    <SkipBack size={18} />
                  </button>

                  <button
                    onClick={() =>
                      setPlaying(!playing)
                    }
                    className="p-3 rounded-full bg-white text-black"
                  >
                    {playing ? (
                      <Pause size={18} />
                    ) : (
                      <Play
                        size={18}
                        fill="black"
                      />
                    )}
                  </button>

                  <button className="p-2 rounded-full bg-white/10">
                    <SkipForward size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* MID */}
            <div className="flex gap-3 mt-4">
              <div className="flex flex-col gap-3 w-40">
                <div className="bg-black/50 rounded-3xl p-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                    <Droplets
                      size={16}
                      className="text-white"
                    />
                  </div>

                  <div>
                    <p className="text-sm">
                      247 / 1500 MB
                    </p>
                    <p className="text-xs text-gray-400">
                      Used today
                    </p>
                  </div>
                </div>

                <div className="flex gap-8">
                  <CircleToggle
                    icon={Plane}
                    active={active.plane}
                    onTap={() =>
                      toggle("plane")
                    }
                  />

                  <CircleToggle
                    icon={Radio}
                    active={active.hotspot}
                    onTap={() =>
                      toggle("hotspot")
                    }
                  />
                </div>
              </div>

              <div className="flex gap-10">
                <Slider
                  value={brightness}
                  setValue={setBrightness}
                  icon={Sun}
                />

                <Slider
                  value={volume}
                  setValue={setVolume}
                  icon={Volume2}
                />
              </div>
            </div>

            {/* ICON GRID */}
            <div className="grid grid-cols-4 gap-3 mt-4">
              {[
                [Flashlight, "flash"],
                [Bell, "bell"],
                [MapPin, "loc"],
                [Lock, "lock"],
                [Scissors, "cut"],
                [Contrast, "contrast"],
                [Calculator, "calc"],
                [Video, "video"],
                [Moon, "moon"],
                [Music2, "music"],
                [BatteryMedium, "battery"],
                [ScanLine, "scan"],
              ].map(([Icon, key]) => (
                <CircleToggle
                  key={key}
                  icon={Icon}
                  active={active[key]}
                  onTap={() =>
                    toggle(key)
                  }
                />
              ))}
            </div>

            {/* EXTRA */}
            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -15,
                  }}
                  className="grid grid-cols-4 gap-4 mt-4"
                >
                  {[
                    [Baby, "kids"],
                    [Focus, "focus"],
                    [
                      Captions,
                      "caption",
                    ],
                    [Plus, "add"],
                  ].map(([Icon, key]) => (
                    <CircleToggle
                      key={key}
                      icon={Icon}
                      active={active[key]}
                      onTap={() =>
                        toggle(key)
                      }
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* CHEVRON */}
            <div className="flex justify-center mt-4">
              <motion.button
                whileTap={{
                  scale: 0.9,
                }}
                onClick={() =>
                  setExpanded(!expanded)
                }
                className="w-12 h-12 flex items-center justify-center"
              >
                {expanded ? (
                  <ChevronUp size={28} />
                ) : (
                  <ChevronDown size={28} />
                )}
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* WIFI PANEL */}
        <AnimatePresence>
          {showUI &&
            panel === "wifi" && (
              <PopupPanel
                title="Wi-Fi"
                onClose={() =>
                  setPanel(null)
                }
              >
                {wifiNetworks.map(
                  (item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3"
                    >
                      <WifiHigh />
                      <span>
                        {item}
                      </span>
                    </div>
                  )
                )}
              </PopupPanel>
            )}
        </AnimatePresence>

        {/* BLUETOOTH PANEL */}
        <AnimatePresence>
          {showUI &&
            panel ===
              "bluetooth" && (
              <PopupPanel
                title="Bluetooth"
                onClose={() =>
                  setPanel(null)
                }
              >
                {bluetoothDevices.map(
                  (
                    item,
                    i
                  ) => {
                    const Icon =
                      item.icon;

                    return (
                      <div
                        key={i}
                        className="flex items-center gap-3"
                      >
                        <Icon />
                        <span>
                          {
                            item.name
                          }
                        </span>
                      </div>
                    );
                  }
                )}
              </PopupPanel>
            )}
        </AnimatePresence>
      </div>
    </div>
  );
}
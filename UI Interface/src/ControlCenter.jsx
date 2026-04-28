import { useState } from "react";
import {
  Wifi,
  WifiHigh,
  Lock,
  Bluetooth,
  Laptop,
  Headphones,
} from "lucide-react";
export default function ControlCenter() {
  const [openPanel, setOpenPanel] = useState(null);
  const wifiNetworks = ["Newnet", "MTN Fibre", "Airtel Home", "Office WiFi"];
  const bluetoothDevices = [
    { name: "DESKTOP-U07UIU3", icon: Laptop },
    { name: "AV-403", icon: Headphones },
    { name: "BAS-06", icon: Headphones },
    { name: "P47", icon: Headphones },
    { name: "SPARKLE", icon: Headphones },
  ];
  // DOUBLE CLICK FUNCTION
  const handleDoubleClick = (type) => {
    setOpenPanel(type);
  };
  return (
    <div className="h-screen w-full bg-black flex items-center justify-center text-white relative overflow-hidden">
      {/* MAIN CONTROL CENTER */}
      {!openPanel && (
        <div className="grid grid-cols-2 gap-4 w-85">
          {/* WIFI */}
          <button
            onDoubleClick={() => handleDoubleClick("wifi")}
            className="bg-zinc-900 rounded-3xl p-5 h-32 flex flex-col justify-between active:scale-95 transition"
          >
            <Wifi size={28} />
            <p className="text-lg">Wi-Fi</p>
          </button>
          {/* BLUETOOTH */}
          <button
            onDoubleClick={() => handleDoubleClick("bluetooth")}
            className="bg-zinc-900 rounded-3xl p-5 h-32 flex flex-col justify-between active:scale-95 transition"
          >
            <Bluetooth size={28} />
            <p className="text-lg">Bluetooth</p>
          </button>
        </div>
      )}
      {/* WIFI PANEL */}
      {openPanel === "wifi" && (
        <div className="absolute w-90 h-155 bg-black/70 backdrop-blur-2xl rounded-[35px] p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl">Wi-Fi</h2>
            <div className="w-16 h-9 bg-blue-600 rounded-full flex items-center px-1 justify-end">
              <div className="w-7 h-7 bg-white rounded-full"></div>
            </div>
          </div>
          <p className="text-zinc-400 mt-10 mb-6">Available Network</p>
          <div className="space-y-6">
            {wifiNetworks.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <WifiHigh className="text-zinc-300" />
                <Lock size={14} className="-ml-3 mt-3" />
                <span className="text-xl">{item}</span>
              </div>
            ))}
          </div>
          <button
            onClick={() => setOpenPanel(null)}
            className="absolute bottom-6 left-6 right-6 bg-zinc-800 rounded-full py-4 text-xl"
          >
            More Settings
          </button>
        </div>
      )}
      {/* BLUETOOTH PANEL */}
      {openPanel === "bluetooth" && (
        <div className="absolute w-90 h-155 bg-black/70 backdrop-blur-2xl rounded-[35px] p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl">Bluetooth</h2>
            <div className="w-16 h-9 bg-blue-600 rounded-full flex items-center px-1 justify-end">
              <div className="w-7 h-7 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="space-y-7 mt-10">
            {bluetoothDevices.map((device, i) => {
              const Icon = device.icon;
              return (
                <div key={i} className="flex gap-4 items-center">
                  <Icon size={28} />
                  <div>
                    <p className="text-xl">{device.name}</p>
                    <p className="text-zinc-400">Not connected</p>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            onClick={() => setOpenPanel(null)}
            className="absolute bottom-6 left-6 right-6 bg-zinc-800 rounded-full py-4 text-xl"
          >
            More Settings
          </button>
        </div>
      )}
    </div>
  );
}
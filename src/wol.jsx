{/* TOP + MID WRAPPER */}
<div className="grid grid-cols-2 gap-4">
  
  {/* LEFT SIDE */}
  <div className="flex flex-col gap-4">
    
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
        onHold={() => setPanel("bluetooth")}
      />

      <div className="col-span-2 bg-white/10 rounded-2xl p-3 flex items-center gap-3">
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
          ⇅
        </div>

        <p className="text-sm">Airtel NG</p>
      </div>
    </div>

    {/* DATA USAGE */}
    <div className="bg-black/50 rounded-3xl p-3 flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
        <Droplets size={16} className="text-white" />
      </div>

      <div>
        <p className="text-sm">247 / 1500 MB</p>
        <p className="text-xs text-gray-400">
          Used today
        </p>
      </div>
    </div>

    {/* AIRPLANE / HOTSPOT */}
    <div className="flex gap-8">
      <CircleToggle
        icon={Plane}
        active={active.plane}
        onTap={() => toggle("plane")}
      />

      <CircleToggle
        icon={Radio}
        active={active.hotspot}
        onTap={() => toggle("hotspot")}
      />
    </div>
  </div>

  {/* RIGHT SIDE */}
  <div className="flex flex-col gap-4">
    
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
          onClick={() => setPlaying(!playing)}
          className="p-3 rounded-full bg-white text-black"
        >
          {playing ? (
            <Pause size={18} />
          ) : (
            <Play size={18} fill="black" />
          )}
        </button>

        <button className="p-2 rounded-full bg-white/10">
          <SkipForward size={18} />
        </button>
      </div>
    </div>

    {/* SLIDERS WRAPPER */}
    <div className="bg-black/50 rounded-3xl p-4 flex justify-center gap-8">
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
</div>


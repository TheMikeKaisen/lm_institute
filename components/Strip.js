export default function Strip() {
  const items = [
    '1-Month Foundation', '3-Month Professional', '6-Month Expert',
    'Chip-Level Repair', 'Micro-Soldering', 'Android Flashing',
    'Multimeter & DC Power', 'Schematic Reading', 'FRP Unlocking',
    'H Kumar · 20+ Years', 'Batch 1 Open', 'Certificate Course',
  ]
  return (
    <div className="bg-sky-700 py-3 overflow-hidden" aria-hidden="true">
      <div className="ticker-inner flex gap-10 items-center">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-10 flex-shrink-0">
            <span className="text-white/60 text-xs font-mono uppercase tracking-widest whitespace-nowrap">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80"/>
          </div>
        ))}
      </div>
    </div>
  )
}

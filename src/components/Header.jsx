export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <div className="bg-gradient-to-br from-orange-400 to-yellow-200 text-slate-900 font-bold rounded-lg w-12 h-12 flex items-center justify-center">WD</div>
        <div>
          <div className="font-extrabold">The Wanderer's Diary</div>
          <div className="text-xs text-slate-400">Travel • Itineraries • Bookings</div>
        </div>
      </div>
      <nav className="hidden md:flex gap-6 text-slate-400 font-semibold">
        <a href="#home">Home</a>
        <a href="#destinations">Destinations</a>
        <a href="#itineraries">Itineraries</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )}

export default function Hero({ openBooking }) {
  return (
    <section id="home" className="h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-extrabold text-yellow-300 drop-shadow-lg">Discover. Wander. Live.</h1>
      <p className="mt-4 max-w-xl text-slate-300">Your next adventure awaits with The Wanderer’s Diary.</p>
      <button onClick={openBooking} className="mt-6 bg-yellow-400 text-slate-900 font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-yellow-300">Book Now</button>
    </section>
  )}

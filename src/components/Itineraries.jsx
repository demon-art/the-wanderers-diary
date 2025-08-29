export default function Itineraries({ openBooking }) {
  const trips = [
    { title: "6N/7D Spiti Adventure", desc: "Explore the valleys, monasteries & mountains.", price: "₹24,999" },
    { title: "3N/4D Goa Getaway", desc: "Beach vibes, parties & relaxation.", price: "₹12,499" },
  ];
  return (
    <section id="itineraries" className="px-6 py-12">
      <h2 className="text-3xl font-bold mb-6">Itineraries</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {trips.map((t) => (
          <div key={t.title} className="bg-slate-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-2">{t.title}</h3>
            <p className="text-slate-300 mb-2">{t.desc}</p>
            <p className="text-yellow-400 font-semibold mb-4">{t.price}</p>
            <button onClick={() => openBooking(t.title)} className="bg-yellow-400 text-slate-900 font-bold px-4 py-2 rounded-lg hover:bg-yellow-300">Book Now</button>
          </div>
        ))}
      </div>
    </section>
  )}

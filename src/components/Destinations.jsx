export default function Destinations() {
  const places = [
    { name: "Spiti Valley", img: "https://source.unsplash.com/400x300/?spiti,india" },
    { name: "Manali", img: "https://source.unsplash.com/400x300/?manali,india" },
    { name: "Goa", img: "https://source.unsplash.com/400x300/?goa,beach" },
  ];
  return (
    <section id="destinations" className="px-6 py-12">
      <h2 className="text-3xl font-bold mb-6">Top Destinations</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {places.map((p) => (
          <div key={p.name} className="bg-slate-800 rounded-xl overflow-hidden shadow-lg">
            <img src={p.img} alt={p.name} className="w-full h-48 object-cover" />
            <div className="p-4 font-semibold">{p.name}</div>
          </div>
        ))}
      </div>
    </section>
  )}

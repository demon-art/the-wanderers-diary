export default function BookingModal({ close, prefill }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
      <div className="bg-slate-900 rounded-xl p-6 w-96">
        <h3 className="text-xl font-bold mb-4">Book Trip</h3>
        <input type="text" defaultValue={prefill} placeholder="Trip Name" className="w-full mb-3 p-2 rounded bg-slate-800" />
        <input type="text" placeholder="Your Name" className="w-full mb-3 p-2 rounded bg-slate-800" />
        <input type="email" placeholder="Your Email" className="w-full mb-3 p-2 rounded bg-slate-800" />
        <button className="bg-yellow-400 text-slate-900 font-bold w-full py-2 rounded-lg mt-2">Confirm Booking</button>
        <button onClick={close} className="text-slate-400 w-full mt-2">Cancel</button>
      </div>
    </div>
  )}

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Itineraries from './components/Itineraries';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [showBooking, setShowBooking] = useState(false);
  const [prefill, setPrefill] = useState('');

  return (
    <div className="bg-gradient-to-b from-[#071328] to-[#071a2a] text-slate-100 min-h-screen">
      <Header />
      <Hero openBooking={() => setShowBooking(true)} />
      <Destinations />
      <Itineraries openBooking={(pref) => {setPrefill(pref); setShowBooking(true)}} />
      <Contact />
      <Footer />
      {showBooking && <BookingModal close={() => setShowBooking(false)} prefill={prefill} />}
    </div>
  )
}

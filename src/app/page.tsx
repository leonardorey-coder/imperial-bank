import CardScroll from '@/components/CardScroll';
import Benefits from '@/components/Benefits';
import Modules from '@/components/Modules';
import Specs from '@/components/Specs';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-[#050505]">
      {/* Hero with scrollytelling */}
      <CardScroll />

      {/* Landing sections */}
      <Benefits />
      <Modules />
      <Specs />
      <Footer />
    </main>
  );
}

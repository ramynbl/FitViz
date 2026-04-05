import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Reassurance from '@/components/Reassurance/Reassurance';
import Pricing from '@/components/Pricing/Pricing';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Reassurance />
        <Pricing />
        <Footer />
      </main>
    </>
  );
}

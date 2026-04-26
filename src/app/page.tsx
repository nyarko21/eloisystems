import Header from '@/components/header';
import Hero from '@/components/hero';
import GhanaFocus from '@/app/Ghanafocus/page';
import Features from '@/app/features/page';
import Careers from '@/app/careers/page';
import Contact from '@/app/contact/page';
import Footer from '@/components/footer';

export default function Home() {
return (
  <div>
    <Header />

    <main>
      <Hero />
      <GhanaFocus />
      <Features />
      <Careers />
      <Contact />
    </main>

    <Footer />
  </div>
);
}
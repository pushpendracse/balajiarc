import PageTransition from "@/components/animations/PageTransition";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <PageTransition>
      <main>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Process />
        <CTA />
        <Footer />
      </main>
    </PageTransition>
  );
}

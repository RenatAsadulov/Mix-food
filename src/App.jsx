import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import NewsSection from "@/sections/NewsSection";
import Contact from "@/sections/Contact";

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Hero />
        <NewsSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

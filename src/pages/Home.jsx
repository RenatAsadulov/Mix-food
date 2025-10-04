import Hero from "@/sections/Hero";
import About from "@/sections/About";
import NewsSection from "@/sections/NewsSection";
import Contact from "@/sections/Contact";

export default function Home() {
  console.log("hello from ci cd", new Date());

  return (
    <>
      <Hero />
      <About />
      <NewsSection />
      <Contact />
    </>
  );
}

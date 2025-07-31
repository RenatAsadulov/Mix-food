import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      className="bg-hero-pattern bg-cover bg-center py-24 text-center text-white"
      id="hero"
    >
      <div className="backdrop-brightness-75 py-16 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          Flavor solutions that inspire
        </motion.h2>
        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8">
          We deliver premium flavorings and raw ingredients from Poland (JAR) to
          help Ukrainian brands craft products their customers love.
        </p>
        <Button asChild size="lg">
          <a href="#contact">Get in touch</a>
        </Button>
      </div>
    </section>
  );
}

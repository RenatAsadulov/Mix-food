import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../src/components/ui/card";
import { Button } from "../src/components/ui/button";
import { Mail, Phone, MapPin, Menu } from "lucide-react";

const navLinks = [
  { id: "about", label: "Про нас" },
  { id: "news", label: "Новини" },
  { id: "contact", label: "Контакти" },
];

const newsData = [
  {
    title: "MixFood запускає нове меню літніх смаків!",
    date: "2025-07-15",
    excerpt:
      "Спробуйте наші сезонні страви, створені з любов'ю до свіжих українських продуктів.",
  },
  {
    title: "Відкриття нового пункту видачі у Львові",
    date: "2025-06-20",
    excerpt:
      "Тепер наші клієнти можуть забирати замовлення ще швидше у центрі міста.",
  },
  {
    title: "Партнерство з локальними фермерами",
    date: "2025-05-10",
    excerpt:
      "Ми підтримуємо малий бізнес та гарантуємо свіжість кожного продукту.",
  },
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold text-primary">MixFood</h1>
        <nav className="hidden md:block">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="md:hidden p-2 rounded hover:bg-gray-100"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
      {open && (
        <ul className="md:hidden bg-white shadow-inner flex flex-col gap-4 p-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="block text-gray-700 hover:text-primary py-2"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

function Hero() {
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
          Смак, який об'єднує
        </motion.h2>
        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8">
          Ми доставляємо найсмачнішу їжу з найсвіжіших інгредієнтів прямо до
          ваших дверей.
        </p>
        <Button asChild size="lg">
          <a href="#contact">Зробити замовлення</a>
        </Button>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto py-20 px-4">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-6 text-center"
      >
        Про нас
      </motion.h3>
      <p className="text-lg leading-relaxed text-gray-700 mb-4">
        MixFood — українська компанія, що спеціалізується на здоровому та
        смачному харчуванні. Ми поєднуємо традиційні рецепти з інноваційними
        підходами до доставки, щоб кожен міг насолоджуватися якісними стравами у
        будь-який час.
      </p>
      <p className="text-lg leading-relaxed text-gray-700">
        Наша місія — підтримувати активний та здоровий спосіб життя, пропонуючи
        широкий вибір меню на кожен день. Ми ретельно обираємо постачальників і
        співпрацюємо з локальними фермами, щоб забезпечити свіжість продуктів та
        підтримати український бізнес.
      </p>
    </section>
  );
}

function NewsSection() {
  return (
    <section id="news" className="bg-gray-50 py-20 px-4">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-10 text-center"
      >
        Новини
      </motion.h3>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {newsData.map((item) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Card className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <h4 className="text-xl font-semibold mb-2 flex-1">
                  {item.title}
                </h4>
                <time className="text-sm text-gray-500 mb-4 block">
                  {new Date(item.date).toLocaleDateString("uk-UA", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <p className="text-gray-700 flex-1">{item.excerpt}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send data to your backend or a third-party service
    setSubmitted(true);
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto py-20 px-4">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-6 text-center"
      >
        Зв'язатися з нами
      </motion.h3>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p className="flex items-center gap-3 text-gray-700">
            <Mail className="w-5 h-5" /> contact@mixfood.ua
          </p>
          <p className="flex items-center gap-3 text-gray-700">
            <Phone className="w-5 h-5" /> +380 (44) 123-45-67
          </p>
          <p className="flex items-center gap-3 text-gray-700">
            <MapPin className="w-5 h-5" /> Київ, вул. Хрещатик, 1
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center"
              >
                <h4 className="text-xl font-semibold mb-2">Дякуємо!</h4>
                <p className="text-gray-700">Ми скоро з вами зв'яжемося.</p>
              </motion.div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Ім'я
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border-gray-300 focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border-gray-300 focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                  >
                    Повідомлення
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border-gray-300 focus:ring-primary focus:border-primary"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Надіслати
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 text-center">
      <p>© {new Date().getFullYear()} MixFood. Усі права захищено.</p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="font-sans antialiased scroll-smooth">
      <Header />
      <main>
        <Hero />
        <About />
        <NewsSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

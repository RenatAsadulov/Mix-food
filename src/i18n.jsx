import { createContext, useContext, useState } from "react";

const translations = {
  en: {
    nav: { about: "About", news: "News", contact: "Contact" },
    hero: {
      heading: "Flavor solutions that inspire",
      text:
        "We deliver premium flavorings and raw ingredients from Poland (JAR) to help Ukrainian brands craft products their customers love.",
      button: "Get in touch",
    },
    about: {
      heading: "About us",
      p1:
        "MixFood is a Ukrainian company focused on supplying food flavorings and ingredients. We import high-quality materials from our Polish partner JAR and work with market leaders such as «Лев» and «Ласунка».",
      p2:
        "Our mission is to help manufacturers develop outstanding products by offering reliable deliveries, technical expertise and complete flavor solutions.",
    },
    news: {
      heading: "News",
      items: [
        {
          title: "New line of natural flavorings introduced",
          date: "2025-07-15",
          excerpt: "We expand our portfolio with flavors developed together with JAR.",
        },
        {
          title: "Direct deliveries from Poland established",
          date: "2025-06-20",
          excerpt: "Our logistics hub ensures even faster shipping to Ukrainian clients.",
        },
        {
          title: "Collaboration with market leaders",
          date: "2025-05-10",
          excerpt: 'Companies like "Лев" and "Ласунка" trust MixFood with their ingredient supply.',
        },
      ],
    },
    contact: {
      heading: "Contact us",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send",
      thankTitle: "Thank you!",
      thankText: "We will contact you soon.",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  uk: {
    nav: { about: "Про нас", news: "Новини", contact: "Контакти" },
    hero: {
      heading: "Смакові рішення, що надихають",
      text:
        "Ми постачаємо якісні ароматизатори та сировину з Польщі (JAR), щоб українські бренди створювали продукти, які полюбляють споживачі.",
      button: "Зв'язатися",
    },
    about: {
      heading: "Про компанію",
      p1:
        "MixFood — українська компанія, що займається постачанням харчових ароматизаторів та інгредієнтів. Ми імпортуємо високоякісні матеріали від польського партнера JAR та співпрацюємо з лідерами ринку, такими як «Лев» та «Ласунка».",
      p2:
        "Наша місія — допомагати виробникам створювати неперевершені продукти, забезпечуючи надійні поставки, технічну експертизу та комплексні смакові рішення.",
    },
    news: {
      heading: "Новини",
      items: [
        {
          title: "Представлено нову лінійку натуральних ароматизаторів",
          date: "2025-07-15",
          excerpt: "Ми розширюємо портфоліо ароматизаторами, розробленими разом з JAR.",
        },
        {
          title: "Налагоджено прямі поставки з Польщі",
          date: "2025-06-20",
          excerpt: "Наш логістичний хаб забезпечує ще швидшу доставку українським клієнтам.",
        },
        {
          title: "Співпраця з лідерами ринку",
          date: "2025-05-10",
          excerpt: "Такі компанії, як «Лев» та «Ласунка», довіряють MixFood постачання інгредієнтів.",
        },
      ],
    },
    contact: {
      heading: "Зв'язатися з нами",
      name: "Ім'я",
      email: "Email",
      message: "Повідомлення",
      send: "Відправити",
      thankTitle: "Дякуємо!",
      thankText: "Ми зв'яжемося з вами найближчим часом.",
    },
    footer: {
      rights: "Всі права захищені.",
    },
  },
  pl: {
    nav: { about: "O nas", news: "Aktualności", contact: "Kontakt" },
    hero: {
      heading: "Rozwiązania smakowe, które inspirują",
      text:
        "Dostarczamy najwyższej jakości aromaty i surowce z Polski (JAR), pomagając ukraińskim markom tworzyć produkty uwielbiane przez klientów.",
      button: "Skontaktuj się",
    },
    about: {
      heading: "O firmie",
      p1:
        "MixFood to ukraińska firma zajmująca się dostawami aromatów i składników spożywczych. Importujemy wysokiej jakości materiały od polskiego partnera JAR i współpracujemy z liderami rynku takimi jak «Лев» i «Ласунка».",
      p2:
        "Naszym celem jest pomagać producentom w tworzeniu doskonałych produktów poprzez niezawodne dostawy, wsparcie techniczne i kompleksowe rozwiązania smakowe.",
    },
    news: {
      heading: "Aktualności",
      items: [
        {
          title: "Nowa linia naturalnych aromatów",
          date: "2025-07-15",
          excerpt: "Poszerzamy portfolio o aromaty opracowane we współpracy z JAR.",
        },
        {
          title: "Bezpośrednie dostawy z Polski",
          date: "2025-06-20",
          excerpt: "Nasz hub logistyczny zapewnia jeszcze szybszą wysyłkę do ukraińskich klientów.",
        },
        {
          title: "Współpraca z liderami rynku",
          date: "2025-05-10",
          excerpt: "Firmy takie jak «Лев» i «Ласунка» powierzają MixFood dostawy składników.",
        },
      ],
    },
    contact: {
      heading: "Skontaktuj się z nami",
      name: "Imię",
      email: "Email",
      message: "Wiadomość",
      send: "Wyślij",
      thankTitle: "Dziękujemy!",
      thankText: "Skontaktujemy się z Tobą wkrótce.",
    },
    footer: {
      rights: "Wszelkie prawa zastrzeżone.",
    },
  },
};

const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [lang, setLang] = useState("en");
  const t = (key) => key.split(".").reduce((obj, k) => obj && obj[k], translations[lang]) || key;
  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}

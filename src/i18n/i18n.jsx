import { Quote } from "lucide-react";
import React, { createContext, useContext, useState } from "react";
import { getLanguageFromBrowserSettings } from "../utils/browser";

const translations = {
  en: {
    nav: { about: "About", news: "News", contact: "Contact" },
    hero: {
      title: "Flavor solutions that inspire",
      subtitle:
        "We deliver premium flavorings and raw ingredients from Poland (JAR) to help Ukrainian brands craft products their customers love.",
      cta: "Get in touch",
    },
    about: {
      title: "About us",
      text1:
        "MixFood is a Ukrainian company focused on supplying food flavorings and ingredients. We import high-quality materials from our Polish partner JAR and work with market leaders such as «Лев» and «Ласунка».",
      text2:
        "Our mission is to help manufacturers develop outstanding products by offering reliable deliveries, technical expertise and complete flavor solutions.",
    },
    news: {
      title: "News",
      items: [
        {
          title: "New line of natural flavorings introduced",
          excerpt:
            "We expand our portfolio with flavors developed together with JAR.",
        },
        {
          title: "Direct deliveries from Poland established",
          excerpt:
            "Our logistics hub ensures even faster shipping to Ukrainian clients.",
        },
        {
          title: "Collaboration with market leaders",
          excerpt:
            'Companies like "Лев" and "Ласунка" trust MixFood with their ingredient supply.',
        },
      ],
    },
    contact: {
      title: "Contact us",
      successTitle: "Thank you!",
      lead: "The MixFood team provides technical support and assists in selecting flavorings, extracts, and food additives for your production needs. Fill out the form, and our specialist will contact you to discuss cooperation details.",
      successMessage: "We will contact you soon.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send",
      privacyNote:
        "By submitting this form, you consent to the processing of your personal data for communication and preparation of a commercial offer.",
    },
    footer: { rights: "All rights reserved." },
  },
  pl: {
    nav: { about: "O nas", news: "Aktualności", contact: "Kontakt" },
    hero: {
      title: "Rozwiązania smakowe, które inspirują",
      subtitle:
        "Dostarczamy najwyższej jakości aromaty i składniki z Polski (JAR), aby pomóc ukraińskim markom tworzyć produkty, które pokochają ich klienci.",
      cta: "Skontaktuj się",
    },
    about: {
      title: "O nas",
      text1:
        "MixFood to ukraińska firma zajmująca się dostawą aromatów i składników spożywczych. Importujemy wysokiej jakości surowce od naszego polskiego partnera JAR i współpracujemy z liderami rynku, takimi jak «Лев» i «Ласунка».",
      text2:
        "Naszą misją jest pomaganie producentom w tworzeniu wyjątkowych produktów poprzez niezawodne dostawy, wiedzę techniczną i kompleksowe rozwiązania smakowe.",
    },
    news: {
      title: "Aktualności",
      items: [
        {
          title: "Nowa linia naturalnych aromatów",
          excerpt: "Poszerzamy portfolio o aromaty opracowane wspólnie z JAR.",
        },
        {
          title: "Bezpośrednie dostawy z Polski",
          excerpt:
            "Nasz hub logistyczny zapewnia jeszcze szybszą wysyłkę do klientów na Ukrainie.",
        },
        {
          title: "Współpraca z liderami rynku",
          excerpt:
            'Firmy takie jak "Лев" i "Ласунка" ufają MixFood w dostawach składników.',
        },
      ],
    },
    contact: {
      title: "Skontaktuj się z nami",
      successTitle: "Dziękujemy!",
      lead: "Zespół MixFood oferuje wsparcie techniczne i pomaga w doborze aromatów, ekstraktów oraz dodatków spożywczych dla Twojej produkcji. Wypełnij formularz, a nasz specjalista skontaktuje się z Tobą, aby omówić szczegóły współpracy.",
      successMessage: "Skontaktujemy się wkrótce.",
      name: "Imię",
      email: "Email",
      message: "Wiadomość",
      send: "Wyślij",
      privacyNote:
        "Wysyłając formularz, wyrażasz zgodę na przetwarzanie danych osobowych w celu kontaktu i przygotowania oferty handlowej.",
    },
    footer: { rights: "Wszelkie prawa zastrzeżone." },
  },
  uk: {
    nav: { about: "Про нас", news: "Новини", contact: "Контакти" },
    hero: {
      title: "Смакові рішення, що надихають",
      subtitle:
        "Ми постачаємо високоякісні ароматизатори та сировину з Польщі (JAR), щоб допомогти українським брендам створювати продукти, які подобаються їхнім клієнтам.",
      cta: "Зв'язатися",
    },
    about: {
      title: "Про нас",
      text1:
        "MixFood — українська компанія, що спеціалізується на постачанні харчових ароматизаторів та інгредієнтів. Ми імпортуємо високоякісну сировину від нашого польського партнера JAR та співпрацюємо з лідерами ринку, такими як «Лев» та «Ласунка».",
      text2:
        "Наша місія — допомагати виробникам створювати видатні продукти, пропонуючи надійні поставки, технічну експертизу та комплексні смакові рішення.",
    },
    news: {
      title: "Новини",
      items: [
        {
          title: "Нова лінійка натуральних ароматизаторів",
          excerpt:
            "Ми розширюємо портфоліо ароматизаторами, розробленими спільно з JAR.",
        },
        {
          title: "Налагоджено прямі поставки з Польщі",
          excerpt:
            "Наш логістичний хаб забезпечує ще швидше відвантаження українським клієнтам.",
        },
        {
          title: "Співпраця з лідерами ринку",
          excerpt:
            "Компанії «Лев» та «Ласунка» довіряють MixFood постачання інгредієнтів.",
        },
      ],
    },
    contact: {
      title: "Зв'яжіться з нами",
      successTitle: "Дякуємо!",
      lead: "Команда MixFood надає технічну підтримку та допомагає у виборі ароматизаторів, екстрактів і харчових добавок для вашого виробництва. Заповніть форму, і наш фахівець зв’яжеться з вами для уточнення деталей співпраці.",
      successMessage: "Ми зв'яжемося з вами найближчим часом.",
      name: "Ім'я",
      email: "Ел. пошта",
      message: "Повідомлення",
      send: "Надіслати",
      privacyNote:
        "Надсилаючи форму, ви погоджуєтесь на обробку персональних даних з метою комунікації та підготовки комерційної пропозиції.",
    },
    footer: { rights: "Всі права захищені." },
  },
};

const I18nContext = createContext({
  lang: getLanguageFromBrowserSettings(),
  setLang: () => {},
  t: (key) => key,
});

function getNested(obj, path) {
  return path
    .split(".")
    .reduce(
      (acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined),
      obj
    );
}

export function I18nProvider({ children }) {
  const userLanguage = getLanguageFromBrowserSettings();

  const [lang, setLang] = useState(userLanguage);
  const t = (key) =>
    getNested(translations[lang], key) ||
    getNested(translations.en, key) ||
    key;
  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}

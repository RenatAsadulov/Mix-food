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
      email: "E-mail",
      phone: "Phone",
      message: "Message",
      send: "Send",
      privacyNote:
        "By submitting this form, you consent to the processing of your personal data for communication and preparation of a commercial offer.",
      emailInvalid: "Enter email in format your_email@test.com",
      phoneInvalid:
        "Please enter a valid phone number in international format, e.g. +44 20 1234 5678.",
    },
    footer: { rights: "All rights reserved." },
    seo: {
      homeTitle: "MixFood - Food Flavorings & Ingredients",
      homeDescription:
        "MixFood delivers premium food flavorings and raw ingredients from Poland to Ukrainian manufacturers.",
      newsTitle: "News | MixFood",
      newsDescription:
        "Latest news and updates from MixFood - food flavorings supplier.",
      contactTitle: "Contact | MixFood",
      contactDescription:
        "Contact MixFood for food flavorings, extracts and additives. Get technical support and consultation.",
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "What products does MixFood supply?",
          answer: "MixFood supplies food flavorings, extracts, and raw ingredients from our Polish partner JAR for Ukrainian food manufacturers.",
        },
        {
          question: "Which companies does MixFood work with?",
          answer: "MixFood partners with market leaders including Lev and Lasunka, providing them with high-quality flavorings and ingredients.",
        },
        {
          question: "How can I order flavorings from MixFood?",
          answer: "You can contact us through the contact form on our website or call us directly. Our specialists will help you select the right products for your needs.",
        },
      ],
    },
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
      email: "E-mail",
      phone: "Numer telefonu",
      message: "Wiadomość",
      send: "Wyślij",
      privacyNote:
        "Wysyłając formularz, wyrażasz zgodę na przetwarzanie danych osobowych w celu kontaktu i przygotowania oferty handlowej.",
      emailInvalid: "Wpisz adres e-mail w formacie your_email@test.com",
      phoneInvalid:
        "Wprowadź poprawny numer telefonu w formacie międzynarodowym, np. +48 501 234 567.",
    },
    footer: { rights: "Wszelkie prawa zastrzeżone." },
    seo: {
      homeTitle: "MixFood - Aromaty i składniki spożywcze",
      homeDescription:
        "MixFood dostarcza wysokiej jakości aromaty i składniki spożywcze z Polski dla ukraińskich producentów.",
      newsTitle: "Aktualności | MixFood",
      newsDescription:
        "Najnowsze wiadomości i aktualności od MixFood - dostawcy aromatów spożywczych.",
      contactTitle: "Kontakt | MixFood",
      contactDescription:
        "Skontaktuj się z MixFood w sprawie aromatów, ekstraktów i dodatków spożywczych.",
    },
    faq: {
      title: "Często zadawane pytania",
      items: [
        {
          question: "Jakie produkty dostarcza MixFood?",
          answer: "MixFood dostarcza aromaty spożywcze, ekstrakty i surowce od naszego polskiego partnera JAR dla ukraińskich producentów żywności.",
        },
        {
          question: "Z jakimi firmami współpracuje MixFood?",
          answer: "MixFood współpracuje z liderami rynku, w tym z firmami Lev i Lasunka, dostarczając im wysokiej jakości aromaty i składniki.",
        },
        {
          question: "Jak mogę zamówić aromaty od MixFood?",
          answer: "Możesz skontaktować się z nami poprzez formularz kontaktowy na naszej stronie lub zadzwonić bezpośrednio. Nasi specjaliści pomogą dobrać odpowiednie produkty.",
        },
      ],
    },
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
      phone: "Телефон",
      message: "Повідомлення",
      send: "Надіслати",
      privacyNote:
        "Надсилаючи форму, ви погоджуєтесь на обробку персональних даних з метою комунікації та підготовки комерційної пропозиції.",
      emailInvalid: "Введіть електронну пошту в форматі your_email@test.com",
      phoneInvalid:
        "Введіть правильний номер телефону у міжнародному форматі, наприклад, +380 50 123 4567.",
    },
    footer: { rights: "Всі права захищені." },
    seo: {
      homeTitle: "MixFood - Харчові ароматизатори та інгредієнти",
      homeDescription:
        "MixFood постачає високоякісні харчові ароматизатори та сировину з Польщі для українських виробників.",
      newsTitle: "Новини | MixFood",
      newsDescription:
        "Останні новини та оновлення від MixFood - постачальника харчових ароматизаторів.",
      contactTitle: "Контакти | MixFood",
      contactDescription:
        "Зв'яжіться з MixFood для замовлення ароматизаторів, екстрактів та харчових добавок.",
    },
    faq: {
      title: "Часті запитання",
      items: [
        {
          question: "Які продукти постачає MixFood?",
          answer: "MixFood постачає харчові ароматизатори, екстракти та сировину від нашого польського партнера JAR для українських виробників харчової продукції.",
        },
        {
          question: "З якими компаніями співпрацює MixFood?",
          answer: "MixFood співпрацює з лідерами ринку, включаючи компанії «Лев» та «Ласунка», забезпечуючи їх високоякісними ароматизаторами та інгредієнтами.",
        },
        {
          question: "Як замовити ароматизатори від MixFood?",
          answer: "Ви можете зв'язатися з нами через контактну форму на сайті або зателефонувати напряму. Наші фахівці допоможуть підібрати потрібні продукти.",
        },
      ],
    },
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
  const languageFromLS = localStorage.getItem("lang");

  const userLng = languageFromLS ?? userLanguage;

  const [lang, setLang] = useState(userLng);
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

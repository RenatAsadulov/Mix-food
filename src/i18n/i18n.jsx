import { Quote } from "lucide-react";
import React, { createContext, useContext, useState } from "react";
import { getLanguageFromBrowserSettings } from "../utils/browser";

const translations = {
  en: {
    nav: { about: "About", news: "News", contact: "Contact" },
    hero: {
      title: "Flavor solutions for your production",
      subtitle:
        "B2B supply of flavorings, colorings and stabilizers. Official JAR representative in Ukraine with in-house manufacturing.",
      cta: "Get in touch",
    },
    about: {
      title: "About us",
      whoWeAre: {
        title: "Who we are",
        text: "We are a company specializing in B2B supply of food flavorings, colorings and stabilizers for food industry enterprises. We are the official representative of the Polish flavoring brand JAR in Ukraine and have our own production facilities that allow us to create flavorings from scratch and adapt them to any technological process.",
      },
      team: {
        title: "Team and expertise",
        items: [
          "Professional technologist with extensive practical experience in confectionery and in the production of syrups and fillings",
          "In-house flavorist who constantly expands the flavor range and creates unique flavorings",
          "Qualified managers who deeply understand our assortment and the technologies of its application",
          "Legal and financial support that controls document flow, certification, contracts and foreign economic operations"
        ],
      },
      production: {
        title: "Production and laboratory",
        intro: "We have our own laboratory equipped for:",
        items: [
          "testing and improving products",
          "adapting flavorings to client technologies",
          "creating exclusive recipes unique to specific production"
        ],
        outro: "The combination of expertise and modern technologies allows us to develop solutions that harmoniously integrate into any production recipe.",
      },
      logistics: {
        title: "Logistics and supply stability",
        intro: "We ensure constant product availability and uninterrupted deliveries thanks to:",
        items: [
          "own warehouse stocks",
          "established logistics",
          "batch control and regular import deliveries",
          "experience implementing products at client facilities - from test batches to serial production"
        ],
      },
      geography: {
        title: "Client geography",
        text: "We work with production facilities throughout Ukraine, covering various segments of the food industry: confectionery, dairy, beverages, snacks, frozen products and other areas.",
      },
      approach: {
        title: "Our approach",
        text: "We believe that a successful product is the result of combining two things: deep understanding of technological processes and flexible production capabilities. Therefore, we offer each client not just a component, but a comprehensive solution.",
      },
    },
    sections: {
      company: {
        title: "About the Company",
        text: "MixFood is a Ukrainian company specializing in supplying food flavorings, colorings, and stabilizers. We work exclusively with B2B clients: food manufacturers, HoReCa, and private labels. We offer both ready-made solutions and help develop products tailored to your technological process.",
      },
      expertise: {
        title: "Expertise & Approach",
        bullets: [
          "Official representative of the Polish brand JAR — one of Europe's leading flavoring manufacturers",
          "We help select the right flavoring for your product type, concentration, and application",
          "Each order is accompanied by technical consultation and assistance in integrating the product into your process",
        ],
      },
      production: {
        title: "In-House Production & Laboratory",
        bullets: [
          "Own production base for manufacturing and adapting flavorings",
          "In-house flavorist with experience creating exclusive formulations",
          "Ability to create custom flavoring profiles tailored to client specifications",
        ],
      },
      logistics: {
        title: "Logistics & Supply Stability",
        bullets: [
          "Direct deliveries from Poland — short lead times and cost optimization",
          "Own warehouses in Ukraine — product availability and prompt shipping",
          "Established logistics covering all regions of Ukraine",
          "Transparent terms, quality documentation, and full support at every cooperation stage",
        ],
      },
      principle: {
        title: "Our Working Principle",
        text: "We work with those who value quality, reliability, and a professional approach. If you're looking for a partner you can trust with your flavorings — we're ready to discuss cooperation.",
      },
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
      lead: "Let's create exceptional products together. Reach out and start a partnership that elevates your production.",
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
      quickResponse: "Quick Response",
      whatsappSubtitle: "Instant chat",
      telegramSubtitle: "Fast response",
      sendQuickMessage: "Or send a quick message",
      yourName: "Your name",
      namePlaceholder: "John Doe",
      yourEmail: "Email",
      yourPhone: "Phone",
      optional: "optional",
      messagePlaceholder: "Tell us about your needs...",
      cancel: "Cancel",
      sendMessage: "Send Message",
      dataProtected: "Your data is protected. We respond to all inquiries within 2 business hours.",
      workingHours: "Working hours",
      workingDays: "Mon - Fri",
      workingTime: "9:00 AM - 5:00 PM",
    },
    footer: {
      rights: "All rights reserved.",
      services: "Services",
      servicesItems: {
        flavorings: "Food Flavorings",
        colorings: "Colorings",
        stabilizers: "Stabilizers",
        jar: "JAR Products",
      },
      contactCta: "Ready to discuss your needs? Get in touch with our team.",
      jarRepresentative: "Official JAR Representative in Ukraine",
    },
    seo: {
      homeTitle: "MixFood - Food Flavorings, Colorings & Stabilizers",
      homeDescription:
        "B2B supplier of food flavorings, colorings and stabilizers. Official JAR representative in Ukraine with in-house production and laboratory.",
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
          answer: "MixFood supplies food flavorings, colorings and stabilizers for the food industry. We are the official representative of the Polish brand JAR and also produce our own flavorings.",
        },
        {
          question: "Can you adapt flavorings to our production process?",
          answer: "Yes. Our laboratory and in-house flavorist can adapt any flavoring to your specific technological process and create exclusive recipes.",
        },
        {
          question: "How can I order from MixFood?",
          answer: "Contact us through the form on our website or call directly. Our team will help select products, arrange test batches and ensure stable supply.",
        },
      ],
    },
  },
  pl: {
    nav: { about: "O nas", news: "Aktualności", contact: "Kontakt" },
    hero: {
      title: "Rozwiązania smakowe dla Twojej produkcji",
      subtitle:
        "Dostawy B2B aromatów, barwników i stabilizatorów. Oficjalny przedstawiciel JAR na Ukrainie z własną produkcją.",
      cta: "Skontaktuj się",
    },
    about: {
      title: "O nas",
      whoWeAre: {
        title: "Kim jesteśmy",
        text: "Jesteśmy firmą specjalizującą się w dostawach B2B aromatów spożywczych, barwników i stabilizatorów dla przedsiębiorstw przemysłu spożywczego. Jesteśmy oficjalnym przedstawicielem polskiej marki aromatów JAR na Ukrainie i posiadamy własne moce produkcyjne, które pozwalają nam tworzyć aromaty od podstaw i dostosowywać je do dowolnego procesu technologicznego.",
      },
      team: {
        title: "Zespół i ekspertyza",
        items: [
          "Profesjonalny technolog z dużym praktycznym doświadczeniem w branży cukierniczej oraz w produkcji syropów i nadzień",
          "Własny flaworysta, który stale rozszerza gamę smaków i tworzy unikalne aromaty",
          "Wykwalifikowani menedżerowie, którzy głęboko rozumieją nasz asortyment i technologie jego zastosowania",
          "Wsparcie prawne i finansowe, które kontroluje obieg dokumentów, certyfikację, kontrakty i operacje zagraniczne"
        ],
      },
      production: {
        title: "Produkcja i laboratorium",
        intro: "Posiadamy własne laboratorium wyposażone do:",
        items: [
          "testowania i doskonalenia produktów",
          "adaptacji aromatów do technologii klienta",
          "tworzenia ekskluzywnych receptur unikalnych dla konkretnej produkcji"
        ],
        outro: "Połączenie ekspertyzy i nowoczesnych technologii pozwala nam opracowywać rozwiązania, które harmonijnie integrują się z każdą recepturą produkcyjną.",
      },
      logistics: {
        title: "Logistyka i stabilność dostaw",
        intro: "Zapewniamy stałą dostępność produktów i nieprzerwaną dostawę dzięki:",
        items: [
          "własnym zapasom magazynowym",
          "sprawdzonej logistyce",
          "kontroli partii i regularnym dostawom importowym",
          "doświadczeniu we wdrażaniu produktów w zakładach klientów - od partii testowych do produkcji seryjnej"
        ],
      },
      geography: {
        title: "Geografia klientów",
        text: "Pracujemy z zakładami produkcyjnymi w całej Ukrainie, obejmując różne segmenty przemysłu spożywczego: cukierniczy, mleczarski, napoje, przekąski, produkty mrożone i inne obszary.",
      },
      approach: {
        title: "Nasze podejście",
        text: "Wierzymy, że udany produkt to wynik połączenia dwóch rzeczy: głębokiego zrozumienia procesów technologicznych i elastycznych możliwości produkcyjnych. Dlatego każdemu klientowi oferujemy nie tylko składnik, ale kompleksowe rozwiązanie.",
      },
    },
    sections: {
      company: {
        title: "O firmie",
        text: "MixFood to ukraińska firma specjalizująca się w dostawach aromatów spożywczych, barwników i stabilizatorów. Pracujemy wyłącznie z klientami B2B: producentami żywności, HoReCa i markami własnymi. Oferujemy zarówno gotowe rozwiązania, jak i pomagamy opracować produkty dostosowane do Twojego procesu technologicznego.",
      },
      expertise: {
        title: "Ekspertyza i podejście",
        bullets: [
          "Oficjalny przedstawiciel polskiej marki JAR — jednego z wiodących europejskich producentów aromatów",
          "Pomagamy dobrać odpowiedni aromat do rodzaju produktu, stężenia i zastosowania",
          "Każde zamówienie obejmuje konsultacje techniczne i pomoc we wdrożeniu produktu do procesu",
        ],
      },
      production: {
        title: "Własna produkcja i laboratorium",
        bullets: [
          "Własna baza produkcyjna do wytwarzania i adaptacji aromatów",
          "Własny flaworysta z doświadczeniem w tworzeniu ekskluzywnych receptur",
          "Możliwość tworzenia niestandardowych profili smakowych według specyfikacji klienta",
        ],
      },
      logistics: {
        title: "Logistyka i stabilność dostaw",
        bullets: [
          "Bezpośrednie dostawy z Polski — krótkie terminy i optymalizacja kosztów",
          "Własne magazyny na Ukrainie — dostępność produktów i szybka wysyłka",
          "Sprawdzona logistyka obejmująca wszystkie regiony Ukrainy",
          "Przejrzyste warunki, dokumentacja jakości i pełne wsparcie na każdym etapie współpracy",
        ],
      },
      principle: {
        title: "Nasza zasada działania",
        text: "Pracujemy z tymi, którzy cenią jakość, niezawodność i profesjonalne podejście. Jeśli szukasz partnera, któremu możesz powierzyć swoje aromaty — jesteśmy gotowi do rozmowy o współpracy.",
      },
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
      lead: "Twórzmy razem wyjątkowe produkty. Skontaktuj się i rozpocznij współpracę, która podniesie Twoją produkcję.",
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
      quickResponse: "Szybka odpowiedź",
      whatsappSubtitle: "Czat na żywo",
      telegramSubtitle: "Szybka odpowiedź",
      sendQuickMessage: "Lub wyślij szybką wiadomość",
      yourName: "Twoje imię",
      namePlaceholder: "Jan Kowalski",
      yourEmail: "E-mail",
      yourPhone: "Telefon",
      optional: "opcjonalnie",
      messagePlaceholder: "Opisz swoje potrzeby...",
      cancel: "Anuluj",
      sendMessage: "Wyślij wiadomość",
      dataProtected: "Twoje dane są chronione. Odpowiadamy na wszystkie zapytania w ciągu 2 godzin roboczych.",
      workingHours: "Godziny pracy",
      workingDays: "Pon - Pt",
      workingTime: "9:00 - 17:00",
    },
    footer: {
      rights: "Wszelkie prawa zastrzeżone.",
      services: "Usługi",
      servicesItems: {
        flavorings: "Aromaty spożywcze",
        colorings: "Barwniki",
        stabilizers: "Stabilizatory",
        jar: "Produkty JAR",
      },
      contactCta: "Gotowy omówić swoje potrzeby? Skontaktuj się z naszym zespołem.",
      jarRepresentative: "Oficjalny przedstawiciel JAR na Ukrainie",
    },
    seo: {
      homeTitle: "MixFood - Aromaty, barwniki i stabilizatory spożywcze",
      homeDescription:
        "Dostawca B2B aromatów, barwników i stabilizatorów spożywczych. Oficjalny przedstawiciel JAR na Ukrainie z własną produkcją i laboratorium.",
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
          answer: "MixFood dostarcza aromaty spożywcze, barwniki i stabilizatory dla przemysłu spożywczego. Jesteśmy oficjalnym przedstawicielem polskiej marki JAR i produkujemy również własne aromaty.",
        },
        {
          question: "Czy możecie dostosować aromaty do naszego procesu produkcyjnego?",
          answer: "Tak. Nasze laboratorium i własny flaworysta mogą dostosować każdy aromat do konkretnego procesu technologicznego i stworzyć ekskluzywne receptury.",
        },
        {
          question: "Jak mogę zamówić produkty od MixFood?",
          answer: "Skontaktuj się z nami przez formularz na stronie lub zadzwoń bezpośrednio. Nasz zespół pomoże dobrać produkty, zorganizować partie testowe i zapewnić stabilne dostawy.",
        },
      ],
    },
  },
  uk: {
    nav: { about: "Про нас", news: "Новини", contact: "Контакти" },
    hero: {
      title: "Смакові рішення для вашого виробництва",
      subtitle:
        "B2B-постачання ароматизаторів, барвників та стабілізаторів. Офіційний представник JAR в Україні з власним виробництвом.",
      cta: "Зв'язатися",
    },
    about: {
      title: "Про нас",
      whoWeAre: {
        title: "Хто ми",
        text: "Ми — компанія, що спеціалізується на B2B-поставках харчових ароматизаторів, барвників і стабілізаторів для підприємств харчової промисловості. Ми є офіційним представником польського бренду ароматизаторів JAR в Україні та маємо власні виробничі потужності, що дозволяють створювати ароматизатори з нуля й адаптувати їх під будь-який технологічний процес.",
      },
      team: {
        title: "Команда та експертиза",
        items: [
          "Професійний технолог з великим практичним досвідом у кондитерській галузі та у виробництві сиропів і наповнювачів",
          "Власний флейворист, який постійно розширює лінійку смаків та створює унікальні ароматизатори",
          "Кваліфіковані менеджери, які глибоко розуміють наш асортимент та технології його застосування",
          "Юридичний та фінансовий супровід, що контролює документообіг, сертифікацію, контракти та зовнішньоекономічні операції"
        ],
      },
      production: {
        title: "Виробництво та лабораторія",
        intro: "Ми маємо власну лабораторію, обладнану для:",
        items: [
          "тестування та вдосконалення продуктів",
          "адаптації ароматизаторів під технології клієнта",
          "створення ексклюзивних рецептур, унікальних для конкретного виробництва"
        ],
        outro: "Поєднання експертизи та сучасних технологій дозволяє нам розробляти рішення, які гармонійно інтегруються в будь-яку виробничу рецептуру.",
      },
      logistics: {
        title: "Логістика та стабільність постачання",
        intro: "Ми забезпечуємо постійну наявність продукції та безперебійні поставки завдяки:",
        items: [
          "власним складським запасам",
          "налагодженій логістиці",
          "контролю партій та регулярним імпортним поставкам",
          "досвіду впровадження продукції на виробництвах клієнтів - від тестових партій до серійного запуску"
        ],
      },
      geography: {
        title: "Географія клієнтів",
        text: "Ми працюємо з виробництвами по всій Україні, охоплюючи різні сегменти харчової промисловості: кондитерську, молочну, напої, снеки, заморожені продукти та інші напрямки.",
      },
      approach: {
        title: "Наш підхід",
        text: "Ми віримо, що успішний продукт - це результат поєднання двох речей: глибокого розуміння технологічних процесів та гнучких виробничих можливостей. Тому кожному клієнту ми пропонуємо не просто компонент, а комплексне рішення.",
      },
    },
    sections: {
      company: {
        title: "Про компанію",
        text: "MixFood — українська компанія, що спеціалізується на постачанні харчових ароматизаторів, барвників та стабілізаторів. Ми працюємо виключно з B2B-клієнтами: виробниками продуктів харчування, HoReCa та приватними марками. Пропонуємо як готові рішення, так і допомогу у розробці продукту під ваш технологічний процес.",
      },
      expertise: {
        title: "Експертиза та підхід",
        bullets: [
          "Офіційний представник польського бренду JAR — одного з провідних європейських виробників ароматизаторів",
          "Допомагаємо підібрати правильний ароматизатор під тип продукту, концентрацію та застосування",
          "Кожне замовлення супроводжується технічною консультацією та допомогою в інтеграції продукту в процес",
        ],
      },
      production: {
        title: "Власне виробництво та лабораторія",
        bullets: [
          "Власна виробнича база для виготовлення та адаптації ароматизаторів",
          "Власний флейворист з досвідом створення ексклюзивних рецептур",
          "Можливість створення індивідуальних смакових профілів за специфікацією клієнта",
        ],
      },
      logistics: {
        title: "Логістика та стабільність поставок",
        bullets: [
          "Прямі поставки з Польщі — короткі терміни та оптимізація витрат",
          "Власні склади в Україні — наявність товару та оперативне відвантаження",
          "Налагоджена логістика, що охоплює всі регіони України",
          "Прозорі умови, якісна документація та повний супровід на кожному етапі співпраці",
        ],
      },
      principle: {
        title: "Наш принцип роботи",
        text: "Ми працюємо з тими, хто цінує якість, надійність та професійний підхід. Якщо ви шукаєте партнера, якому можна довірити ваші ароматизатори — ми готові обговорити співпрацю.",
      },
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
      lead: "Створюймо разом продукти, які вражають. Зв'яжіться з нами та розпочніть партнерство, що підніме ваше виробництво.",
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
      quickResponse: "Швидка відповідь",
      whatsappSubtitle: "Миттєвий чат",
      telegramSubtitle: "Швидка відповідь",
      sendQuickMessage: "Або надішліть швидке повідомлення",
      yourName: "Ваше ім'я",
      namePlaceholder: "Іван Петренко",
      yourEmail: "Електронна пошта",
      yourPhone: "Телефонний номер",
      optional: "необов'язково",
      messagePlaceholder: "Розкажіть про ваші потреби...",
      cancel: "Скасувати",
      sendMessage: "Надіслати повідомлення",
      dataProtected: "Ваші дані захищені. Ми відповідаємо на всі запити протягом 2 робочих годин.",
      workingHours: "Години роботи",
      workingDays: "Пн - Пт",
      workingTime: "9:00 - 17:00",
    },
    footer: {
      rights: "Всі права захищені.",
      services: "Послуги",
      servicesItems: {
        flavorings: "Харчові ароматизатори",
        colorings: "Барвники",
        stabilizers: "Стабілізатори",
        jar: "Продукція JAR",
      },
      contactCta: "Готові обговорити ваші потреби? Зв'яжіться з нашою командою.",
      jarRepresentative: "Офіційний представник JAR в Україні",
    },
    seo: {
      homeTitle: "MixFood - Ароматизатори, барвники та стабілізатори",
      homeDescription:
        "B2B-постачальник харчових ароматизаторів, барвників і стабілізаторів. Офіційний представник JAR в Україні з власним виробництвом та лабораторією.",
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
          answer: "MixFood постачає харчові ароматизатори, барвники та стабілізатори для підприємств харчової промисловості. Ми є офіційним представником польського бренду JAR та виробляємо власні ароматизатори.",
        },
        {
          question: "Чи можете адаптувати ароматизатори під наше виробництво?",
          answer: "Так. Наша лабораторія та власний флейворист можуть адаптувати будь-який ароматизатор під ваш технологічний процес та створити ексклюзивні рецептури.",
        },
        {
          question: "Як замовити продукцію від MixFood?",
          answer: "Зв'яжіться з нами через форму на сайті або зателефонуйте напряму. Наша команда допоможе підібрати продукти, організувати тестові партії та забезпечити стабільні поставки.",
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

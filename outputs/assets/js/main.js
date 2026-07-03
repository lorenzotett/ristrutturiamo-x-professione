const WHATSAPP_URL = "https://wa.me/393315691636?text=Ciao%2C%20vorrei%20ricevere%20informazioni%20per%20un%20lavoro%20di%20ristrutturazione.";
const PHONE_URL = "tel:+393315691636";
const REVIEWS_URL = "https://www.google.com/search?sa=X&sca_esv=223d83bb33233bc3&rlz=1C1ONGR_itIT1053IT1053&sxsrf=APpeQnvj5803VjnVBFjkcPHPDB9aQLZm4Q:1783062480509&q=Ristrutturiamo+X+Professione+Recensioni&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDE0NTGwNDQ0MTc1szQ2M7cwMtvAyPiKUT0os7ikqLSkpLQoMzE3XyFCIaAoPy21uDgzPy9VISg1OTUPxMxcxEqsSgAeQeRrbwAAAA&rldimm=14154091147569367826&tbm=lcl&hl=it-ES&ved=2ahUKEwiDgY2u-bWVAxVIKvsDHQdhD6wQ9fQKegQIQhAG&biw=1197&bih=508&dpr=1.61#lkt=LocalPoiReviews";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=100088673796690";
const INSTAGRAM_URL = "https://www.instagram.com/ristrutturiamo_x_professione?fbclid=IwY2xjawS0P1FleHRuA2FlbQIxMABicmlkETBmOFNHYk1zSHN0SEp4RWtGc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHpoqGQ7DQ3stdspaa2eAiihQ5xiPwxZ9OYVA-c5YHel-vaJgmPJvQBlGdf3d_aem_FoiPD_0f7io-esWfpt5mqA";
const TIKTOK_URL = "https://www.tiktok.com/@ristrutturiamoxprofessio";

const navItems = [
  { href: "index.html", label: "Home", id: "home" },
  { href: "chi-siamo.html", label: "Chi siamo", id: "chi-siamo" },
  {
    href: "servizi.html",
    label: "Servizi",
    id: "servizi",
    children: [
      ["servizi.html#ristrutturazioni-complete", "Ristrutturazioni complete"],
      ["servizi.html#appartamenti", "Appartamenti"],
      ["servizi.html#bagni-cucine", "Bagni e cucine"],
      ["servizi.html#impianti", "Impianti e opere interne"],
      ["servizi.html#pavimenti", "Pavimenti e rivestimenti"],
      ["servizi.html#finiture", "Cartongesso e finiture"]
    ]
  },
  { href: "ristrutturazioni-chiavi-in-mano.html", label: "Chiavi in mano", id: "chiavi-in-mano" },
  { href: "progetti.html", label: "Progetti", id: "progetti" },
  { href: "contatti.html", label: "Contatti", id: "contatti" }
];

const chatKnowledge = [
  {
    triggers: ["servizi", "cosa fate", "lavori", "ristrutturazioni", "ristrutturazione", "manutenzione"],
    q: "Che lavori fate?",
    a: "Ci occupiamo di ristrutturazioni complete, appartamenti, bagni, cucine, impianti, pavimenti, rivestimenti, cartongesso, pittura, finiture e manutenzioni.",
    action: ["Vedi tutti i servizi", "servizi.html"]
  },
  {
    triggers: ["chiavi", "stress", "completo", "dalla a alla z", "referente"],
    q: "Come funziona il chiavi in mano?",
    a: "Il servizio chiavi in mano segue il progetto dalla prima valutazione alla consegna: sopralluogo, organizzazione delle lavorazioni, gestione del cantiere e coordinamento dei professionisti.",
    action: ["Scopri il chiavi in mano", "ristrutturazioni-chiavi-in-mano.html"]
  },
  {
    triggers: ["whatsapp", "contatto", "informazioni", "preventivo", "messaggio", "parlare"],
    q: "Come posso contattarvi?",
    a: "Il contatto più rapido è WhatsApp. Puoi descrivere il lavoro, indicare la zona dell'immobile e allegare foto o video dello stato attuale.",
    action: ["Scrivi su WhatsApp", WHATSAPP_URL]
  },
  {
    triggers: ["telefono", "chiamare", "numero", "cellulare"],
    q: "Posso chiamarvi?",
    a: "Sì, puoi chiamare direttamente il numero +39 331 569 1636 durante gli orari di apertura.",
    action: ["Chiama ora", PHONE_URL]
  },
  {
    triggers: ["napoli", "zona", "dove", "indirizzo", "sede"],
    q: "Dove lavorate?",
    a: "Il riferimento è Napoli e provincia. La sede è in Traversa Cavalleggeri D'Aosta, 20, 80124 Napoli NA.",
    action: ["Apri la pagina contatti", "contatti.html"]
  },
  {
    triggers: ["video", "foto", "mandare", "inviare", "allegare"],
    q: "Posso mandarvi foto o video?",
    a: "Certo. Foto e video aiutano a capire meglio lo stato dello spazio prima di fissare il passaggio successivo.",
    action: ["Invia su WhatsApp", WHATSAPP_URL]
  },
  {
    triggers: ["recensioni", "google", "clienti", "fiducia"],
    q: "Dove trovo le recensioni?",
    a: "Puoi leggere le recensioni Google per vedere le esperienze dei clienti e capire il nostro modo di lavorare.",
    action: ["Leggi le recensioni", REVIEWS_URL]
  },
  {
    triggers: ["orari", "aperti", "sabato", "domenica", "quando"],
    q: "Quali sono gli orari?",
    a: "Siamo aperti dal lunedì al venerdì 08:00-18:30, sabato 08:00-16:00. Domenica chiuso.",
    action: ["Vai ai contatti", "contatti.html"]
  },
  {
    triggers: ["sopralluogo", "valutazione", "iniziare", "primo passo"],
    q: "Serve un sopralluogo?",
    a: "Per lavori di ristrutturazione è consigliato. Prima puoi inviare una descrizione con foto o video; poi si valuta il passaggio successivo.",
    action: ["Richiedi informazioni", WHATSAPP_URL]
  },
  {
    triggers: ["costo", "costi", "prezzo", "prezzi", "quanto costa", "preventivo"],
    q: "Quanto costa una ristrutturazione?",
    a: "Non usiamo prezzi standard perché ogni immobile è diverso. Materiali, stato dei luoghi, lavorazioni e finiture cambiano la valutazione.",
    action: ["Parliamone su WhatsApp", WHATSAPP_URL]
  },
  {
    triggers: ["bagno", "bagni", "cucina", "cucine"],
    q: "Ristrutturate bagni e cucine?",
    a: "Sì. Seguiamo bagni e cucine con attenzione a impianti, rivestimenti, posa, pendenze, funzionalità e finitura estetica.",
    action: ["Vedi bagni e cucine", "servizi.html#bagni-cucine"]
  },
  {
    triggers: ["commerciale", "negozio", "locale", "ufficio", "azienda"],
    q: "Gestite anche spazi commerciali?",
    a: "Sì. Lavoriamo su abitazioni, appartamenti e ambienti commerciali, con attenzione a funzionalità, immagine e coordinamento del cantiere.",
    action: ["Richiedi informazioni", WHATSAPP_URL]
  },
  {
    triggers: ["chi siete", "azienda", "storia", "metodo", "luigi", "intervista"],
    q: "Dove posso conoscere meglio l'azienda?",
    a: "Nella pagina Chi siamo trovi il metodo di lavoro, il video intervista e una sezione visuale con trasformazioni prima e dopo.",
    action: ["Vai a Chi siamo", "chi-siamo.html"]
  },
  {
    triggers: ["social", "instagram", "facebook", "tiktok", "prima dopo", "prima/dopo", "cantieri", "galleria lavori"],
    q: "Dove vedo lavori prima e dopo?",
    a: "Per vedere lavori, cantieri, video e trasformazioni prima/dopo ti conviene aprire i profili social ufficiali. Instagram e TikTok sono i canali più immediati per i contenuti visuali.",
    action: ["Apri Instagram", INSTAGRAM_URL]
  }
];

const quickQuestions = [
  "Che lavori fate?",
  "Come funziona il chiavi in mano?",
  "Posso mandarvi foto o video?",
  "Quanto costa una ristrutturazione?",
  "Dove vedo lavori prima e dopo?",
  "Dove vi trovo?",
  "Quali sono gli orari?"
];

const icon = (name) => {
  const icons = {
    home: '<svg viewBox="0 0 24 24"><path d="M3 11.5 12 4l9 7.5"/><path d="M5 10.5V20h14v-9.5"/><path d="M9 20v-6h6v6"/></svg>',
    ruler: '<svg viewBox="0 0 24 24"><path d="m4 18 14-14 2 2L6 20z"/><path d="m7 15 2 2"/><path d="m10 12 2 2"/><path d="m13 9 2 2"/></svg>',
    key: '<svg viewBox="0 0 24 24"><circle cx="8" cy="15" r="4"/><path d="m11 12 8-8"/><path d="m17 6 2 2"/><path d="m14.5 8.5 2 2"/></svg>',
    tool: '<svg viewBox="0 0 24 24"><path d="M14.7 6.3a4 4 0 0 0-5 5L4 17v3h3l5.7-5.7a4 4 0 0 0 5-5l-2.5 2.5-2-2z"/></svg>',
    tile: '<svg viewBox="0 0 24 24"><path d="M4 4h7v7H4z"/><path d="M13 4h7v7h-7z"/><path d="M4 13h7v7H4z"/><path d="M13 13h7v7h-7z"/></svg>',
    finish: '<svg viewBox="0 0 24 24"><path d="M4 20h16"/><path d="M6 16 18 4"/><path d="m14 4 6 6"/><path d="M5 15l4 4"/></svg>',
    phone: '<svg viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
    map: '<svg viewBox="0 0 24 24"><path d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3z"/><path d="M9 3v15"/><path d="M15 6v15"/></svg>',
    instagram: '<svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="12" cy="12" r="3.5"/><path d="M17.2 6.8h.01"/></svg>',
    facebook: '<svg viewBox="0 0 24 24"><path d="M14 8h2V4h-2a5 5 0 0 0-5 5v3H7v4h2v4h4v-4h3l1-4h-4V9a1 1 0 0 1 1-1z"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24"><path d="M14 4v10.2a4.8 4.8 0 1 1-4-4.7"/><path d="M14 4c.8 3 2.7 4.8 6 5"/></svg>',
    external: '<svg viewBox="0 0 24 24"><path d="M7 17 17 7"/><path d="M9 7h8v8"/></svg>',
    ai: '<svg viewBox="0 0 24 24"><path d="M12 3l1.7 5.1L19 10l-5.3 1.9L12 17l-1.7-5.1L5 10l5.3-1.9z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/><path d="M5 15l.7 1.8L7.5 17.5l-1.8.7L5 20l-.7-1.8-1.8-.7 1.8-.7z"/></svg>'
  };
  return icons[name] || icons.tool;
};

const renderSocialButtons = (className = "social-link-buttons") => `
  <div class="${className}" aria-label="Profili social con lavori e prima dopo">
    ${socialLinks.map((social) => `
      <a href="${social.href}" target="_blank" rel="noopener" aria-label="${social.name}: guarda lavori e prima dopo">
        <span class="social-icon">${icon(social.icon)}</span>
        <span>${social.name}</span>
      </a>
    `).join("")}
  </div>
`;

const renderNav = (page) => navItems.map((item) => {
  const active = page === item.id ? " active" : "";
  if (!item.children) {
    return `<a href="${item.href}" class="nav-link${active}">${item.label}</a>`;
  }

  return `
    <div class="nav-dropdown${active}">
      <a href="${item.href}" class="nav-link${active}" aria-haspopup="true">${item.label}</a>
      <button class="submenu-toggle" type="button" aria-label="Apri sottomenu servizi" aria-expanded="false">⌄</button>
      <div class="submenu" role="menu">
        ${item.children.map(([href, label]) => `<a href="${href}" role="menuitem">${label}</a>`).join("")}
      </div>
    </div>
  `;
}).join("");

const footerLinks = navItems.flatMap((item) => [
  [item.href, item.label],
  ...(item.children || [])
]);

const socialLinks = [
  { name: "Instagram", handle: "@ristrutturiamo_x_professione", href: INSTAGRAM_URL, icon: "instagram" },
  { name: "Facebook", handle: "Ristrutturiamo X Professione", href: FACEBOOK_URL, icon: "facebook" },
  { name: "TikTok", handle: "@ristrutturiamoxprofessio", href: TIKTOK_URL, icon: "tiktok" }
];

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page || "home";
  const header = document.querySelector("[data-header]");
  const footer = document.querySelector("[data-footer]");

  if (header) {
    header.innerHTML = `
      <div class="site-header">
        <div class="container header-inner">
          <a class="brand" href="index.html" aria-label="Ristrutturiamo X Professione">
            <img src="assets/images/logo-ristrutturiamo-x-professione.jpg" width="64" height="64" alt="Logo Ristrutturiamo X Professione S.R.L.">
            <span class="brand-text">
              <span class="brand-name">Ristrutturiamo X Professione</span>
              <span class="brand-sub">S.R.L.</span>
            </span>
          </a>
          <nav class="main-nav" id="main-nav" aria-label="Navigazione principale">
            ${renderNav(page)}
            <div class="mobile-social-block">
              <span>Guarda lavori e prima/dopo</span>
              ${renderSocialButtons("mobile-social-buttons")}
            </div>
          </nav>
          <div class="header-actions">
            ${renderSocialButtons("header-socials")}
            <a class="btn btn-primary" href="${WHATSAPP_URL}" target="_blank" rel="noopener">Parla con noi</a>
            <button class="menu-toggle" type="button" aria-label="Apri menu" aria-controls="main-nav" aria-expanded="false">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </div>
    `;
  }

  if (footer) {
    footer.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-grid">
            <div>
              <img class="footer-logo" src="assets/images/logo-ristrutturiamo-x-professione.jpg" width="86" height="86" loading="lazy" decoding="async" alt="Logo Ristrutturiamo X Professione S.R.L.">
              <p>Ristrutturiamo X Professione S.R.L. accompagna privati e aziende nella realizzazione di lavori edili, ristrutturazioni e progetti chiavi in mano, con attenzione alla qualità, ai dettagli e alla gestione completa del cantiere.</p>
            </div>
            <div>
              <div class="footer-title">Contatti</div>
              <div class="footer-links">
                <a href="https://www.google.com/maps/search/?api=1&query=Traversa%20Cavalleggeri%20D%27Aosta%2C%2020%2C%2080124%20Napoli%20NA" target="_blank" rel="noopener">Traversa Cavalleggeri D'Aosta, 20, Napoli</a>
                <a href="${PHONE_URL}">+39 331 569 1636</a>
                <a href="${WHATSAPP_URL}" target="_blank" rel="noopener">WhatsApp diretto</a>
                <a href="${REVIEWS_URL}" target="_blank" rel="noopener">Recensioni Google</a>
              </div>
            </div>
            <div>
              <div class="footer-title">Pagine e servizi</div>
              <div class="footer-links">
                ${footerLinks.slice(0, 10).map(([href, label]) => `<a href="${href}">${label}</a>`).join("")}
              </div>
            </div>
            <div>
              <div class="footer-title">Social e orari</div>
              <div class="footer-social-compact">
                ${renderSocialButtons("social-link-buttons")}
              </div>
              <div class="social-links">
                <span>Lun-Ven 08:00-18:30</span>
                <span>Sabato 08:00-16:00</span>
              </div>
            </div>
          </div>
          <div class="footer-copy">
            <span>© ${new Date().getFullYear()} Ristrutturiamo X Professione S.R.L. Tutti i diritti riservati.</span>
            <a href="${WHATSAPP_URL}" target="_blank" rel="noopener">Realizziamo i tuoi sogni</a>
          </div>
        </div>
      </footer>
    `;
  }

  document.querySelectorAll("[data-wa]").forEach((link) => link.setAttribute("href", WHATSAPP_URL));
  document.querySelectorAll("[data-phone]").forEach((link) => link.setAttribute("href", PHONE_URL));
  document.querySelectorAll("[data-reviews]").forEach((link) => link.setAttribute("href", REVIEWS_URL));
  document.querySelectorAll("[data-icon]").forEach((node) => {
    node.innerHTML = icon(node.dataset.icon);
  });

  mountNavigation();
  mountChatbot();
  mountRevealAnimations();
});

function mountNavigation() {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const expanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("is-open");
    });
  }

  document.querySelectorAll(".submenu-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const parent = button.closest(".nav-dropdown");
      const expanded = button.getAttribute("aria-expanded") === "true";
      document.querySelectorAll(".nav-dropdown.is-open").forEach((node) => {
        if (node !== parent) {
          node.classList.remove("is-open");
          node.querySelector(".submenu-toggle")?.setAttribute("aria-expanded", "false");
        }
      });
      button.setAttribute("aria-expanded", String(!expanded));
      parent?.classList.toggle("is-open", !expanded);
    });
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".nav-dropdown")) {
      document.querySelectorAll(".nav-dropdown.is-open").forEach((node) => {
        node.classList.remove("is-open");
        node.querySelector(".submenu-toggle")?.setAttribute("aria-expanded", "false");
      });
    }
  });
}

function mountRevealAnimations() {
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });
    reveals.forEach((node) => observer.observe(node));
  } else {
    reveals.forEach((node) => node.classList.add("is-visible"));
  }
}

function normalizeText(value) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function findResponse(input) {
  const normalized = normalizeText(input);
  const direct = chatKnowledge.find((item) => normalizeText(item.q) === normalized);
  if (direct) return direct;

  return chatKnowledge.find((item) => item.triggers.some((trigger) => normalized.includes(normalizeText(trigger)))) || {
    q: input,
    a: "Posso aiutarti su servizi, chiavi in mano, contatti, orari, recensioni, foto o video da inviare. Per un lavoro specifico, il modo più rapido è scriverci su WhatsApp con una breve descrizione e qualche immagine.",
    action: ["Scrivi su WhatsApp", WHATSAPP_URL]
  };
}

function renderChatAnswer(thread, userText) {
  const item = findResponse(userText);
  const external = item.action[1].startsWith("http");
  thread.innerHTML = `
    <div class="user-message">${userText}</div>
    <div class="bot-message">${item.a}</div>
    <a class="chatbot-answer-link" href="${item.action[1]}" ${external ? 'target="_blank" rel="noopener"' : ""}>${item.action[0]}</a>
  `;
}

function mountChatbot() {
  const host = document.createElement("aside");
  host.className = "chatbot";
  host.setAttribute("aria-label", "Assistente contatti");
  host.innerHTML = `
    <button class="chatbot-fab" type="button" aria-expanded="false" aria-controls="chatbot-panel">
      <span class="ai-mark">${icon("ai")}<em>AI</em></span>
      <strong>Assistente AI</strong>
    </button>
    <div class="chatbot-panel" id="chatbot-panel" hidden>
      <div class="chatbot-head">
        <div>
          <span class="ai-label"><span>${icon("ai")}</span> Assistente AI</span>
          <h2>Ciao, come possiamo aiutarti?</h2>
        </div>
        <button class="chatbot-close" type="button" aria-label="Chiudi chat">×</button>
      </div>
      <div class="chatbot-thread" aria-live="polite">
        <div class="bot-message">Scrivi una domanda oppure scegli un argomento. Ti rispondo con le informazioni presenti nel sito e ti porto alla pagina giusta.</div>
      </div>
      <form class="chatbot-form">
        <label class="sr-only" for="site-chat-question">Scrivi una domanda</label>
        <input id="site-chat-question" name="question" type="text" autocomplete="off" placeholder="Es. fate bagni e cucine?">
        <button type="submit">Invia</button>
      </form>
      <div class="chatbot-questions">
        ${quickQuestions.map((question) => `<button type="button" data-chat-question="${question}">${question}</button>`).join("")}
      </div>
      <div class="chatbot-direct">
        <a class="btn btn-primary" href="${WHATSAPP_URL}" target="_blank" rel="noopener">WhatsApp</a>
        <a class="btn btn-secondary" href="${PHONE_URL}">Telefono</a>
      </div>
    </div>
  `;
  document.body.appendChild(host);

  const fab = host.querySelector(".chatbot-fab");
  const panel = host.querySelector(".chatbot-panel");
  const close = host.querySelector(".chatbot-close");
  const thread = host.querySelector(".chatbot-thread");
  const form = host.querySelector(".chatbot-form");
  const input = host.querySelector("#site-chat-question");

  const setOpen = (open) => {
    panel.hidden = !open;
    fab.setAttribute("aria-expanded", String(open));
    host.classList.toggle("is-open", open);
    if (open) {
      setTimeout(() => input.focus(), 80);
    }
  };

  fab.addEventListener("click", () => setOpen(panel.hidden));
  close.addEventListener("click", () => setOpen(false));

  host.querySelectorAll("[data-chat-question]").forEach((button) => {
    button.addEventListener("click", () => {
      const question = button.dataset.chatQuestion;
      renderChatAnswer(thread, question);
      input.value = "";
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const question = input.value.trim();
    if (!question) return;
    renderChatAnswer(thread, question);
    input.value = "";
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !panel.hidden) {
      setOpen(false);
      fab.focus();
    }
  });
}

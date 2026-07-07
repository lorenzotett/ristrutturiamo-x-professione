# Gestione rapida del sito

## Link e contatti

Modifica i link principali in `assets/js/main.js`, all'inizio del file:

- `WHATSAPP_URL`
- `PHONE_URL`
- `REVIEWS_URL`
- `FACEBOOK_URL`
- `INSTAGRAM_URL`
- `TIKTOK_URL`

## Menu, sottomenu e flussi

Sempre in `assets/js/main.js`:

- `navItems` gestisce menu e sottomenu servizi.
- `flowLinks` gestisce il percorso rapido: servizi, lavori, WhatsApp, contatto.
- `chatKnowledge` gestisce domande e risposte della chat.
- `quickQuestions` gestisce i pulsanti veloci della chat.

## Foto, video e prima/dopo

Gli asset sono in `assets/images` e `assets/videos`.

Le foto reali dei lavori sono in `assets/images/lavori-reali`. Prima di caricare nuove foto, convertili in WebP e tienili leggeri: circa 80-180 KB per immagine e larghezza massima 1400-1600 px.

Per sostituire una foto prima/dopo, mantieni lo stesso nome file oppure aggiorna il riferimento nelle pagine `chi-siamo.html` e `progetti.html`.

## Pagine principali

- `index.html`: Home e flusso principale.
- `chi-siamo.html`: azienda, video, prima/dopo.
- `servizi.html`: lista servizi e ancore del sottomenu.
- `ristrutturazioni-chiavi-in-mano.html`: processo chiavi in mano.
- `progetti.html`: galleria e social lavori.
- `contatti.html`: recapiti, orari, social e contatto.

## Stile

Tutto lo stile è in `assets/css/styles.css`.

Le sezioni riutilizzabili più importanti sono:

- `.flow-grid` e `.flow-card`
- `.mobile-quickbar`
- `.social-spotlight`
- `.service-card`
- `.chatbot`

# Ristrutturiamo X Professione S.R.L.

Sito statico multipagina per Ristrutturiamo X Professione S.R.L.

## Struttura

- `outputs/index.html` - Home
- `outputs/chi-siamo.html` - Chi siamo con video e prima/dopo
- `outputs/servizi.html` - Servizi con ancore dirette
- `outputs/ristrutturazioni-chiavi-in-mano.html` - Chiavi in mano
- `outputs/progetti.html` - Progetti
- `outputs/contatti.html` - Contatti
- `outputs/assets/` - CSS, JS, immagini e video

## Deploy Vercel

Il progetto è configurato come sito statico. Per Vercel usa `outputs` come root directory del progetto.

Impostazioni consigliate:

- Framework Preset: Other
- Build Command: vuoto
- Root Directory: `outputs`
- Output Directory: vuoto

Il dominio può essere collegato successivamente dal pannello Vercel.

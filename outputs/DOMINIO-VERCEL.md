# Collegamento dominio su Vercel

## Progetto Vercel

- Team/account: `ristrutturiamoxprofessione`
- Progetto: `ristrutturiamo-x-professione`
- Dominio principale: `https://www.ristrutturiamoxprofessione.com`
- Redirect attivo: `https://ristrutturiamoxprofessione.com` -> `https://www.ristrutturiamoxprofessione.com`
- URL Vercel di servizio: `https://ristrutturiamo-x-professione-zeta.vercel.app`

## Collegare il dominio

1. Apri il progetto su Vercel:
   `https://vercel.com/ristrutturiamoxprofessione/ristrutturiamo-x-professione`
2. Vai in `Settings` -> `Domains`.
3. Inserisci il dominio, per esempio `ristrutturiamoxprofessione.com`.
4. Vercel mostrerà i record DNS da configurare.
5. Nel pannello del provider del dominio aggiungi i record richiesti.

## DNS consigliati

Per dominio principale:

```text
Tipo: A
Nome: @
Valore: 76.76.21.21
```

Per `www`:

```text
Tipo: CNAME
Nome: www
Valore: cname.vercel-dns.com
```

## Dopo il collegamento

Quando Vercel indica dominio verificato:

1. Imposta il dominio principale come `Primary Domain`.
2. Attiva redirect automatico da `www` a dominio principale, oppure il contrario.
3. Aggiorna `robots.txt` e `sitemap.xml` sostituendo l'URL Vercel con il dominio definitivo.
4. Ridistribuisci il sito.

## Stato attuale

Il dominio definitivo è già impostato nella sitemap:

```text
https://www.ristrutturiamoxprofessione.com
```

## Comando deploy manuale

Dalla cartella del progetto:

```powershell
vercel deploy outputs --prod --yes --scope ristrutturiamoxprofessione
```

## File principali

- `vercel.json`: configurazione Vercel, URL puliti, cache asset e header sicurezza.
- `robots.txt`: indicizzazione motori di ricerca.
- `sitemap.xml`: pagine da inviare a Google Search Console.
- `GESTIONE-SITO.md`: guida per modificare testi, link, flussi e asset.

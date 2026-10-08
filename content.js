/* CONTENUTI DELLA GUIDA - l'unico file da modificare per aggiornare i testi.
   Ogni testo e' {it: "...", en: "..."}. Niente codici di accesso qui: il repo e' pubblico.
   Le voci marcate TODO aspettano un dato da Alessio. */
window.GUIDA = {
  meta: {
    titoloPagina: { it: "Loft Via della Stufa - Guida ospiti", en: "Loft Via della Stufa - Guest guide" },
    kicker: { it: "Guida ospiti · Prato", en: "Guest guide · Prato" },
    titolo: { it: "Benvenuti<b>in Via della Stufa</b>", en: "Welcome<b>to Via della Stufa</b>" },
    sottotitolo: {
      it: "Tutto quello che serve per il soggiorno nel loft, dall'arrivo alla partenza, con i nostri consigli su Prato.",
      en: "Everything you need for your stay at the loft, from arrival to departure, plus our tips on Prato.",
    },
    indirizzo: "Via della Stufa 2, 59100 Prato PO",
    firma: {
      it: '<div class="firma">Buon soggiorno!</div>Alessio ed Eva · Via della Stufa 2, Prato<br>CIN IT100005C2NGNGLKP9',
      en: '<div class="firma">Enjoy your stay!</div>Alessio and Eva · Via della Stufa 2, Prato<br>CIN IT100005C2NGNGLKP9',
    },
  },

  wifi: { rete: "Vodafone-C00000051", password: "6KGRsrCfsYgsMfPT" },

  contatti: [
    // TODO: numeri in formato internazionale (+39...). Senza numero compare "scrivici dall'app Airbnb".
    { nome: "Alessio", ruolo: { it: "Host", en: "Host" }, telefono: "" },
    { nome: "Eva", ruolo: { it: "Co-host, accoglienza", en: "Co-host, check-in" }, telefono: "" },
  ],

  ui: {
    salta: { it: "Vai ai contenuti", en: "Skip to content" },
    copiato: { it: "Copiato!", en: "Copied!" },
    rete: { it: "Rete", en: "Network" },
    password: { it: "Password", en: "Password" },
    copiaPassword: { it: "Copia password", en: "Copy password" },
    qrWifiAlt: { it: "QR code per connettersi al Wi-Fi", en: "QR code to join the Wi-Fi" },
    chiama: { it: "Chiama", en: "Call" },
    mappa: { it: "Mappa", en: "Map" },
    scriviApp: { it: "Scrivici dall'app Airbnb", en: "Message us in the Airbnb app" },
    filtra: { it: "Filtra per categoria", en: "Filter by category" },
    tutti: { it: "Tutto", en: "All" },
    preferito: { it: "Il nostro preferito", en: "Our favourite" },
    apriMappa: { it: "Apri in Maps", en: "Open in Maps" },
    sito: { it: "Sito", en: "Website" },
  },

  sezioni: [
    // ------------------------------------------------------------ ARRIVO
    {
      id: "arrivo",
      titolo: { it: "Arrivo", en: "Arrival" },
      intro: {
        it: "Ti accogliamo di persona: scrivici sull'app Airbnb l'orario previsto di arrivo, così ci facciamo trovare all'ingresso.",
        en: "We welcome you in person: send us your expected arrival time in the Airbnb app and we'll meet you at the door.",
      },
      blocchi: [
        {
          tipo: "fatti",
          items: [
            { etichetta: { it: "Check-in", en: "Check-in" }, valore: "15:00 - 19:30", nota: { it: "Accoglienza di persona", en: "Personal welcome" } },
            { etichetta: { it: "Check-out", en: "Check-out" }, valore: { it: "entro le 10:00", en: "by 10:00" } },
            {
              etichetta: { it: "Arrivo in tarda serata", en: "Late arrival" },
              valore: { it: "fino alle 23:00", en: "until 23:00" },
              nota: { it: "Supplemento di 30 €, da concordare prima", en: "30 € surcharge, to be arranged in advance" },
              largo: true,
            },
            {
              etichetta: { it: "Indirizzo", en: "Address" },
              valore: "Via della Stufa 2, Prato",
              nota: { it: "Secondo piano, senza ascensore", en: "Second floor, no lift" },
              largo: true,
            },
          ],
        },
        {
          tipo: "bottoni",
          items: [
            { etichetta: { it: "Apri in Google Maps", en: "Open in Google Maps" }, href: "https://www.google.com/maps/search/?api=1&query=Via+della+Stufa+2%2C+59100+Prato", icona: "pin", esterno: true },
          ],
        },
        {
          tipo: "card",
          blu: true,
          html: {
            it: "<strong>Le scale.</strong> L'appartamento è al secondo piano di un palazzo storico, senza ascensore. Se hai valigie pesanti dillo pure: ti diamo una mano.",
            en: "<strong>Stairs.</strong> The flat is on the second floor of a historic building, with no lift. If you have heavy luggage just tell us and we'll help.",
          },
        },
        { tipo: "h3", testo: { it: "Come arrivare", en: "Getting here" } },
        {
          tipo: "fisarmonica",
          id: "arrivare",
          items: [
            {
              icona: "🚆",
              titolo: { it: "In treno da Firenze", en: "By train from Florence" },
              testo: {
                it: "<p>Da Firenze Santa Maria Novella i regionali arrivano in <strong>22-25 minuti</strong> a <strong>Prato Porta al Serraglio</strong>, la stazione più vicina: da lì sono <strong>4 minuti a piedi</strong>. Biglietto da circa 3 €, treni frequenti fino a sera.</p><p>Molti treni fermano anche a Prato Centrale, a circa 18 minuti a piedi o pochi minuti di taxi.</p>",
                en: "<p>From Florence Santa Maria Novella, regional trains reach <strong>Prato Porta al Serraglio</strong> in <strong>22-25 minutes</strong>. It's the closest station: <strong>4 minutes on foot</strong> from the flat. Tickets from about €3, frequent trains until the evening.</p><p>Many trains also stop at Prato Centrale, about 18 minutes' walk or a short taxi ride away.</p>",
              },
            },
            {
              icona: "✈️",
              titolo: { it: "Dagli aeroporti", en: "From the airports" },
              testo: {
                it: "<p><strong>Firenze (Peretola)</strong>: bus <strong>R1</strong> di Autolinee Toscane dalla fermata \"T2 Guidoni\" fino a Prato Stazione FS, circa 35 minuti. In alternativa tramvia T2 fino a Santa Maria Novella e poi treno (circa 1 ora in tutto). In taxi sono circa 20-25 minuti.</p><p><strong>Pisa</strong>: Pisa Mover fino a Pisa Centrale, poi treno per Prato, di solito con cambio a Firenze: 1h30-2h.</p><p><strong>Bologna</strong>: Marconi Express fino a Bologna Centrale, poi regionale diretto per Prato Centrale (circa 1 ora).</p>",
                en: "<p><strong>Florence (Peretola)</strong>: Autolinee Toscane bus <strong>R1</strong> from the \"T2 Guidoni\" stop to Prato Stazione FS, about 35 minutes. Or take tram T2 to Santa Maria Novella and then the train (about 1 hour in total). A taxi takes about 20-25 minutes.</p><p><strong>Pisa</strong>: Pisa Mover to Pisa Centrale, then a train to Prato, usually changing in Florence: 1h30-2h.</p><p><strong>Bologna</strong>: Marconi Express to Bologna Centrale, then a direct regional train to Prato Centrale (about 1 hour).</p>",
              },
            },
            {
              icona: "🚗",
              titolo: { it: "In auto: attenzione alla ZTL", en: "By car: watch out for the ZTL" },
              testo: {
                // Tariffe Serraglio dalla pagina Consiag (letta l'08/10/2026): https://www.consiagservizicomuni.it/pagina136238_serraglio.html/
                it: "<p>Autostrada A11, uscita <strong>Prato Est</strong>. L'appartamento <strong>non ha parcheggio</strong>.</p><p>Via della Stufa è dentro le mura, nella <strong>zona a traffico limitato</strong>: dalle <strong>7:30 alle 18:30, tutti i giorni</strong>, non si entra in auto, e ai varchi ci sono telecamere che fanno partire la multa in automatico. Lascia l'auto fuori dalle mura e arriva a piedi.</p><p><strong>Il parcheggio che consigliamo: Serraglio</strong>, il parcheggio coperto della stazione Porta al Serraglio in Viale Galilei, a <strong>2 minuti a piedi</strong>. Si raggiunge senza entrare nella ZTL, è sorvegliato e aperto 24 ore su 24.</p><ul class=\"punti\"><li>Giornata intera: <strong>6 €</strong></li><li>Abbonamento settimanale: <strong>22 €</strong></li><li>Solo la notte (18-8): <strong>1 €</strong></li></ul><p><a href=\"https://www.consiagservizicomuni.it/pagina136238_serraglio.html/\" target=\"_blank\" rel=\"noopener\">Tariffe aggiornate sul sito del gestore</a></p><p>In alternativa: Piazza Mercatale (circa 8 minuti a piedi) o Piazzale Ebensee (circa 10 minuti). Nelle strisce blu si paga dalle 8 alle 20.</p>",
                en: "<p>A11 motorway, exit <strong>Prato Est</strong>. The flat has <strong>no parking</strong>.</p><p>Via della Stufa is inside the city walls, in the <strong>limited traffic zone (ZTL)</strong>: from <strong>7:30 to 18:30, every day</strong>, cars may not enter, and cameras at the gates issue fines automatically. Park outside the walls and walk in.</p><p><strong>Our recommended car park: Serraglio</strong>, the covered car park at Porta al Serraglio station on Viale Galilei, <strong>2 minutes on foot</strong>. You can reach it without entering the ZTL; it's supervised and open 24/7.</p><ul class=\"punti\"><li>Full day: <strong>€6</strong></li><li>Weekly pass: <strong>€22</strong></li><li>Overnight only (18-8): <strong>€1</strong></li></ul><p><a href=\"https://www.consiagservizicomuni.it/pagina136238_serraglio.html/\" target=\"_blank\" rel=\"noopener\">Current prices on the operator's website</a></p><p>Alternatives: Piazza Mercatale (about 8 minutes' walk) or Piazzale Ebensee (about 10 minutes). Blue-line street parking is paid from 8:00 to 20:00.</p>",
              },
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------ CASA
    {
      id: "casa",
      titolo: { it: "La casa", en: "The flat" },
      intro: {
        it: "Travi in legno, molta luce e tutto il necessario per sentirsi a casa: una camera matrimoniale, cucina completa, soggiorno e una postazione di lavoro.",
        en: "Wooden beams, lots of light and everything you need to feel at home: a double bedroom, full kitchen, living room and a workspace.",
      },
      blocchi: [
        {
          tipo: "galleria",
          items: [
            { img: "salotto", alt: { it: "Soggiorno", en: "Living room" } },
            { img: "camera", alt: { it: "Camera matrimoniale", en: "Double bedroom" } },
            { img: "cucina", alt: { it: "Cucina", en: "Kitchen" } },
            { img: "bagno", alt: { it: "Bagno", en: "Bathroom" } },
            { img: "studio", alt: { it: "Postazione di lavoro", en: "Workspace" } },
            { img: "tavola", alt: { it: "Zona pranzo", en: "Dining area" } },
          ],
        },
        { tipo: "h3", testo: { it: "Wi-Fi", en: "Wi-Fi" } },
        {
          tipo: "testo",
          html: {
            it: '<p class="muted">Inquadra il QR con la fotocamera del telefono e tocca <em>Connetti</em>, oppure copia la password.</p>',
            en: '<p class="muted">Point your phone camera at the QR code and tap <em>Join</em>, or copy the password.</p>',
          },
        },
        { tipo: "wifi", id: "casa-wifi" },
        { tipo: "h3", testo: { it: "Come funziona", en: "How things work" } },
        {
          tipo: "fisarmonica",
          items: [
            {
              icona: "🔥",
              titolo: { it: "Cucina e piano cottura", en: "Kitchen and hob" },
              testo: {
                it: "<p>Piano cottura a gas a 5 fuochi in acciaio: premi e ruota la manopola, tienila premuta qualche secondo finché la fiamma resta accesa. Forno, frigorifero con congelatore e lavastoviglie sono a disposizione.</p><p>Trovi pentole, padelle, teglia, piatti, posate, calici, olio, sale e pepe.</p><p>Quando hai finito di cucinare ricordati di chiudere le manopole del gas.</p>",
                en: "<p>Five-burner stainless-steel gas hob: push and turn the knob, keep it pressed for a few seconds until the flame stays lit. Oven, fridge-freezer and dishwasher are all available.</p><p>You'll find pots, pans, a baking tray, dishes, cutlery, wine glasses, oil, salt and pepper.</p><p>Please make sure the gas knobs are off when you're done.</p>",
              },
            },
            {
              icona: "☕",
              titolo: { it: "Caffè", en: "Coffee" },
              testo: {
                it: "<p>C'è la macchina del caffè con una scorta di caffè per i primi giorni.</p>",
                en: "<p>There's a coffee machine with coffee for your first days.</p>",
              },
            },
            {
              icona: "❄️",
              titolo: { it: "Aria condizionata e riscaldamento", en: "Air conditioning and heating" },
              testo: {
                // TODO: dove sta il telecomando del condizionatore e come si regola il riscaldamento
                it: "<p>L'aria condizionata si accende con il telecomando. Il riscaldamento è con i termosifoni. Per favore spegni il clima quando esci e tieni le finestre chiuse mentre è acceso.</p>",
                en: "<p>Air conditioning is controlled with the remote. Heating is by radiators. Please switch the A/C off when you go out and keep windows closed while it's running.</p>",
              },
            },
            {
              icona: "🧺",
              titolo: { it: "Lavatrice, asciugatrice e ferro", en: "Washer, dryer and iron" },
              testo: {
                it: "<p>Lavatrice e asciugatrice sono a tua disposizione, così come ferro da stiro e grucce.</p>",
                en: "<p>Washing machine and dryer are at your disposal, along with an iron and hangers.</p>",
              },
            },
            {
              icona: "🚿",
              titolo: { it: "Bagno e doccia", en: "Bathroom and shower" },
              testo: {
                it: "<p>Doccia grande con soffione a pioggia e luce cromoterapica. Trovi asciugamani, shampoo, bagnoschiuma e carta igienica. C'è anche il bidet.</p>",
                en: "<p>Large shower with rain head and chromotherapy light. Towels, shampoo, body wash and toilet paper are provided. There's a bidet too.</p>",
              },
            },
            {
              icona: "💻",
              titolo: { it: "Postazione di lavoro e TV", en: "Workspace and TV" },
              testo: {
                it: "<p>Scrivania privata con sedia ergonomica e supporto per il portatile. In soggiorno c'è la TV.</p>",
                en: "<p>Private desk with ergonomic chair and laptop stand. The TV is in the living room.</p>",
              },
            },
            {
              icona: "🧯",
              titolo: { it: "Sicurezza", en: "Safety" },
              testo: {
                it: "<p>In casa ci sono rilevatore di fumo, rilevatore di monossido di carbonio, estintore e kit di primo soccorso.</p>",
                en: "<p>The flat has a smoke alarm, a carbon monoxide detector, a fire extinguisher and a first-aid kit.</p>",
              },
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------ REGOLE
    {
      id: "regole",
      titolo: { it: "Regole della casa", en: "House rules" },
      blocchi: [
        {
          tipo: "punti",
          items: [
            { it: "Massimo 2 ospiti.", en: "Maximum 2 guests." },
            { it: "Silenzio dalle 23:00 alle 08:00: siamo in un palazzo abitato.", en: "Quiet hours from 23:00 to 08:00: other people live in the building." },
            { it: "Rifiuti: fai la raccolta differenziata e porta fuori i sacchi secondo i giorni di raccolta (vedi sotto).", en: "Waste: please sort your rubbish and put it out on the collection days (see below)." },
          ],
        },
        {
          tipo: "punti",
          no: true,
          items: [
            { it: "Non si fuma, nemmeno sigaretta elettronica.", en: "No smoking, including e-cigarettes." },
            { it: "Niente animali.", en: "No pets." },
            { it: "Niente feste né eventi.", en: "No parties or events." },
            { it: "Niente servizi fotografici o riprese commerciali.", en: "No commercial photo or video shoots." },
          ],
        },
        { tipo: "h3", testo: { it: "Raccolta differenziata", en: "Recycling" } },
        // Calendario Alia, zona "Prato - Centro storico - Zona 5A" (letto l'08/10/2026): ricontrollare in app AliaEstra se cambia
        {
          tipo: "testo",
          id: "rifiuti",
          html: {
            it: '<p>In centro la raccolta è <strong>porta a porta</strong>: i sacchi vanno messi davanti al portone <strong>la sera, tra le 19:00 e le 20:00</strong>, nel giorno indicato. Mai fuori da questi orari, e mai il sabato o la domenica.</p>',
            en: '<p>In the old town rubbish is collected <strong>door to door</strong>: put the bags outside the street door <strong>in the evening, between 19:00 and 20:00</strong>, on the right day. Never outside these hours, and never on Saturday or Sunday.</p>',
          },
        },
        {
          tipo: "fatti",
          items: [
            { etichetta: { it: "Lunedì", en: "Monday" }, valore: { it: "Organico", en: "Food waste" } },
            { etichetta: { it: "Martedì", en: "Tuesday" }, valore: { it: "Carta e cartone", en: "Paper and cardboard" } },
            { etichetta: { it: "Mercoledì", en: "Wednesday" }, valore: { it: "Organico + indifferenziato", en: "Food + general waste" } },
            { etichetta: { it: "Giovedì", en: "Thursday" }, valore: { it: "Plastica e metalli", en: "Plastic and cans" } },
            { etichetta: { it: "Venerdì", en: "Friday" }, valore: { it: "Organico", en: "Food waste" } },
            {
              etichetta: { it: "Vetro, quando vuoi", en: "Glass, any time" },
              valore: { it: "Campane stradali", en: "Street bottle banks" },
              nota: {
                it: 'Le più vicine: Piazza Filippo Lippi e Via Convenevole da Prato, a 2-3 minuti. <a href="https://aliaestra.it/ambiente/raccolta-e-pulizia-strade/dove-lo-butto" target="_blank" rel="noopener">Dove lo butto?</a>',
                en: 'Nearest: Piazza Filippo Lippi and Via Convenevole da Prato, 2-3 minutes away. <a href="https://aliaestra.it/ambiente/raccolta-e-pulizia-strade/dove-lo-butto" target="_blank" rel="noopener">Which bin? (Italian)</a>',
              },
              largo: true,
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------ PARTENZA
    {
      id: "partenza",
      titolo: { it: "Partenza", en: "Check-out" },
      intro: { it: "Il check-out è entro le <strong>10:00</strong>. Prima di uscire:", en: "Check-out is by <strong>10:00</strong>. Before you leave:" },
      blocchi: [
        {
          tipo: "punti",
          items: [
            { it: "Raduna gli asciugamani usati.", en: "Gather the used towels." },
            { it: "Spegni luci, aria condizionata e apparecchi.", en: "Switch off lights, air conditioning and appliances." },
            { it: "Chiudi le finestre e le manopole del gas.", en: "Close the windows and the gas knobs." },
            { it: "Porta via o butta i rifiuti negli appositi contenitori.", en: "Take out the rubbish to the right bins." },
          ],
        },
        { tipo: "h3", testo: { it: "Tassa di soggiorno", en: "Tourist tax" } },
        // Comune di Prato, locazioni turistiche: 0,50 EUR, max 10 notti consecutive (verificato 08/10/2026)
        {
          tipo: "card",
          id: "tassa",
          html: {
            it: '<p>Il Comune di Prato applica un\'imposta di <strong>0,50 € a persona per notte</strong>, per un massimo di 10 notti consecutive. I bambini fino a 6 anni non pagano.</p><p>Esempio: 2 persone per 3 notti = <strong>3 €</strong>.</p><p style="margin:0">Si paga <strong>in contanti</strong> al momento dell\'arrivo oppure <strong>con PayPal</strong>.</p>',
            en: '<p>The City of Prato charges a tourist tax of <strong>€0.50 per person per night</strong>, up to 10 consecutive nights. Children up to 6 are exempt.</p><p>Example: 2 people for 3 nights = <strong>€3</strong>.</p><p style="margin:0">You can pay <strong>in cash</strong> on arrival or <strong>via PayPal</strong>.</p>',
          },
        },
      ],
    },

    // ------------------------------------------------------------ ZONA
    {
      id: "zona",
      titolo: { it: "Prato e dintorni", en: "Prato and around" },
      breve: { it: "Zona", en: "Area" },
      intro: {
        it: "Sei nel cuore del centro storico: Duomo, Piazza del Comune e Castello sono tutti a meno di 10 minuti a piedi. I tempi indicati sono a piedi dall'appartamento. Il <span class=\"cuore\">&#9829;</span> segna i nostri preferiti.",
        en: "You're right in the old town: the Cathedral, Piazza del Comune and the Castle are all under 10 minutes' walk. Times shown are on foot from the flat. The <span class=\"cuore\">&#9829;</span> marks our favourites.",
      },
      blocchi: [
        {
          tipo: "card",
          blu: true,
          html: {
            it: '<strong>PRATOcard.</strong> Con 16 € entri per 4 giorni a Palazzo Pretorio, Museo del Tessuto, Museo dell\'Opera del Duomo e Centro Pecci. <a href="https://www.prato-musei.it/it/info/card/" target="_blank" rel="noopener">Dettagli</a>',
            en: '<strong>PRATOcard.</strong> For €16 you get 4 days of entry to Palazzo Pretorio, the Textile Museum, the Cathedral Museum and the Pecci Centre. <a href="https://www.prato-musei.it/it/info/card/" target="_blank" rel="noopener">Details</a>',
          },
        },
        // Fonti: ricerca dell'08/10/2026 (pratoturismo.it, siti dei musei, Wanderlog, Gambero Rosso). Orari indicativi.
        {
          tipo: "luoghi",
          categorie: [
            { id: "vedere", nome: { it: "Da vedere", en: "Sights" } },
            { id: "mangiare", nome: { it: "Mangiare", en: "Eat" } },
            { id: "dolci", nome: { it: "Dolci e gelato", en: "Sweets" } },
            { id: "bar", nome: { it: "Colazione e aperitivo", en: "Coffee & drinks" } },
            { id: "servizi", nome: { it: "Spesa e servizi", en: "Shops & services" } },
            { id: "gite", nome: { it: "Gite", en: "Day trips" } },
          ],
          items: [
            // ---- da vedere
            {
              cat: "vedere", nome: "Duomo di Prato", preferito: true, dist: "4 min", indirizzo: "Piazza del Duomo",
              desc: {
                it: "Facciata a fasce bianche e verdi con il pulpito esterno di Donatello e Michelozzo. Dentro, gli affreschi di Filippo Lippi con la famosa Danza di Salomè e la cappella della Sacra Cintola.",
                en: "White-and-green striped façade with the outdoor pulpit by Donatello and Michelozzo. Inside, Filippo Lippi's frescoes, including the famous Dance of Salome, and the Chapel of the Holy Belt.",
              },
              meta: { it: "Ingresso libero · cappella Lippi con il biglietto del Museo dell'Opera", en: "Free entry · Lippi chapel with the Cathedral Museum ticket" },
            },
            {
              cat: "vedere", nome: "Museo dell'Opera del Duomo", dist: "4 min", indirizzo: "Piazza del Duomo 49",
              desc: {
                it: "Qui ci sono le formelle originali del pulpito di Donatello (quelle sul Duomo sono copie).",
                en: "Home to the original panels of Donatello's pulpit (the ones on the Cathedral are copies).",
              },
              meta: { it: "Mar-sab 10-17, dom 13-17, chiuso lunedì · 8 €", en: "Tue-Sat 10-17, Sun 13-17, closed Monday · €8" },
            },
            {
              cat: "vedere", nome: "Palazzo Pretorio", dist: "5 min", indirizzo: "Piazza del Comune",
              desc: {
                it: "Il museo civico, in un palazzo medievale: dipinti e sculture dal Trecento al Novecento, con opere di Lippi e Donatello.",
                en: "The city museum, in a medieval palace: paintings and sculpture from the 14th to the 20th century, including Lippi and Donatello.",
              },
              meta: { it: "10:30-18:30, chiuso martedì · 8 €", en: "10:30-18:30, closed Tuesday · €8" },
              link: "https://palazzopretorio.prato.it/",
            },
            {
              cat: "vedere", nome: "Castello dell'Imperatore", preferito: true, dist: "9 min", indirizzo: "Piazza Santa Maria delle Carceri",
              desc: {
                it: "Fortezza di Federico II del Duecento, unica nel suo genere nel centro-nord Italia. Dai camminamenti si vede tutta la città. D'estate ospita il cinema all'aperto.",
                en: "13th-century fortress built for Emperor Frederick II, unique in central-northern Italy. The walkways give a view over the whole city. Open-air cinema in summer.",
              },
              meta: { it: "Gratis · ott-mar 10-16, apr-set 10-13 e 16-20, chiuso martedì", en: "Free · Oct-Mar 10-16, Apr-Sep 10-13 and 16-20, closed Tuesday" },
            },
            {
              cat: "vedere", nome: "Santa Maria delle Carceri", dist: "8 min", indirizzo: "Piazza Santa Maria delle Carceri",
              desc: {
                it: "Gioiello del Rinascimento di Giuliano da Sangallo, voluto da Lorenzo il Magnifico. Proprio accanto al Castello.",
                en: "Renaissance gem by Giuliano da Sangallo, commissioned by Lorenzo the Magnificent. Right next to the Castle.",
              },
              meta: { it: "7-12 e 16-19 · ingresso libero", en: "7-12 and 16-19 · free" },
            },
            {
              cat: "vedere", nome: "Museo del Tessuto", dist: "13 min", indirizzo: "Via Puccetti 3",
              desc: {
                it: "Prato è la capitale italiana del tessile: questo museo, in un'antica fabbrica, racconta la sua storia.",
                en: "Prato is Italy's textile capital: this museum, set in an old factory, tells its story.",
              },
              meta: { it: "Mar-gio 10-15, ven-sab 10-19, dom 15-19, chiuso lunedì · 10 €", en: "Tue-Thu 10-15, Fri-Sat 10-19, Sun 15-19, closed Monday · €10" },
              link: "https://www.museodeltessuto.it/",
            },
            {
              cat: "vedere", nome: "Palazzo Datini", dist: "6 min", indirizzo: "Via Ser Lapo Mazzei 43",
              desc: {
                it: "La casa del mercante Francesco Datini, del 1383, con affreschi del Trecento.",
                en: "The 1383 house of merchant Francesco Datini, with 14th-century frescoes.",
              },
              meta: { it: "Ingresso gratuito · orari variabili, meglio verificare", en: "Free · opening hours vary, check before going" },
            },
            {
              cat: "vedere", nome: "Chiesa di San Francesco", dist: "8 min", indirizzo: "Piazza San Francesco",
              desc: {
                it: "Chiesa del 1228 con la Cappella Migliorati affrescata e un chiostro rinascimentale.",
                en: "Church from 1228 with the frescoed Migliorati Chapel and a Renaissance cloister.",
              },
              meta: { it: "Lun-sab 9:30-12 e 16-17:30", en: "Mon-Sat 9:30-12 and 16-17:30" },
            },
            {
              cat: "vedere", nome: "Centro Pecci", dist: { it: "bus o auto", en: "bus or car" }, indirizzo: "Viale della Repubblica 277",
              desc: {
                it: "Il centro d'arte contemporanea della Toscana, con mostre sempre nuove.",
                en: "Tuscany's contemporary art centre, with changing exhibitions.",
              },
              meta: { it: "Mer-dom 10-19 · 10 €", en: "Wed-Sun 10-19 · €10" },
              link: "https://centropecci.it/",
            },

            // ---- mangiare
            {
              cat: "mangiare", nome: "...A Casa Gori", dist: "1 min", indirizzo: "Piazza Sant'Agostino 14",
              desc: { it: "Cucina toscana a due passi da casa, con una buona carta dei vini.", en: "Tuscan cooking just around the corner, with a good wine list." },
              meta: "€€",
            },
            // Segnalato da Alessio. Orari da myartguides.com (08/10/2026)
            {
              cat: "mangiare", nome: "Trattoria Boves", preferito: true, indirizzo: "Via dei Lanaioli 31",
              desc: {
                it: "Cucina toscana tradizionale con prodotti freschi del territorio, carne affumicata e una ricca carta dei vini. Ambiente accogliente e informale, ottimo rapporto qualità-prezzo.",
                en: "Traditional Tuscan cooking with fresh local produce, smoked meats and a great wine list. Warm, informal atmosphere and excellent value.",
              },
              meta: { it: "Solo cena, lun-sab 19:30-22:30 · meglio prenotare: 0574 742052", en: "Dinner only, Mon-Sat 19:30-22:30 · best to book: +39 0574 742052" },
            },
            {
              cat: "mangiare", nome: "Baghino", preferito: true, indirizzo: "Via dell'Accademia 9",
              desc: { it: "Storico, quasi 150 anni. Il posto giusto per provare i <strong>sedani ripieni alla pratese</strong>.", en: "Historic, almost 150 years old. The place to try <strong>sedani alla pratese</strong>, stuffed celery, the local signature dish." },
              meta: "€€",
            },
            {
              cat: "mangiare", nome: "Soldano in Duomo", indirizzo: "Via della Sirena 10",
              desc: { it: "Piatti pratesi semplici e a buon prezzo.", en: "Simple local dishes at good prices." },
              meta: "€",
            },
            {
              cat: "mangiare", nome: "Osteria Su Santa Trinita", indirizzo: "Vicolo de' Neroni 4",
              desc: { it: "Una delle osterie preferite dai pratesi.", en: "One of the locals' favourite osterias." },
              meta: "€€",
            },
            {
              cat: "mangiare", nome: "Aroma di Vino", indirizzo: "Via Santo Stefano 24",
              desc: { it: "Ambiente rustico, buoni vini, opzioni senza glutine.", en: "Rustic setting, good wines, gluten-free options." },
              meta: "€€",
            },
            {
              cat: "mangiare", nome: "Antica Trattoria Lapo", dist: "8 min", indirizzo: "Piazza Mercatale 141",
              desc: { it: "Trattoria popolare con cucina casalinga.", en: "Down-to-earth trattoria with home cooking." },
              meta: "€",
            },
            {
              cat: "mangiare", nome: "Oro di Napoli", dist: "1 min", indirizzo: "Via del Vergaio 4",
              desc: { it: "Pizzeria proprio dietro l'angolo.", en: "Pizzeria right around the corner." },
              meta: { it: "Pizza · €", en: "Pizza · €" },
            },
            {
              cat: "mangiare", nome: "Il Mercatale", dist: "8 min", indirizzo: "Piazza Mercatale 38",
              desc: { it: "Pizza cotta nel forno a legna, sottile o napoletana.", en: "Wood-fired pizza, thin-crust or Neapolitan style." },
              meta: { it: "Pizza · €", en: "Pizza · €" },
            },
            {
              cat: "mangiare", nome: "Il Piraña", indirizzo: "Via G. Valentini 110",
              desc: { it: "Pesce, segnalato dalla Guida Michelin. Per una serata speciale.", en: "Seafood, listed in the Michelin Guide. For a special evening." },
              meta: "€€€",
            },
            {
              cat: "mangiare", nome: "Chinatown di Via Pistoiese", indirizzo: false,
              desc: {
                it: "Prato ha una delle comunità cinesi più grandi d'Europa. Fuori da Porta Pistoiese, a 10-15 minuti, trovi ravioli fatti a mano, dim sum e hot pot: per esempio <em>Ravioli Liu</em> (Via Filzi 39) e <em>Dim Sum House</em> (Via Pistoiese 229).",
                en: "Prato has one of Europe's largest Chinese communities. Just outside Porta Pistoiese, 10-15 minutes away, you'll find handmade dumplings, dim sum and hot pot: try <em>Ravioli Liu</em> (Via Filzi 39) or <em>Dim Sum House</em> (Via Pistoiese 229).",
              },
            },

            // ---- dolci
            {
              cat: "dolci", nome: "Biscottificio Antonio Mattei", preferito: true, dist: "7 min", indirizzo: "Via Ricasoli 20",
              desc: {
                it: "Dal 1858, i <strong>biscotti di Prato</strong> originali nel celebre sacchetto blu. Da portare a casa.",
                en: "Since 1858, the original <strong>cantucci (biscotti di Prato)</strong> in the famous blue bag. The perfect souvenir.",
              },
              link: "https://www.antoniomattei.it/",
            },
            {
              cat: "dolci", nome: "Pasticceria Nuovo Mondo", indirizzo: "Via Garibaldi 23",
              desc: {
                it: "Il posto per le <strong>pesche di Prato</strong>, dolce tipico all'alchermes con crema. Tre torte del Gambero Rosso.",
                en: "The place for <strong>pesche di Prato</strong>, the local alchermes-soaked custard pastry. Top-rated by Gambero Rosso.",
              },
            },
            {
              cat: "dolci", nome: "Pasticceria Mannori", indirizzo: "Via Lazzerini 2",
              desc: { it: "Luca Mannori è tra i migliori pasticceri d'Italia.", en: "Luca Mannori is one of Italy's best pastry chefs." },
            },
            {
              cat: "dolci", nome: "Gelateria del Corso", indirizzo: "Via G. Mazzoni 12",
              desc: { it: "Gelato artigianale pluripremiato.", en: "Award-winning artisan gelato." },
            },

            // ---- bar
            {
              cat: "bar", nome: "Caffè Buonamici", indirizzo: "Via Ricasoli 3",
              desc: { it: "Bar storico del centro, per la colazione all'italiana.", en: "Historic café in the centre, for an Italian breakfast." },
            },
            {
              cat: "bar", nome: "I Frari delle Logge", dist: "5 min", indirizzo: "Piazza del Comune 16",
              desc: { it: "In piazza del Comune: colazione, pasticceria, gelato e aperitivo.", en: "On Piazza del Comune: breakfast, pastries, gelato and aperitivo." },
            },
            {
              cat: "bar", nome: "Bottega Prato", indirizzo: "Piazza Sant'Antonino",
              desc: { it: "Colazione con prodotti locali, anche senza glutine.", en: "Breakfast with local produce, gluten-free too." },
            },
            {
              cat: "bar", nome: "Le Barrique Wine Bar", indirizzo: "Corso Mazzoni 19",
              desc: { it: "Per un calice di vino toscano prima di cena.", en: "For a glass of Tuscan wine before dinner." },
            },

            // ---- servizi
            {
              cat: "servizi", nome: "Parcheggio Serraglio", preferito: true, dist: "2 min", indirizzo: "Viale Galilei", query: "Parcheggio Serraglio, Viale Galileo Galilei, Prato",
              desc: {
                it: "Parcheggio coperto della stazione, fuori dalla ZTL, aperto 24 ore su 24. Giornata 6 €, settimana 22 €, notte 1 €.",
                en: "Covered station car park, outside the ZTL, open 24/7. €6 per day, €22 per week, €1 overnight.",
              },
              link: "https://www.consiagservizicomuni.it/pagina136238_serraglio.html/",
            },
            {
              cat: "servizi", nome: "Conad City", indirizzo: "Piazza San Francesco 21",
              desc: { it: "Il supermercato del centro.", en: "The supermarket in the old town." },
              meta: { it: "Lun-sab 8-21, dom 8-20", en: "Mon-Sat 8-21, Sun 8-20" },
            },
            {
              cat: "servizi", nome: "Forno Fioravanti", dist: "2 min", indirizzo: "Via del Seminario 17",
              desc: { it: "Forno per pane e schiacciata.", en: "Bakery for bread and schiacciata (Tuscan flatbread)." },
            },
            {
              cat: "servizi", nome: "Farmacia Nera", dist: "1 min", indirizzo: "Via Guizzelmi 1",
              desc: { it: "La farmacia più vicina.", en: "The nearest pharmacy." },
            },
            {
              cat: "servizi", nome: "Farmacia Comunale 3 (24h)", dist: "8 min", indirizzo: "Piazza Mercatale 147",
              desc: {
                it: 'Aperta giorno e notte. Altre farmacie di turno: <a href="https://farmacie.po-net.prato.it/" target="_blank" rel="noopener">elenco aggiornato</a>.',
                en: 'Open day and night. Other on-duty pharmacies: <a href="https://farmacie.po-net.prato.it/" target="_blank" rel="noopener">live list</a>.',
              },
              meta: { it: "Tel. 0574 30327", en: "Tel. +39 0574 30327" },
            },
            {
              cat: "servizi", nome: "Mercato del lunedì", indirizzo: "Piazza del Mercato Nuovo",
              desc: {
                it: "Ogni lunedì mattina il mercato più grande della Toscana, dal 1465. Il sabato mattina, nella stessa piazza, il mercato contadino.",
                en: "Every Monday morning, Tuscany's largest market, held since 1465. On Saturday mornings the same square hosts a farmers' market.",
              },
              meta: { it: "Lunedì 8-14:30 · sabato 8-13", en: "Monday 8-14:30 · Saturday 8-13" },
            },

            // ---- gite
            {
              cat: "gite", nome: "Firenze", preferito: true, dist: { it: "25 min in treno", en: "25 min by train" }, indirizzo: false,
              desc: { it: "Dalla stazione Porta al Serraglio, sotto casa, i treni sono frequenti fino a sera. Da circa 3 €.", en: "Frequent trains from Porta al Serraglio station, near the flat, until the evening. From about €3." },
            },
            {
              cat: "gite", nome: "Pistoia", dist: { it: "15 min in treno", en: "15 min by train" }, indirizzo: false,
              desc: { it: "Centro storico raccolto e una delle piazze del Duomo più belle della Toscana.", en: "A compact historic centre and one of Tuscany's loveliest cathedral squares." },
            },
            {
              cat: "gite", nome: "Lucca", dist: { it: "1 h in treno", en: "1 h by train" }, indirizzo: false,
              desc: { it: "Le mura da percorrere in bici, le torri e Piazza dell'Anfiteatro.", en: "Cycle along the city walls, climb the towers and see Piazza dell'Anfiteatro." },
            },
            {
              cat: "gite", nome: "Carmignano e Artimino", dist: { it: "25-30 min in auto", en: "25-30 min by car" }, query: "Villa Medicea La Ferdinanda, Artimino",
              indirizzo: { it: "Villa medicea di Artimino", en: "Medici villa at Artimino" },
              desc: { it: "Colline del vino Carmignano DOCG e la villa medicea \"dei cento camini\".", en: "Hills of Carmignano DOCG wine and the Medici \"villa of a hundred chimneys\"." },
            },
            {
              cat: "gite", nome: "Vinci", dist: { it: "40 min in auto", en: "40 min by car" }, query: "Museo Leonardiano, Vinci",
              indirizzo: { it: "Museo Leonardiano", en: "Leonardo museum" },
              desc: { it: "Il paese natale di Leonardo, tra gli ulivi.", en: "Leonardo's birthplace, among the olive groves." },
            },
            {
              cat: "gite", nome: "Bologna", dist: { it: "1 h in treno", en: "1 h by train" }, indirizzo: false,
              desc: { it: "Treni regionali diretti da Prato Centrale.", en: "Direct regional trains from Prato Centrale." },
            },
          ],
        },
        {
          tipo: "card",
          html: {
            it: '<strong>Da segnare in agenda.</strong> L\'8 settembre la città celebra la Sacra Cintola con il Corteggio Storico in costume, durante il Settembre Pratese. Eventi di tutto l\'anno su <a href="https://tempolibero.comune.prato.it/" target="_blank" rel="noopener">tempolibero.comune.prato.it</a>.<br><br><strong>Chiusure dei musei:</strong> il lunedì Museo dell\'Opera e Museo del Tessuto, il martedì Castello e Palazzo Pretorio.',
            en: '<strong>Mark your calendar.</strong> On 8 September the city celebrates the Holy Belt with a historical costume parade, part of the Settembre Pratese festival. Year-round events at <a href="https://tempolibero.comune.prato.it/" target="_blank" rel="noopener">tempolibero.comune.prato.it</a>.<br><br><strong>Museum closing days:</strong> Monday for the Cathedral and Textile museums, Tuesday for the Castle and Palazzo Pretorio.',
          },
        },
      ],
    },

    // ------------------------------------------------------------ CONTATTI
    {
      id: "contatti",
      titolo: { it: "Contatti ed emergenze", en: "Contacts and emergencies" },
      breve: { it: "Contatti", en: "Contacts" },
      blocchi: [
        { tipo: "persone" },
        { tipo: "h3", testo: { it: "Numeri utili", en: "Useful numbers" } },
        {
          tipo: "emergenze",
          items: [
            { numero: "112", nome: { it: "Emergenze (tutte)", en: "Emergency (all)" } },
            { numero: "118", nome: { it: "Ambulanza", en: "Ambulance" } },
            { numero: "115", nome: { it: "Vigili del fuoco", en: "Fire brigade" } },
            { numero: "116117", nome: { it: "Guardia medica (notte e festivi)", en: "Out-of-hours doctor" } },
          ],
        },
        {
          tipo: "testo",
          html: {
            it: '<p class="muted">Pronto soccorso: Ospedale Santo Stefano, Via Suor Niccolina Infermiera 20, circa 10 minuti in auto. Farmacia aperta 24 ore: Piazza Mercatale 147, a 8 minuti a piedi.</p>',
            en: '<p class="muted">Emergency room: Santo Stefano Hospital, Via Suor Niccolina Infermiera 20, about 10 minutes by car. 24-hour pharmacy: Piazza Mercatale 147, 8 minutes on foot.</p>',
          },
        },
      ],
    },
  ],
};

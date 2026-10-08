/* Rendering della guida a partire da window.GUIDA (content.js).
   I testi sono oggetti {it, en}: t() sceglie la lingua attiva. */
(function () {
  "use strict";

  const G = window.GUIDA;
  const LINGUE = ["it", "en"];
  let lingua = scegliLingua();

  // ---------- utilita' ----------
  function scegliLingua() {
    const qs = new URLSearchParams(location.search).get("lang");
    if (LINGUE.includes(qs)) return qs;
    try {
      const salvata = localStorage.getItem("guida-lang");
      if (LINGUE.includes(salvata)) return salvata;
    } catch (e) { /* storage non disponibile: si va avanti */ }
    return (navigator.language || "it").toLowerCase().startsWith("it") ? "it" : "en";
  }

  function t(x) {
    if (x == null) return "";
    if (typeof x === "string") return x;
    return x[lingua] ?? x.it ?? "";
  }

  function el(tag, attrs, html) {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v == null || v === false) continue;
      n.setAttribute(k, v === true ? "" : v);
    }
    if (html != null) n.innerHTML = html;
    return n;
  }

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const mappa = (q) => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);
  const ui = (k) => t(G.ui[k]);

  const ICONE = {
    wifi: '<path d="M2 8.8a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r="1"/>',
    tel: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
    chat: '<path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.6A8.4 8.4 0 1 1 21 11.5z"/>',
    pin: '<path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',
    copia: '<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    freccia: '<path d="M7 17 17 7M8 7h9v9"/>',
  };
  const svg = (nome) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONE[nome] || ""}</svg>`;

  function toast(msg) {
    const n = document.getElementById("toast");
    n.textContent = msg;
    n.classList.add("on");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => n.classList.remove("on"), 1800);
  }

  async function copia(testo) {
    try {
      await navigator.clipboard.writeText(testo);
    } catch (e) {
      // fallback per browser senza Clipboard API (http, vecchi Android)
      const ta = el("textarea", { readonly: true, style: "position:fixed;opacity:0" });
      ta.value = testo;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    toast(ui("copiato"));
  }

  // ---------- blocchi di contenuto ----------
  const BLOCCHI = {
    testo: (b) => el("div", null, t(b.html)),

    h3: (b) => el("h3", null, esc(t(b.testo))),

    card: (b) => el("div", { class: "card" + (b.blu ? " card--blu" : "") }, t(b.html)),

    fatti: (b) => {
      const box = el("div", { class: "fatti" });
      b.items.forEach((f) => box.appendChild(el("div", { class: "fatto" + (f.largo ? " fatto--largo" : "") },
        `<span>${esc(t(f.etichetta))}</span><strong>${esc(t(f.valore))}</strong>${f.nota ? `<small>${t(f.nota)}</small>` : ""}`)));
      return box;
    },

    punti: (b) => el("ul", { class: "punti" + (b.no ? " punti--no" : "") }, b.items.map((i) => `<li>${t(i)}</li>`).join("")),

    bottoni: (b) => el("div", { class: "btns" }, b.items.map((x) =>
      `<a class="btn${x.chiaro ? " btn--chiaro" : ""}" href="${esc(x.href)}" ${x.esterno ? 'target="_blank" rel="noopener"' : ""}>${svg(x.icona || "freccia")}${esc(t(x.etichetta))}</a>`).join("")),

    wifi: () => {
      const w = G.wifi;
      const box = el("div", { class: "card wifi", id: "wifi-card" });
      box.innerHTML = `
        <div>
          <dl>
            <dt>${esc(ui("rete"))}</dt><dd>${esc(w.rete)}</dd>
            <dt>${esc(ui("password"))}</dt><dd>${esc(w.password)}</dd>
          </dl>
          <button type="button" class="btn" data-copia>${svg("copia")}${esc(ui("copiaPassword"))}</button>
        </div>
        <div class="qr-box"><img src="qr/wifi.svg" alt="${esc(ui("qrWifiAlt"))}" width="128" height="128"></div>`;
      box.querySelector("[data-copia]").addEventListener("click", () => copia(w.password));
      return box;
    },

    galleria: (b) => el("div", { class: "galleria" }, b.items.map((f) =>
      `<figure><img src="img/${f.img}-s.webp" alt="${esc(t(f.alt))}" width="800" height="534" loading="lazy" decoding="async"><figcaption>${esc(t(f.alt))}</figcaption></figure>`).join("")),

    fisarmonica: (b) => {
      const box = el("div");
      b.items.forEach((x) => box.appendChild(el("details", null,
        `<summary><span class="ico" aria-hidden="true">${x.icona || "·"}</span><span>${esc(t(x.titolo))}</span></summary><div>${t(x.testo)}</div>`)));
      return box;
    },

    persone: () => el("div", { class: "persone" }, G.contatti.map((p) => {
      const tel = p.telefono ? p.telefono.replace(/\s+/g, "") : "";
      const azioni = tel
        ? `<div class="btns"><a class="btn" href="tel:${esc(tel)}">${svg("tel")}${esc(ui("chiama"))}</a><a class="btn btn--chiaro" href="https://wa.me/${esc(tel.replace(/^\+/, ""))}" target="_blank" rel="noopener">${svg("chat")}WhatsApp</a></div>`
        : `<p class="muted">${esc(ui("scriviApp"))}</p>`;
      return `<div class="persona"><strong>${esc(p.nome)}</strong><span>${esc(t(p.ruolo))}</span>${azioni}</div>`;
    }).join("")),

    emergenze: (b) => el("div", { class: "emergenze" }, b.items.map((e) =>
      `<a href="tel:${esc(e.numero.replace(/\s+/g, ""))}"><strong>${esc(e.numero)}</strong><span>${esc(t(e.nome))}</span></a>`).join("")),

    luoghi: (b) => {
      const box = el("div");
      const filtri = el("div", { class: "filtri", role: "group", "aria-label": ui("filtra") });
      const lista = el("div", { class: "luoghi" });
      const cats = [{ id: "*", nome: ui("tutti") }].concat(b.categorie.map((c) => ({ id: c.id, nome: t(c.nome) })));
      let attiva = "*";

      function disegna() {
        lista.innerHTML = b.items.filter((l) => attiva === "*" || l.cat === attiva).map((l) => `
          <article class="luogo">
            <div class="luogo__top"><h4>${l.preferito ? '<span class="cuore" title="' + esc(ui("preferito")) + '">&#9829;</span> ' : ""}${esc(l.nome)}</h4>${l.dist ? `<span class="dist">${esc(t(l.dist))}</span>` : ""}</div>
            <p>${t(l.desc)}</p>
            ${l.meta ? `<div class="meta">${t(l.meta)}</div>` : ""}
            ${l.indirizzo !== false ? `<a class="mappa" href="${mappa(l.query || (l.nome + ", " + (t(l.indirizzo) || "") + ", Prato"))}" target="_blank" rel="noopener">${esc(t(l.indirizzo) || ui("apriMappa"))} &#8599;</a>` : ""}
            ${l.link ? ` &middot; <a class="mappa" href="${esc(l.link)}" target="_blank" rel="noopener">${esc(ui("sito"))} &#8599;</a>` : ""}
          </article>`).join("");
      }
      cats.forEach((c) => {
        const btn = el("button", { type: "button", "aria-pressed": String(c.id === attiva) }, esc(c.nome));
        btn.addEventListener("click", () => {
          attiva = c.id;
          filtri.querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", String(x === btn)));
          disegna();
        });
        filtri.appendChild(btn);
      });
      disegna();
      box.append(filtri, lista);
      return box;
    },
  };

  // ---------- pagina ----------
  function render() {
    document.documentElement.lang = lingua;
    document.title = t(G.meta.titoloPagina);
    document.getElementById("hero-kicker").textContent = t(G.meta.kicker);
    document.getElementById("hero-title").innerHTML = t(G.meta.titolo);
    document.getElementById("hero-sub").textContent = t(G.meta.sottotitolo);
    document.querySelector(".skip").textContent = ui("salta");
    document.querySelectorAll(".lang button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lingua)));

    // azioni rapide
    const host = G.contatti.find((c) => c.telefono);
    const quick = document.getElementById("quick");
    quick.innerHTML = "";
    const azioni = [
      { icona: "wifi", etichetta: "Wi-Fi", href: "#casa-wifi" },
      host && { icona: "tel", etichetta: ui("chiama"), href: "tel:" + host.telefono.replace(/\s+/g, "") },
      host && { icona: "chat", etichetta: "WhatsApp", href: "https://wa.me/" + host.telefono.replace(/\D/g, ""), esterno: true },
      { icona: "pin", etichetta: ui("mappa"), href: mappa(G.meta.indirizzo), esterno: true },
    ].filter(Boolean);
    quick.style.gridTemplateColumns = `repeat(${azioni.length}, 1fr)`;
    azioni.forEach((a) => quick.appendChild(el("a", { href: a.href, target: a.esterno ? "_blank" : null, rel: a.esterno ? "noopener" : null }, svg(a.icona) + esc(a.etichetta))));

    // sezioni + indice
    const main = document.getElementById("main");
    const toc = el("ul");
    main.innerHTML = "";
    G.sezioni.forEach((s, i) => {
      const sez = el("section", { class: "sez", id: s.id, "aria-labelledby": s.id + "-t" });
      const num = String(i + 1).padStart(2, "0");
      sez.appendChild(el("div", { class: "sez__head reveal" },
        `<span class="sez__num" aria-hidden="true">${num}</span><h2 class="sez__titolo" id="${s.id}-t">${esc(t(s.titolo))}</h2>${s.intro ? `<p class="sez__intro">${t(s.intro)}</p>` : ""}`));
      s.blocchi.forEach((b) => {
        const nodo = BLOCCHI[b.tipo](b);
        if (b.id) nodo.id = b.id;
        nodo.classList.add("reveal");
        sez.appendChild(nodo);
      });
      main.appendChild(sez);
      toc.appendChild(el("li", null, `<a href="#${s.id}">${esc(t(s.breve || s.titolo))}</a>`));
    });
    const nav = document.getElementById("toc");
    nav.innerHTML = "";
    nav.appendChild(toc);

    document.getElementById("foot").innerHTML = t(G.meta.firma);

    osserva();
  }

  // comparsa morbida delle sezioni + voce attiva nell'indice
  let osservatori = [];
  function osserva() {
    osservatori.forEach((o) => o.disconnect());
    osservatori = [];
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach((n) => n.classList.add("visto"));
      return;
    }
    const comparsa = new IntersectionObserver((voci) => voci.forEach((v) => {
      if (v.isIntersecting) { v.target.classList.add("visto"); comparsa.unobserve(v.target); }
    }), { rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".reveal").forEach((n) => comparsa.observe(n));

    const links = [...document.querySelectorAll("#toc a")];
    const attiva = new IntersectionObserver((voci) => voci.forEach((v) => {
      if (!v.isIntersecting) return;
      links.forEach((a) => {
        const on = a.getAttribute("href") === "#" + v.target.id;
        a.classList.toggle("attivo", on);
        // centra la voce nella barra senza far scorrere la pagina in verticale
        if (on) { const ul = a.closest("ul"); ul.scrollTo({ left: a.offsetLeft - (ul.clientWidth - a.offsetWidth) / 2, behavior: "smooth" }); }
      });
    }), { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll(".sez").forEach((s) => attiva.observe(s));
    osservatori = [comparsa, attiva];
  }

  document.querySelectorAll(".lang button").forEach((b) => b.addEventListener("click", () => {
    lingua = b.dataset.lang;
    try { localStorage.setItem("guida-lang", lingua); } catch (e) { /* ignorato */ }
    render();
  }));

  render();
})();

/* ============================================================
   CREATIVE PORTFOLIO — lógica do site (vanilla JS)
   Para personalizar: edite CONFIG (contatos) e PROJECTS (trabalhos).
   ============================================================ */
'use strict';

/* ---------- CONFIG: edite seus contatos aqui ---------- */
const CONFIG = {
  nome: 'Creative Portfolio',
  whatsapp: '5511999999999', // DDD + número (só dígitos, com código do país)
  whatsappMsg: 'Olá! Vi seu portfólio e quero conversar sobre um projeto.',
  email: 'ola@creativeportfolio.com.br',
  instagram: 'https://instagram.com/creativeportfolio',
  behance: 'https://behance.net/creativeportfolio'
};

/* ---------- DADOS: projetos (edite livremente) ---------- */
/* Para adicionar um projeto: copie um bloco e ajuste os campos. */
const IMG = (id, w) => 'https://images.unsplash.com/' + id + '?q=80&w=' + (w || 1400) + '&auto=format&fit=crop';
const PROJECTS = [
  {
    code: 'PROJECT_001', title: 'Artesano Hamburgueria', cat: 'Social media', catKey: 'social', year: '2025',
    desc: 'PTBR 🇧🇷:\nCliente: ARTESANO HAMBURGUERIA\nDireção de arte/Design: Matheus Henrique\n\nProjeto de criação de Social Media para atrair novos clientes para a hamburgueria, reforçar a sua visibilidade no mercado nicho e se posicionar melhor frente a concorrentes.\n\nDesafio: Criar mídias de interação e que possa passar desejo de comer na Artesano. Causando o efeito de atrair clientes famintos no interior de Goiás.\n\nENG 🇺🇸:\nClient: ARTESANO HAMBURGUERIA\nArt Direction/Design: Matheus Henrique\n\nSocial media creation project to attract new customers to the burger restaurant, strengthen its visibility in the niche market, and position it better against competitors.\n\nChallenge: To create interactive content that sparks the craving to eat at Artesano drawing in hungry customers across the interior of Goiás.',
    cover: 'assets/img/artesano-hamburgueria.jpg', palette: 'Laranja queimado · Creme · Grafite',
    context: 'Hamburgueria artesanal que precisava comunicar o processo manual (blend moído de manhã, chapa calibrada) e transformar o burger em protagonista do feed.',
    challenge: 'Aumentar apetite e pedidos sem parecer genérico: o produto tinha que dominar a peça, com texto curto e leitura imediata no scroll.',
    concept: 'Fotografia de produto em primeiro plano sobre fundos laranja/creme/grafite, tipografia oversized ("existe fome… e existe fome de Artesano") e selos de ação ("prove a diferença, peça o seu").',
    results: 'Linha editorial consistente para feed e stories, com peças reaproveitáveis por lote (ex.: Lote nº 07) e CTA direto para pedido.',
    gallery: ['assets/img/artesano-hamburgueria.jpg', 'assets/img/arte-01.jpg', 'assets/img/arte-02.jpg', 'assets/img/arte-03.jpg', 'assets/img/arte-04.jpg', 'assets/img/arte-05.jpg', 'assets/img/arte-06.jpg', 'assets/img/arte-07.jpg', 'assets/img/arte-08.jpg', 'assets/img/arte-09.jpg', 'assets/img/arte-10.jpg', 'assets/img/arte-11.jpg', 'assets/img/arte-12.jpg']
  }
];

/* ---------- helpers ---------- */
const $ = (s, c) => (c || document).querySelector(s);
const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- ano / relógio ---------- */
const year = new Date().getFullYear();
$$('[data-year]').forEach(el => el.textContent = year);
$$('[data-year-range]').forEach(el => el.textContent = (year - 1) + ' — ' + year);
const clock = $('[data-clock]');
if (clock) {
  const tick = () => clock.textContent = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  tick(); setInterval(tick, 30000);
}

/* ---------- contatos dinâmicos ---------- */
const waLink = 'https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(CONFIG.whatsappMsg);
['wa-button', 'wa-fallback', 'foot-wa'].forEach(id => { const el = document.getElementById(id); if (el) el.href = waLink; });
['contact-email'].forEach(id => { const el = document.getElementById(id); if (el) { el.href = 'mailto:' + CONFIG.email; el.textContent = CONFIG.email; } });
['contact-ig', 'foot-ig'].forEach(id => { const el = document.getElementById(id); if (el) el.href = CONFIG.instagram; });
['contact-be', 'foot-be'].forEach(id => { const el = document.getElementById(id); if (el) el.href = CONFIG.behance; });

/* ---------- header ---------- */
const header = $('#site-header');
addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 24), { passive: true });

const menuToggle = $('#menu-toggle'), mobileMenu = $('#mobile-menu');
menuToggle.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  menuToggle.classList.toggle('open', open);
  menuToggle.setAttribute('aria-expanded', open);
  menuToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});
$$('#mobile-menu a').forEach(a => a.addEventListener('click', () => {
  mobileMenu.classList.remove('open'); menuToggle.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false');
}));

/* seção ativa no menu */
const secObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) $$('.nav-link').forEach(l => l.classList.toggle('active', l.dataset.section === e.target.id));
  });
}, { rootMargin: '-40% 0px -55% 0px' });
['inicio', 'projetos', 'sobre', 'contato'].forEach(id => { const s = document.getElementById(id); if (s) secObs.observe(s); });

/* ---------- works: renderização ---------- */
const grid = $('#works-grid');
function renderWorks() {
  grid.innerHTML = PROJECTS.map((p, i) => `
    <article class="work-card reveal" data-cat="${p.catKey}" data-index="${i}" tabindex="0" role="button"
      aria-label="Abrir estudo de caso: ${p.title}">
      <div class="work-media">
        <img src="${p.cover}" alt="Capa do projeto ${p.title}" loading="lazy" decoding="async">
        <span class="work-id">${p.code}</span>
        <span class="work-view">VER PROJETO →</span>
        <span class="sel-handle tl" aria-hidden="true"></span><span class="sel-handle tr" aria-hidden="true"></span>
        <span class="sel-handle bl" aria-hidden="true"></span><span class="sel-handle br" aria-hidden="true"></span>
      </div>
      <div class="work-info">
        <h3>${p.title}</h3>
        <span class="work-meta">${p.cat} — ${p.year}</span>
        <p>${p.desc}</p>
      </div>
    </article>`).join('');
  observeReveals(grid);
  $$('.work-card', grid).forEach(card => {
    card.addEventListener('click', () => openProject(+card.dataset.index));
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openProject(+card.dataset.index); } });
  });
}
renderWorks();

/* ---------- filtros ---------- */
const emptyMsg = $('#works-empty');
if (PROJECTS.length === 0) {
  const filtersEl = $('.filters'); if (filtersEl) filtersEl.hidden = true;
  emptyMsg.textContent = 'Nenhum projeto publicado ainda — adicione em PROJECTS (assets/js/app.js).';
  emptyMsg.hidden = false;
}
$$('.filter-btn').forEach(btn => btn.addEventListener('click', () => {
  $$('.filter-btn').forEach(b => { b.classList.toggle('active', b === btn); b.setAttribute('aria-pressed', b === btn); });
  let visible = 0;
  $$('.work-card', grid).forEach(card => {
    const show = btn.dataset.filter === 'all' || card.dataset.cat === btn.dataset.filter;
    card.hidden = !show; if (show) visible++;
  });
  emptyMsg.hidden = visible !== 0;
}));

/* ---------- reveal on scroll ---------- */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('inview'); revealObs.unobserve(e.target); } });
}, { threshold: 0.12 });
function observeReveals(scope) { $$('.reveal', scope).forEach(el => revealObs.observe(el)); }
observeReveals(document);

/* ---------- contadores (about) ---------- */
const countObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    countObs.unobserve(e.target);
    const end = +e.target.dataset.count, dur = reduced ? 1 : 1200, t0 = performance.now();
    (function step(t) {
      const k = Math.min(1, (t - t0) / dur);
      e.target.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))) + (k === 1 ? '+' : '');
      if (k < 1) requestAnimationFrame(step);
    })(t0);
  });
}, { threshold: 0.6 });
$$('[data-count]').forEach(el => countObs.observe(el));

/* ---------- processo: progresso vermelho ---------- */
const prog = $('#process-progress'), steps = $$('.process-step');
const progObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('lit');
    else e.target.classList.remove('lit');
  });
}, { threshold: 0.8 });
steps.forEach(s => progObs.observe(s));
function updateProgress() {
  const sec = $('#processo'); if (!sec) return;
  const r = sec.getBoundingClientRect();
  const k = Math.max(0, Math.min(1, (innerHeight * 0.7 - r.top) / r.height));
  prog.style.width = (k * 100) + '%';
}
addEventListener('scroll', updateProgress, { passive: true }); updateProgress();

/* ---------- hero glow (cursor light) ---------- */
const hero = $('.hero'), glow = $('#hero-glow');
if (hero && glow && !reduced && matchMedia('(pointer:fine)').matches) {
  let raf = null;
  hero.addEventListener('pointermove', e => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      const r = hero.getBoundingClientRect();
      glow.style.left = (e.clientX - r.left) + 'px';
      glow.style.top = (e.clientY - r.top) + 'px';
      raf = null;
    });
  });
}

/* ---------- cursor contextual + inspect ---------- */
const dot = $('#cursor-dot'), tag = $('#cursor-tag');
const inspectBtn = $('#inspect-toggle'), inspectLayer = $('#inspect-layer');
const readout = $('.inspect-readout'), lineV = $('.inspect-line-v'), lineH = $('.inspect-line-h');
let inspectOn = false;

inspectBtn.addEventListener('click', () => {
  inspectOn = document.body.classList.toggle('inspect-on');
  inspectBtn.setAttribute('aria-pressed', inspectOn);
});
document.addEventListener('pointermove', e => {
  dot.style.left = e.clientX + 'px'; dot.style.top = e.clientY + 'px';
  tag.style.left = e.clientX + 'px'; tag.style.top = e.clientY + 'px';
  if (inspectOn) {
    lineV.style.left = e.clientX + 'px'; lineH.style.top = e.clientY + 'px';
    readout.textContent = 'X: ' + String(e.clientX).padStart(4, '0') + '  Y: ' + String(e.clientY).padStart(4, '0');
  }
}, { passive: true });
document.addEventListener('pointerover', e => {
  const overCard = !!e.target.closest('.work-card');
  tag.classList.toggle('show', overCard);
  dot.classList.toggle('show', !!e.target.closest('a,button,.work-card'));
});

/* ---------- modal de projeto ---------- */
const modal = $('#project-modal');
let current = 0, lastFocus = null;
function openProject(i) {
  current = i;
  const p = PROJECTS[i];
  $('#modal-code').textContent = p.code;
  $('#modal-cat').textContent = p.cat;
  $('#modal-cover').src = p.cover;
  $('#modal-cover').alt = 'Capa do projeto ' + p.title;
  $('#modal-cap').textContent = 'FIG.01 — CAPA / ' + p.code;
  $('#modal-title').textContent = p.title;
  $('#modal-desc').textContent = p.desc;
  $('#m-cat').textContent = p.cat;
  $('#m-year').textContent = p.year;
  $('#m-pal').textContent = p.palette;
  $('#m-context').textContent = p.context;
  $('#m-challenge').textContent = p.challenge;
  $('#m-concept').textContent = p.concept;
  $('#m-results').textContent = p.results;
  $('#m-gallery').innerHTML = p.gallery.map((g, k) => '<img src="' + g + '" alt="' + p.title + ' — imagem ' + (k + 2) + ' da galeria" loading="lazy" decoding="async">').join('');
  modal.hidden = false;
  document.body.classList.add('locked');
  lastFocus = document.activeElement;
  $('.modal-panel').scrollTop = 0;
  $('#modal-close').focus();
}
function closeProject() {
  modal.hidden = true;
  document.body.classList.remove('locked');
  if (lastFocus) lastFocus.focus();
}
$('#modal-close').addEventListener('click', closeProject);
$('[data-close]', modal).addEventListener('click', closeProject);
$('#m-prev').addEventListener('click', () => openProject((current - 1 + PROJECTS.length) % PROJECTS.length));
$('#m-next').addEventListener('click', () => openProject((current + 1) % PROJECTS.length));
document.addEventListener('keydown', e => {
  if (modal.hidden) return;
  if (e.key === 'Escape') closeProject();
  if (e.key === 'ArrowRight') $('#m-next').click();
  if (e.key === 'ArrowLeft') $('#m-prev').click();
});

/* ---------- formulário ---------- */
const form = $('#contact-form'), formStart = Date.now();
const emailOk = v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
function fail(name, msg) {
  const field = $('#f-' + (name === 'mensagem' ? 'msg' : name)).closest('.field');
  field.classList.add('invalid');
  field.setAttribute('aria-invalid', 'true');
  $('[data-for="' + name + '"]', form).textContent = msg;
  return false;
}
function clearFail(name) {
  const field = $('#f-' + (name === 'mensagem' ? 'msg' : name)).closest('.field');
  field.classList.remove('invalid'); field.removeAttribute('aria-invalid');
  $('[data-for="' + name + '"]', form).textContent = '';
}
function validate() {
  let ok = true;
  const nome = form.nome.value.trim(), email = form.email.value.trim(),
        tipo = form.tipo.value, msg = form.mensagem.value.trim();
  nome.length >= 2 ? clearFail('nome') : ok = fail('nome', 'Me conte seu nome (mín. 2 letras).') && ok;
  emailOk(email) ? clearFail('email') : ok = fail('email', 'Informe um e-mail válido, ex.: nome@email.com.') && ok;
  tipo ? clearFail('tipo') : ok = fail('tipo', 'Selecione o tipo de projeto.') && ok;
  msg.length >= 10 ? clearFail('mensagem') : ok = fail('mensagem', 'Descreva seu projeto em ao menos 10 caracteres.') && ok;
  return ok;
}
form.addEventListener('submit', e => {
  e.preventDefault();
  /* proteção anti-spam: honeypot + tempo mínimo */
  if (form.website.value || Date.now() - formStart < 2500) return;
  if (!validate()) { const bad = $('.field.invalid input, .field.invalid select, .field.invalid textarea', form); if (bad) bad.focus(); return; }
  form.hidden = true;
  $('#form-success').hidden = false;
  $('#form-success').scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' });
});
['nome', 'email', 'tipo', 'mensagem'].forEach(n => form.elements[n] && form.elements[n].addEventListener('input', () => clearFail(n)));

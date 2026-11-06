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
const IMG = (id, w) => 'https://images.unsplash.com/' + id + '?q=80&w=' + (w || 1400) + '&auto=format&fit=crop';
const PROJECTS = [
  {
    code: 'PROJECT_001', title: 'Nordeste Café — Identidade', cat: 'Identidade visual', catKey: 'identidade', year: '2025',
    desc: 'Sistema visual completo para cafeteria artesanal: logotipo, embalagens, menu e sinalização.',
    cover: IMG('photo-1558655146-9f40138edfeb'), palette: 'Laranja queimado · Creme · Grafite',
    context: 'Marca nova no segmento de cafés especiais que precisava traduzir origem e artesanato em um sistema visual enxuto e memorável.',
    challenge: 'Fugir do clichê “café aconchegante” e construir uma identidade que funcionasse do copo descartável à fachada, sem perder legibilidade.',
    concept: 'Tipografia expressiva + grid editorial inspirado em rótulos de café, com o verde-limão reservado apenas para detalhes de informação — criando o mesmo contraste que o site usa.',
    results: 'Sistema aprovado para 3 pontos de venda, aumento percebido de valor da marca e redução de custos de produção com padronização.',
    gallery: [IMG('photo-1561070791-2526d30994b5'), IMG('photo-1559028012-481c04fa702d'), IMG('photo-1586717791821-3f44a563fa4c')]
  },
  {
    code: 'PROJECT_002', title: 'Vibe Fitness — Social Media', cat: 'Social media', catKey: 'social', year: '2025',
    desc: 'Linha editorial de 30 dias para lançamento de estúdio boutique: posts, stories e capas de reels.',
    cover: IMG('photo-1611162617213-7d7a39e9b1d7'), palette: 'Preto · Lime · Branco gelo',
    context: 'Estúdio que inaugurava e precisava lotar a agenda de experimentação em 45 dias, com público jovem e urbano.',
    challenge: 'Produzir volume alto com consistência visual e mensagens curtas que funcionam sem som e em 2 segundos de atenção.',
    concept: 'Templates modulares com tipografia gigante, foto em P&B e o lime como marcador de ação — cada peça é um “frame” recortável.',
    results: 'Taxa de salvamento acima da média do setor e lista de espera esgotada na primeira semana.',
    gallery: [IMG('photo-1517836357463-d25dfeac3438'), IMG('photo-1571019613454-1cb2f99b2d8b'), IMG('photo-1541534741688-6078c6bfb5c5')]
  },
  {
    code: 'PROJECT_003', title: 'Festival Horizonte — Campanha', cat: 'Design publicitário', catKey: 'publicidade', year: '2024',
    desc: 'Campanha 360º para festival de música: key visual, OOH, line-up e material promocional.',
    cover: IMG('photo-1541961017774-22349e4a1262'), palette: 'Índigo · Coral · Amarelo',
    context: 'Primeira edição de festival regional que precisava competir visualmente com eventos nacionais.',
    challenge: 'Garantir leitura à distância (outdoor) e reconhecimento imediato em feed, mantendo o sistema flexível para dezenas de atrações.',
    concept: 'Key visual geométrica com círculos concêntricos que viram “placas” para cada atração — um sistema, infinitas variações.',
    results: 'Vendas de primeiro lote esgotadas em 72h e cobertura de imprensa citando a identidade da campanha.',
    gallery: [IMG('photo-1470229722913-7c0e2dbbafd3'), IMG('photo-1501281668745-f7f57925c3b4'), IMG('photo-1492684223066-81342ee5ff30')]
  },
  {
    code: 'PROJECT_004', title: 'Revista Traço — Direção de Arte', cat: 'Direção de arte', catKey: 'direcao', year: '2024',
    desc: 'Direção de arte e projeto gráfico da edição 12 da revista Traço: capa, miolo e ensaios fotográficos.',
    cover: IMG('photo-1554080353-a576cf803bda'), palette: 'P&B editorial · Cinza prata',
    context: 'Revista independente de cultura que passava por reformulação visual sem perder o público fiel.',
    challenge: 'Equilibrar ousadia editorial com custo de impressão reduzido e rotina de produção enxuta.',
    concept: 'Fotografia de estúdio em P&B, tipografia oversized e linhas-guia vazadas como elemento gráfico recorrente — a “interface” aplicada ao papel.',
    results: 'Edição esgotada, convite para exposição do projeto gráfico e destaque em premiação de design editorial.',
    gallery: [IMG('photo-1504711434969-e33886168f5c'), IMG('photo-1524578271613-d550eacf6090'), IMG('photo-1544716278-ca5e3f4abd8c')]
  },
  {
    code: 'PROJECT_005', title: 'Aurora Cosméticos — Embalagens', cat: 'Identidade visual', catKey: 'identidade', year: '2023',
    desc: 'Linha de embalagens para marca de cosméticos clean: rótulos, frascos, caixas e guia de uso.',
    cover: IMG('photo-1556228720-195a672e8a03'), palette: 'Verde sálvia · Areia · Tinta',
    context: 'Marca digital que ia para o varejo e precisava de embalagem que se sustentasse na prateleira sem o apoio do e-commerce.',
    challenge: 'Criar hierarquia de informação cristalina com restrições regulatórias e ainda manter apelo premium.',
    concept: 'Sistema tipográfico com numeração de linha (01/02/03) e faixas de cor — o consumidor localiza o produto por forma, cor e número.',
    results: 'Aprovado em cadeia de farmácias em 2 estados e redução de 30% em retrabalho de design com o guia.',
    gallery: [IMG('photo-1596462502278-27bfdc403348'), IMG('photo-1571781926291-c477ebfd024b'), IMG('photo-1608248543803-ba4f8c70ae0b')]
  },
  {
    code: 'PROJECT_006', title: 'MÁQUINA — Cartaz Experimental', cat: 'Experimental', catKey: 'experimental', year: '2025',
    desc: 'Série de cartazes gerativos em 3D sobre a estética de interfaces e seleção digital.',
    cover: IMG('photo-1618005182384-a83a8bd57fbe'), palette: 'Cromo · Lime · Preto',
    context: 'Projeto autoral para estudar como gestos de software (selecionar, alinhar, enquadrar) podem virar linguagem gráfica.',
    challenge: 'Dois dias de renderização por peça sem perder o conceito — cada variação precisava parecer parte de um mesmo sistema.',
    concept: 'Objetos 3D enquadrados por handles de seleção e coordenadas — exatamente o vocabulário visual deste site.',
    results: 'Selecionado para mostra coletiva e base para futuras direções de arte em projetos digitais.',
    gallery: [IMG('photo-1634017839464-5c339ebe3cb4'), IMG('photo-1620641788421-7a1c342ea42e'), IMG('photo-1614850715649-1d0106293bd1')]
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

/* ---------- processo: progresso lime ---------- */
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

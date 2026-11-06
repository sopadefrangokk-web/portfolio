# Creative Portfolio — Site de portfólio

Portfólio digital em estilo **Dark Editorial / Red Accent** ("Design em estado digital"):
interface criativa com modo de inspeção, cursor contextual, project IDs e
estudo de caso por projeto. Sem dependências — HTML + CSS + JS puros.

## Como rodar

Abra `index.html` no navegador, ou sirva a pasta:

```powershell
python -m http.server 8000
# acesse http://localhost:8000
```

## Como personalizar

- **Contatos (WhatsApp, e-mail, Instagram, Behance):** edite o objeto `CONFIG`
  no topo de `assets/js/app.js` — os botões e links atualizam automaticamente.
- **Projetos:** edite o array `PROJECTS` em `assets/js/app.js`
  (capa, galeria, contexto, desafio, conceito, resultados). Cards, filtros e
  modal são gerados automaticamente.
- **Imagens:** troque as URLs do Unsplash por suas imagens finais (WebP/AVIF
  recomendado) mantendo o mesmo layout. Lazy loading já está ativo.
- **Nome/marca:** busque por `CREATIVE PORTFOLIO` / `creativeportfolio.com.br`
  nos arquivos para substituir.

## Recursos implementados

- Header fixo com seção ativa, menu mobile e CTA com disponibilidade.
- Hero tipográfico oversized com handles de seleção e luz que segue o cursor.
- Works assimétricos com filtros por categoria e animação de entrada.
- Modal de estudo de caso (capa, contexto, desafio, conceito, resultados,
  galeria, projeto anterior/próximo, setas do teclado).
- Sobre com foto P&B, especialidades, ferramentas, experiência e contadores.
- Serviços numerados, processo com progresso vermelho ao rolar.
- Contato com WhatsApp, links diretos e formulário validado (honeypot +
  tempo mínimo anti-spam) com tela de confirmação.
- **INSPECT MODE:** botão no canto inferior ativa grade, linhas-guia,
  coordenadas e rótulos de seção.
- Responsivo desktop/tablet/mobile, `prefers-reduced-motion` respeitado,
  foco visível, SEO (meta/OG), `robots.txt` e `sitemap.xml`.

## Estrutura

```
index.html
assets/css/style.css
assets/js/app.js
robots.txt
sitemap.xml
README.md
```
# matheusfrportfolio

# 🎆 New Year Site

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![lz-string](https://img.shields.io/badge/lz--string-compressão_de_URL-orange)
![Vercel](https://img.shields.io/badge/Vercel-deploy-black?logo=vercel)

> Gere e compartilhe uma página personalizada de Ano Novo — sem backend, sem banco de dados.

**[→ Ver demo ao vivo](https://ano-novo-2026.vercel.app/?d=N4IgdghgtgpiBcIDiEBGAnAljANgAgDFdMAHOAGhAAsZ0B7BEAUQGcz68BHAVxjxhYsIeCGDp4ALnQAmdFngBudAMYAr+RJhgq0ETmWiA5xFl4WMbvLqoAVjAmYlLAIQhKnAF4BGRgAUIgjCYeJCEEMrcONImMOR4AGboMDxa9kH8ClpS8tJ8mspiOHQA5pjCfMp02jDKwdxQeMXo3CTimGDKWJn4uSJQmMVyAHRuIJ4ATIysEty5wVDcmFL8gSJicXyYguKwfSbcScoWeKgBEqKaI+4eAMyMAEJ0AYoQxc+9ACoAkqO5JFRTNi0cQpPDiEj0AAemCg4lE4nMNmEEHa0TwsBwVDo6DwplBAk0rkodBIEhYCAA2iAACKkIpQCAOSqjaazOjcUYfdBoCCY9kgAC6AF8gA))**

![Hero preview](./github_parts/hero.png)

---

## Como funciona

O usuário preenche um formulário com nome e mensagem. Os dados são comprimidos
com `lz-string` e embutidos diretamente na URL como query params — sem nenhum
dado salvo em servidor. Quem recebe o link vê a página personalizada
instantaneamente.
```
[Formulário] → [lz-string comprime os dados] → [URL compartilhável] → [Página renderizada]
```

---

## Stack

| Tecnologia | Papel |
|---|---|
| React | UI e renderização da página personalizada |
| React Router | Roteamento client-side entre formulário e página gerada |
| lz-string | Compressão dos dados na URL |
| Vercel | Hospedagem e deploy contínuo |

---

## Decisões técnicas

**Por que URL como banco de dados?**
O requisito era zero backend e zero custo de infraestrutura. Salvar estado na
URL via query params é a solução mais simples — mas URLs longas geram
desconfiança, especialmente em época de golpes digitais. A compressão com
`lz-string` resolve isso mantendo o link curto o suficiente para ser
compartilhado sem estranhamento.

**Por que React sem framework?**
O site é inteiramente estático e client-side. Next.js adicionaria complexidade
desnecessária para um projeto sem SSR, sem API routes e com prazo de 5 dias.

---

## Contexto do projeto

Desenvolvido em ~5 dias entre 25 e 31 de dezembro de 2025, a partir de um
insight: um site de viralização de Natal com design ruim estava circulando
entre conhecidos. A hipótese era que uma versão com melhor UX teria alcance
maior.

O projeto foi concluído no prazo. A monetização via Google AdSense não foi
ao ar porque a plataforma exige um período de análise de semanas — descoberto
na véspera do Ano Novo. O aprendizado: validar requisitos de terceiros antes
de iniciar, não depois.

---

## Rodando localmente
```bash
git clone https://github.com/ferreirointz/new_year_site
cd new_year_site
npm install
npm run dev
```

---

![CTA](./github_parts/final_CTA.png)

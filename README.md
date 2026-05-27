<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:130f13,100:5a432c&height=190&section=header&text=ONA%20Studio&fontSize=56&fontColor=eee6df&animation=fadeIn&fontAlignY=39&desc=Sanitized%20Frontend%20Concept&descAlignY=57" width="100%"/>
</div>

<div align="center">
  <img src="https://img.shields.io/badge/Artifact-Runnable%20UI%20Demo-d0a866?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Public%20Code-HTML%20%2B%20CSS%20%2B%20JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/Original%20Project-Private-334155?style=for-the-badge"/>
</div>

## Public Concept

This repository contains a sanitized frontend concept for a recording studio experience: room discovery, a visual audio motif and a session request interaction. It exists to demonstrate interface design and frontend implementation without publishing the private project's source, assets or customer information.

![ONA Studio frontend concept preview](docs/ona-preview.png)

## What You Can Review

- Responsive single-page layout built with semantic HTML, CSS and JavaScript.
- Clear navigation and call-to-action flow.
- Accessible labelled form interaction with explicit demo-only confirmation.
- A visual system built without private photography or brand assets.

## Run Locally

Open the hosted demo: [https://cmesa-dev.github.io/onastudio/](https://cmesa-dev.github.io/onastudio/)

Open `demo/index.html` in a browser, or serve the folder with any static file server:

```bash
python -m http.server 8080 --directory demo
```

Then open `http://localhost:8080`.

## Verification

```bash
node --check demo/app.js
```

GitHub Actions runs the JavaScript syntax verification on every proposed change.

The repository also contains a GitHub Pages deployment workflow for publishing the static demo from `demo/`.

## Scope Boundary

| Included publicly | Not included |
|---|---|
| Sanitized UI concept and form state interaction | Original frontend implementation |
| Code-only illustrative layout | Private photography, customer names or business data |
| Responsive behavior | Production booking or content services |

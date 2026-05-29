<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:130f13,100:5a432c&height=190&section=header&text=ONA%20Studio&fontSize=56&fontColor=eee6df&animation=fadeIn&fontAlignY=39&desc=Concepto%20Frontend%20Saneado&descAlignY=57" width="100%"/>
</div>

<div align="center">
  <img src="https://img.shields.io/badge/Artefacto-Demo%20UI%20Ejecutable-d0a866?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Código%20Público-HTML%20%2B%20CSS%20%2B%20JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/Proyecto%20Original-Privado-334155?style=for-the-badge"/>
  <br/>
  <a href="README.md">🇬🇧 English</a>
</div>

## Concepto Público

Este repositorio contiene un concepto frontend saneado para la experiencia de un estudio de grabación: descubrimiento de salas, un motivo visual de audio y una interacción de solicitud de sesión. Existe para demostrar diseño de interfaz e implementación frontend sin publicar el código fuente, los assets ni la información de clientes del proyecto privado original.

![Vista previa del concepto frontend de ONA Studio](docs/ona-preview.png)

## Qué Puedes Revisar

- Layout de página única responsivo construido con HTML semántico, CSS y JavaScript.
- Navegación clara y flujo de llamada a la acción.
- Interacción de formulario accesible con etiquetas explícitas y confirmación solo-demo.
- Un sistema visual construido sin fotografías privadas ni assets de marca.

## Ejecutar en Local

Abre la demo alojada: [https://cmesa-dev.github.io/onastudio/](https://cmesa-dev.github.io/onastudio/)

Abre `demo/index.html` en un navegador, o sirve la carpeta con cualquier servidor de archivos estático:

```bash
python -m http.server 8080 --directory demo
```

Luego abre `http://localhost:8080`.

## Verificación

```bash
node --check demo/app.js
```

GitHub Actions ejecuta la verificación de sintaxis de JavaScript en cada cambio propuesto.

El repositorio también contiene un flujo de despliegue a GitHub Pages para publicar la demo estática desde `demo/`.

## Límite de Alcance

| Incluido públicamente | No incluido |
|---|---|
| Concepto de UI saneado e interacción de estado del formulario | Implementación frontend original |
| Layout ilustrativo solo con código | Fotografía privada, nombres de clientes o datos de negocio |
| Comportamiento responsivo | Servicios de reserva o contenido en producción |

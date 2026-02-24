# Docusaurus Portfolio

A modern and responsive developer portfolio built with Docusaurus and React, showcasing projects, technical skills, and professional experience.

---

## Table of Contents

- [1. Description](#1.-description)
- [2. Tech Stack](#2.-tech-stack)
- [3. Installation](#3.-installation)
- [4. How to Start](#4.-how-to-start)
- [5. Build](#5.-build)
- [6. Deployment](#6.-deployment)
- [7. Security Notes](#7.-security-notes)
- [8. License](#8.-License)
---

## 1. Description

This project is a personal developer portfolio created with Docusaurus and React.
It highlights selected projects, technical skills, and professional background in a structured and user-friendly layout.

The portfolio includes:
- A responsive hero section
- A categorized skills matrix
- Interactive project highlights with detailed descriptions
- A contact section with professional links
- Clean and modern UI design
- The project is designed to be easily cloned, installed, and customized for personal use.
---

## Tech Stack

This project is built using the following technologies:

- *Docusaurus*
- *React*
- *TypeScript*
- *CSS Modules*
- *Node.js (v20)*
- *npm*
- *Installation*
---

## Installation

Follow these steps to install the project locally:

1. Clone the repository:

```bash
git clone https://github.com/behrouzRajaei/docusaurus-portfolio.git
```

2. Navigate into the project directory:

```bash
cd docusaurus-portfolio
```

3. Install dependencies:

```bash
npm install
```
---
## How to Start

After installing the dependencies, start the development server:

```bash
npm start
```

The application will start locally at:

```
http://localhost:3000
```

You can now view the portfolio in your browser.
---
## Build

To create a production build of the project, run:

```bash
npm run build
```

This command generates an optimized static build inside the build directory.

The generated files can be deployed to any static hosting provider.
---

## Deployment

After running the production build, the static files are generated in the build directory.

You can deploy the contents of this folder to any static hosting provider, such as:

- GitHub Pages
- GitLab Pages
- NGINX
- Any cloud-based static hosting service

Make sure the hosting environment serves the files from the build directory.
---

## Security Notes

This project does not require any environment variables or secret configuration to run locally.

However, as a general best practice:

- Do not store passwords, tokens, or API keys directly inside the repository.
- Do not commit SSH keys or private credentials.
- If sensitive configuration is ever required, use environment variables instead of hardcoding them.

Always follow secure development practices when modifying or extending this project.
---

## 9. License

This project is licensed under the MIT License.

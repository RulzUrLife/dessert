Dessert
=======

A simple and sweet design system

# Scripts de build

## Installation
1. `npm install -g gulp`
2. Lancer `npm install` dans le dossier pour installer les plugins

## Taches de build
* `clean` : supprime le CSS généré
* `build` : compile les sources SASS en CSS
* `watch` : lance `build` lorsqu'un fichier SASS est modifié

## Lancer les tests
* `npm test` appelle la tache Gulp `build` dans laquelle une règle CSSLint s'execute.

# Organisation du projet
```
/
├── components
│   ├── grid.scss
│   └── buttons.scss
├── globals
│   ├── responsive_helpers.scss
│   ├── variables.scss
└── plugins
    └── reset.scss
```

# TODO
* ~~Grid system~~
* Buttons
* Forms
* Menu
* Navigation
* Modals

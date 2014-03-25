Dessert [![Build Status](https://travis-ci.org/RulzUrLife/dessert.svg)](https://travis-ci.org/RulzUrLife/dessert)
=======

A simple and sweet design system

# Build

## Installation
1. `npm install -g gulp`
2. Use `npm install` inside project's folder to install all the required dependencies

## Tasks
Usage: `gulp` (calls default task) or `gulp [task_name]`

Available tasks are:
* `clean`: deletes the `dist` folder
* `fonts`: copies all the fonts from `fonts` folder to the `dist`folder
* `sass`: compiles all the SASS files into a single and linted CSS `desset.css`
* `sass:dist`: compiles all the SASS files into a single, minified and linted CSS `dessert.min.css`
* **`build`: builds a developper friendly version dessert (default task)**
* `build:dist`: builds a production-ready version dessert
* `watch`: runs the `build` task when a SASS file is modified

## Tests
* Use`npm test` which runs the `build` task

# Project organisation
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

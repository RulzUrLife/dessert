Dessert ![Build status](https://api.travis-ci.org/RulzUrLife/dessert.svg?branch=integration "Build status")
=======

A simple and sweet design system

# Build

## Installation
1. `npm install -g gulp`
2. Use `npm install` inside project's folder to install all the required dependencies

## Tasks
Usage: `gulp [task_name]`

Available tasks are:
* `clean`: deletes the `dist` folder
* `build`: compiles all the SASS files into a single, minifed, linted CSS
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

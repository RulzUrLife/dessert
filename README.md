Dessert [![Build Status](https://travis-ci.org/RulzUrLife/dessert.svg)](https://travis-ci.org/RulzUrLife/dessert) [![devDependency Status](https://david-dm.org/RulzUrLife/dessert/dev-status.svg)](https://david-dm.org/RulzUrLife/dessert#info=devDependencies)
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
* `bower`: build the bower packaging in `dist/bower-dessert` directory

## Bower packaging

Use `gulp bower` to package, clone the bower repo and copy files in
the correct directory, commit, push and tag must be done manually.

Here are the steps:

* Move to `dist/bower-dessert`
* Add files to git, commit and push to bower-dessert repo:
    ```shell
    git add -A
    git commit -m 'Commit message for bower repo'
    git push
    ```
* Create a new tag ```git tag -a v1.4 -m 'my version 1.4'```
* Push tag to repo ```git push origin --tags```

bower will automatically check the tags to infer the version

## Tests
* Use`npm test` which runs the `build` task

# Project organisation
```
/
├── components
│   ├── grid.scss
│   └── buttons.scss
├── globals
│   ├── responsive-helpers.scss
│   ├── variables.scss
└── plugins
    └── reset.scss
```

# Documentation
The documentation of the project is available in the `docs` folder. Some samples are available in the `docs/samples` folder.

# Browser support
Dessert is designed to support the latest two versions (current and previous) of modern web browsers.

# TODO
* ~~Grid system~~
* ~~Buttons~~
* Forms
* Menu
* Navigation
* Modals

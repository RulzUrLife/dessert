Dessert
=======

A simple and sweet design system

### Style du code
* Utiliser une indentation avec deux espaces.
* Mettre un espace après un : lors de la declaration d'une propriété.
* Mettre un espace avant une { et un retour à la ligne après la déclaration d'une règle.
* Utiliser les codes hexadécimaux #FFF pour les couleurs, sauf s'il y a utilisation de rgba.
* Utiliser // pour les commentaires, même en bloc.

**Exemple**
```CSS
// Exemple de code CSS valide
.style-code {
  border: 1px solid #0f0;
  color: #000;
  background: rgba(0,0,0,0.5);
}
```

### Organisation du projet
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

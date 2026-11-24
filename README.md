# Mizan|| — Suivi des prix des métaux précieux

## Présentation

Ce projet est une application web permettant de gérer et de consulter une liste d'articles de bijouterie.
L'application récupère les articles depuis une API externe et permet à l'utilisateur de les afficher, de les rechercher, de les filtrer et de les trier.

Elle intègre également un système de gestion des erreurs et une sauvegarde locale des préférences de l'utilisateur.

## Fonctionnalités

- Récupération des articles : chargement des articles depuis une API avec gestion des erreurs HTTP et réseau.

- Affichage dynamique : présentation des articles sous forme de cartes.

- Ajout d'articles : possibilité d'ajouter de nouveaux articles.

- Modification : mise à jour des informations d'un article.

- Suppression : suppression d'un article avec gestion des erreurs.

- Remplacement : possibilité de remplacer un article.

- Recherche : recherche d'articles selon leurs informations.

- Filtrage : affichage des articles selon leur disponibilité (Disponible / Indisponible).

- Tri : classement des articles par ordre alphabétique, par prix ou par date.

- Gestion des erreurs : affichage des messages d'erreur et possibilité de réessayer le chargement.

- Persistance des préférences : sauvegarde et restauration du filtre et du tri grâce à localStorage.

## Technologies utilisées

- HTML5
- CSS3
- JavaScript (ES6+)
- Tailwind CSS
- Fetch API
- LocalStorage
- JSONPlaceholder API


## Lighthouse scores

- Performance : 97
- Accessibility : 77
- Best Practices : 92
- SEO : 100

## Installation et lancement

1. Cloner le dépôt :

   git clone https://github.com/FatimaZahraeTsouli/Mizan-II.git

2. Accéder au dossier du projet :

   cd Mizan-||

3. Ouvrir le projet avec Visual Studio Code.

4. Lancer le fichier index.html avec l'extension Live Server.

## Structure du projet

Mizan-||/
│
├── assets/
│   ├──images
│   ├── style.css
│   └── tailwind.css
│
├──node-modules
│
├── partie-2/
│   ├── api.js
│   ├── functions.js
│   ├── main.js
│   └──ui.js
│
├── src/
│   ├── app.js
│   ├── input.css
│   └── metalCarte.js
│
├── .gitignore
├── fichier.html
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── style.css

## API

Le projet utilise l'API JSONPlaceholder pour récupérer les données des articles :

https://jsonplaceholder.typicode.com/posts

Les articles sont gérés à l'aide des méthodes HTTP : "GET", "POST", "PUT", "PATCH", "DELETE".

- **PUT :** remplacement complet d'un article via un formulaire pré-rempli avec les mêmes validations que la création. Méthode idempotente.

- **PATCH :** modification partielle, comme le statut ou le prix depuis la liste. Pas nécessairement idempotente.


## Persistance des données

L'application utilise localStorage pour conserver les préférences de l'utilisateur, notamment :

Le critère de tri sélectionné.

Le filtre de disponibilité sélectionné.

Ces préférences sont restaurées automatiquement lors du rechargement de la page.

## Gestion des erreurs

L'application prend en charge plusieurs situations :

Échec de la récupération des données.

Erreurs HTTP.

Erreurs réseau.

Possibilité de relancer le chargement des articles.

## Auteur

Fatima Zahrae Tsouli

## Licence

Ce projet est réalisé dans un cadre pédagogique.
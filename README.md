<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# NestJS Tutorial 

Un projet d'apprentissage NestJS implémentant une API basique pour la gestion des utilisateurs avec authentification, autorisation et intégration PostgreSQL.

## Ressources d'apprentissage

Ce projet est construit en suivant ces ressources :

-   [Tutoriel NestJS youtube par Dave Gray](https://www.youtube.com/watch?v=8_X0nSrzrCw)
-   [Documentation officielle NestJS](https://docs.nestjs.com/)
-   [Tutoriel NestJS CRUD TypeORM avec PostgreSQL Djamware](https://www.djamware.com/post/682fe3626ac70d0cc285f612/nestjs-crud-api-with-typeorm-and-postgresql)

##  Fonctionnalités

-   **Gestion des utilisateurs** : Opérations CRUD pour les utilisateurs
-   **Authentification** : Système d'authentification basé sur JWT
-   **Base de données** : Intégration PostgreSQL avec TypeORM
-   **Documentation API** : Documentation Swagger/OpenAPI
-   **Validation** : Validation des requêtes avec class-validator
-   **Sécurité** : Hachage des mots de passe et jetons JWT

##  Stack Technique

-   **Framework** : NestJS
-   **Base de données** : PostgreSQL
-   **ORM** : TypeORM
-   **Authentification** : JWT (JSON Web Tokens)
-   **Documentation** : Swagger/OpenAPI
-   **Validation** : class-validator & class-transformer
-   **Hachage des mots de passe** : bcrypt

## Endpoints API

### App

-   `GET /` - Hello world

### Utilisateurs

-   `GET /users` - Récupérer tous les utilisateurs
-   `POST /users` - Créer un nouvel utilisateur
-   `GET /users/{id}` - Récupérer un utilisateur spécifique
-   `PATCH /users/{id}` - Mettre à jour un utilisateur
-   `DELETE /users/{id}` - Supprimer un utilisateur

### Authentification

-   `GET /auth/login` - Connexion utilisateur
-   `GET /auth/me` - Récupérer les informations de l'utilisateur connecté

##  Installation

1.  Installez les dépendances :

```bash
npm install
```

2.  Lancez la base de données PostgreSQL et créez un fichier `.env`  avec les variable d'environnement


3.  Démarrez l'application :

- Normalement
```bash

npm run start
```

- En mode dev
```bash
npm run start:dev

```

L'application sera disponible sur `http://localhost:3000`

##  Documentation API

La documentation Swagger est automatiquement générée et accessible sur : `http://localhost:3000/api`


##  Collections de requêtes

Le projet inclut des collections de requêtes Bruno dans le dossier `requests_collection/` pour tester facilement tous les endpoints de l'API.


# Frontend pour l'application d'analyse des sentiments




## Objectif du projet

Ce projet est un frontend simple en HTML/CSS/JS (vanilla JavaScript) qui permet :

 - de se connecter avec un username + password

  - puis d’envoyer un commentaire au backend pour obtenir une prédiction de sentiment


## Structure du projet
```
/frontend
│
├── index.html     
├── index.css        
├── login.js           
│
├── home.html        
├── home_style.css    
├── home.js             
│
└── README.md           

```

## Page Login

## Fichiers concernés :

   - index.html

   - index.css

   - login.js

## Fonctionnement :

1. L’utilisateur entre username et password

2. Le JS envoie une requête POST vers :

```shell
http://127.0.0.1:8000/docs#/default/login_login_post
```
1. Si correct → le backend renvoie un token

2. Le token est stocké dans localStorage

3. L’utilisateur est redirigé vers :

```shell
home.html
```

## Page Home

### Fichiers concernés :

   - home.html

   - home_style.css

   - home.js

### Fonctionnement :

1. L’utilisateur écrit un commentaire dans une textarea

2. Le JS récupère le token stocké lors du login

3. Une requête POST est envoyée à :

```shell
http://127.0.0.1:8000/docs#/default/predict_predict_post
```

## Comment lancer le frontend ?

Aucune installation n’est nécessaire

Il suffit d’ouvrir le fichier :

```shell
index.html
```
dans le navigateur(Chrome,Edge...)


## Communication avec le Backend

Le frontend communique avec le backend FastAPI via :

### Endpoint Login
```shell
POST /login
```
### Endpoint Predit

``shell
POST /predict
Authorization: Bearer <token>
```

### Important
Le backend doit être lancé avant d’utiliser le frontend :

```shell
uvicorn app.main:app --reload
```

## Technologies utilisées

   - HTML

   - CSS

   - Vanilla JavaScript

   - API Fetch

   - LocalStorage pour stocker le token

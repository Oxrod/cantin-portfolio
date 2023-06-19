# Disclaimer
Ce projet est un sujet d'évaluation dans le cadre d'une formation. La présence de toute information concernant un personnage existant ou ayant existé est totalement fortuite.

# Version en ligne
Lien vers le site (déployé sur Vercel) : [charles-cantin-portfolio](https://charles-cantin-portfolio.vercel.app/)

# Installation en local

L'installation de cette application suppose que Node et un gestionnaire de gestion de paquets tel que NPM ou Yarn sont installés et disponibles en ligne de commande dans le répertoire du projet.

## Installation des dépendances
- Cloner ce dépôt
- Lancer l'installation des paquets via `yarn install` ou `npm install` selon l'utilitaire d'installation de paquets utilisé

## Déploiement de l'application
- Lancer la commande `npm run build` ou `yarn run build` pour générer le build minifié de l'application
- Puis `npm run start` ou `yarn run start` pour servir l'application localement
- Suivre l'url de déploiement en local indiqué dans la console (par défaut `localhost:3000`)

## Paramétrage de [Prismic.io](https://prismic.io/)
### Prérequis
- Posséder un compte `Prismic.io`
- Avoir créé un dépôt pour le stockage des documents
- Si besoin de changer de compte il est vivement recommandé d'installer le [prismic-cli](https://prismic.io/docs/technical-reference/prismic-cli) pour naviguer entre les différents comptes

### Initialisation et configuration 
- Lancer la commande `npx @slicemachine/init@latest` puis suivre les instructions pour se connecter à son compte Prismic.io, sélectionner ensuite le dépôt depuis lequel vous souhaitez récupérer les documents
Lors de l'éxecution de cette commande, des fichiers de configuration sont modifiés pour récupérer les informations du dépôt et ensuite envoyer les schémas personnalisés au dépôt.
Une fois cette commande exécutée les changements sont effectifs sur le dépôt, vous pouvez donc visiter le dashboard de votre dépôt en vous connectant sur le site prismic.io et commencer à ajouter des images qui apparaîtront dans la galerie du projet.

### Gestion du contenu
#### Interface
En arrivant sur le dashboard de votre dépôt, la barre de navigation à gauche doit comporter ces 2 onglets :

![image](https://github.com/Oxrod/cantin-portfolio/assets/88422998/028140d9-c62d-416b-9f1a-39931559ac71)

Le premier représente le menu des Documents, qui liste les documents ajoutés. Ils peuvent avoir le statut "Draft" (Brouillon) ou "Live" (Publié) et uniquement les contenu publiés seront visible sur le site.

Le second représente la bibliothèque de média, c'est ici que doivent être ajoutés toutes les photos avant d'en créer des documents.

#### Gérer les images dans la galerie
##### Ajouter une image
Pour ajouter une image à la galerie, il faut tout d'abord l'ajouter à la bibliothèque de médias via un upload de fichier.
![Frame 1](https://github.com/Oxrod/cantin-portfolio/assets/88422998/2ef7c796-9601-47ec-9fef-3e5beff238cb)

Ensuite, dans l'onglet Documents, créer un nouveau document via un bouton situé au même endroit sur la page que celui de l'étape précédente.
On arrive sur un formulaire avec 3 champs à remplir :
- `image_id` : un identifiant qui doit être unique pour chaque document (n'a pas de lien avec le nom du document, qui lui est éditable dans la barre tout en haut de la page)
- `Image Source` : une image à sélectionner provenant de la bibliothèque d'image
- `Category` : la catégorie de l'image, utile pour le filtre

Une fois les modification terminées, ne pas oublier de cliquer sur le bouton `Publish` ou `Publier` en haut à droite de la page pour enregistrer le document.

##### Retirer une image
Pour retirer une image de la galerie, il suffit de sélectionner le document qui contient cette image et l'archiver en cliquant sur cette icône :
![Frame 1 (1)](https://github.com/Oxrod/cantin-portfolio/assets/88422998/7c5d3628-7237-4177-be0d-cc3cb6a81fa7)

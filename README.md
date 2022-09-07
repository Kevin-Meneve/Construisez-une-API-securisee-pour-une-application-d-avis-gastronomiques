Le but du projet est de réaliser est de réaliser la prémière version d'une application d'évaluation de sauces piquante

Pour faire fonction le projet : 

- Cloner le repository.
- Depuis le repertoire front , installer le front avec un "npm install"
- Depuis le repertoire back , installer le back avec un "npm install"
- Mettre en place votre base de donnée MongoDB Atlas : 
    1) Créez-vous un compte ou connecter vous sur MongoDB : https://www.mongodb.com/
    2) Créer un cluster 
    3) Depuis l'onglet Database Acces, Ajouter un nouvel utilisateur avec le privilège de lire et écrire sur les bases de données
    4) Depuis l'onglet Network Acces , Clicker sur le bouton ADD IP ADDRESS et clicker sur le bouton ALLOW ACCES FROM ANYHWHERE 
- Dans le repertoire back, renommer .envcopy en .env
- Dans la variable de votre .env, metter le lien que vous obtenez en selectionnant connect sur votre cluster using Connecting using VS code
- Changer la valeur de <password>, par le mot de passe assigné à l'utilisateur que vous avez créé auparavant
- Dans le repertoire back , créer un dossier "images".


Pour lancer le projet :

-Depuis le front : faire un "npm start"
-Depuis le back : faire un "node server" ou un "nodemon server" (Si vous avez installer nodemon sur votre environnement)
-Aller sur "http://localhost:4200/login" pour voir le projet une fois lancer.
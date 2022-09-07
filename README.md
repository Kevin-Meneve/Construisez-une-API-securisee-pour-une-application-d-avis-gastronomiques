Le but du projet est de réaliser la première version d'une application d'évaluation de sauces piquantes

Pour faire fonctionner le projet : 

- Cloner le repository.
- Depuis le répertoire front , installer le front avec un "npm install"
- Depuis le répertoire back , installer le back avec un "npm install"
- Mettre en place votre base de données MongoDB Atlas : 
    1) Créez-vous un compte ou connectez-vous sur MongoDB : https://www.mongodb.com/
    2) Créer un cluster 
    3) Depuis l'onglet Database Acces, Ajouter un nouvel utilisateur avec le privilège de lire et écrire sur les bases de données
    4) Depuis l'onglet Network Acces , Clicker sur le bouton ADD IP ADDRESS et clicker sur le bouton ALLOW ACCES FROM ANYHWHERE 
- Dans le répertoire back, renommer .envcopy en .env
- Dans la variable de votre .env, mettez le lien que vous obtenez en sélectionnant connect sur votre cluster using Connecting using VS code
- Changer la valeur de <password>, par le mot de passe assigné à l'utilisateur que vous avez créé auparavant
- Dans le répertoire back , créer un dossier "images".


Pour lancer le projet :

- Depuis le front : faire un "npm start"
- Depuis le back : faire un "node server" ou un "nodemon server" (Si vous avez installé nodemon sur votre environnement)
- Aller sur "http://localhost:4200/login" pour voir le projet une fois le front et le back lancer.
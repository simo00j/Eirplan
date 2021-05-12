# EIRPLAN : Affichage dynamique interactif de plans

EIRPLAN est un projet réalisé par une équipe de sept étudiants en deuxième année à l'ENSEIRB-MATMECA, spécialité informatique. 

# Fichiers 

Les fichiers disponibles dans l'archive sont : 
- Le dossier **server** qui contient les sources du serveur
- Le dossier **client** qui contient les sources du client 
- Le fichier Eirplan.apk qui permet l'installation de l'application 
- Le fichier Rapport.pdf 


 
# Installation et lancement de l'application 

Pour installer l'application, il faut lancer le fichier Eirplan.apk, et suivre les instructions. 
L'application est ensuite prête à être utilisée, et disponible sur l'appareil ou elle est installée. 

# Lancement manuel de l'application
L'application peut être lancé manuellement localement, sans utiliser le fichier d'installation. 

Il faut lancer le serveur :
	
	Allez dans le dossier server :
		cd server 
	installez les dépendances :
		npm install 
	lancez le serveur :
		node index.js
		
Puis lancer le client :

	Installez react : 
		npm install --global create-react-app
	Installez expo-cli :
		npm install -g expo-cli
	Allez dans le dossier client : 
		cd client 
	installez les dépendances :
		expo-cli
		npm install 
	lancez le client :
		npm start



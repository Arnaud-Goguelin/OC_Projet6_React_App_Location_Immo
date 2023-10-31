## Formation: Développeur Web
Organisme de Formation: Openclassrooms

### Projet 6 : Créez une application web de location immobilière avec React
**Projet validé**

### Consignes du projet:
  - Lien vers a maquette à intégrer: [Figma_Kasa](https://www.figma.com/file/qEno0LwL4ZLkWyeY59kxp1/UI-Design-Kasa-FR?type=design&node-id=0-1&mode=design))
  - Lien vers le JSON de données: [JSON_Kasa](https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json)
  - Styling: Tout le style CSS doit être codé en utilisant Sass
  - Pas de librairie React externe
  - Développer l’ensemble de l’application, les composants React, les routes React Router
  - Pour le défilement des photos dans la galerie :
        Si l'utilisateur se trouve à la première image et qu'il clique sur "Image précédente", la galerie affiche la dernière image. 
        Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "Image suivante", la galerie affiche la première image. 
        S'il n'y a qu'une seule image, les boutons "Suivant" et "Précédent" ainsi que la numérotation n'apparaissent pas.
  - La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.
  - Collapse : Par défaut, les Collapses sont fermés à l'initialisation de la page. 
    Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
    Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.

### Pistes d'amélioration présentées lors de la soutenance
  - Pagination à améliorer : réduire le nombre de page affichées si elles deviennent trop nombreuses, trouver une autre manière de gérer la pagination au format mobile (réponse au slide ou créer un bouton "Afficher Plus")
  - Hook personnalisé useFetch à améliorer: en l'état si l'on souhaite faire un autre appel à une API sur un autre fichier de données, il est nécessaire de créer un autre composant provider.
    
### Compétences évaluées et commentaires associés:
  1. Développer une interface web avec Sass **Validé**
      *Commentaires :
        L'application est parfaitement intégrée et utilise Sass.
        Le responsive fonctionne égalemen très bien.
        Du bon boulot*

2. Mettre en œuvre des animations CSS **Validé**
      *Commentaires :
        L'animation demandée est bien réalisée*

3. Initialiser une application avec Create React App **Validé**
      *Commentaires :
        L'app est bien initialisée avec CRA.
        Seules les librairies react-router et SASS sont installées.
        Pas d'erreur ni de warning*

4. Configurer la navigation entre les pages de l'application avec React Router **Validé**
      *Commentaires :
        Bonne gestion du routing et de la page 404, qui se déclenche bien lors d'un mauvais path ou mauvais id logement*

5. Développer des éléments de l'interface d'un site web grâce à des composants React **Validé**
      *Commentaires :
        Tous les composants demandés (et plus encore) sont implémentés.
        Le fonctionnement du carrousel est OK, avec des petis ajouts en plus.
        Collapse OK également.*

**Soutenance**
*Remarques :
Très bonne soutenance à l'image du projet.*

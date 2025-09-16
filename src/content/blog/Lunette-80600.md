---
title: "Construire sa lunette astronomique"
publishDate: 2025-09-17
img: "/assets/lunette23.png"
---

# Une idée !

Depuis longtemps, je voulais me lancer dans la construction d’une lunette artisanale. Mon objectif était de tirer parti d’un doublet achromatique industriel de 80 mm de diamètre et 600 mm de focale pour créer une lunette simple et agréable à utiliser.

## Une structure démontable...

Pour commencer, je me suis inspiré d’une réalisation de  [Christophe de la Chapelle](https://www.youtube.com/watch?v=lrGlOm_PigI&list=PLTonx1qVxeimXi5Ys_-bxtJpnygCTjmWp&index=18)
, en utilisant des cornières en aluminium comme base mécanique pour avoir une lunette démontable.
L’idée était de créer une structure légère et modulable :



- **Des cornières alu** : Elles servaient de support pour maintenir l'alignement entre l'objectif et le porte-oculaire.
- **Une approche Strut** : La lunette avait une approche Strut avec des vis pour le démontage.
Le chercheur était fixé directement sur le châssis.
- **Se monte sur toutes les montures** : Avec une queue d'aronde Vixen
- **Objectif un peu optimiste** : Je voulais faire de la photo avec...

![test de la focale](/assets/lunette18.png)
![lunette alu](/assets/lunette.png)
![objectifs](/assets/lunetteobjectif.png)


Cependant, après quelques essais, j’ai rapidement constaté les limites de ce montage au vu de la longueur focale de l'instrument. La structure, trop flexible, ne garantissait pas une stabilité suffisante pour faire de l'astrophoto. Je me suis donc orienté vers une autre fabrication.

## Le tube PVC

Pour gagner en rigidité et en simplicité, j’ai ensuite fabriqué une lunette avec un tube en PVC classique et un porte oculaire Skywatcher de 80/600. Cette fois, le montage était plus propre et fiable.
Mais une difficulté est vite apparue : le PVC subit une forte dilatation thermique, ce qui rendait impossible de garder la collimation et la mise au point. Donc aucune photo possible et quelques difficultés pour faire du visuel. J'ai donc abordé la problématique autrement...

## Et pourquoi pas le carbone ?

Pour résoudre les problèmes de stabilité, j’ai eu l'idée d'un faux tube constitué de deux tiges en carbone de 8 mm, qui assurent rigidité et alignement, sur lesquelles vient se glisser un tube PVC servant uniquement de baffle pour limiter les lumières parasites. Ce montage combine les deux approches précédentes et transforme la lunette en un instrument "utilisable".

## Les vrais problèmes commencent...

En parallèle de la construction du tube, j’ai dû m’attaquer au barillet.
Le barillet, c'est le support qui maintient le doublet achromatique. Et l'objectif, c'est le barillet plus les lentilles.
Pour ma première version, j’avais choisi un système très simple : le doublet était maintenu par trois vis latérales. Sur le papier, c’était une solution efficace et facile à réaliser.

Mais dans la pratique, ce montage exerçait une contrainte mécanique sur le verre, ce qui provoquait de l’astigmatisme. Résultat : les étoiles n’apparaissaient pas rondes dans le champ, mais légèrement déformées, et l’image perdait en netteté.

Cette expérience m’a montré à quel point le barillet est un point sensible : même une petite pression déséquilibrée peut suffire à dégrader fortement la qualité optique d’une lunette.

![barillet 1](/assets/lunettebarillet1.png)

J’ai même réalisé une photo d’Orion avec ce montage : le défaut sautait immédiatement aux yeux, les étoiles n’avaient plus du tout leur forme ponctuelle.

![Photo d'Orion ](/assets/lunetteorionv1.png)

Je me suis orienté vers un barillet standard, équipé d'un système de vis qui vient maintenir le doublet sans le contraindre. Cette solution s’est avérée bien plus efficace : le verre est correctement positionné et libre de ses dilatations, les étoiles retrouvent enfin leur rondeur, et l’ensemble gagne en qualité optique.

![barillet dessin 3D](/assets/lunettebarillet3.jpg)
![barillet imprimé en 3D prototype](/assets/lunettebarillet2.jpg)

## La collimation ?!

Tout instrument optique a la nécessité d'être collimaté !

Comme on peut le voir sur les photos du barillet, il y a trois vis supplémentaires montées sur ressorts, qui permettent d’assurer la collimation de l’objectif. Ce système fonctionne très bien et s’est révélé utile pour ajuster précisément l’alignement optique.

J'ai conçu un petit outil : un collimateur imprimé en 3D très proche du TSRCKOLLI collimator.

![collimateur](/assets/collimateur1.jpg)
![Collimateur imprimé en 3D](/assets/Collim2.png)
![Collimateur imprimé en 3D](/assets/collim1.png)

## Les tests !

J'ai fait quelques photos de test... Les étoiles sont enfin "rondes" mais toujours pas ponctuelles. 

ChantePierre m'a proposé de faire un test de [Ronchi](https://www.grattavetro.it/introduzione-al-test-di-ronchi/?lang=fr) sur la lunette pour se rendre compte un peu de la qualité optique du doublet et ce que l'on pourrait améliorer... 

![Test de Ronchi](/assets/lunette12.jpg)
![Test de Ronchi](/assets/lunette11.jpg)

## Et un filtre ?

Il ressort donc qu’il est nécessaire de réduire au maximum le bleu résiduel causé par l’aberration chromatique de l’objectif. Il est également intéressant d’utiliser un diaphragme à 70 mm, ce qui permet de limiter les défauts optiques, tout en ajoutant des baffles internes afin d’éviter les lumières parasites et d’améliorer le contraste de l’image.

![Baffle et masque 70MM](/assets/lunette22.png)
![Construction avec Baffle](/assets/lunette21.png)

Pour vérifier l’efficacité d’un filtre dans la réduction du bleu résiduel, j’ai décidé de faire un test simple avec le matériel que j’avais sous la main. J’ai utilisé un ancien filtre photo de couleur jaune, monté devant l’objectif. L’idée était de bloquer une partie du spectre bleu pour améliorer la netteté et le contraste, et ainsi tirer le maximum de ce que pouvait offrir l’optique.

Le résultat est parlant : j’ai photographié la galaxie d’Andromède (M31) avec et sans le filtre. Sur l’image brute sans filtre, on distingue bien la galaxie mais le halo bleu et la perte de contraste limitent la qualité. Avec le filtre jaune en revanche, les détails ressortent mieux, le fond de ciel est plus propre et l’ensemble gagne en piqué.

Cette comparaison m’a conforté dans l’idée qu’un filtre adapté, comme ceux conçus pour réduire l’aberration chromatique (par exemple un fringe-killer ou un semi-apo), pourrait vraiment améliorer le rendu visuel et photographique de cette lunette artisanale.

![installation de la lunette pour la soirée d'essai](/assets/lunette14.jpg)
Image sans filtre jaune :
![Lunette sans filtre](/assets/lunette16sansfiltre.jpg)
Image avec filtre jaune : 
![Lunette avec filtre](/assets/lunetteavecfiltrejaune.jpg)

## Des résultats !
Suite à toutes ces évolutions ! Et toujours avec ce filtre jaune, j'ai également fabriqué un filtre solaire. Pour cela, j’ai utilisé un simple capuchon de plomberie en PVC qui s’adapte parfaitement sur le manchon du tube, dans lequel j’ai fixé une feuille Astrosolar. Ce montage artisanal, à la fois simple et efficace, permet d’observer le Soleil en toute sécurité tout en profitant de la lunette.

![Lunette avec le filtre solar](/assets/lunettesolaire2.jpg)
Photo réalisée au téléphone sur l'oculaire:
![photo soleil](/assets/lunettesolaire.jpg)

## Le projet en image !
La lunette aux NCN 2024 :
![lunette au Ncn 2024](/assets/lunettencn.JPG)
Prise de vue sur Star Adventurer :
![prise de vue sur staradventurer](/assets/lunette18.jpg)
Image de la lune sans filtre :
![lune sans correction optique](/assets/lunelunettev2.jpg)
Prise de vue de la lune :
![lunette sur monture maison](/assets/lunette15.jpg)
 [L'image haute définition de la lune se trouve ici](https://app.astrobin.com/u/AstroMome?i=te6haa#gallery)

Soirée d'astro-dessin :
![astro-dessin](/assets/lunette9.jpg)

Dernière image réalisée d'Orion avec le filtre Baader Contrast Booster :
![Orion](/assets/lunetteorionfinal.jpg)

## En conclusion !

J'ai fini par investir dans un filtre Contrast Booster de Baader, qui m'a permis d'obtenir enfin des images correctes. Je publie ci-après une série de photos réalisées avec ce montage afin de montrer le rendu final. 

Question budget... Je dirais 40 € de porte-oculaire, 90 € de filtre Baader, 45 € de doublet et 30 € de fournitures... Donc 205 €. 

De cette aventure, il ressort qu’un tel projet est à la fois passionnant et formateur : j’y ai consacré beaucoup de temps et d’énergie, j’ai appris énormément sur l’optique et la mécanique d’une lunette, mais il faut aussi reconnaître que cela m’a coûté une bonne dose de frustration pour un résultat qui reste mitigé financièrement et surtout niveau temps.

Par contre, je pense avoir gagné assez d’expérience pour réaliser une lunette avec une optique de qualité, tout en restant légére afin qu’elle puisse tenir sur une Star Adventurer. Merci de m’avoir lu !


**Raphaël - La 3ème Dimension**
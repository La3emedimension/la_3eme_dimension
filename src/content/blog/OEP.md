---
title: "OEP - L'oculaire open source"
publishDate: 2025-09-12
img: "/assets/OEP1.png"
---

# Comment fabriquer son propre Plössl !
## OEP pour "Open Eyepiece Project"

Depuis quelque temps, je travaille sur une idée : concevoir un oculaire open source imprimé en 3D.
L’objectif initial est de réaliser un oculaire Plössl, un modèle assez répandu et apprécié pour sa simplicité et sa qualité optique. Par la suite, j’aimerais explorer d’autres designs optique comme le double Plössl afin de proposer une petite bibliothèque d’oculaires libres et reproductibles.

## Une conception pensée pour le DIY

La structure est entièrement conçue pour être imprimée en 3D, ce qui permet à chacun de fabriquer facilement son propre oculaire.
Côté optique, je commence avec des lentilles disponibles sur AliExpress, histoire de prototyper rapidement à faible coût.

![oculaire en 3D](/assets/OE3D.png)

## Red Henry

Dans mon approche, je me suis beaucoup inspiré du travail de Red Henry, un amateur passionné basé aux États-Unis, qui fabrique lui-même ses oculaires et partage ses expériences et ses conseils.
Il existe même un groupe Facebook dédié à ses travaux et à ceux de la communauté : [ATM Eyepieces (Red Henry)](https://www.facebook.com/groups/1484777181687589/)

## Le Schéma optique

Il est constitué de deux doublets symétriques, chacun formé de deux lentilles collées. Ces deux doublets sont placés face à face, séparés par un petit espace appelé spacer.

![OEP oculaire avec sens des lentilles visible](/assets/OEPdraw.PNG )

## Un outil ?

Un oculaire Plössl est constitué de deux doublets achromatiques symétriques. Sa distance focale effective (F) peut être approchée par la formule générale des systèmes optiques composés :

![Formule optique plôssl](/assets/OEPFormuleplossl.png)

- **f1 et f2**  = focales des deux doublets,
- **d** = distance séparant les deux doublets (mesurée entre leurs plans principaux).

Attention : cette formule n’est qu’une approximation. Pour modéliser précisément un Plössl, il faut utiliser des méthodes de tracé de rayons ou de matrices optiques (méthode ABCD), et non se limiter à la formule des deux lentilles.

En suivant ses recommandations et ses calculs, j'ai développé mon propre outil pour calculer la focale d'un oculaire, accessible en ligne : Mon calculateur de focale

---SPLIT_CONTENT_HERE---

Attention : cette formule n’est qu’une approximation. Pour modéliser précisément un Plössl, il faut utiliser des méthodes de tracé de rayons ou de matrices optiques (méthode ABCD), et non se limiter à la formule des deux lentilles.

## Les premiers protos

Le schéma de montage de l'oculaire : 
![OEP schéma de montage](/assets/OEPSchema.png)
Les différentes pièces:
![OEP oculaire sur le tapis de souris](/assets/OEP2.png)
![OEP oculaire sur le bureau](/assets/OEP4.png)

![OEP oculaire open source](/assets/OEP3.png)

Les fichiers ne sont pas encore disponibles sur ma page Printables.

Bonne soirée !

**Raphaël - La 3ème Dimension**
---
layout: post
title:  "Concourse initial"
date:   2023-09-10
---
<p class="intro"><span class="dropcap">A</span>ujourd'hui, les méthodes de déployement traditionnels que nous avons connu par le passé ont beaucoup évolué. 
Les platformes logiciels sont devenues victimes de leur propre succès et les succes stories n'en manquent pas. 
Pour livrer un logiciel, il ne suffit plus de copier un exécutable et d'interompre tous les utilisateurs pour le déployer. <strong>Désormais, il faut automatiser toute la chaine de production jusqu'au déploiement.</strong>
</p>

Il faut faire en sorte que personne ne soit perturbé par le déploiement ou une mise à jour quelquonque. A la moindre introduction de code dans le codebase, il faut valider s'il est conforme aux normes et peut
facilement passer en production. Il faut vérifier périodiquement si les composantes utilisées ne portent pas des failles de sécurité et autres.
Bref, il faut s'assurer de n'avoir rien cassé.

Pour atteindre cet objectif ultime, les ingénieurs logiciel ont inventé les notions d'[intégration continue (CI)](https://aws.amazon.com/fr/devops/continuous-integration) et de [déploiement continue (CD)](https://www.ibm.com/ca-fr/topics/continuous-deployment).
Ces deux notions se basent sur une chaine de montage souvent appelée un **pipeline**. L'outil CI que nous allons discuter dans ce tutoriel est 
[Concourse  CI](https://concourse-ci.org/)

Juste pour vous donner un peu le sourire, je m'en vais vous dire que le guide que vous lisez actuellement est 
construit par un pipeline concourse et déployé dans un cluster kubernetes à travers une image de conteneur docker. C'est ce dernier qui vous sert le contenu que 
vous lisez actuellement.

## Prérequis
Pour bien suivre ce guide, vous aurez besoin des notions et outils suivants:
* Connaitre [Docker](https://www.docker.com/) et les conteneurs,
* Connaitre [Kubernetes](https://kubernetes.io/) et son fonctionnement,
* [Installer Concourse CI ](https://concourse-ci.org/quick-start.html)sur votre machine ou serveur.

A la fin, vous serez en mesure de:
1. Comprendre l'essentiel des concepts liés à concourse,
2. Mettre en place une chaine d'intégration continue avec concourse.

Le long de ce guide, nous utiliseront les serveurs concourse et sonarqube suivants:
* [https://ci.tutoriel.dev](https://ci.tutoriel.dev)
* [https://sonar.tutoriel.dev](https://sonar.tutoriel.dev)

## La notion de pipeline
Certaines notions comme les jobs, pipelines, tasks et autres peuvent vous 
prêter à confusion si vous utilisez plusieurs outils comme Jenkins, Travis CI et autres.

Dans concourse, **un pipeline** est la description de toutes les étapes de traitement automatisé ou manuel
du code source d'un projet jusqu'au déploiement en production. Cette description se passe généralement 
dans des fichiers [.yml](https://www.redhat.com/fr/topics/automation/what-is-yaml). Ces fichiers peuvent aussi 
être modularisés pour utiliser des scripts bash, des programmes externes et autres. Peu importe
la modularisation, il y a un fichier yaml derrière qui décrit le pipeline.

S'il faille redire mais de manière plus pratique ce que c'est qu'un pipeline,
l'on pourrait dire que c'est un ensemble de **jobs** interconnectés qui peuvent
prendre des entrées (**inputs**), effectuer des traitements et générer des
sorties (**outputs**). Les jobs sont eux même composés de taches (**tasks**) qui 
peuvent s'excécuter de manière séquentiel ou je dirais séquentiellement parallèle. 

Selon la description officielle de concourse, _un pipeline est une **séquence non ordonnée de jobs**
qui eux même sont des **séquences ordonnées de tasks**_. En gros, ce que ça signifie c'est 
que ce n'est pas parcequ'un job apparait en premier dans le pipeline qu'il serait forcément exécuté en premier. 
Tout dépend des dépendances entre les jobs du pipeline.
Parcontre, si une tache apparait en premier dans un job alors elle sera exécutée en premier.

![Le pipeline de déploiement des tutoriels sur tutoriel.dev](/assets/posts/concourse-initial/exemple-pipeline.gif)

## Mise en situation
<blockquote>What I cannot create, I do not understand. <strong><i>Richard Feynman</i></strong></blockquote>

Pour explorer concourse, on se propose de mettre en place un API backend
basé sur du NodeJS, Express et Typescript. Pour corser un peu la situation,
supposons que nous avons l'obligation de réduire la dette technique et garantir 
la stabilité de l'API sur les plateformes Node 16 (Ancienne version), 18 (actuellement LTS) et 20 (Futur version en développement). 
On doit s'assurer aussi que la qualité du code est au rendez-vous.
Enfin, on doit déployer juste la version finale issue de node 18 LTS dans un cluster kubernetes.
On a laissé de côté les notifications de succès et d'échec de jobs pour que vous l'implémenter 
après histoire de pratiquer un peu!


## Conception

Pour aborder le problème, on va d'abord mettre en place l'API NodeJs puis, 
configurer le pipeline. 

Voici un exemple de scénario qu'on peut commencer avec:
* Dès qu'on push un changement dans le repo, concourse doit déclancher un build
* Les chaines Node 16, 18 et 20 seront tous construits simultanément.
* Les chaines vont se dérouler en 3 étapes (jobs):
  * Premièrement, le code sera testé, analysé et le rapport d'analyses sera envoyé à Sonarqube,
  * Deuxièmement, il y aura un build du code puis on va construire une image docker pour le publier sur DockerHub
  * Enfin, l'image docker peut maintenant faire l'objet d'un déploiement dans un cluster Kubernetes.


## Mise en place de l'API


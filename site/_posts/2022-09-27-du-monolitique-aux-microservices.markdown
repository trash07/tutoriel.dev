---
layout: post
title:  "Du monolitique aux microservices"
date:   2022-09-27
---
<p class="intro"><span class="dropcap">A</span>ujourd'hui, le conteneurs nous ont envahi. Dans toutes les applications 
vous avez de fortes chances de le voir. Si vous êtes impliqué dans le processus de développement d'une application, vous 
avez des chances de travailler à ce qu'il trouve chemin vers de cloud.

Comment sommes-nous arrivés là?
</p>

## La situation initiale
Initialement, le mode de développement des applications était simple:
* Vous avez un serveur de production,
* Vous developpez votre application en local,
* Vous testez votre travail,
* Vous assistez aux revues de votre code,
* Vous generez un executable unique **(monolitique)**,
* Vous **arrêtez tout le monde** et vous déployez votre application sur le serveur.

Ça marchait bien et tout le monde était content. Sauf que certaines applications 
ont été victimes de leur propres succès. Je m'en vais vous donner un exemple: **Gmail**.

Imaginez que vous êtes de developpeur de l'application Gmail. Elle a connu du succès.
Aujourd'hui vous avez disons **100.000 utilisateurs**. Un succès n'est-ce pas ?

Tout le monde vous félicite de gauche à droite mais il y a un petit soucis: **vous avez une
liste de nouvelles fonctionalités à ajouter**. Vous avez developpé en local les nouvelles mises 
à jours, la procédure est respectée mais vous êtes frustrés de déployer.

Pourquoi ? 

Vous pensez à ce qui peut arriver après le déployement.

Les raisons:

* Que se passera-t-il quand **vous allez arrêter l'application** pour faire déployement ? 
* Que se passera-t-il quand **une partie de l'application sera touché par un bug**  ?
* Que se passera-t-il quand **quand l'application aura besoin d'encore plus de ressources** ?

De toutes les façons, ces quelques scénarios ne sont pas avantageuses pour votre business.
Si vous arrêtez l'application alors qu'un utilisateur est entrain de sévèrement l'utiliser, 
vous risquez de perdre des clients. Lorsque vous changerez une ligne de code dans l'application,
vous devez redéployer. Quand le serveur aura besoin de plus de resources, vous êtes encore dans
de nouveaux problèmes. 

## Les inconvenient du monolitique
Comme vous l'avez vu, le monolitique pose les problèmes suivants:
* Les différents composants de l'application sont étroitement liées,
* Le moins de réutilisation,
* Le code devient plus complexe,
* L'application sera moins évolutive,
* L'application ne respecte pas le principe de la responsabilité unique,
* Des déployements fréquents et les redémarrages fréquents

### Des composants étroitement liées
Les applications monolitiques ont souvant des composants étroitement liés **(Tight coupling)**. 
Cela voudrait dire que modifier une partie de l'application peut impacter plusieurs autres.
Dans ce cas, vous allez vous retrouver à répercuter et régler les problèmes causés par vos 
modifications.

### Des composants moins réutilisable
Dans une plateforme monolitique, avec le temps, vous allez vous retrouver à dupliquer certains
composants en vue de répondre à certains besoins. 






---
layout: post
title:  "Installer Jenkins avec docker compose"
date:   2022-10-01
---
<p class="intro"><span class="dropcap">D</span>ans ce tutoriel, nous allons voir comment installer 
un serveur d'intégration continue <a href="https://www.jenkins.io/">Jenkins</a> à partir de docker-compose
</p>

## Prérequis
Pour bien suivre ce tutoriel, vous avez besoin d'avoir docker et docker-compose installés.
Si vous ne les avez pas suivez les liens qui suivent pour:
* installer [docker](https://docs.docker.com/engine/install/)
* installer [docker-compose](https://docs.docker.com/compose/install/)

Ce tutoriel suppose également que vous ayez une idée de ce que sont les concepts suivants:
* docker,
* docker-compose, 
* jenkins,
* le fichier docker-compose.yml

## Plan de travail
Voici comment nous allons procéder:
* Vérification des installations de docker et docker-compose
* Constitution du fichier docker-compose.yml
* Installation de l'application

##  docker et docker-compose
Dans ce tutoriel nous allons utiliser des versions de docker et de docker-compose qui ne sont
pas les plus récentes.

{%- highlight bash -%}
$ sudo docker --version && sudo docker-compose --version
Docker version 20.10.12, build 20.10.12-0ubuntu4
docker-compose version 1.29.2, build unknown
{%- endhighlight -%}

Si vous utilisez une version récente de docker qui embarque compose vous n'avez qu'à remplacer

{%- highlight bash -%}
$ sudo docker-compose <reste>
{%- endhighlight -%}

par 

{%- highlight bash -%}
$ sudo docker compose <reste>
{%- endhighlight -%}


## Le fichier docker-compose.yml
{%- highlight yaml -%}
version: '3'
services:
    jenkins:
        image: jenkins/jenkins:lts-jdk11
        container_name: jenkins
    volumes:
        - "jenkins_home:/var/jenkins_home/"
    ports:
        - "8080:8080"
        - "50000:50000"
    restart: always
  
volumes:
  jenkins_home:
    external: true
{%- endhighlight -%}

Avant de lancer le serveur Jenkins, vous avez besoin de créer le volume externe `jenkins_home` 
d'abord. Pour ce faire, exécutez la commande qui suit.

{%- highlight bash -%}
$ sudo docker volume create jenkins_home 
{%- endhighlight -%}

Ensuite, vous pouvez maintenant lancer le stack compose.

{%- highlight bash -%}
$ sudo docker-compose up -d
{%- endhighlight -%}

Maintenant vous pouvez poursuivre les installations en tapant l'adresse qui suit dans 
votre navigateur:

**http:127.0.0.1:8080**

Puis suivez les instructions.

## Eteindre le serveur Jenkins
Une fois que vous avez fini toutes vos activités, vous pouvez éteindre le serveur en
excécutant la commande qui suit.

{%- highlight bash -%}
$ sudo docker-compose down
{%- endhighlight -%}

## Conclusion
Le but de ce tutoriel est de vous amener à installer un serveur Jenkins en local.


---
layout: post
title:  "Comment exposer une application locale sur internet ?"
date:   2022-09-30
---
<p class="intro"><span class="dropcap">D</span>es fois, en développant les applications,
vous vous retrouvez dans une situation où vous auriez voulu donner une adresse IP publique à votre 
application locale.
</p>

## Mise en situation
Vous avez une application qui s'exécute sur votre machine locale et vous voulez
qu'un collègue qui est très loins de vous puisse avoir accès à votre machine locale depuis internet.
Ou bien vous êtes entrain de développer une application en locale mais on vous demande une adresse
IP publique alors que vous ne l'avez pas encore.  

Dans ces situations, comment procédez-vous ? C'est ce que nous allons voir dans cet article.

## Plan de travail
Dans cet article, nous allons procéder ainsi:
* Initialiser un petit projet express.js,
* Exécuter le projet express.js,
* Exposer le projet sur internet, 
* Faire les tests.

### Initialiser un projet express.js
Avant d'initialiser le projet [express.js](https://expressjs.com/), vous avez besoin d'avoir 
[Node.JS](https://nodejs.org/en/) installé. Pour vérifier que votre installation de Node.JS 
a réussi, tapez les commandes qui suivent dans votre terminal. Je vous laisse

{%- highlight bash -%}
$ node -v &&  npm -v
{%- endhighlight -%}

{%- highlight bash %}
v16.17.0  
8.15.0
{%- endhighlight -%}

La sortie montre que ma version de Node.Js est le **v16.17.0** et la version du **npm**
est le **8.15.0**.

Pour initialiser un projet d'exemple, nous allons créer un dossier nommé **exposition** et utiliser la commande **npm init**.

{%- highlight bash %}
$ mkdir exposition
$ cd exposition
$ npm init -y
{%- endhighlight -%}

Dans la commande précédente, l'option **-y** permet d'accepter toutes les options par défaut.
Enlevez-la si vous souhaitez répondre à toutes les questions vous même.

Si tout se passe bien, vous aurez dans le dossier _exposition_ un fichier _package.json_
{%- highlight json %}
    {
        "name": "exposition",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
        },
        "keywords": [],
        "author": "",
        "license": "ISC"
    }
{%- endhighlight -%}

Ensuite, on installe express, on crée le dossier **src** et on crée un fichier **index.js**

{%- highlight bash %}
$ npm install express  
$ mkdir src
$ cd src/
$ touch index.js
{%- endhighlight -%}

Dans le fichier **src/index.js** du dossier **exposition**, on va mettre le contenu suivant:

{%- highlight javascript %}
// intialiser express
const express = require('express')
const app = express()
const port = 3000

// au lancement de l'application retourner 'Hello, World'
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// lancer l'application sur le port 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
{%- endhighlight -%}

Une dernière configuration avant de lancer l'application serait d'aller dans le fichier 
**package.json** et de remplacer la ligne où il y a   **"main": "index.js"** par
**"main": "src/index.js"** et d'ajouter dans le bloc **scripts** la ligne
**"start": "node src/index.js"**. Le fichier **package.json** final ressemblera à ce qui suit.

{%- highlight json -%}
{
    "name": "exposition",
    "version": "1.0.0",
    "description": "",
    "main": "src/index.js",
    "scripts": {
        "start": "node src/index.js",
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
        "express": "^4.18.1"
    }
}
{%- endhighlight -%}

Maintenant, vous pouvez lancer l'application en tapant la commande **npm start**

{%- highlight bash -%}
$ npm start
> exposition@1.0.0 start
> node src/index.js

Example app listening on port 3000
{%- endhighlight -%}

Cette sortie montre que l'application s'exécute bien sur le port **3000** de notre machine locale.

### Exposer le projet sur internet
Nous voici maintenant au point important. Pour exposer le projet sur internet, vous avez 
besoin d'un outils qui s'appelle [localtunnel](https://localtunnel.github.io/www/).

Pour l'installer comme une application, tapez la commande qui suit:

{%- highlight bash -%}
$ npm install -g localtunnel
{%- endhighlight -%}

Une fois que l'installation a marché, vous êtes maintenant prêt à l'exposer au monde par 
internet.
Pour ce faire nous allons utiliser la commande **lt --port** et comme l'application est 
lancée sur le port **3000** on aura le résutat ci-dessous.

{%- highlight bash -%}
lt --port 3000
your url is: https://two-dryers-shine-160-242-200-188.loca.lt
{%- endhighlight -%}

Le résultat montre que l'application est accessible sur internet sur le
**https://two-dryers-shine-160-242-200-188.loca.lt**

## En résumé
Pour exposer une application locale en ligne, vous devez avoir ces prérequis:
* Avoir une application qui se lance en local sur un port donné _(Pour nous express.js sur le port 3000)_
* Avoir Node.Js installé
* Installer **localtunel**
* Tapez la commande `lt --port <port>`

Merci pour votre attention. Vos remarques et commentaires sont les bienvenus.




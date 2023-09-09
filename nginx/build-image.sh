echo 'tutoriel.dev image builder'
echo 'Build tag = \c' 
read tag

echo 'Building final image ...'

cp -fr ../site/_site public_html

docker build --no-cache -t lkpeto/tutoriel.dev:${tag} .
docker push lkpeto/tutoriel.dev:${tag}
rm -fr ./public_html

echo 'done !'

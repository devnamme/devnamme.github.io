cd dist
cp index.html 404.html
echo emmanevangelista.com > CNAME
git add .
git commit -m "deploy"
git push

cd ..
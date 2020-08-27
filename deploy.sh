# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd ./docs/.vuepress/dist

# 如果是发布到自定义域名
echo 'hziee.site' > CNAME

git init
git add -A
git commit -m ':heart: deploy'
git push -f git@github.com:sonderlau/sonderlau.github.io.git master
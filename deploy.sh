# ���ɾ�̬�ļ�
npm run docs:build

# �������ɵ��ļ���
cd ./docs/.vuepress/dist

# ����Ƿ������Զ�������
echo 'hziee.site' > CNAME

git init
git add -A
git commit -m ':heart: deploy'
git push -f git@github.com:sonderlau/sonderlau.github.io.git master
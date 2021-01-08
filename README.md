# Hziee.site 在线文档项目


<div align="center">

![CI](https://github.com/sonderlau/HzieeFiles/workflows/CI/badge.svg)

![Size](https://img.shields.io/github/repo-size/sonderlau/Hziee.site)

![start](https://img.shields.io/github/stars/sonderlau/Hziee.site?style=social)

![Files](https://img.shields.io/github/directory-file-count/sonderlau/Hziee.site/docs?extension=md)



</div>


所有文档都在 `docs` 文件夹内 **如果你不熟悉 请不要轻易修改非`docs`文件夹内的文件** 

另外编写文档时 图片 等请尽量压缩之后 放到与当前 `markdown`文件 相同目录下同名文件夹

如 `math.md` 文件夹使用 `math.assets` 文件夹内的图片

> │ math.md
> 
> ├─  math.assets
> 
> ​      ├──  logx.png
> 
> ​      └──  limit_sinx.jpeg

使用超过 **1M** 以上大小的文件 

为保证网页端的速度和体验 就**必须上传到云端存储** 



## 🧱文档编写

引用云端文件时 使用 `@cos` + 文件相对路径即可 如

```markdown
[课上PPT](@cos/Y1S2/CompilationPrinciple/PPT.zip)
```



### 📐使用数学公式

符号和排版相关 请参考 [KaTeX Supported Functions](https://katex.org/docs/supported.html)

行内数学公式使用 `$` 包裹起来

块级数学公式使用 `$$` 包裹起来



### ✒️修改文档

只需要`push`即可 会自动构建并发布

由于`FTP`服务器与`Github`之间的连接不稳定，通常需要`1`h左右的时间才能完整整个构建过程



### 🎈新增文档

在新增之后 :

- 如果你熟悉 [vuepress](https://vuepress.vuejs.org/zh/guide/) 
  - 修改对应课程 `index.md` 文件内的索引地址 注意使用相对路径 `./`
  - 或者 修改 `docs/.vuepress/config.js`
- 如果你不了解这些
  -  请在 `TODO` 文件夹内留下一个 `markdown` 文件 并提供相关的说明等
  - 方便其他人帮你完成相关的配置



## 🗂对象存储同步

在 [HzieeFiles](https://github.com/sonderlau/HzieeFiles/) 项目内 对 `assets` 文件夹进行操作即可

会自动同步到云端存储 (当前为腾讯云COS)



## :construction: 开发与迁移

### 📦对象储存

请参阅 [HzieeFiles](https://github.com/sonderlau/HzieeFiles/)

对于网站部分

如果 需要对对象存储进行迁移 只需要修改 `config.js` 中 

`https://hzieefiles-1300064754.cos.ap-shanghai.myqcloud.com` 改为对应的地址即可

### ⚙️自动化构建

目前该项目是在每次 `push` 之后自动化构建并上传到 部署的服务器

目前使用的是 `Github Actions` 如果需要修改请参考 `.github/vuepress-deploy.yml`
# Hziee.site 在线文档项目

所有文档都在 `docs` 文件夹内 **如果你不熟悉 请不要轻易修改非`docs`文件夹内的文件** 

另外编写文档时 图片 等请尽量压缩之后 放到与当前 `markdown`文件 相同目录下同名文件夹

如 `demo.md` 文件夹使用 `demo.assets` 文件夹内的图片

使用超过 **1M** 以上大小的文件 就必须上传到云端存储 为保证网页端的速度和体验

引用云端文件时 使用 `@cos` + 文件结构即可 如

```markdown

[课上PPT](@cos/Y1S2/CompilationPrinciple/PPT.zip)

```

目前还在对自动集成化进行修改中 有望进行自动的同步

## 🪐 文档修改

如果你仅仅修改了文档的内容

只需要`push`之后即可 无需其他操作

## 🧪 新增内容

新建了文档 或者修改了文件的目录 则需要对配置进行修改

如果你熟悉 [vuepress](https://vuepress.vuejs.org/zh/guide/) 请直接修改 `docs/.vuepress/config.js`即可

如果你不懂这些 请在 `TODO` 文件夹内留下一个 `markdown` 文件 方便其他人帮你完成相关的配置

## :construction: 后续开发

### 对象储存

在该目录下 `assets` 文件夹的内容需要与云存储的内容 **完全一致** 用于构建文件结构

如果 需要对对象存储进行迁移 只需要修改 `config.js` 中 `https://hzieefiles-1300064754.cos.ap-shanghai.myqcloud.com` 改为对应的地址即可

### 自动化构建

目前该项目是在每次 `push` 之后自动化构建并上传到 `sonderlau.github.io` 项目中
使用的是 `Github Actions` 如果需要修改请参考 `.github/vuepress-deploy.yml`

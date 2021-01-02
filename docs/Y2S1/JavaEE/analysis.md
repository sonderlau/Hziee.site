

# 需求管理系统

## utils

- [File Saver](https://github.com/eligrey/FileSaver.js)
- [jexcel](https://github.com/jspreadsheet/jexcel)
- [licia tools](https://licia.liriliri.io/docs_cn.html)
- [上传文件 - file pond](https://github.com/pqina/vue-filepond)
- [Diff算法实现](https://github.com/kpdecker/jsdiff#readme)  -  [Juejin](https://juejin.cn/post/6857316059851325453)
- Mammoth [.docx TO HTML ](https://github.com/mwilliamson/mammoth.js)
- [tiptap 富文本编辑](https://tiptap.dev/export)
- [Luckysheet](https://github.com/mengshukeji/Luckysheet)   **xlsx格式**
  - [luckyexcel](https://github.com/mengshukeji/Luckyexcel)

----

### Depracted

- [wps-view-vue](https://github.com/mose-x/wps-view-vue)
- [wps-view-java](https://gitee.com/mose-x/wps-view-java)

---



## 数据库设计

### User 用户

| 列名         | 格式         | 描述   |
| ------------ | ------------ | ------ |
| UserId :key: | varchar(255) | ID值   |
| username     | varchar(255) | 用户名 |
| password     | varchar(255) | 密码   |



### Projects 项目库

| 列名                  | 格式         | 描述                     |
| --------------------- | ------------ | ------------------------ |
| ProjectId :key:       | varchar(255) | 该项目的唯一id           |
| Name                  | varchar(255) | 项目名称                 |
| OwnerId :link:        | varchar(255) | 项目拥有者的id           |
| ProjectUsersId :link: | int          | 能够访问该项目的用户的id |
| RequirementId         | varchar(255) | 该项目拥有的需求的id值   |



### ProjectUsers 项目用户对应表

| 列名             | 格式 | 描述     |
| ---------------- | ---- | -------- |
| ProjectId :link: | int  | 项目的id |
| UserId :link:    | int  | 用户的id |



### ProjectRequirements 项目需求对应表

| 列名                 | 格式 | 描述     |
| -------------------- | ---- | -------- |
| ProjectId :link:     | int  | 项目的id |
| RequirementId :link: | int  | 需求的id |



### Requirements

| 列名                | 格式         | 描述                    |
| ------------------- | ------------ | ----------------------- |
| RequirementId :key: |              | 需求的唯一id            |
| VersionId :link:    | varchar(255) | 当前的版本 `SHA-1` 格式 |
| Name                | varchar(255) | 需求的名称              |
| UpdatedTime         | timestamp    | 该需求最后更新的时间    |



### Version

| 列名            | 格式 | 描述                          |
| --------------- | ---- | ----------------------------- |
| VersionId :key: |      | `SHA-1`格式的版本号           |
| details         |      | 需求的内容 `html`内容的字符串 |



### VersionAttachments 版本附件表

| 列名                 | 格式 | 描述   |
| -------------------- | ---- | ------ |
| VersoinId :link:     | int  | 版本id |
| AttachmentsId :link: | int  | 附件id |



### Attachments

| 列名                                   | 格式         | 描述        |
| -------------------------------------- | ------------ | ----------- |
| AttachmentsId :key: :arrow_down_small: |              | 附件的id    |
| src                                    | varchar(255) | 下载地址    |
| type                                   | varchar(255) | 格式        |
| md5                                    | varchar(255) | 该文件的md5 |



## 逻辑和分配

### 项目

每个项目能够参与的人进行id的限制

在创立项目的时候就应该确定能够访的人

每个项目会有多个需求 其版本号独立的 

且能够回滚到指定的版本 以及查看指定的版本



### 需求

每个需求分为

- 需求内容页 
  - 富文本形式 需要生成版本号 有`diff`
- 附件
  - `word` `excel` 等内容在这里
  - 提供在线打开并编辑的功能





## 在线word解决方案

对需求使用`tiptap`富文本存储 导出 `html` 格式作为存储的格式

### 版本号生成 

对以下内容进行**去空格 换行的格式化** 后进行`SHA-1` 加密

```json
{
    author:"sonderlau", // 修改者的用户名
    date:"2020-12-9",	// 修改日期
    attatchments:[		// 附件的内容
        "Attachment ids"
    ],
    parent:"0000000000000000000000000000000000000000"
}
```

上述`json` 加密后的结果是 `e5c4bc957a3d3555dca08b36b29e2f763127f87a` 



### 在线 表格方案

用户上传 `xlsx` 文件 调用对应的库打开即可

编辑完成之后上传到服务器平台并存储





## 全局搜索

**所有excel word 均需要转换成字符串等形式 方便搜索**

搜索需要给出结果并能够跳转到对应的文档

**匹配html的正则`<[^>]+>`**
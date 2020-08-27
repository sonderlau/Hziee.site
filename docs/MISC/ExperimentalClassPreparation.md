# 实验班备战

## 网页部分

- 总览
- ![网页总览](https://i.loli.net/2019/09/12/MIVGQ9qUtiePbZC.png)
- 截图问题 左侧的导航栏是自动跟随的 且做了小屏幕的适配

---

- 想法：
  - 题目选择了我的世界 相比另一个更与学校新印象紧密相关的题目 我的世界显得更开放 可以加入更多的内容
  - 选择了 `Bootstrap` 作为`CSS`框架 进行自适应的设计
  - 主题上的理解 更偏重个人一些 我倾向于做成类似 Blog 的样子
  - 主页也就是第一面要惊艳一些 给人一种大冲击的印象
  - 配色和设计要符合设计规范 色彩不可过于鲜艳和突兀
  - 确定底色为白色 左侧为导航栏 采用`poper.js bootstrap.min.js`进行`sectioin`的切换监听 增强浏览体验
  - 充分利用`Bootstrap`自带的元素
  - 个人化氛围浓厚一些 要足够自我
    - 选择了部分好句子 还有自我的独白 利用`Badage`创建了关键词的标签
  - 技术要足够实例
    - 引入`Prism.js`进行代码高亮处理 利用框架自带的`Scroll`可滚动处理 将例子代码更好的展示

---

- 文件结构
  - HTML
    - index.html
  - CSS
    - Bootstrap.min.css
    - Main.css
    - Prism.css
  - JS
    - Prism.js
    - Bootstrap.min.js
    - jquery-3.4.1.min.js
    - poper.min.js
  - img
    - bg.jpg
    - avatar.png

---

#### HTML

- 采用 HTML 5 格式 Bootstrap 4 仅支持 H5

- ```html
  <!DOCTYPE html>
  ```

- 对 IE 进行优化

- ```html
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  ```

- 移动设备优化 放缩设定 取消放大效果

- ```html
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
  />
  ```

- 引入所需的`JS`JS 后再引入`css`文件

- `style`中对小屏幕的布局进行更改 采用`@media`的形式 对小设备取消显示正常情况下的导航栏 以及对`samp`代码输出标签进行放缩处理 全局`p`字体进行缩小处理

- 大屏幕浏览取消小屏幕的的导航栏

- ```css
  @media screen and (max-width: 767px) {
    p {
      font-size: 5px;
    }
    .btn1 {
      display: none;
    }
    .normalnav {
      display: none;
    }
    samp {
      transform: scale(1.5);
    }
  }
  @media screen and (min-width: 767px) {
    .smallnav {
      display: none;
    }
  }
  ```

- 导航监视 设定 ID

- ```html
  <body data-spy="scroll" data-target="#Scroll" data-offset="1"></body>
  ```

- 引入`Bootstrap`的自适应容器标签

- ```html
  <div class="container-fluid"></div>
  ```

- 新建导航栏 采用`nav-pills`类做成胶囊导航栏样子 对其布局采取 2 栏处理(col-md-2)

- 小屏幕的导航栏加入`navbar-expand-sm` 导航栏自适应和 `justify-content-center` 居中对齐处理

- ```html
  <nav class="col-md-2 navbar normalnav" id="Scroll">
    <nav
      class="navbar navbar-expand-sm fixed-top bg-white nav-pills justify-content-center smallnav"
      id="Scroll"
    ></nav>
  </nav>
  ```

- 对内容部分占用 10 栏 `(col-md-10)`

- ```html
  <div class="col-md-10 content"></div>
  ```

- 对每个`section`使用`jumbotron`作为背景打底

- ```html
  <div id="sectionN" class="bgSection1 jumbotron"></div>
  ```

- 创建表格 展示颜色 对表头`thead`黑色处理 加边框 文字居中 加入鼠标悬停特效和自适应

- ```html
  <table
    class="table table-striped table-bordered table-hover text-center table-responsive-sm table-responsive-md"
  >
    <thead class=" thead-dark"></thead>
  </table>
  ```

- 创建进度条 引入不同的类改变不同的颜色 和动态特效 使用`style`改变长度 即进度

- ```html
  <div class="progress" style="height:15px">
    <div class="progress-bar  bg-danger progress-bar-striped" style="width:60%">
      60%
    </div>
  </div>
  <div class="progress" style="height: 15px">
    <div class="progress-bar bg-success" style="width:20%"></div>
    <div class="progress-bar bg-warning" style="width:40%"></div>
    <div class="progress-bar bg-danger" style="width:60%"></div>
    <div class="progress-bar bg-dark" style="width:80%"></div>
    <div class="progress-bar bg-info" style="width:100%"></div>
  </div>
  ```

- 使用`pre code`标签创建代码展示块 使用`pre-scrollable`类使其在长度过长时开启滚动条

- ```html
  <pre class=" pre-scrollable" style="width: 60%;margin: 0 auto;">
  <code class=" language-java line-numbers" >
  ```

- 其中 l`anguage-java`类是 prism 进行代码高亮的处理

- 引入 Java 代码例子 排版

- 使用`samp`标签对错误情况输出展示 使用`small`类减小其字体大小

- ```html
  <samp class=" small">Exception in thread "Main" ....... </samp>
  ```

- 使用`lead`标签增大显示效果

- ```html
  <div class=" jumbotron intro lead"></div>
  ```

- 使用`span`标签 创建`Badages` 标签

- ```html
  <span class=" badge badge-primary">HTML</span>
  ```

- 引入`tooltip`局部脚本 调用`Bootstrap`中的功能 做到鼠标悬停显示提示框的功能

- ```html
  <a href="#section4" data-toggle="tooltip" title="真香预定">不打算谈女朋友</a
  >也没有女朋友
  <script>
    $(document).ready(function() {
      $('[data-toggle="tooltip"]').tooltip();
    });
  </script>
  ```

- 页面最后 引用名言好句 使用`Blockquote`类 原因是`Bootstrap`中的`Blockquote`结构简单好看

- 使用`blockquote-footer`类 进行署名

- ```html
  <blockquote class=" blockquote">
    <p>
      Life is like a Markov chain, your future only depends on what you are
      doing now, and independent of your past.
    </p>
    <footer class=" blockquote-footer">刘大炮</footer>
  </blockquote>
  ```

---

#### CSS

仅对`Main.css` 进行注释

- 整体的位置进行相对处理 原因是要符合响应式处理

- ```css
  body {
    position: relative;
  }
  ```

- 对导航栏的内容进行距离和位置处理

- ```css
  ul.nav-pills {
    top: 5%;
    position: fixed;
  }
  ```

- 主页图片的周边阴影处理 使其有层次感

- ```css
  .bgSection1 {
    background-image: url("../img/bg.jpg");
    background-repeat: no-repeat;
    box-shadow: 0 0 4px 1px black;
    background-position: center;
    background-size: cover;
  }
  ```

- 对头像的大小和位置更改

- ```css
  .avatar {
    height: 80%;
    width: 80%;
    margin: auto 0 0;
  }
  ```

---

技术实现并不难 多亏于`Bootstrap`框架的辅助能够快速构建响应式的页面处理

同时由于前期对作品构思不够准确 对于类的命名和设计过于繁杂 不利于二次开发和维护

对移动设备的响应式优化还是不够好 主页图片可以压缩大小 增快加载速度

以上

---

## 面试考点解析

- 网页
  - 文件命名及结构
    - 作品的文件结构足够清晰且熟悉
    - 对使用到的资源是否命名规范 保存完善 如图片 css 文件是否放到 img css 文件夹种
    - 网页主页 是否命名为 index.html
    - 多页面的网页对其命名规范和跳转方式考察
    - CSS 类和 ID 命名规范 驼峰命名和可识别性强的加分 中文类名和 ID 名等 酌情扣分
  - 网页内容技术细节和实现方法考察
    - 是否采用 HTML5 如果采用了 5 的特有属性标签 可提问相关内容
    - 对使用特殊形式的 如导航栏等 的页面考察定位和布局方法 可采取部分抽查询问的方式
    - 使用 JS 的 可考查其实现方法和实现思路
- ACM 题目
  - 对于 AK 的个人 1001 1004 必须询问做题思路和实现方法

---

## 题目备战习题

> 以下标号指的是 HDOJ 题目序号

1. 基本输入输出题(共 8 题) 1089——1096
2. 基础训练题(共 33 题) 2000——2032
3. 数学题(共 10 题) 1008、1108、1061、2035、1425、1021、1005、1205、1071、1215
4. 递推求解(共 5 题) 2050、2046、1297、1465、2045
5. 贪心(共 8 题) 1009、1052、2037、1050、1045、1051、1053、1789
6. 动态规划(共 26 题) 2084、1257、1160、1087、1159、1421、1058、1003、1025、1059、1069、1074、1078、1114、1158、1165、1176、1203、1208、1331、1355、1414、1428、1579、1723、2602

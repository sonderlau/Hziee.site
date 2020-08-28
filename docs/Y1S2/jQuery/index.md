# jQuery API Document

---

资源索引

[平时作业集合](@cos/Y1S2/jQuery/ZMX_HomeWork.zip)

[期末大作业报包](@cos/Y1S2/jQuery/期末大作业报告.doc)

以下是笔记~~~文档~~~内容

虽说官网啥都有 但是不自己整理下还是记不住的

于是乎 遇到啥我就记录下啥

以备查阅

参考: [jQuery API Document](https://api.jquery123.com/) [w3school](https://www.w3schools.com/jquery/default.asp)

---

## 知识要点

DOM

> When a web page is loaded, the browser creates a **D**ocument **O**bject **M**odel of the page
>
> The **HTML DOM** model is constructed as a tree of **Objects**
>
> Refer : w3school [What is HTML DOM](https://www.w3schools.com/whatis/whatis_htmldom.asp)

---

## 文档摘要

### 值 与 取值

#### .html()

返回选中元素的 HTML 内容 采用`innerHtml`

**对 XML 文档无效**

##### html()

> ```
> return String
> ```
>
> 获取集合中第一个匹配元素的 HTML 内容

##### html(String)

> ```
> return jQuery
> ```
>
> 设置每个匹配元素的 HTML 字符串

##### html( function(index, currentContent))

> `return jQuery`
>
> `params: index Integer` 当前元素在选中元素集中的位置
>
> `params: currentContent String` 当前选中元素的 HTML 内容

##### .attr()

取匹配的元素集合中的第一个元素的属性的值 或 设置每一个匹配元素的一个或多个属性

> `param attributeName String` 要获取的属性名称
>
> **只获取第一个匹配元素的属性值**

> `param attributeName String` 要设置值的属性名
>
> `param value String\Number`这个属性设置的值

> `param attributes PlainObject` 一个 属性 - 值 集合对象

> `param attributeName String`要设置值的属性名.
>
> `param function(index, attr) Function()` 这个函数返回用来设置的值,this 指向当前的元素。接收 index 参数表示元素在匹配集合中的索引位置和 html 参数表示元素上原来的 HTML 内容

---

#### jQuery.trim(str)

删除字符串开始和结尾处的换行符 空格(包括连续的空格) 和制表符(Tab)

> ```
> params: str String
> ```

---

#### .click()

##### .click()

`.trigger("click")`的便捷方式

触发该事件

##### .click(handler(eventObject))

> ```
> param: handler(eventObject) Function
> ```
>
> 每次事件触发执行的函数

---

#### .find(selector)

后代元素选择器

##### [.find( selector)

> `param: selector Selector` 用于匹配元素的选择器字符串

##### .find( jQuery_object)

> `param: jQuery_object Object` 匹配元素集合的 jQuery 对象

##### .find( element)

> `param: element Element` 匹配元素集合的元素

---

#### .eq()

减少匹配元素的集合为制定的索引的哪一个元素

##### .eq( index)

> `param: index Integer` 指示元素的位置

##### .eq( -index)

> `param: -index Integer` 元素倒数的位置

---

#### .get()

##### .get( [index] )

> `param: index Numebr` 获取哪个元素

---

#### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#text).text()

`XML HTML`中均可使用

不能作用在`input`或`script`元素

该两个元素需要使用`.val()`获取

##### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#text-2).text()

> ```
> return String
> ```
>
> 得到匹配元素集合中每个元素的合并文本 包括后代

##### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#text-textstring).text( textString )

设置匹配元素集合中每个元素的文本内容为指定的文本内容

**Note: 特殊字符会被转码**

> `param: textString String` 设置匹配元素内容的文本

##### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#text-function-index-currentcontent).text( function(index, currentContent) )

> `param function(index, currentContent) Function` 返回设置文本内容的一个函数 接受元素的位置和文本值作为参数

#### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#val)val()

##### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#val-2)val()

> ```
> param : None
> ```
>
> 获取匹配元素的第一个元素的值

##### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#val-value)val(value)

> `param : value String\Array` 设定每个匹配的元素的值
>
> `param : function(index, value) Function` 设置返回值的函数 `this` 指向当前元素

此方法通常用于设置表单字段的值

---

### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#选择器-selector)选择器 Selector

##### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#hidden):hidden

选取所有隐藏的元素

> 可被认为是隐藏的几个情况
>
> - 他们的 CSS `display`值是`none`
> - 他们是`type="hidden"`的表单元素
> - 它们的宽度和高度都显式设置为 0
> - 一个祖先元素是隐藏的,因此该元素是不会在页面上显示

**Additional Notes（其他注意事项）:**

> 因为 `:hidden()` 是一个 jQuery 延伸出来的一个选择器。 并且不是的 CSS 规范的一部分, 使用`:hidden()`查询不能充分利用原生 DOM 提供的`querySelectorAll()` 方法来提高性能。为了在现代浏览器上获得更佳的性能,请使用[`.filter(":hidden")`](https://www.jquery123.com/filter)代替

#### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#visible):visible

选择所有可见的元素

> `visibility: hidden` or `opacity: 0` 被认为是可见的
>
> 可见元素的宽度或高度,是大于零的
>
> 隐藏元素上做动画 元素被认为是可见的 直到动画结束
>
> 显示元素上做动画 在动画的开始处该元素被认为是可见的

同 :hidden 的注意事项

#### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#contains):contains()

选择所有包含指定文本的元素

> `params : text String` 用来查找的字符串 区分大小写

#### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#empty):empty

择所有没有子元素的元素 (包括文本节点)

#### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#has):has()

选择元素其中至少包含指定选择器匹配的一个种元素

> `param : selector` 任何选择器

同 :hidden 的注意事项

#### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#parent):parent

选择所有含有子元素或者文本的父级元素

> 这个正好和 `:empty`相反
>
> 需要注意的一件重要的事情是`:parent` (和 `:empty`)所涉及的子元素 包括文本节点

同 :hidden 的注意事项

#### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#each)each ()

遍历一个 jQuery 对象 为每个匹配元素执行一个函数

> `param function(index, Element)` 为每个匹配元素执行的一个函数
>
> 关键字 this 总是指向这个元素

---

### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#属性选择-attributes)属性选择 Attributes

#### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#attribute-value)[attribute$=value]

选择指定属性是以给定值结尾的元素 这个比较是区分大小写的

> `param : attribute`属性名
>
> `param :value` 属性值

#### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#attribute-value-2)[attribute*=value]

选择指定属性具有包含一个给定的子字符串的元素 (选择给定的属性是以包含某些值的元素)

> `param : attribute`属性名
>
> `param :value` 属性值

#### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#selector-selectorn)[selector][selectorn]

将每一个选择器匹配到的元素合并后一起返回

> `param : selecotrN` N 个有效的选择器

### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#css-相关)CSS 相关

#### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#css).css()

获取匹配元素集合中的第一个元素的样式属性的值

#### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#css-propertyname).css( propertyName )

#### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#css-propertynames).css( propertyNames)

> ```
> param :propertyName String
> param : propertyNames Array
> ```

#### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#css-propertyname-value).css( propertyName, value)

#### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#css-propertyname-function-index-value).css(propertyName, function(index, value) )

设置每个匹配元素的一个或多个 CSS 属性

> `param : propertyName String` CSS 属性名 `param : value` 值
>
> `param : propertyName String` CSS 属性名
>
> `param : function(index, value)` 一个返回设置值的函数

---

### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#操作类-classes)操作类 classes

#### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#addclass)addClass()

为每个匹配的元素添加指定的样式类名

> `param : className String` 类名
>
> `param :function(index, currentClass)` 这个函数返回一个或更多用空格隔开的要增加的样式名

#### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#removeclass)removeClass()

> `param : className String` 类名
>
> `param :function(index, currentClass)` 这个函数返回一个或更多用空格隔开的要删除的样式名

#### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#toggleclass)toggleClass()

> `param : className String` 每个匹配元素移除的一个或多个用空格隔开的样式名
>
> `param :function(index, currentClass)` 一个函数 返回一个或多个将要被移除的样式名 index 参数表示在所有匹配元素的集合中当前元素的索引位置 class 参数表示原有的样式名

#### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#hasclass)hasClass()

确定任何一个匹配元素是否有被分配给定的 (样式) 类

> `param : className String` 要查询的样式名

---

### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#操作尺寸-size)操作尺寸 size

#### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#width)width()

> `返回元素的宽度 为纯数字

> 给每个匹配的元素设置 CSS 宽度
>
> `param value Number\String` 一个正整数代表的像素数,或是整数和一个可选的附加单位 (默认是 px)

> `param function(index, width)`返回用于设置宽度的一个函数 接收元素的索引位置和元素旧的高度值作为参数 在函数中 this 指向集合中当前的元素

#### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#height)height()

> `返回元素的宽度 为纯数字

> 给每个匹配的元素设置 CSS 宽度
>
> `param value Number\String` 一个正整数代表的像素数,或是整数和一个可选的附加单位 (默认是 px)

> `param function(index, height)`返回用于设置高度的一个函数 接收元素的索引位置和元素旧的高度值作为参数 在函数中 this 指向集合中当前的元素

#### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#innerwidth)innerWidth()

_匹配的元素集合中获取第一个元素的当前计算宽度值,包括 padding 但是不包括 border_

不适用于 window 和 document 对象

#### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#innerheight)innerHeight()

_匹配的元素集合中获取第一个元素的当前计算高度值,包括 padding 但是不包括 border_

不适用于 window 和 document 对象

#### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#outerwidth)outerWidth()

_获取元素集合中第一个元素的当前计算宽度值,包括 padding,border 和选择性的 margin。（注：返回一个整数（不包含“px”）表示的值,或如果在一个空集合上调用该方法,则会返回 null。）_

> `param [includeMargin] Boolean` 明是否在计算时包含元素的 margin 值

这个方法不适用于 window 和 document 对象

#### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#outerheight)outerHeight

_获取元素集合中第一个元素的当前计算高度值,包括 padding,border 和选择性的 margin。（注：返回一个整数（不包含“px”）表示的值,或如果在一个空集合上调用该方法,则会返回 null。）_

> `param [includeMargin] Boolean` 明是否在计算时包含元素的 margin 值

这个方法不适用于 window 和 document 对象

---

### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#操作位置-localtion)操作位置 localtion

#### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#offset)offset()

> 无参
>
> 在匹配的元素集合中,获取的第一个元素的当前坐标,坐标相对于文档

> `param coordinates PlainObject` 包含 top left 属性的对象 用整数指明元素的新顶部和左边坐标
>
> `param function(index, coords)` 返回用于设置坐标的一个函数。接收元素在匹配的元素集合中的索引位置作为第一个参数,和当前坐标作为第二个参数。这个函数应该返回一个包含 top 和 left 属性的对象

如果对象原先的`position`样式属性是`static`的话,会被改成`relative`来实现重定位。

#### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#offsetparent)offsetParent()

取得离指定元素最近的含有定位信息的祖先元素。含有定位信息的元素指的是,CSS 的 position 属性是 relative, absolute, 或 fixed 的元素

#### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#position)position()

获取匹配元素中第一个元素的当前坐标,相对于 offset parent 的坐标。( 注：offset parent 指离该元素最近的而且被定位过的祖先元素 )

`.position()`返回一个包含 `top` 和 `left`属性的对象.

#### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#scrollleft)scrollLeft()

设置水平滚动条的位置

> 无参
>
> _获取匹配的元素集合中第一个元素的当前水平滚动条的位置。_

> `param value Number` 用来设置滚动水平位置的正整数
>
> 设置每个匹配元素的水平滚动条位置

#### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#scrolltop)scrollTop()

设置垂直滚动条的位置

> 无参
>
> _获取匹配的元素集合中第一个元素的当前垂直滚动条的位置。_

> `param value Number` 用来设置滚动垂直位置的正整数
>
> 设置每个匹配元素的垂直滚动条位置

### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#操作-dom)操作 DOM

#### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#插入-创建)插入 创建

##### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#append)append()

在每个匹配元素里面的末尾处插入参数内容

> `param content String Element jQuery` 用来插在每个匹配元素里面的末尾
>
> 可以多个元素

##### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#prepend)prepend()

在匹配元素集合中的每个元素后面插入参数所指定的内容 作为其兄弟节点

> `param content String\Element\jQuery` 用来插在每个匹配元素里面的末尾
>
> 可以多个元素

> ```
> param function( index )
> ```

##### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#appendto)appendTo()

将匹配的元素插入到目标元素的最后面（译者注：内部插入）

> `param target Selector\Element\jQuery` 合的元素们会被插入到由参数指定的目标的末尾

##### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#prependto)prependTo()

> `param content String\Elemernt\jQuery` 将被插入到匹配元素前的内容
>
> 可以多个元素

> `param function( index)` 接收 index 参数表示元素在匹配集合中的索引位置和 html 参数表示元素上原来的 HTML 内容 在函数中 this 指向元素集合中的当前元素

##### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#before)before()

在匹配元素集合中的每个元素**前面**插入参数所指定的内容 作为其兄弟节点

> `param conetent String\Element\jQuery` 用来插在每个匹配元素的**前面**

> `param function( index )` 插在每个匹配元素的**前面** 接收元素在集合中的索引位置作为参数
>
> 在函数中 this 指向元素集合中的当前元素

##### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#insertbefore)insertBefore()

在目标元素前面插入集合中每个匹配的元素 (注: 插入的元素作为目标元素的兄弟元素

> `param target Selector\Element\jQuery` 匹配的元素将会被插入在由参数指定的目标后面

##### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#after)after()

在匹配元素集合中的每个元素**后面**插入参数所指定的内容 作为其兄弟节点

> `param conetent String\Element\jQuery` 用来插在每个匹配元素的**后面**

> `param function( index )` 插在每个匹配元素的**后面** 接收元素在集合中的索引位置作为参数
>
> 在函数中 this 指向元素集合中的当前元素

##### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#insertafter)insertAfter()

在目标元素后面插入集合中每个匹配的元素 (注: 插入的元素作为目标元素的兄弟元素

> `param target Selector\Element\jQuery` 匹配的元素将会被插入在由参数指定的目标后面

---

#### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#删除)删除

##### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#remove)remove()

将匹配元素集合从 DOM 中删除 注: 同时移除元素上的事件及 jQuery 数据

> `param [selector] Selector` 一个选择器表达式用来过滤将被移除的匹配元素集合

##### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#detach)detach()

从 DOM 中去掉所有匹配的元素

> `param [selector] Selector` 个选择表达式将需要移除的元素从匹配的元素中过滤出来

---

#### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#清空)清空

##### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#empty-2)empty()

从 DOM 中移除集合中匹配元素的所有子节点

> 无参
>
> 这个方法不仅移除子元素（和其他后代元素） 同样移除元素里的文本

---

#### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#复制节点)复制节点

##### [#](https://hziee.site/pages/Y1S2/jQuery/main.html#clone)clone()

创建一个匹配的元素集合的深度拷贝副本

> `param withDataAndEvents Boolean` 默认 false
>
> ```
> param deepWithDataAndEvents Boolean` 默认`value of withDataAndEvents
> ```

# Bootstrap

## 简介

### 什么是Bootstrap？

![Bootstrap 官网](./images/cover.png)

- 框架：库 lib library
- jQuery作为一个框架来讲，提供一套比较便捷的操作DOM的方式
- 把大家都需要的功能预先写好到一些文件  这就是一个框架
- Bootstrap 让我们的 Web 开发更简单，更快捷；

- 注意是 Bootstrap 不是 BootStrap！这是一个词，不是合成词，其含义为：n. 引导指令,引导程序
- Bootstrap 是当下最流行的前端框架（界面工具集）；
- 特点就是灵活简洁，代码优雅，美观大方；
- 其目的是为了让 Web 开发更敏捷；
- 是 Twitter 公司的两名前端工程师 Mark Otto 和 Jacob Thornton 在 2011 - 年发起的，并利用业余时间完成第一个版本的开发；

### 为什么使用Bootstarp？

- 生态圈火，不断地更新迭代；
- 提供一套美观大方地界面组件；
- 提供一套优雅的 HTML+CSS 编码规范；
- 让我们的 Web 开发更简单，更快捷；

### 注意：

> 使用 Bootstrap 并不代表不用写 CSS 样式，而是不用写绝大多数大家都会用到的样式


## 准备

### 下载Bootstrap

- https://github.com/twbs/bootstrap/releases/download/v3.3.6/bootstrap-3.3.6-dist.zip
- https://github.com/twbs/bootstrap/releases/download/v4.0.0-alpha.2/bootstrap-4.0.0-alpha.2-dist.zip


### 安装Bootstrap

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>页面标题</title>
  <!-- 引入Bootstrap核心样式文件（必须） -->
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <!-- 引入Bootstrap默认主题样式（可选） -->
  <link rel="stylesheet" href="css/bootstrap.theme.min.css">
  <!-- 你自己的样式或其他文件 -->
  <link rel="stylesheet" href="example.css">
</head>
<body>
  <!-- 你的HTML结构...... -->
  <!-- 以下代码，如果不使用JS插件则不需要 -->
  <!-- 由于Bootstrap的JS插件依赖jQuery，so 引入jQuery -->
  <script src="js/jquery.min.js"></script>
  <!-- 引入所有的Bootstrap的JS插件 -->
  <script src="bootstrap.min.js"></script>
  <!-- 你自己的脚本文件 -->
  <script src="example.js"></script>
</body>
</html>
```

### Bootstrap文档

- [官方文档](http://getbootstrap.com/)
- [中文文档](http://v3.bootcss.com/)

### 基础的Bootstrap模板

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>微金所-安全的互联网微金融资产交易平台</title>
    <link rel="shortcut icon" href="favicon.ico">
    <!-- X-UA-Compatible是IE8的一个专有meta属性，对于IE8以下的浏览器是不识别的。
    通过在meta中设置 X-UA-Compatible的值，可以指定网页的兼容性模式。
    设置浏览器的兼容模式版本  IE 最新的渲染引擎工作-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--
    声明当前网页在移动浏览器中展示的相关设置
   视口的作用： 在移动浏览器中，当页面宽度超出设备，浏览器内部虚拟了一个页面容器，将这个页面容器缩放到设备这么大，然后展示
   目前大多数手机浏览器的视口，承载页面的容器，宽度都是980
   效果：网页的1px=实际的1px
    -->
    <meta name="viewport" content="width=device-width, initial-scale=1,user-scalable=no">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <link rel="stylesheet" href="./lib/bootstrap/css/bootstrap.css">
    <!-- HTML5 shim 和 Respond.js 是为了让 IE8 支持 HTML5 元素和媒体查询（media queries）功能 -->
    <!-- 警告：通过 file:// 协议（就是直接将 html 页面拖拽到浏览器中）访问页面时 Respond.js 不起作用 -->
    <!--条件注释的作用就是当判断条件满足时，就会执行注释中的HTML代码，条件不满足时，会当作注释忽略掉-->
    <!--[if lt IE 9]>
    <script src="./lib/html5shiv/html5shiv.js"></script>
    <script src="./lib/respond/respond.min.js"></script>
    <![endif]-->
    <link rel="stylesheet" href="./css/main.css">
</head>
<body>
<!--建议将脚本放在body后面，样式放在head中-->
<!-- jQuery (Bootstrap 的所有 JavaScript 插件都依赖 jQuery，所以必须放在前边) -->
<script src="./lib/jquery/jquery.js"></script>
<!-- 加载 Bootstrap 的所有 JavaScript 插件。你也可以根据需要只加载单个插件。 -->
<script src="./lib/bootstrap/js/bootstrap.min.js"></script>
<script src="./js/main.js"></script>
</body>

</html>
```

### 语义化标签问题

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        body{
            margin: 0;
            padding: 0;
        }
        header{
            height: 100px;
            background: hotpink;
        }
        footer{
            height: 200px;
            background: green;
        }
    </style>
    <!--[if lte IE 8]>
        <script src="html5shiv.min.js"></script>
    <![endif]-->
</head>
<body>
<!--1.语义化标签的作用-->
<!--1.1 从开发角度考虑是提高代码的可读性可维护性-->
<!--1.2 网站的发布者：seo 搜索引擎优化 -->

<!--2.语义化标签的兼容问题-->
<!--2.1 IE9以下不支持H5标签（大部分css3属性，一些H5的api）-->
<!--2.2 IE9以下不认识，把这些标签当做行内元素去看待-->
<!--2.3 语义化标签需要动态创建 document.createElement('header') 同时设置块级元素-->
<!--2.4 有一款插件能帮你完成这件事件  html5shiv.js   -->
<!--2.5 必须引入在头部，在页面结构之前，提前解析h5标签-->
<!--2.6 优化处理：支持H5标签的不需要加载，IE9以下不支持H5加载-->
<!--2.7 js判断客户的浏览器版本可以做到，但是不能做到js提前加载-->
<!--2.8 条件注释：网页的任何地方  根据浏览器版本去加载内容（html标签）-->
<!--2.9 固定语法  lt 小于  gt 大于  lte 小于等于  gte 大于等于 -->
<header>
1
</header>
<footer>
2
</footer>
<!--[if lt IE 9]>
    <h1>您的版本浏览器太低，请升级</h1>
<![endif]-->
</body>
</html>
```

### Compatible

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

- 此属性为文档兼容模式声明，表示如果在IE浏览器下则使用最新的标准渲染当前文档

### 视口

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

- 视口的作用：在移动浏览器中，当页面宽度超出设备，浏览器内部虚拟的一个页面容器，将页面容器缩放到设备这么大，然后展示
- 目前大多数手机浏览器的视口（承载页面的容器）宽度都是980；
- 视口的宽度可以通过meta标签设置
- 此属性为移动端页面视口设置，当前值表示在移动端页面的宽度为设备的宽度，并且不缩放（缩放级别为1）
  + width:视口的宽度
  + initial-scale：初始化缩放
  + user-scalable:是否允许用户自行缩放（值：yes/no; 1/0）
  + minimum-scale:最小缩放，一般设置了用户不允许缩放，就没必要设置最小和最大缩放
  + maximum-scale:最大缩放

### 条件注释

- 条件注释的作用就是当判断条件满足时，就会执行注释中的HTML代码，不满足时会当做注释忽略掉

### 第三方依赖

- [jQuery](https://github.com/jquery/jquery)

    > Bootstrap框架中的所有JS组件都依赖于jQuery实现

- [html5shiv](https://github.com/aFarkas/html5shiv)

    > 让低版本浏览器可以识别HTML5的新标签，如header、footer、section等

- [respond](https://github.com/scottjehl/Respond)

    > 让低版本浏览器可以支持CSS媒体查询功能

## 建议以后在HTML中将脚步的引入放到页面最底下

## mediaquery

```css
@media (判断条件（针对于当前窗口的判断）){
    /*这里的代码只有当判断条件满足时才会执行*/
}

@media (min-width: 768px) and (max-width: 992px) {
  /*这里的代码只有当(min-width: 1280px)满足时才会执行*/
  .container {
    width: 750px;
  }
}
```

当使用min-width作为判断条件一定要从小到大，其原因是CSS从上往下执行

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        body{
            margin: 0;
            padding: 0;
        }
        .container{
            width: 1000px;
            margin: 0 auto;
            height: 1000px;
            background: pink;
        }
        /*使用媒体查询能针对不同屏幕区间设置不同的布局和样式*/
        /*怎么使用媒体查询：关于媒体查询 @media */
        /*语法： @media screen and (max-width: 768px) and (min-width: 320px){属性样式}*/

        @media screen and (max-width: 768px) {
            /*1. 在超小屏设备的时候 768px以下      当前容器的宽度100%     背景蓝色*/
            .container{
                width: 100%;
                background: blue;
            }
        }
        @media screen and (min-width: 768px) and (max-width: 992px){
            /*2. 在小屏设备的时候   768px-992px    当前容器的宽度750px    背景绿色*/
            .container{
                width: 750px;
                background: green;
            }
        }
        @media screen and (min-width: 992px) and (max-width: 1200px){
            /*3. 在中屏设备的时候   992px-1200px   当前容器的宽度970px    背景红色*/
            .container{
                width: 970px;
                background: red;
            }
        }
        @media screen and (min-width: 1200px){
            /*4. 在大屏设备的时候   1200px以上      当前容器的宽度1170px   背景黄色*/
            .container{
                width: 1170px;
                background: yellow;
            }
        }
    </style>
</head>
<body>
<!--
响应式容器：
1. 在超小屏设备的时候 768px以下      当前容器的宽度100%     背景蓝色
2. 在小屏设备的时候   768px-992px    当前容器的宽度750px    背景绿色
3. 在中屏设备的时候   992px-1200px   当前容器的宽度970px    背景红色
4. 在大屏设备的时候   1200px以上      当前容器的宽度1170px   背景黄色
-->
<div class="container"></div>
</body>
</html>
```

# 全局CSS

## 基础CSS样式

#### normalize.css和reset.css的区别

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<!--
共同点：都是重置样式库，增强浏览器的表现一致性
不同点：
举个例子：ul
reset.css   list-style:none ---因为需求
normalize.css 不会重置ul样式 ---本身已经在每个浏览器表现一致的元素

一句话：都是增强浏览器的表现一致性但是normalize不会重置已经一致的元素
-->
</body>
</html>
```

## Normalize.css

为了增强跨浏览器表现的一致性，我们使用了 [Normalize.css](http://necolas.github.io/normalize.css/)，这是由 [Nicolas Gallagher](https://twitter.com/necolas) 和 [Jonathan Neal](https://twitter.com/jon_neal) 维护的一个CSS 重置样式库。

## 布局容器

Bootstrap 需要为页面内容和栅格系统包裹一个 `.container` 容器。我们提供了两个作此用处的类。注意

 ```js
###  由于 `padding` 等属性的原因，这两种 容器类不能互相嵌套。
 ```

`.container` 类用于固定宽度并支持响应式布局的容器。

```html
<div class="container">
  ...
</div>
```

`.container-fluid` 类用于 100% 宽度，占据全部视口（viewport）的容器。

```html
<div class="container-fluid">
  ...
</div>
```

### 栅格系统

Bootstrap 提供了一套响应式、移动设备优先的流式栅格系统，随着屏幕或视口（viewport）尺寸的增加，系统会自动分为最多12列。它包含了易于使用的[预定义类](https://v3.bootcss.com/css/#grid-example-basic)，还有强大的[mixin 用于生成更具语义的布局](https://v3.bootcss.com/css/#grid-less)。

栅格系统用于通过一系列的行（row）与列（column）的组合来创建页面布局，你的内容就可以放入这些创建好的布局中。下面就介绍一下 Bootstrap 栅格系统的工作原理：

- “行（row）”必须包含在 `.container` （固定宽度）或 `.container-fluid` （100% 宽度）中，以便为其赋予合适的排列（aligment）和内补（padding）。
- 通过“行（row）”在水平方向创建一组“列（column）”。
- 你的内容应当放置于“列（column）”内，并且，只有“列（column）”可以作为行（row）”的直接子元素。
- 类似 `.row` 和 `.col-xs-4` 这种预定义的类，可以用来快速创建栅格布局。Bootstrap 源码中定义的 mixin 也可以用来创建语义化的布局。
- 通过为“列（column）”设置 `padding` 属性，从而创建列与列之间的间隔（gutter）。通过为 `.row` 元素设置负值 `margin` 从而抵消掉为 `.container` 元素设置的 `padding`，也就间接为“行（row）”所包含的“列（column）”抵消掉了`padding`。
- 负值的 margin就是下面的示例为什么是向外突出的原因。在栅格列中的内容排成一行。
- 栅格系统中的列是通过指定1到12的值来表示其跨越的范围。例如，三个等宽的列可以使用三个 `.col-xs-4` 来创建。
- 如果一“行（row）”中包含了的“列（column）”大于 12，多余的“列（column）”所在的元素将被作为一个整体另起一行排列。
- 栅格类适用于与屏幕宽度大于或等于分界点大小的设备 ， 并且针对小屏幕设备覆盖栅格类。 因此，在元素上应用任何 `.col-md-*`栅格类适用于与屏幕宽度大于或等于分界点大小的设备 ， 并且针对小屏幕设备覆盖栅格类。 因此，在元素上应用任何 `.col-lg-*`不存在， 也影响大屏幕设备。

通过研究后面的实例，可以将这些原理应用到你的代码中。

## 媒体查询

在栅格系统中，我们在 Less 文件中使用以下媒体查询（media query）来创建关键的分界点阈值。

```
/* 超小屏幕（手机，小于 768px） */
/* 没有任何媒体查询相关的代码，因为这在 Bootstrap 中是默认的（还记得 Bootstrap 是移动设备优先的吗？） */

/* 小屏幕（平板，大于等于 768px） */
@media (min-width: @screen-sm-min) { ... }

/* 中等屏幕（桌面显示器，大于等于 992px） */
@media (min-width: @screen-md-min) { ... }

/* 大屏幕（大桌面显示器，大于等于 1200px） */
@media (min-width: @screen-lg-min) { ... }
```

我们偶尔也会在媒体查询代码中包含 `max-width` 从而将 CSS 的影响限制在更小范围的屏幕大小之内。

```
@media (max-width: @screen-xs-max) { ... }
@media (min-width: @screen-sm-min) and (max-width: @screen-sm-max) { ... }
@media (min-width: @screen-md-min) and (max-width: @screen-md-max) { ... }
@media (min-width: @screen-lg-min) { ... }
```

## 栅格参数

通过下表可以详细查看 Bootstrap 的栅格系统是如何在多种屏幕设备上工作的。

![1553716179424](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553716179424.png)

```html
<div class="container">
     <!--栅格系统：其实就是行和列的布局，网格状布局-->
    <!--行：row-->
    <!-- .container容器默认有15px的左右内间距  .row 填充父容器的15px的左右内间距   margin-left,margin-right -15px拉伸 -->
    <div class="row">
        <!--列：col-*-*  *不确定（参数） -->
        <!--
            col：列样式
            第一个*：屏幕的大小
            大屏设备     lg   大屏设备以上生效包含本身
            中屏设备     md   中屏设备以上生效包含本身
            小屏设备     sm   小屏设备以上生效包含本身
            超小屏设备   xs   超小屏设备以上生效包含本身
            第二个*：每一行的分等份，默认分成12等份 ，数字代表的是占多少份
        -->
        <div class="col-xs-3 col-md-4 ">1</div>
        <div class="col-xs-3 col-md-4 ">2</div>
        <div class="col-xs-3 col-md-4 ">3</div>
    </div>
</div>
```

### 多余的列将另起一行排列

如果在一个 `.row` 内包含的列（column）大于12个，包含多余列（column）的元素将作为一个整体单元被另起一行排列。

### 响应式列重置

即便有上面给出的四组栅格class，你也不免会碰到一些问题，例如，在某些阈值时，某些列可能会出现比别的列高的情况。为了克服这一问题，建议联合使用 `.clearfix` 和 [响应式工具类](https://v3.bootcss.com/css/#responsive-utilities)。

![1553743256220](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553743256220.png)

```html
<div class="row">
  <div class="col-xs-6 col-sm-3">.col-xs-6 .col-sm-3</div>
  <div class="col-xs-6 col-sm-3">.col-xs-6 .col-sm-3</div>

  <!-- Add the extra clearfix for only the required viewport -->
  <div class="clearfix visible-xs-block"></div>

  <div class="col-xs-6 col-sm-3">.col-xs-6 .col-sm-3</div>
  <div class="col-xs-6 col-sm-3">.col-xs-6 .col-sm-3</div>
</div>
```

除了列在分界点清除响应， 您可能需要 **重置偏移, 后推或前拉某个列**。请看此[栅格实例](https://v3.bootcss.com/examples/grid/)。

```html
<div class="row">
  <div class="col-sm-5 col-md-6">.col-sm-5 .col-md-6</div>
  <div class="col-sm-5 col-sm-offset-2 col-md-6 col-md-offset-0">.col-sm-5 .col-sm-offset-2 .col-md-6 .col-md-offset-0</div>
</div>

<div class="row">
  <div class="col-sm-6 col-md-5 col-lg-6">.col-sm-6 .col-md-5 .col-lg-6</div>
  <div class="col-sm-6 col-md-5 col-md-offset-2 col-lg-6 col-lg-offset-0">.col-sm-6 .col-md-5 .col-md-offset-2 .col-lg-6 .col-lg-offset-0</div>
</div>
```

### 列偏移

使用 `.col-md-offset-*` 类可以将列向右侧偏移。

```js
## 这些类实际是通过使用 `*` 选择器为当前元素增加了左侧的边距（margin）。
```

例如，`.col-md-offset-4` 类将 `.col-md-4` 元素向右侧偏移了4个列（column）的宽度。

![1553743953638](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553743953638.png)

```html
<div class="row">
  <div class="col-md-4">.col-md-4</div>
  <div class="col-md-4 col-md-offset-4">.col-md-4 .col-md-offset-4</div>
</div>
<div class="row">
  <div class="col-md-3 col-md-offset-3">.col-md-3 .col-md-offset-3</div>
  <div class="col-md-3 col-md-offset-3">.col-md-3 .col-md-offset-3</div>
</div>
<div class="row">
  <div class="col-md-6 col-md-offset-3">.col-md-6 .col-md-offset-3</div>
</div>
```

### 栅格列嵌套

为了使用内置的栅格系统将内容再次嵌套，可以通过添加一个新的 `.row` 元素和一系列 `.col-sm-*` 元素到已经存在的 `.col-sm-*` 元素内。被嵌套的行（row）所包含的列（column）的个数不能超过12（其实，没有要求你必须占满12列）。

先整体再局部！！！！！！

```html
<div class="container">
    <div class="row">
        <!--栅格嵌套-->
        <div class="col-xs-4">
            <div class="row">
                <div class="col-xs-6"></div>
                <div class="col-xs-6"></div>
            </div>
        </div>
        <!--列的偏移-->
        <div class="col-xs-4">
            <div class="row">
                <div class="col-xs-5"></div>
                <div class="col-xs-6 col-xs-offset-1"></div>
            </div>
        </div>
        <!--列的排序-->
        <div class="col-xs-4">
            <div class="row">
                <!--
                push 往后推
                pull 往前拉
                -->
                <div class="col-xs-3 col-xs-push-9">col-xs-3</div>
                <div class="col-xs-9 col-xs-pull-3">col-xs-9</div>
            </div>
        </div>
    </div>
</div>
```

### 列排序

通过使用 `.col-md-push-*` 和 `.col-md-pull-*` 类就可以很容易的改变列（column）的顺序。

![1553744239682](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553744239682.png)

```html
<div class="row">
  <div class="col-md-9 col-md-push-3">.col-md-9 .col-md-push-3</div>
  <div class="col-md-3 col-md-pull-9">.col-md-3 .col-md-pull-9</div>
</div>
```

## 排版
### 标题
HTML 中的所有标题标签，<h1> 到 <h6> 均可使用。另外，还提供了 .h1 到 .h6 类，为的是给内联（inline）属性的文本赋予标题的样式。

在标题内还可以包含 `<small>` 标签或赋予 `.small` 类的元素，可以用来标记副标题。

![1553747915480](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553747915480.png)

### 页面主体

Bootstrap 将全局 `font-size` 设置为 **14px**，`line-height` 设置为 **1.428**。这些属性直接赋予 `<body>` 元素和所有段落元素。另外，`<p>` （段落）元素还被设置了等于 1/2 行高（即 10px）的底部外边距（margin）。

#### 中心内容

通过添加 `.lead` 类可以让段落突出显示。

```html
<p class="lead">...</p>
```

#### 使用 Less 工具构建

**variables.less** 文件中定义的两个 Less 变量决定了排版尺寸：`@font-size-base` 和 `@line-height-base`。第一个变量定义了全局 font-size 基准，第二个变量是 line-height 基准。我们使用这些变量和一些简单的公式计算出其它所有页面元素的 margin、 padding 和 line-height。自定义这些变量即可改变 Bootstrap 的默认样式。

### 内联文本元素

#### 高亮使用 <mark>标签

```html
You can use the mark tag to <mark>highlight</mark> text.
```

#### 被删除的文本使用<del>标签

```html
<del>This line of text is meant to be treated as deleted text.</del>
```

#### 无用文本使用<s>标签

```html
<s>This line of text is meant to be treated as no longer accurate.</s>
```

#### 插入文本使用<ins>标签

```html
<ins>This line of text is meant to be treated as an addition to the document.</ins>
```

#### 带下划线的文本使用<u>标签

```html
<u>This line of text will render as underlined</u>
```

#### 小号文本

对于不需要强调的inline或block类型的文本，使用 `<small>` 标签包裹，其内的文本将被设置为父容器字体大小的 85%。标题元素中嵌套的 `<small>` 元素被设置不同的 `font-size` 。

你还可以为行内元素赋予 `.small` 类以代替任何 `<small>` 元素。

#### 着重

通过增加 font-weight 值强调一段文本。

```html
<strong>rendered as bold text</strong>
```

#### 斜体

使用斜体强调一段文本

```HTML
<em>rendered as italicized text</em>
```

### 对齐

```html
<p class="text-left">Left aligned text.</p>
<p class="text-center">Center aligned text.</p>
<p class="text-right">Right aligned text.</p>
<p class="text-justify">Justified text.</p>
<p class="text-nowrap">No wrap text.</p>
```

###  改变大小写

```html
<p class="text-lowercase">Lowercased text.</p>
<p class="text-uppercase">Uppercased text.</p>
<p class="text-capitalize">Capitalized text.</p>
```

### 缩略语

当鼠标悬停在缩写和缩写词上时就会显示完整内容，Bootstrap 实现了对 HTML 的 `<abbr>` 元素的增强样式。缩略语元素带有 `title` 属性，外观表现为带有较浅的虚线框，鼠标移至上面时会变成带有“问号”的指针。如想看完整的内容可把鼠标悬停在缩略语上（对使用辅助技术的用户也可见）, 但需要包含 title 属性。

#### 基本缩略语

```html
<abbr title="attribute">attr</abbr>
```

![1553749937317](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553749937317.png)

#### 首字母缩略语

为缩略语添加 `.initialism` 类，可以让 font-size 变得稍微小些。

![1553750070929](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553750070929.png)

### 地址

让联系信息以最接近日常使用的格式呈现。在每行结尾添加 `<br>` 可以保留需要的样式。

![1553750450844](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553750450844.png)

```html
<address>
  <strong>Twitter, Inc.</strong><br>
  1355 Market Street, Suite 900<br>
  San Francisco, CA 94103<br>
  <abbr title="Phone">P:</abbr> (123) 456-7890
</address>

<address>
  <strong>Full Name</strong><br>
  <a href="mailto:#">first.last@example.com</a>
</address>
```

### 引用

在你的文档中引用其他来源的内容。

#### 默认样式的引用

将任何 HTML 元素包裹在 `<blockquote>` 中即可表现为引用样式。对于直接引用，我们建议用 `<p>` 标签。



```html
<blockquote>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
</blockquote>
```

#### 多种引用样式

对于标准样式的 `<blockquote>`，可以通过几个简单的变体就能改变风格和内容。

##### 命名来源

添加 `<footer>` 用于标明引用来源。来源的名称可以包裹进 `<cite>`标签中。

![1553751160458](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553751160458.png)

```html
<blockquote>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
```

通过赋予 `.blockquote-reverse` 类可以让引用呈现内容右对齐的效果

![1553751231548](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553751231548.png)

````html
<blockquote class="blockquote-reverse">
  ...
</blockquote>
````

### 列表

#### 无序列表

```html
<ul>
    <li>...</li>
</ul>
```

#### 有序列表

```html
<ol>
    <li>...</li>
</ol>
```

#### 无样式列表

移除了默认的 `list-style` 样式和左侧外边距的一组元素（只针对直接子元素）。**这是针对直接子元素的**，也就是说，你需要对所有嵌套的列表都添加这个类才能具有同样的样式。

![1553751412711](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553751412711.png)

```html
<ul class="list-unstyled">
  <li>...</li>
</ul>
```

#### 内联列表

通过设置 `display: inline-block;` 并添加少量的内补（padding），将所有元素放置于同一行。

![1553751489441](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553751489441.png)

```html
<ul class="list-inline">
  <li>...</li>
</ul>
```

### 描述

带有描述的短语列表。

![1553751638081](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553751638081.png)

```html
<dl>
  <dt>...</dt>
  <dd>...</dd>
</dl>
```

#### 水平排列的描述

`.dl-horizontal` 可以让 `<dl>` 内的短语及其描述排在一行。开始是像 `<dl>` 的默认样式堆叠在一起，随着导航条逐渐展开而排列在一行。

![1553751832189](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553751832189.png)

## 表格

#### 基本表格

为任意 `<table>` 标签添加 `.table` 类可以为其赋予基本的样式 — 少量的内补（padding）和水平方向的分隔线。这种方式看起来很多余！？但是我们觉得，表格元素使用的很广泛，如果我们为其赋予默认样式可能会影响例如日历和日期选择之类的插件，所以我们选择将此样式独立出来。

![1553751992366](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553751992366.png)

#### 条纹状表格

通过 `.table-striped` 类可以给 `<tbody>` 之内的每一行增加斑马条纹样式。

![1553752215413](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553752215413.png)

#### 带边框的表格

添加 `.table-bordered` 类为表格和其中的每个单元格增加边框。

![1553752287223](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553752287223.png)

#### 鼠标悬停

通过添加 `.table-hover` 类可以让 `<tbody>` 中的每一行对鼠标悬停状态作出响应。

![1553752348699](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553752348699.png)

#### 紧缩表格

通过添加 `.table-condensed` 类可以让表格更加紧凑，单元格中的内补（padding）均会减半

![1553752408746](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553752408746.png)

#### 状态类

通过这些状态类可以为行或单元格设置颜色。

| Class      | 描述                                 |
| :--------- | :----------------------------------- |
| `.active`  | 鼠标悬停在行或单元格上时所设置的颜色 |
| `.success` | 标识成功或积极的动作                 |
| `.info`    | 标识普通的提示信息或动作             |
| `.warning` | 标识警告或需要用户注意               |
| `.danger`  | 标识危险或潜在的带来负面影响的动作   |

![1553752708467](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553752708467.png)

#### 响应式表格

将任何 `.table` 元素包裹在 `.table-responsive` 元素内，即可创建响应式表格，其会在小屏幕设备上（小于768px）水平滚动。当屏幕大于 768px 宽度时，水平滚动条消失。

![1553753002900](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553753002900.png)

# 表单

## 基本实例

单独的表单控件会被自动赋予一些全局样式。所有设置了 `.form-control` 类的 `<input>`、`<textarea>` 和 `<select>` 元素都将被默认设置宽度属性为 `width: 100%;`。 将 `label` 元素和前面提到的控件包裹在 `.form-group` 中可以获得最好的排列。

![1553753611907](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553753611907.png)

![1553753773876](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553753773876.png)

## 内联表单

为 `<form>` 元素添加 `.form-inline` 类可使其内容左对齐并且表现为 `inline-block` 级别的控件。**只适用于视口（viewport）至少在 768px 宽度时（视口宽度再小的话就会使表单折叠）。**

![1553754201460](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553754201460.png)

![1553754443671](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553754443671.png)

![1553754533502](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553754533502.png)

![1553754631587](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553754631587.png)

## 水平排列的表单

通过为表单添加 `.form-horizontal` 类，并联合使用 Bootstrap 预置的栅格类，可以将 `label` 标签和控件组水平并排布局。这样做将改变 `.form-group` 的行为，使其表现为栅格系统中的行（row），因此就无需再额外添加 `.row` 了。

![1553754764925](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553754764925.png)

![1553754895954](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553754895954.png)

## 被支持的控件

表单布局实例中展示了其所支持的标准表单控件。

### 输入框

包括大部分表单控件、文本输入域控件，还支持所有 HTML5 类型的输入控件： `text`、`password`、`datetime`、`datetime-local`、`date`、`month`、`time`、`week`、`number`、`email`、`url`、`search`、`tel` 和 `color`。

![1553755002425](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553755002425.png)

### 文本域

支持多行文本的表单控件。可根据需要改变 `rows` 属性。

![1553755081281](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553755081281.png)

### 多选和单选框

多选框（checkbox）用于选择列表中的一个或多个选项，而单选框（radio）用于从多个选项中只选择一个。

Disabled checkboxes and radios are supported, but to provide a "not-allowed" cursor on hover of the parent `<label>`, you'll need to add the `.disabled` class to the parent `.radio`, `.radio-inline`, `.checkbox`, or `.checkbox-inline`.

![1553755145101](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553755145101.png)

![1553755303056](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553755303056.png)

#### 内联单选和多选框

通过将 `.checkbox-inline` 或 `.radio-inline` 类应用到一系列的多选框（checkbox）或单选框（radio）控件上，可以使这些控件排列在一行。

![1553755781741](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553755781741.png)

### 下拉列表（select）

注意，很多原生选择菜单 - 即在 Safari 和 Chrome 中 - 的圆角是无法通过修改 `border-radius` 属性来改变的。

![1553758999109](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553758999109.png)

对于标记了 `multiple` 属性的 `<select>` 控件来说，默认显示多选项。

![1553759045389](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553759045389.png)

## 静态控件

如果需要在表单中将一行纯文本和 `label` 元素放置于同一行，为 `<p>` 元素添加 `.form-control-static` 类即可。

![1553759487595](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553759487595.png)

![1553759872919](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553759872919.png)

## 焦点状态

我们将某些表单控件的默认 `outline` 样式移除，然后对 `:focus` 状态赋予 `box-shadow` 属性。

![1553760047046](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553760047046.png)

## 禁用状态

为输入框设置 `disabled` 属性可以禁止其与用户有任何交互（焦点、输入等）。被禁用的输入框颜色更浅，并且还添加了 `not-allowed` 鼠标状态。

![1553760117346](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553760117346.png)

## 只读状态

为输入框设置 `readonly` 属性可以禁止用户修改输入框中的内容。处于只读状态的输入框颜色更浅（就像被禁用的输入框一样），但是仍然保留标准的鼠标状态。

![1553760173848](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553760173848.png)

## 校验状态

Bootstrap 对表单控件的校验状态，如 error、warning 和 success 状态，都定义了样式。使用时，添加 `.has-warning`、`.has-error` 或 `.has-success` 类到这些控件的父元素即可。任何包含在此元素之内的 `.control-label`、`.form-control` 和 `.help-block` 元素都将接受这些校验状态的样式。

![1553760251998](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553760251998.png)

![1553761834264](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553761834264.png)

![1553762029140](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553762029140.png)

### 添加额外的图标

你还可以针对校验状态为输入框添加额外的图标。只需设置相应的 `.has-feedback` 类并添加正确的图标即可。

**反馈图标（feedback icon）只能使用在文本输入框 <input class="form-control"> 元素上。**

![1553762209505](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553762209505.png)

![1553762386122](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553762386122.png)

![1553762598202](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553762598202.png)

## 控件尺寸

通过 `.input-lg` 类似的类可以为控件设置高度，通过 `.col-lg-*` 类似的类可以为控件设置宽度。

### 高度尺寸

创建大一些或小一些的表单控件以匹配按钮尺寸。

![1553762711377](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553762711377.png)

![1553762762941](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553762762941.png)

### 水平排列的表单组的尺寸

通过添加 `.form-group-lg` 或 `.form-group-sm` 类，为 `.form-horizontal` 包裹的 `label` 元素和表单控件快速设置尺寸。

![1553763077794](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553763077794.png)

### 调整列（column）尺寸

用栅格系统中的列（column）包裹输入框或其任何父元素，都可很容易的为其设置宽度。

![1553763150538](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553763150538.png)

# 按钮

## 可作为按钮使用的标签或元素

为 `<a>`、`<button>` 或 `<input>` 元素添加按钮类（button class）即可使用 Bootstrap 提供的样式。

![1553763590833](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553763590833.png)

![1553763689779](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553763689779.png)

## 预定义样式

使用下面列出的类可以快速创建一个带有预定义样式的按钮。

![1553763797678](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553763797678.png)

## 尺寸

需要让按钮具有不同尺寸吗？使用 `.btn-lg`、`.btn-sm` 或 `.btn-xs` 就可以获得不同尺寸的按钮。

![1553764094994](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553764094994.png)

通过给按钮添加 `.btn-block` 类可以将其拉伸至父元素100%的宽度，而且按钮也变为了块级（block）元素。

![1553764131713](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553764131713.png)

## 激活状态

当按钮处于激活状态时，其表现为被按压下去（底色更深、边框夜色更深、向内投射阴影）。对于 `<button>` 元素，是通过 `:active` 状态实现的。对于 `<a>` 元素，是通过 `.active` 类实现的。然而，你还可以将 `.active` 应用到 `<button>` 上（包含 `aria-pressed="true"` 属性)），并通过编程的方式使其处于激活状态。

### button 元素

```js
由于 `:active` 是伪状态，因此无需额外添加，但是在需要让其表现出同样外观的时候可以添加 `.active` 类。
```

![1553764242225](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553764242225.png)

### 链接（`<a>`）元素

可以为基于 `<a>` 元素创建的按钮添加 `.active` 类。

![1553764352557](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553764352557.png)

## 禁用状态

通过为按钮的背景设置 `opacity` 属性就可以呈现出无法点击的效果。

### button 元素

为 `<button>` 元素添加 `disabled` 属性，使其表现出禁用状态。

![1553764465125](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553764465125.png)

![1553764509177](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553764509177.png)

###  链接（`<a>`）元素

为基于 `<a>` 元素创建的按钮添加 `.disabled` 类。

![1553764630217](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553764630217.png)

我们把 `.disabled` 作为工具类使用，就像 `.active` 类一样，因此不需要增加前缀。

![1553765583955](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553765583955.png)

# 图片

## 响应式图片

在 Bootstrap 版本 3 中，通过为图片添加 `.img-responsive` 类可以让图片支持响应式布局。其实质是为图片设置了 `max-width: 100%;`、 `height: auto;` 和 `display: block;` 属性，从而让图片在其父元素中更好的缩放。

如果需要让使用了 `.img-responsive` 类的图片水平居中，请使用 `.center-block` 类，不要用 `.text-center`。 [请参考助手类章节](https://v3.bootcss.com/css/#helper-classes-center) 了解更多关于 `.center-block` 的用法。

![1553765983897](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553765983897.png)

## 图片形状

通过为 `<img>` 元素添加以下相应的类，可以让图片呈现不同的形状。

![1553766049085](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553766049085.png)

# 辅助类

### 情境文本颜色

通过颜色来展示意图，Bootstrap 提供了一组工具类。这些类可以应用于链接，并且在鼠标经过时颜色可以还可以加深，就像默认的链接一样。

![1553766125005](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553766125005.png)

### 情境背景色

和情境文本颜色类一样，使用任意情境背景色类就可以设置元素的背景。链接组件在鼠标经过时颜色会加深，就像上面所讲的情境文本颜色类一样。

![1553766175680](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553766175680.png)

### 关闭按钮

通过使用一个象征关闭的图标，可以让模态框和警告框消失。

![1553766382558](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553766382558.png)

### 三角符号

通过使用三角符号可以指示某个元素具有下拉菜单的功能。注意，[向上弹出式菜单](https://v3.bootcss.com/components/#btn-dropdowns-dropup)中的三角符号是反方向的。

![1553766496945](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553766496945.png)

### 快速浮动

通过添加一个类，可以将任意元素向左或向右浮动。`!important` 被用来明确 CSS 样式的优先级。这些类还可以作为 mixin（参见 less 文档） 使用。

![1553766561671](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553766561671.png)

### 让内容块居中

为任意元素设置 `display: block` 属性并通过 `margin` 属性让其中的内容居中。下面列出的类还可以作为 mixin 使用。

![1553766633368](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553766633368.png)

### 清除浮动

**通过为父元素**添加 `.clearfix` 类可以很容易地清除浮动（`float`）。这里所使用的是 Nicolas Gallagher 创造的 [micro clearfix](http://nicolasgallagher.com/micro-clearfix-hack/) 方式。此类还可以作为 mixin 使用。

![1553766709176](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553766709176.png)

### 显示或隐藏内容

`.show` 和 `.hidden` 类可以强制任意元素显示或隐藏(**对于屏幕阅读器也能起效**)。这些类通过 `!important` 来避免 CSS 样式优先级问题，就像 [quick floats](https://v3.bootcss.com/css/#helper-classes-floats) 一样的做法。注意，这些类只对块级元素起作用，另外，还可以作为 mixin 使用。

`.hide` 类仍然可用，但是它不能对屏幕阅读器起作用，并且从 v3.0.1 版本开始就**不建议使用**了。请使用 `.hidden` 或 `.sr-only` 。

另外，`.invisible` 类可以被用来仅仅影响元素的可见性，也就是说，元素的 `display` 属性不被改变，并且这个元素仍然能够影响文档流的排布。

![1553767047985](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553767047985.png)

### 屏幕阅读器和键盘导航

`.sr-only` 类可以对**屏幕阅读器以外**的设备隐藏内容。`.sr-only` 和 `.sr-only-focusable` 联合使用的话可以在元素有焦点的时候再次显示出来（例如，使用键盘导航的用户）。对于遵循 [可访问性的最佳实践](https://v3.bootcss.com/getting-started/#accessibility) 很有必要。这个类也可以作为 mixin 使用。

![1553767188666](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553767188666.png)

### 图片替换

使用 `.text-hide` 类或对应的 mixin 可以用来将元素的文本内容替换为一张背景图。

![1553767239596](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553767239596.png)

# 响应式工具

为了加快对移动设备友好的页面开发工作，利用媒体查询功能并使用这些工具类可以方便的针对不同设备展示或隐藏页面内容。另外还包含了针对打印机显示或隐藏内容的工具类。

有针对性的使用这类工具类，从而避免为同一个网站创建完全不同的版本。相反，通过使用这些工具类可以在不同设备上提供不同的展现形式。

## 可用的类

通过单独或联合使用以下列出的类，可以针对不同屏幕尺寸隐藏或显示页面内容。

![1553767461964](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553767461964.png)

从 v3.2.0 版本起，形如 `.visible-*-*` 的类针对每种屏幕大小都有了三种变体，每个针对 CSS 中不同的 `display` 属性，列表如下：

![1553767764312](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553767764312.png)

因此，以超小屏幕（`xs`）为例，可用的 `.visible-*-*` 类是：`.visible-xs-block`、`.visible-xs-inline` 和 `.visible-xs-inline-block`。

`.visible-xs`、`.visible-sm`、`.visible-md` 和 `.visible-lg` 类也同时存在。但是**从 v3.2.0 版本开始不再建议使用**。除了 `<table>` 相关的元素的特殊情况外，它们与 `.visible-*-block` 大体相同。

## 打印类

和常规的响应式类一样，使用下面的类可以针对打印机隐藏或显示某些内容。

![1553767876112](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553767876112.png)

`.visible-print` 类也是存在的，但是从 v3.2.0 版本开始**不建议使用**。它与 `.visible-print-block` 类大致相同，除了 `<table>` 相关元素的特殊情况外。

# 使用 Less

Bootstrap 的 CSS 文件是通过 Less 源码编译而来的。Less 是一门预处理语言，支持变量、mixin、函数等额外功能。对于希望使用 Less 源码而非编译而来的 CSS 文件的用户，Bootstrap 框架中包含的大量变量、mixin 将非常有价值。

针对栅格系统的变量和 mixin 包含在[栅格系统](https://v3.bootcss.com/css/#grid-less)章节。

## 编译 Bootstrap

可以通过两种方式使用 Bootstrap ：使用编译后的 CSS 文件或者使用 Less 源码文件。若要编译 Less 文件，[请参考“起步”章节的内容](https://v3.bootcss.com/getting-started/#grunt)以了解如何设置开发环境并运行必须的编译指令。

## 变量

整个 Bootstrap 项目中使用了大量的变量，这些变量被用来代表颜色、空白（内部、边距）、字体等。详细内容请参考[定制工具](https://v3.bootcss.com/customize/#less-variables-section)。

### 颜色

Bootstrap 使用了两种颜色模式：灰度颜色和语义颜色。灰度颜色用于快速获取常用的黑色色调；语义颜色包含了各种赋予语义的颜色值。

- [概要](http://v3.bootcss.com/css/#overview)
    + 
- [预置排版样式](http://v3.bootcss.com/css/#type)
    + 统一预制标签样式
    + 
- [按钮样式](http://v3.bootcss.com/css/#buttons)
    + 
- [表格样式](http://v3.bootcss.com/css/#tables)
    + 
- [表单样式](http://v3.bootcss.com/css/#forms)
    + 
- [图片样式](http://v3.bootcss.com/css/#images)
    + 
- [辅助工具类](http://v3.bootcss.com/css/#helper-classes)
    + 
- [代码样式](http://v3.bootcss.com/css/#code)
    + 
- [栅格系统](http://v3.bootcss.com/css/#grid)
    + __xs__ : 超小屏幕 手机 (<768px)  
    + __sm__ : 小屏幕 平板 (≥768px) 
    + __md__ : 中等屏幕 桌面显示器 (≥992px) 
    + __lg__ : 大屏幕 大桌面显示器 (≥1200px)
- [响应式工具类](http://v3.bootcss.com/css/#responsive-utilities)
    + __hidden-xx__ : 在某种屏幕下隐藏 
    + __visible-xx__ : 在某种屏幕尺寸下显示

## 预置界面组件

### 下拉菜单

用于显示链接列表的可切换、有上下文的菜单。[下拉菜单的 JavaScript 插件](https://v3.bootcss.com/javascript/#dropdowns)让它具有了交互性。

#### 实例

将下拉菜单触发器和下拉菜单都包裹在 `.dropdown` 里，或者另一个声明了 `position: relative;` 的元素。然后加入组成菜单的 HTML 代码。

![1553802232075](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553802232075.png)

通过为下拉菜单的父元素设置 `.dropup` 类，可以让菜单向上弹出（默认是向下弹出的）。

![1553802291807](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553802291807.png)

#### 对齐

B默认情况下，下拉菜单自动沿着父元素的上沿和左侧被定位为 100% 宽度。 为 `.dropdown-menu` 添加 `.dropdown-menu-right` 类可以让菜单右对齐。

![1553802474764](C:\Users\lenovo\Desktop\1553802474764.png)

#### 标题

在任何下拉菜单中均可通过添加标题来标明一组动作。

![1553802557426](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553802557426.png)

#### 分割线

为下拉菜单添加一条分割线，用于将多个链接分组。

![1553802636973](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553802636973.png)

#### 禁用的菜单项

为下拉菜单中的 `<li>` 元素添加 `.disabled` 类，从而禁用相应的菜单项。

![1553802684651](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553802684651.png)



### 导航

Bootstrap 中的导航组件都依赖同一个 `.nav` 类，状态类也是共用的。改变修饰类可以改变样式。

![1553783816060](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553783816060.png)

##### 标签页

注意 `.nav-tabs` 类依赖 `.nav` 基类。

![1553783883199](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553783883199.png)

##### 胶囊式标签页

HTML 标记相同，但使用 `.nav-pills` 类：

![1553783955715](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553783955715.png)

胶囊是标签页也是可以垂直方向堆叠排列的。只需添加 `.nav-stacked` 类。

![1553784005642](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553784005642.png)

##### 两端对齐的标签页

在大于 768px 的屏幕上，通过 `.nav-justified` 类可以很容易的让标签页或胶囊式标签呈现出同等宽度。在小屏幕上，导航链接呈现堆叠样式。

![1553796075076](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553796075076.png)

![1553796137117](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553796137117.png)

##### 禁用的链接

对任何导航组件（标签页、胶囊式标签页），都可以添加 `.disabled` 类，从而实现**链接为灰色且没有鼠标悬停效果**。

![1553796205181](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553796205181.png)

![1553796259915](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553796259915.png)

##### 添加下拉菜单

用一点点额外 HTML 代码并加入[下拉菜单插件的 JavaScript 插件](https://v3.bootcss.com/javascript/#dropdowns)即可。

###### 带下拉菜单的标签页

![1553797117722](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553797117722.png)

###### 带下拉菜单的胶囊式标签页

![1553797278688](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553797278688.png)

### 导航条

#### 默认样式的导航条

导航条是在您的应用或网站中作为导航页头的响应式基础组件。它们在移动设备上可以折叠（并且可开可关），且在视口（viewport）宽度增加时逐渐变为水平展开模式。

**两端对齐的导航条导航链接已经被弃用了。**

![1553797815789](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553797815789.png)

![1553798039292](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553798039292.png)

![1553798240590](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553798240590.png)

![1553798820357](C:\Users\lenovo\Desktop\1553798820357.png)

![1553799953570](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553799953570.png)

#### 品牌图标

将导航条内放置品牌标志的地方替换为 `<img>` 元素即可展示自己的品牌图标。由于 `.navbar-brand` 已经被设置了内补（padding）和高度（height），你需要根据自己的情况添加一些 CSS 代码从而覆盖默认设置。

![1553800197876](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553800197876.png)

#### 表单

将表单放置于 `.navbar-form` 之内可以呈现很好的垂直对齐，并在较窄的视口（viewport）中呈现折叠状态。 使用对齐选项可以规定其在导航条上出现的位置。

注意，`.navbar-form` 和 `.form-inline` 的大部分代码都一样，内部实现使用了 mixin。 **某些表单组件，例如输入框组，可能需要设置一个固定宽度，从而在导航条内有合适的展现。**

![1553800345228](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553800345228.png)

#### 按钮

对于不包含在 `<form>` 中的 `<button>` 元素，加上 `.navbar-btn` 后，可以让它在导航条里垂直居中。有一些对于为辅助设备提供可识别标签的方法，例如， `aria-label`、`aria-labelledby` 或者 `title` 属性。如果这些方法都没有，屏幕阅读器将使用 `placeholder` 属性（如果这个属性存在的话），但是请注意，使用 `placeholder` 代替其他识别标签的方式是不推荐的。

![1553800647723](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553800647723.png)

#### 文本

把文本包裹在 `.navbar-text`中时，为了有正确的行距和颜色，通常使用 `<p>` 标签。

![1553800728581](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553800728581.png)

#### 非导航的链接

或许你希望在标准的导航组件之外添加标准链接，那么，使用 `.navbar-link` 类可以让链接有正确的默认颜色和反色设置。

![1553800952863](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553800952863.png)

#### 组件排列

通过添加 `.navbar-left` 和 `.navbar-right` 工具类让导航链接、表单、按钮或文本对齐。两个类都会通过 CSS 设置特定方向的浮动样式。例如，要对齐导航链接，就要把它们放在个分开的、应用了工具类的 `<ul>` 标签里。

这些类是 `.pull-left` 和 `.pull-right` 的 mixin 版本，但是他们被限定在了媒体查询（media query）中，这样可以更容易的在各种尺寸的屏幕上处理导航条组件。

![1553801505689](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553801505689.png)

#### 固定在顶部

添加 `.navbar-fixed-top` 类可以让导航条固定在顶部，还可包含一个 `.container` 或 `.container-fluid` 容器，从而让导航条居中，并在两侧添加内补（padding）。

![1553801649099](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553801649099.png)

![1553801695050](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553801695050.png)

#### 固定在底部

添加 `.navbar-fixed-bottom` 类可以让导航条固定在底部，并且还可以包含一个 `.container` 或 `.container-fluid` 容器，从而让导航条居中，并在两侧添加内补（padding）。

![1553801768219](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553801768219.png)

#### 静止在顶部

通过添加 `.navbar-static-top` 类即可创建一个与页面等宽度的导航条，它会随着页面向下滚动而消失。还可以包含一个 `.container` 或 `.container-fluid` 容器，用于将导航条居中对齐并在两侧添加内补（padding）。

与 `.navbar-fixed-*` 类不同的是，你不用给 `body` 添加任何内补（padding）。  

![1553801861734](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553801861734.png)

#### 反色的导航条

通过添加 `.navbar-inverse` 类可以改变导航条的外观。

![1553801909500](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553801909500.png)

#### 路径导航

在一个带有层次的导航结构中标明当前页面的位置。

各路径间的分隔符已经自动通过 CSS 的 `:before` 和 `content` 属性添加了。

![1553801975538](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553801975538.png)

#### 媒体对象

这是一个抽象的样式，用以构建不同类型的组件，这些组件都具有在文本内容的左或右侧对齐的图片（就像博客评论或 Twitter 消息等）。

##### 默认样式

默认样式的媒体对象组件允许在一个内容块的左边或右边展示一个多媒体内容（图像、视频、音频）。

![1553840626246](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553840626246.png)

![1553840659907](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553840659907.png)

`.pull-left` 和 `.pull-right` 这两个类以前也曾经被用在了媒体组件上，但是，从 v3.3.0 版本开始，他们就不再被建议使用了。`.media-left` 和 `.media-right` 替代了他们，不同之处是，在 html 结构中， `.media-right` 应当放在 `.media-body` 的后面。

###### 对齐

图片或其他媒体类型可以顶部、中部或底部对齐。默认是顶部对齐。

![1553840777418](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553840777418.png)

![1553840877490](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553840877490.png)

##### 媒体对象列表

用一点点额外的标记，就能在列表内使用媒体对象组件（对评论或文章列表很有用）。

![1553840919124](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553840919124.png)

![1553841248545](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553841248545.png)

### 面版

虽然不总是必须，但是某些时候你可能需要将某些 DOM 内容放到一个盒子里。对于这种情况，可以试试面板组件。

#### 基本实例

默认的 `.panel` 组件所做的只是设置基本的边框（border）和内补（padding）来包含内容。

![1553847923488](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553847923488.png)

#### 带标题的面版

通过 `.panel-heading` 可以很简单地为面板加入一个标题容器。你也可以通过添加设置了 `.panel-title` 类的 `<h1>`-`<h6>` 标签，添加一个预定义样式的标题。不过，`<h1>`-`<h6>` 标签的字体大小将被 `.panel-heading` 的样式所覆盖。

为了给链接设置合适的颜色，务必将链接放到带有 `.panel-title` 类的标题标签内。

![1553848091512](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553848091512.png)

#### 带脚注的面版

把按钮或次要的文本放入 `.panel-footer` 容器内。注意面版的脚注**不会**从情境效果中继承颜色，因为他们并不是主要内容。

![1553848174297](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553848174297.png)

#### 情境效果

像其他组件一样，可以简单地通过加入有情境效果的状态类，给特定的内容使用更针对特定情境的面版。

![1553848227002](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553848227002.png)

![1553848254043](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553848254043.png)

#### 带表格的面版

为面板中不需要边框的表格添加 `.table` 类，是整个面板看上去更像是一个整体设计。如果是带有 `.panel-body` 的面板，我们为表格的上方添加一个边框，看上去有分隔效果。

![1553848349394](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553848349394.png)

如果没有 `.panel-body` ，面版标题会和表格连接起来，没有空隙。

![1553848402855](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553848402855.png)



- [导航](http://v3.bootcss.com/components/#nav)
- [导航条](http://v3.bootcss.com/components/#navbar)
- [面包屑导航](http://v3.bootcss.com/components/#breadcrumbs)
- [下拉菜单](http://v3.bootcss.com/components/#dropdowns)
- [按钮式下拉菜单](http://v3.bootcss.com/components/#btn-dropdowns)
- [按钮组](http://v3.bootcss.com/components/#btn-groups)
- [输入框组](http://v3.bootcss.com/components/#input-groups)
- [警告框](http://v3.bootcss.com/components/#alerts)
- [页头](http://v3.bootcss.com/components/#page-header)
- [分页](http://v3.bootcss.com/components/#pagination)
- [列表组](http://v3.bootcss.com/components/#list-group)
- [面板](http://v3.bootcss.com/components/#panels)
- [媒体对象](http://v3.bootcss.com/components/#media)
- [进度条](http://v3.bootcss.com/components/#progress)
- [Glyphicons](http://v3.bootcss.com/components/#glyphicons)
- [标签](http://v3.bootcss.com/components/#labels)
- [徽章](http://v3.bootcss.com/components/#badges)
- [缩略图](http://v3.bootcss.com/components/#thumbnails)
- [大屏幕](http://v3.bootcss.com/components/#jumbotron)
- [嵌入内容](http://v3.bootcss.com/components/#responsive-embed)
- [内嵌](http://v3.bootcss.com/components/#wells)

## JavaScript插件

### JavaScript插件的依赖情况

### 如何使用Javascript插件

### 内置组件

#### Carousel轮播图

![1553829348762](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553829348762.png)

![1553831005515](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553831005515.png)

![1553831134018](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553831134018.png)





















- [模态对话框](http://v3.bootcss.com/javascript/#modals)
- [下拉菜单](http://v3.bootcss.com/javascript/#dropdowns)
- [滚动监听](http://v3.bootcss.com/javascript/#scrollspy)
- [标签页](http://v3.bootcss.com/javascript/#tabs)
- [工具提示](http://v3.bootcss.com/javascript/#tooltips)
- [弹出框](http://v3.bootcss.com/javascript/#popovers)
- [警告框](http://v3.bootcss.com/javascript/#alerts)
- [按钮](http://v3.bootcss.com/javascript/#buttons)
- [折叠面板](http://v3.bootcss.com/javascript/#collapse)
- [轮播图](http://v3.bootcss.com/javascript/#carousel)
- [吸顶效果](http://v3.bootcss.com/javascript/#affix)
    + data-spy="affix"
    + data-offset-top="什么位置出现"
    + data-offset-bottom="什么位置消失"
    
## 深度自定义 Bootstrap

### 在线自定义

- [官网在线](http://getbootstrap.com/customize/)
- [中文网在线](http://v3.bootcss.com/customize/)

### 源码编译

### LESS语言

- [官方文档](http://lesscss.org/)
- [中文文档](http://lesscss.cn/)

# 微金所项目实战

## 1. 搭建Bootstrap页面骨架及项目目录结构

```
├─ /weijinsuo/ ··················· 项目所在目录
└─┬─ /css/ ······················· 我们自己的CSS文件
  ├─ /font/ ······················ 使用到的字体文件
  ├─ /img/ ······················· 使用到的图片文件
  ├─ /js/ ························ 自己写的JS脚步
  ├─ /lib/ ······················· 从第三方下载回来的库【只用不改】
  ├─ /favicon.ico ················ 站点图标
  └─ /index.html ················· 入口文件
```

### 1.1.约定编码规范

#### 1.1.1.HTML约定

- 在head中引入必要的CSS文件，优先引用第三方的CSS，方便我们自己的样式覆盖
- 在body末尾引入必要的JS文件，优先引用第三方的JS，注意JS文件之间的依赖关系，比如bootstrap.js依赖jQuery，那就应该先引用jquery.js 然后引用bootstrap.js

#### 1.1.2.CSS约定

- 除了公共级别样式，其余样式全部由 模块前缀
- 尽量使用 直接子代选择器， 少用间接子代 避免错杀



### 1.2.HTML5文档结构

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>页面标题</title>
</head>
<body>
  
</body>
</html>
```

### 1.3.Viewport设置

```html
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0">
```

> html中插入视口设置，可以通过emmet __meta:vp__ 插入

### 1.4.浏览器兼容模式

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

> html中插入兼容模式设置，可以通过emmet __meta:compat__ 插入

### 1.5.favicon（站点图标）

```html
<link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
```

> html中插入图标链接，可以通过emmet __link:favicon__ 插入

### 1.6.引入相应的第三方文件

```html
<link rel="stylesheet" href="bootstrap.css">
<link rel="stylesheet" href="my.css">
...
<script src="jquery.js"></script>
<script src="bootstrap.js"></script>
<script src="my.js"></script>
```

### 1.7.在我们默认的样式表中将默认字体设置为：

```css
body{
  font-family: "Helvetica Neue", 
                Helvetica, 
                Microsoft Yahei, 
                Hiragino Sans GB, 
                WenQuanYi Micro Hei, 
                sans-serif;
}
```

## 2.完成页面空结构

> 先划分好页面中的大容器，然后在具体看每一个容器中单独的情况

```html
<body>
  <!-- 头部区域 -->
  <header></header>
  <!-- /头部区域 -->
  <!-- 广告轮播 -->
  <section></section>
  <!-- /广告轮播 -->
  <!-- 特色介绍 -->
  <section></section>
  <!-- /特色介绍 -->
  <!-- 立即预约 -->
  <section></section>
  <!-- /立即预约 -->
  <!-- 产品推荐 -->
  <section></section>
  <!-- /产品推荐 -->
  <!-- 新闻列表 -->
  <section></section>
  <!-- /新闻列表 -->
  <!-- 合作伙伴 -->
  <section></section>
  <!-- /合作伙伴 -->
  <!-- 脚注区域 -->
  <footer></footer>
  <!-- /脚注区域 -->
</body>
```

## 3.头部

![1553769763363](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553769763363.png)

头部主要包含：

#### 构建顶部通栏

1.在中屏幕和大屏幕中显示，即添加.visible-md/.visible-lg类（或添加.hidden-xs/.hidden-sm）

2.有版心，用.container包裹

3.用bootstrap的栅格系统进行布局

有4列：手机微金所、联系方式及服务时间、常见问题、登录注册；

```html
<header>
  <div class="topbar"></div>
</header>

```

##### 3.1.container类

- 用于定义一个固定宽度且居中的版心

```html
<div class="topbar">
  <div class="container">
    <!--
      此处的代码会显示在一个固定宽度且居中的容器中
      该容器的宽度会跟随屏幕的变化而变化
    -->
  </div>
</div>
```

##### 3.2.栅格系统

- Bootstrap中定义了一套响应式的网格系统，
- 其使用方式就是将一个容器划分成12列，
- 然后通过col-xx-xx的类名控制每一列的占比

###### 3.2.1.row类

- 因为每一个列默认有一个15px的左右外边距
- row类的一个作用就是通过左右-15px屏蔽掉这个边距

```html
<div class="container">
  <div class="row"></div>
</div>
```

###### 3.2.2.col-*\*-\*类

- col-xs-[列数]：在超小屏幕下展示几份
- col-sm-[列数]：在小屏幕下展示几份
- col-md-[列数]：在中等屏幕下展示几份
- col-lg-[列数]：在大屏幕下展示几份
- __xs__ : 超小屏幕 手机 (<768px)  
- __sm__ : 小屏幕 平板 (≥768px) 
- __md__ : 中等屏幕 桌面显示器 (≥992px) 
- __lg__ : 大屏幕 大桌面显示器 (≥1200px)

```html
<div class="row">
  <div class="col-md-2 text-center"></div>
  <div class="col-md-5 text-center"></div>
  <div class="col-md-2 text-center"></div>
  <div class="col-md-3 text-center"></div>
</div>
```

> 此处顶部通栏已经被划分成四列
> text-center的作用就是让内部内容居中显示

##### 3.3.字体图标

```css
@font-face {
  font-family: 'itcast';
  src: url('../font/MiFie-Web-Font.eot') format('embedded-opentype'), url('../font/MiFie-Web-Font.svg') format('svg'), url('../font/MiFie-Web-Font.ttf') format('truetype'), url('../font/MiFie-Web-Font.woff') format('woff');
}

[class^="icon-"],
[class*=" icon-"] {
  /*注意上面选择器中间的空格*/
  /*我们使用的名为itcast的字体就是上面的@font-face的方式声明的*/
  font-family: itcast;
  font-style: normal;
}

.icon-mobilephone::before{
  content: '\e908';
}
```

```html
<div class="col-md-2 text-center">
  <a class="mobile-link" href="#">
    <i class="icon-mobile"></i>
    <span>手机微金所</span>
    <!-- 这里使用的是bootstrap中的字体图标 -->
    <i class="glyphicon glyphicon-chevron-down"></i>
    <img src="..." alt="">
  </a>
</div>
```

###### 字体文件格式

- eot : embedded-opentype
- svg : svg
- ttf : truetype
- woff : woff

##### 3.4.hover图片展示

```css
.mobile-link:hover > img {
  display: block;
}
```

##### 3.5.按钮样式生成

- http://blog.koalite.com/bbg/
- 可以通过界面生成一个新的按钮样式

```css
.btn-itcast {
  color: #ffffff;
  background-color: #E92322;
  border-color: #DB3B43;
}

.btn-itcast:hover,
.btn-itcast:focus,
.btn-itcast:active,
.btn-itcast.active,
.open .dropdown-toggle.btn-itcast {
  color: #ffffff;
  background-color: #E92322;
  border-color: #DB3B43;
}

.btn-itcast:active,
.btn-itcast.active,
.open .dropdown-toggle.btn-itcast {
  background-image: none;
}

.btn-itcast.disabled,
.btn-itcast[disabled],
fieldset[disabled] .btn-itcast,
.btn-itcast.disabled:hover,
.btn-itcast[disabled]:hover,
fieldset[disabled] .btn-itcast:hover,
.btn-itcast.disabled:focus,
.btn-itcast[disabled]:focus,
fieldset[disabled] .btn-itcast:focus,
.btn-itcast.disabled:active,
.btn-itcast[disabled]:active,
fieldset[disabled] .btn-itcast:active,
.btn-itcast.disabled.active,
.btn-itcast[disabled].active,
fieldset[disabled] .btn-itcast.active {
  background-color: #E92322;
  border-color: #DB3B43;
}

.btn-itcast .badge {
  color: #E92322;
  background-color: #ffffff;
}
```

##### 3.6小屏幕隐藏

```html
<div class="topbar hidden-xs hidden-sm"></div>
```

或者

```html
<div class="topbar visible-md visible-lg"></div>
```

- __hidden-xx__ : 在某种屏幕下隐藏 
- __visible-xx__ : 在某种屏幕尺寸下显示
  - visible-xx-xx：最后一个xx是决定显示时的display到底是啥

```html
<div class="topbar visible-md visible-lg">
        <!--固定宽度且居中-->
        <div class="container">
            <div class="row">
                <div class="col-md-2 text-center">
                    <a class="icon- mobile_link" href="#">
                        <!--第三方字体图标-->
                        <i class="icon-mobilephone"></i>
                        <!--bootstrap中的字体图标-->
                        <span>手机微金所</span>
                        <i class="glyphicon glyphicon-chevron-down"></i>
                        <img src="imgs/c_06.jpg" alt="扫一扫">
                    </a>
                </div>
                <!--字体居中-->
                <div class="col-md-5 text-center">
                    <i class="icon-telephone"></i>
                    <span> 4006-89-4006（服务时间：9:00-21:00）</span>
                </div>
                <div class="col-md-2 text-center">
                    <a href="#">常见问题</a>
                    <a href="#">财富登录</a>
                </div>
                <div class="col-md-3 text-center">
                    <a class="btn btn-my btn-sm">免费注册</a>
                    <a class="btn btn-link btn-sm">登录</a>
                </div>
            </div>
        </div>
    </div>
```

css样式

```css
/*样式都用ID*/
/*头部区域*/
#header {
    /*height: 200px;*/
}

/*尽可能使用直接子代选择器*/
#header > .topbar {
    height: 40px;
    border-bottom: 1px solid #c0c0c0;
    line-height: 40px;
}


#header > .topbar > .container > .row > div {
    color: #888;
    font-size: 12px;
    height: 40px;
}

/*+选择器，找满足这个条件，后面所有的兄弟元素*/
#header > .topbar > .container > .row > div + div {
    border-left: 1px solid #c0c0c0;
}

#header .mobile_link {
    font-size: 12px;
    color: #888;
    position: relative;
}

#header .mobile_link:hover {
    font-size: 12px;
    text-decoration: none;

}

#header .mobile_link > img {
    display: none;
    position: absolute;
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;
}

#header .mobile_link:hover > img {
    display: block;
}

#header .btn-my {
    color: #fff;
}

#header .icon-icon {
    font-size: 50px;
    color: #e92322;
    line-height: 50px;
    vertical-align: middle;
}

#header .icon-logo {
    font-size: 32px;
    color: #333;
    line-height: 50px;
    vertical-align: middle;
}

/*头部区域*/

/*section {
    height: 200px;
    background-color: #fff;
}

section:nth-of-type(2n) {
    background-color: palegreen;
}

!*选择1，3，5，7，9...*!
section:nth-of-type(2n+1) {
    background-color: paleturquoise;
}*/

```

### 导航通栏

- 在使用了boostrap过后，大多数界面元素都是通过bootstrap提供好的界面组件修改得来

```html
<nav class="navbar navbar-itcast navbar-static-top">
  <div class="container">
    <div class="navbar-header">
      <button id="btn" type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav_list" aria-expanded="false">
        <span class="sr-only">切换菜单</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">
        <i class="icon-icon"></i>
        <i class="icon-logo"></i>
      </a>
    </div>
    <div id="nav_list" class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">我要投资</a></li>
        <li><a href="#">我要借款</a></li>
        <li><a href="#">平台介绍</a></li>
        <li><a href="#">新手专区</a></li>
        <li><a href="#">最新动态</a></li>
        <li><a href="#">微论坛</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right hidden-sm">
        <li><a href="#">个人中心</a></li>
      </ul>
    </div>
  </div>
</nav>
```

1.在超小屏幕的时候隐藏，由于使用的时bootstrap的导航组件，可利用组件的特性来实现

2.在中屏幕和大屏幕中显示**个人中心**，其他情况下隐藏

3.有版心，用.container包裹

4.使用navbar来实现导航条，自定义了一个navbar-my样式（改变来了背景色为#fff白色，），导航条静止在顶部（navbar-static-top）

##### 4.1.Bootstrap扩展

- 通过bootstrap文档对导航条样式的设置发现，其实本身是有一个类似于主题的概念
- navbar-default：默认的外观
- navbar-inverse：暗色背景的样式
- 所以我们希望可以通过自定义一套完整的风格：
  - navbar-itcast

```css
.navbar-itcast{
  ...
}
...具体代码参考navbar-default实现即可

```

##### 4.2.品牌logo

- 仍然使用字体图标

##### 4.3.菜单行高调整

- 默认样式中菜单的行高为20px，我们可以调整为自己想要的高度
- 一般都是通过自己的样式去覆盖

```html
<!--navbar的z-index为1000-->
    <nav class="navbar navbar-my navbar-static-top">
        <div class="container">
            <div class="navbar-header">
                <!--汉堡菜单-->
                <!--展开和收起data-toggle="collapse"-->
                <!--切换目标data-target="#bs-example-navbar-collapse-1"-->
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#nav-list" aria-expanded="false">
                    <!--screen readonly-->
                    <span class="sr-only">切换菜单</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">
                    <i class="icon-icon"></i>
                    <i class="icon-logo"></i>
                </a>
            </div>
            <div class="collapse navbar-collapse" id="nav-list">
                <ul class="nav navbar-nav">
                    <li class="active"><a href="#">我要投资</a></li>
                    <li><a href="#">我要借款</a></li>
                    <li><a href="#">平台介绍</a></li>
                    <li><a href="#">新手专区</a></li>
                    <li><a href="#">最新动态</a></li>
                    <li><a href="#">微论坛</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right hidden-sm">
                    <li><a href="#">个人中心</a></li>
                </ul>
            </div>
        </div>
    </nav>
```

```css
/*模拟navbar-default，重写了navbar-my的样式*/
.navbar-my {
    background-color: #fff;
    border-color: #f5f5f5;
    margin-bottom: 0;
}

.navbar-my .navbar-brand {
    color: #777;
    height: 80px;
}

.navbar-my .navbar-brand:hover,
.navbar-my .navbar-brand:focus {
    color: #5e5e5e;
    background-color: transparent;
}

.navbar-my .navbar-text {
    color: #777;
}

.navbar-my .navbar-nav > li > a {
    color: #777;
    line-height: 48px;
    font-size: 14px;
}
/*设置当鼠标悬停或元素获得焦点的时候，a链接的样式为下边框2px红色，背景色为transparent透明色*/
.navbar-my .navbar-nav > li > a:hover,
.navbar-my .navbar-nav > li > a:focus {
    color: #333;
    background-color: transparent;
    border-bottom: 2px solid #e92322;
}

.navbar-my .navbar-nav > .active > a,
.navbar-my .navbar-nav > .active > a:hover,
.navbar-my .navbar-nav > .active > a:focus {
    color: #555;
    background-color: transparent;
    border-bottom: 2px solid #e92322;
}

.navbar-my .navbar-nav > .disabled > a,
.navbar-my .navbar-nav > .disabled > a:hover,
.navbar-my .navbar-nav > .disabled > a:focus {
    color: #ccc;
    background-color: transparent;
}

.navbar-my .navbar-nav > .open > a,
.navbar-my .navbar-nav > .open > a:hover,
.navbar-my .navbar-nav > .open > a:focus {
    color: #555;
    background-color: #e7e7e7;
}

@media (max-width: 767px) {
    .navbar-my .navbar-nav .open .dropdown-menu > li > a {
        color: #777;
    }

    .navbar-my .navbar-nav .open .dropdown-menu > li > a:hover,
    .navbar-my .navbar-nav .open .dropdown-menu > li > a:focus {
        color: #333;
        background-color: transparent;
    }

    .navbar-my .navbar-nav .open .dropdown-menu > .active > a,
    .navbar-my .navbar-nav .open .dropdown-menu > .active > a:hover,
    .navbar-my .navbar-nav .open .dropdown-menu > .active > a:focus {
        color: #555;
        background-color: #e7e7e7;
    }

    .navbar-my .navbar-nav .open .dropdown-menu > .disabled > a,
    .navbar-my .navbar-nav .open .dropdown-menu > .disabled > a:hover,
    .navbar-my .navbar-nav .open .dropdown-menu > .disabled > a:focus {
        color: #ccc;
        background-color: transparent;
    }
}

.navbar-my .navbar-toggle {
    border-color: #ddd;
    margin-top: 23px;
    margin-bottom: 23px;
}

.navbar-my .navbar-toggle:hover,
.navbar-my .navbar-toggle:focus {
    background-color: #ddd;
}

.navbar-my .navbar-toggle .icon-bar {
    background-color: #888;
}

.navbar-my .navbar-collapse,
.navbar-my .navbar-form {
    border-color: #e7e7e7;
}

.navbar-my .navbar-link {
    color: #777;
}

.navbar-my .navbar-link:hover {
    color: #333;
}

.navbar-my .btn-link {
    color: #777;
}

.navbar-my .btn-link:hover,
.navbar-my .btn-link:focus {
    color: #333;
}

.navbar-my .btn-link[disabled]:hover,
fieldset[disabled] .navbar-my .btn-link:hover,
.navbar-my .btn-link[disabled]:focus,
fieldset[disabled] .navbar-my .btn-link:focus {
    color: #ccc;
}
```

## 5.轮播图

#### 广告轮播

  ![1553829183886](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553829183886.png)



#### PC端轮播

```js

# 要求：

//高度固定，图片居中，容器铺满

#   解决：
在一个较小的屏幕下展示一个超宽的图片，想让图片居中：
1.背景图 background-size:contain;
2.position:absolute; left:50%;margin-left:-width/2;(transform:translateX(-50%))
3.不能使用text-aligin:center;因为图片太大，已经超出了父容器
<img src="" alt="...">
-->
<!--<div class="carousel-caption">
    标题
</div>-->
<!--为了让图片在不同的设备上显示不同尺寸的图片。需要图片自适应-->
```

```html
具体实现：

<!--
需求：高度固定，图片居中，容器铺满
怎么设置不同图片：使用css选择器来设置不太好（html内容动态改变不利于维护）
-->
<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        <li data-target="#carousel-example-generic" data-slide-to="3"></li>
    </ol>
    <div class="carousel-inner">
        <div class="item active">
            <a href="#" class="pc_imgBox" style="background-image: url(../images/slide_01_2000x410.jpg)"></a>
        </div>
        <div class="item">
            <a href="#" class="pc_imgBox" style="background-image: url(../images/slide_02_2000x410.jpg)"></a>
        </div>
        <div class="item">
            <a href="#" class="pc_imgBox" style="background-image: url(../images/slide_03_2000x410.jpg)"></a>
        </div>
        <div class="item">
            <a href="#" class="pc_imgBox" style="background-image: url(../images/slide_04_2000x410.jpg)"></a>
        </div>
    </div>
    <a class="left carousel-control" href="#carousel-example-generic"  data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
    </a>
    <a class="right carousel-control" href="#carousel-example-generic" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
    </a>
</div>
css文件：
```

```js
/*  .pc_imgBox{
            display: block;
            height: 400px;
            width: 100%;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
    */    
```

#### 移动端轮播

```js
#需求：
//宽度自适应，高度自动变化

#解决
```

```html
<!--
需求：宽度自适应，高度自动变化
-->
<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        <li data-target="#carousel-example-generic" data-slide-to="3"></li>
    </ol>
    <div class="carousel-inner">
        <div class="item active">
            <a href="#" class="m_imgBox"><img src="../images/slide_01_640x340.jpg" alt=""></a>
        </div>
        <div class="item">
            <a href="#" class="m_imgBox"><img src="../images/slide_02_640x340.jpg" alt=""></a>
        </div>
        <div class="item">
            <a href="#" class="m_imgBox"><img src="../images/slide_03_640x340.jpg" alt=""></a>
        </div>
        <div class="item">
            <a href="#" class="m_imgBox"><img src="../images/slide_04_640x340.jpg" alt=""></a>
        </div>
    </div>
    <a class="left carousel-control" href="#carousel-example-generic"  data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
    </a>
    <a class="right carousel-control" href="#carousel-example-generic" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
    </a>
</div>
```

```js
 /*
 .m_imgBox{
            display: block;
            width: 100%;
        }
  .m_imgBox img{
            display: block;
            width: 100%;
        }
 */
```

#### 综合移动端和PC端（响应式）

```html
<!--广告轮播-->
<section id="main-ad" class="carousel slide" data-ride="carousel">
    <!-- Indicators 活动指示器 小点-->
    <ol class="carousel-indicators">
        <li data-target="#main-ad" data-slide-to="0" class="active"></li>
        <li data-target="#main-ad" data-slide-to="1"></li>
        <li data-target="#main-ad" data-slide-to="2"></li>
    </ol>

    <!-- Wrapper for slides 轮播项-->
    <div class="carousel-inner" role="listbox">
        <div class="item active" data-img-lg="imgs/slide_01_2000x410.jpg" data-img-xs="imgs/slide_01_640x340.jpg">
            <!--
            在一个较小的屏幕下展示一个超宽的图片，想让图片居中：
            1.背景图 background-size:contain;
            2.position:absolute; left:50%;margin-left:-width/2;(transform:translateX(-50%))
            3.不能使用text-aligin:center;因为图片太大，已经超出了父容器
            <img src="" alt="...">
            -->
            <!--<div class="carousel-caption">
                标题
            </div>-->
            <!--为了让图片在不同的设备上显示不同尺寸的图片。需要图片自适应-->
        </div>
        <div class="item" data-img-lg="imgs/slide_02_2000x410.jpg" data-img-xs="imgs/slide_02_640x340.jpg">
        </div>
        <div class="item" data-img-lg="imgs/slide_03_2000x410.jpg" data-img-xs="imgs/slide_03_640x340.jpg">
        </div>

        <!-- Controls 控制按钮-->
        <a class="left carousel-control" href="#main-ad" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#main-ad" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</section>
```

```js
# 动态判断当前屏幕的大小，根据大小来进行不同的适应
$(function () {
    //当文档加载完成才会执行
    //根据屏幕宽度的变化决定轮播图应该展示什么
    function resize() {
        //获取屏幕宽度
        var windowWidth = $(window).width();
        //判断屏幕属于大，小屏
        var isSmallScreen = windowWidth < 768;
        //小屏
        $('#main-ad >.carousel-inner > .item').each(function (i, item) {
            /*
            * $element.data()
            * 一个函数，专门用于取元素上的自定义属性（data-xxx）
            * 函数的参数是我们要取得属性名称(xxx)
            * */
            var $item = $(item)
            var imgSrc = $item.data(isSmallScreen ? 'img-xs' : 'img-lg')

            $item.css('backgroundImage', "url('" + imgSrc + "')"
            );
            //我们需要小图时，尺寸等比例变化，所以小图我们使用img方式
            if (isSmallScreen) {
                $item.html('<img src="' + imgSrc + '" alt=""/>')
            } else {
                $item.empty();
            }

        })
        //根据大小为界面上的每一张轮播图设置背景
    }

    //让windows对象立触发resize
    $(window).on('resize', resize).trigger('resize')

});
```



### 5.1.Bootstrap JS插件使用

- 在一个较小屏幕下展示一个超宽的图片，想让图片居中显示
  - 背景图
  - p-a l 50% m-l -width/2

### 5.2.background使用

#### 5.2.1.background-size

- length
  - 如100px 100px
- percentage
  - 如90% 90%
- cover
  - 背景图片的较小边放大到目标大小结束
- contain
  - 相反

### 5.3.图片响应式

- 目的
  - 各种终端都需要正常显示图片
  - 移动端应该使用更小（体积）的图片
- 实现方式

### 5.4.window resize事件

## 6.网站特性

![1553840181731](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553840181731.png)

有版心，故用.container

超小屏幕隐藏，其他展示：hidden-xs

栅格系统内容的展示使用媒体对象样式



使用网格系统实现响应式布局

+ 小屏幕为2列 .col-xs-6
+ 中屏幕和大屏幕为3列 .col-sm-4

### 6.1.网格系统

### 6.2.媒体对象样式

### 6.3.响应式辅助类型

```
- hidden-xx
```

```html
<!--特色介绍-->
<!--hidden-xxx 谁隐藏就只隐藏谁，其他的均显示-->
<section id="produce" class="hidden-xs">
    <div class="container">
        <div class="row">
            <!--屏幕>992px时，占4列，共3列，此时，若屏幕大小为1200以上也会匹配到col-md-4-->
            <div class="col-sm-6 col-md-4">
                <a href="#">
                    <div class="media">
                        <div class="media-left">
                            <i class="icon-uniE907"></i>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">支付交易保障</h4>
                            <p>银联支付全程保证支付安全</p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-sm-6 col-md-4">
                <a href="#">
                    <div class="media">
                        <div class="media-left">
                            <i class="icon-uniE903"></i>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">平台财产安全</h4>
                            <p>由PICC保驾护航</p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-sm-6 col-md-4">
                <a href="#">
                    <div class="media">
                        <div class="media-left">
                            <i class="icon-uniE901"></i>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">交易安全</h4>
                            <p>由中国人寿财险对借款人承保</p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-sm-6 col-md-4">
                <a href="#">
                    <div class="media">
                        <div class="media-left">
                            <i class="icon-uniE900"></i>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">安全保障</h4>
                            <p>独创八层安全保障机制</p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-sm-6 col-md-4">
                <a href="#">
                    <div class="media">
                        <div class="media-left">
                            <i class="icon-uniE904"></i>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">筛选优质资产</h4>
                            <p>对接上海资信征信系统</p>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-sm-6 col-md-4">
                <a href="#">
                    <div class="media">
                        <div class="media-left">
                            <i class="icon-uniE902"></i>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">联合信息发布</h4>
                            <p>通过路透社共同发布利率指数报告</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</section>
```

```css
/*特色介绍区域*/
#produce {
    padding: 50px 0;
    border-bottom: 1px solid #c0c0c0;
}

#produce i {
    font-size: 34px;
}

#produce .icon-uniE907::before {
    content: '\e907';
}

#produce .icon-uniE903::before {
    content: '\e903';
}

#produce .icon-uniE901::before {
    content: '\e901';
}

#produce .icon-uniE900::before {
    content: '\e900';
}

#produce .icon-uniE904::before {
    content: '\e907';
}

#produce .icon-uniE902::before {
    content: '\e902';
}

#produce > .container > .row > div {
    height: 60px;
    padding: 10px 0 60px 0px;
}

#produce > .container > .row > div > a {
    color: #333;
    text-decoration: none;
}

#produce > .container > .row > div > a:hover {
    color: #e92322;
    text-decoration: none;
}

/*#produce > .container > .row > div:nth-of-type(2n) {
    height: 60px;
    background-color: deeppink;
}

#produce > .container > .row > div:nth-of-type(2n+1) {
    height: 60px;
    background-color: deepskyblue;
}*/

```



## 7.预约投标

![1553842450971](C:\Users\lenovo\AppData\Roaming\Typora\typora-user-images\1553842450971.png)

### 7.1.pull-left



### 7.2.pull-right

```html
<!--立即预约-->
<section id="book">
    <div class="container">
        <p class="pull-left"><i class="icon-uniE906"></i>现在有<span>458</span>人在排队，累计预约交易成功<span>7409</span>次。
            什么是预约投标？
            <a href="#">立即预约</a>
        </p>
        <!--pull-right 向右浮动-->
        <!--hidden-xs-->
        <P class="pull-right hidden-xs hidden-sm"><i class="icon-uniE905"></i><a href="#">微金所企业宣传片</a></P>
    </div>
</section>
```

```css
/*立即预约区域*/
#book {
    border-bottom: 1px solid #c0c0c0;
    padding: 20px 0;
}

#book .icon-uniE906::before {
    content: '\e906';
    font-size: 14px;
}

#book .icon-uniE905::before {
    content: '\e905';
}

#book > .container > p {
    /*line-height: 60px;一旦换行，第二行也有行高，*/
    font-size: 14px;
    /*bootstrap默认p标签有10px的下外边距*/
    margin-bottom: 0;
}

#book > .container .pull-left > span,
#book > .container .pull-left > a {
    color: #e92322;
}

#book > .container .pull-left > a {
    border-bottom: 1px dashed #e92322;
}

#book > .container .pull-left > a:hover {
    text-decoration: none;
}
```



## 8.投资产品

### 8.1.Tab选项卡

```html
<!-- 页签 -->
    <!-- Nav tabs -->
    <ul class="nav nav-tabs">
        <li class="active"><a href="#home" data-toggle="tab">Home</a></li>
        <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Profile</a></li>
        <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Messages</a></li>
        <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Settings</a></li>
    </ul>
    <!--内容-->
    <!-- Tab panes -->
    <div class="tab-content">
        <div class="tab-pane active" id="home">1</div>
        <div role="tabpanel" class="tab-pane" id="profile">2</div>
        <div role="tabpanel" class="tab-pane" id="messages">3</div>
        <div role="tabpanel" class="tab-pane" id="settings">4</div>
    </div>
```



代码：

```html
<ul class="nav nav-tabs" role="tablist">
    <li role="presentation" class="active"><a href="#tab_01" aria-controls="tab_01" role="tab"
                                              data-toggle="tab">特别推荐</a>
    </li>
    <li role="presentation"><a href="#tab_02" aria-controls="tab_02" role="tab"
                               data-toggle="tab">微投资</a>
    </li>
    <li role="presentation"><a href="#tab_03" aria-controls="tab_03" role="tab"
                               data-toggle="tab">微小宝</a></li>
    <li role="presentation"><a href="#tab_04" aria-controls="tab_04" role="tab"
                               data-toggle="tab">微消费</a></li>
    <li role="presentation"><a href="#tab_04" aria-controls="tab_04" role="tab"
                               data-toggle="tab">微增利</a></li>
    <li role="presentation"><a href="#tab_04" aria-controls="tab_04" role="tab"
                               data-toggle="tab">微金宝</a></li>
    <li role="presentation"><a href="#tab_04" aria-controls="tab_04" role="tab"
                               data-toggle="tab">微转让</a></li>
    <li class="pull-right"><a href="#">更多</a></li>
</ul>

<!-- Tab panes 选项卡内容-->
<!--bootstrap中可以设置淡入淡出：.fade类和.fade .in-->
<div class="tab-content">
    <div role="tabpanel" class="tab-pane fade in active" id="tab_01">
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-4">
                1
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
                2
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
                3
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
                4
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
                5
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
               6
            </div>
        </div>
    </div>
```

#### 选项卡内容

```html
<div class="panel panel-my active">
                            <div class="panel-heading">
                                <p><strong>8</strong><sub>%</sub><br>
                                    <span>年利率</span>
                                </p>
                            </div>
                            <div class="panel-body">
                                <h5>新手体验表0605期</h5>
                                <div class="row">
                                    <div class="col-xs-6 text-left">
                                        <p>起步价</p>
                                        <!--strong sub 具有语义-->
                                        <p><strong>1000.00</strong><sub>万</sub></p>
                                    </div>
                                    <div class="col-xs-6 text-right">
                                        <p>起步价</p>
                                        <!--strong sub 具有语义-->
                                        <p><strong>1000.00</strong><sub>万</sub></p>
                                    </div>
                                    <div class="col-xs-6 text-left">
                                        <p>起步价</p>
                                        <!--strong sub 具有语义-->
                                        <p><strong>1000.00</strong><sub>万</sub></p>
                                    </div>
                                    <div class="col-xs-6 text-right">
                                        <p>起步价</p>
                                        <!--strong sub 具有语义-->
                                        <p><strong>1000.00</strong><sub>万</sub></p>
                                    </div>
                                </div>
                            </div>
                        </div>
```

```css
.panel-my {
    border: 0;
    border-radius: 0;
    box-shadow: 1px 1px 5px #ccc;
}

.panel-my > .panel-heading strong,
.panel-my.disabled > .panel-heading strong {
    font-size: 36px;
    color: #e92322;
}

.panel-my > .panel-heading span,
.panel-my.disabled > .panel-heading span {
    font-size: 10px;
    color: #222;
}
.panel-my.active > .panel-heading strong {
    color: #fff;
}
.panel-my.active > .panel-heading span {
    color: #fff;
}
.panel-my.active {
    background-color: #e92322;
    color: #fff;
}

.panel-my.active::before {
    content: '\e915';
    font-family: myfont;
    position: absolute;
    font-size: 50px;
    top: -13px;
    left: 12px;
}

.panel-my.active .panel-heading {
    color: #fff;
}

.panel-my.disabled {
    background-color: #e0e0e0;
}

.panel-my > .panel-heading {
    color: #333;
    /* background-color: #f5f5f5;
     border-color: #ddd;*/
    float: right;
    width: 120px;
    height: 150px;
    border-left: 1px dashed #c0c0c0;
    text-align: center;
    position: relative;
    padding: 45px 0 35px;
}

.panel-my > .panel-heading::before,
.panel-my > .panel-heading::after {
    content: ' ';
    width: 16px;
    height: 16px;
    /*只要比50%大，都为圆，因为饱和了*/
    border-radius: 8px;
    background-color: #f0f0f0;
    position: absolute;
}

.panel-my > .panel-heading::before {
    top: -8px;
    left: -8px;
}ss

.panel-my > .panel-heading::after {
    bottom: -8px;
    left: -8px;
    /*box-shadow是从左上方照射的，方向设为0，则从上方照射，故下侧看不到,而且必须为内阴影*/
    box-shadow: 0 2px 1px #ccc inset;
}

.panel-my > .panel-body {
    margin-right: 120px;
    height: 150px;

}

.panel-my > .panel-heading + .panel-collapse > .panel-body {
    border-top-color: #ddd;
}

.panel-my > .panel-heading .badge {
    color: #f5f5f5;
    background-color: #333;
}
```



### 8.2.网格系统



### 8.3.::before



### 8.4.::after



### 8.5.tooltip插件

jquery在追加tooltip元素的时候，会把元素与元素之间的空格（多个空格默认只显示一个空格，这个空格的宽度为一个font-size）删除，然后替换掉，这时我么可以设置父级元素的font-size为0，让空格一开始就没有，然后再设置各个子元素的font-size

即可；

标签横向滚动：

需要设置父级ul的宽度为各个子li的宽度+父级的padding-left

父级ul的包裹容器ul-wrapper设置overflow：scroll

```html
<!--产品推荐-->
<section id="products">
    <div class="container">
        <!-- Nav tabs选项卡标题 -->
        <ul class="nav nav-tabs" role="tablist">
            <li role="presentation" class="active"><a href="#tab_01" aria-controls="tab_01" role="tab"
                                                      data-toggle="tab">特别推荐</a>
            </li>
            <li role="presentation"><a href="#tab_02" aria-controls="tab_02" role="tab"
                                       data-toggle="tab">微投资</a>
            </li>
            <li role="presentation"><a href="#tab_03" aria-controls="tab_03" role="tab"
                                       data-toggle="tab">微小宝</a></li>
            <li role="presentation"><a href="#tab_04" aria-controls="tab_04" role="tab"
                                       data-toggle="tab">微消费</a></li>
            <li role="presentation"><a href="#tab_04" aria-controls="tab_04" role="tab"
                                       data-toggle="tab">微增利</a></li>
            <li role="presentation"><a href="#tab_04" aria-controls="tab_04" role="tab"
                                       data-toggle="tab">微金宝</a></li>
            <li role="presentation"><a href="#tab_04" aria-controls="tab_04" role="tab"
                                       data-toggle="tab">微转让</a></li>
            <li class="pull-right"><a href="#">更多</a></li>
        </ul>
        <!-- Tab panes 选项卡内容-->
        <!--bootstrap中可以设置淡入淡出：.fade类和.fade .in-->
        <div class="tab-content">
            <div class="tab-pane active" id="product_nav01">
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <a href="#" class="product_box active">
                        <div class="pro_right">
                            <p><b>8</b><sub>%</sub></p>
                            <p>年利率</p>
                        </div>
                        <div class="pro_left">
                            <h3 class="text-center">新手体验标1002期</h3>
                            <div class="col-xs-6">
                                <p>起投金额(元)</p>
                                <p>0.01万</p>
                            </div>
                            <div class="col-xs-6 text-right">
                                <p>起投金额(元)</p>
                                <p>0.01万</p>
                            </div>
                            <div class="col-xs-6">
                                <p>起投金额(元)</p>
                                <p>0.01万</p>
                            </div>
                            <div class="col-xs-6 text-right">
                                <p>起投金额(元)</p>
                                <p>0.01万</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <a href="#" class="product_box">
                        <div class="pro_right">
                            <div class="tips">
                                <span data-toggle="tooltip" data-placement="top" title="微金宝" class="red">微</span>
                                <span data-toggle="tooltip" data-placement="bottom" title="河南省" class="green">豫</span>
                            </div>
                            <p><b>8</b><sub>%</sub></p>
                            <p>年利率</p>
                        </div>
                        <div class="pro_left">
                            <h3 class="text-center">新手体验标1002期</h3>
                            <div class="col-xs-6">
                                <p>起投金额(元)</p>
                                <p>0.01万</p>
                            </div>
                            <div class="col-xs-6 text-right">
                                <p>起投金额(元)</p>
                                <p>0.01万</p>
                            </div>
                            <div class="col-xs-6">
                                <p>起投金额(元)</p>
                                <p>0.01万</p>
                            </div>
                            <div class="col-xs-6 text-right">
                                <p>起投金额(元)</p>
                                <p>0.01万</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <a href="#" class="product_box">
                        <div class="pro_right">
                            <p><b>8</b><sub>%</sub></p>
                            <p>年利率</p>
                        </div>
                        <div class="pro_left">
                            <h3 class="text-center">新手体验标1002期</h3>
                            <div class="col-xs-6">
                                <p>起投金额(元)</p>
                                <p>0.01万</p>
                            </div>
                            <div class="col-xs-6 text-right">
                                <p>起投金额(元)</p>
                                <p>0.01万</p>
                            </div>
                            <div class="col-xs-6">
                                <p>起投金额(元)</p>
                                <p>0.01万</p>
                            </div>
                            <div class="col-xs-6 text-right">
                                <p>起投金额(元)</p>
                                <p>0.01万</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <a href="#" class="product_box">
                        <div class="pro_right">
                            <p><b>8</b><sub>%</sub></p>
                            <p>年利率</p>
                        </div>
                        <div class="pro_left">
                            <h3 class="text-center">新手体验标1002期</h3>
                            <div class="col-xs-6">
                                <p>起投金额(元)</p>
                                <p>0.01万</p>
                            </div>
                            <div class="col-xs-6 text-right">
                                <p>起投金额(元)</p>
                                <p>0.01万</p>
                            </div>
                            <div class="col-xs-6">
                                <p>起投金额(元)</p>
                                <p>0.01万</p>
                            </div>
                            <div class="col-xs-6 text-right">
                                <p>起投金额(元)</p>
                                <p>0.01万</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="tab-pane" id="product_nav02">2</div>
            <div class="tab-pane" id="product_nav03">3</div>
            <div class="tab-pane" id="product_nav04">4</div>
            <div class="tab-pane" id="product_nav05">5</div>
            <div class="tab-pane" id="product_nav06">6</div>
            <div class="tab-pane" id="product_nav07">7</div>
        </div>
</section>
```

```css
.product_box{
    display: block;
    width: 100%;
    height: 150px;
    background: #fff;
    box-shadow: 3px 3px 5px #d8d8d8;
    margin-top: 30px;
    color: #666;
}
.product_box:hover{
    color: #666;
}
.product_box.active{
    background: #e92322;
    color: #fff;
    position: relative;
}
/*:  ::  css3规范 :伪类  :: 伪元素*/
.product_box.active::before{
    content: "\e915";
    position: absolute;
    left: 0;
    top: -7px;
    font-family: wjs;
    font-size: 33px;
}

.product_box .pro_left{
    overflow: hidden;
}
.product_box .pro_left h3{
    font-size: 16px;
    margin-top: 10px;
}
.product_box .pro_left div{
    font-size: 12px;
}

/*浮动元素优先 两栏自适应注意*/
.product_box .pro_right{
    float: right;
    width: 80px;
    height: 150px;
    text-align: center;
    border-left: 1px dashed #ccc;
    position: relative;
}
.product_box .pro_right::before,
.product_box .pro_right::after{
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 6px;
    background: #f5f5f5;
    left: -6px;
}
.product_box .pro_right::before{
    top: -6px;
    /*
    参数1：x轴的偏移
    参数2：y轴的偏移
    参数3：阴影的模糊的
    参数4：阴影的延伸
    参数5：阴影的颜色
    参数6：内阴影
    */
    box-shadow: 0 -2px 2px #d8d8d8 inset;
}
.product_box .pro_right::after{
    bottom: -6px;
    box-shadow: 0 2px 2px #d8d8d8 inset;
}
.product_box .pro_right .tips{
    position: absolute;
    left: 0;
    top: 10px;
    width: 100%;
}
.product_box .pro_right .tips span{
    width: 16px;
    height: 16px;
    text-align: center;
    line-height: 16px;
    border-width: 1px;
    border-style: solid;
    display: inline-block;
}
.product_box .pro_right .tips .red{
    color: red;
    border-color: red;
}
.product_box .pro_right .tips .green{
    color: green;
    border-color: green;
}

    /*
    找到P元素，通过P找到父元素，通过父元素找子元素当中类型为P的，然再去找第几个。
    p:first-of-type
    p:last-of-type
    p:nth-of-type(n)
    p:nth-last-of-type(n)
    如果使用的是child;
    p:first-child
    找到P元素,通过P找到父元素，通过父元素找所有的子元素，找第一个元素，匹配判断类型(如果不是无效选择器)
    */
.product_box .pro_right p:first-of-type{
    margin-top: 25px;
    color: #e92322;
}
.product_box.active .pro_right p:first-of-type{
    color: #fff;
}
.product_box .pro_right p:first-of-type b{
    font-size: 48px;
}
.product_box .pro_right p:first-of-type sub{
    bottom: 0;
    font-size: 12px;
}
.product_box .pro_right p:last-child{}
```



## 9.新闻资讯

```html
<!--新闻-->
<!-- 新闻列表 -->
  <section id="news">
    <div class="container">
      <div class="row">
        <div class="col-sm-2 col-sm-offset-3">
          <div class="news-title">全部新闻</div>
        </div>
        <div class="col-sm-1">
          <ul class="nav nav-pills nav-stacked">
            <li role="presentation" class="active"><a data-title="全部新闻" href="#news01" data-toggle="tab" role="tab"><i class="icon-news01"></i></a></li>
            <li role="presentation"><a data-title="媒体新闻" href="#news02" data-toggle="tab" role="tab"><i class="icon-news02"></i></a></li>
            <li role="presentation"><a data-title="行业资讯" href="#news03" data-toggle="tab" role="tab"><i class="icon-news03"></i></a></li>
            <li role="presentation"><a data-title="XXXX" href="#news04" data-toggle="tab" role="tab"><i class="icon-news04"></i></a></li>
          </ul>
        </div>
        <div class="col-sm-6">
          <div class="tab-content">
            <div role="tabpanel" class="tab-pane fade in active" id="news01">
              <ul>
                <li>微金所发钱了，快来抢！！！！！</li>
                <li>微金所发钱了，快来抢！！！！！</li>
                <li>微金所发钱了，快来抢！！！！！</li>
                <li>微金所发钱了，快来抢！！！！！</li>
              </ul>
            </div>
            <div role="tabpanel" class="tab-pane fade" id="news02">
              <ul>
                <li>微金所发钱了，快来抢！！！！！</li>
                <li>微金所发钱了，快来抢！！！！！</li>
              </ul>
            </div>
            <div role="tabpanel" class="tab-pane fade" id="news03">
              <ul>
                <li>微金所发钱了，快来抢！！！！！</li>
                <li>微金所发钱了，快来抢！！！！！</li>
                <li>微金所发钱了，快来抢！！！！！</li>
                <li>微金所发钱了，快来抢！！！！！</li>
                <li>微金所发钱了，快来抢！！！！！</li>
              </ul>
            </div>
            <div role="tabpanel" class="tab-pane fade" id="news04">
              <ul>
                <li>微金所发钱了，快来抢！！！！！</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
```

```js
// a点击注册事件
  var $newTitle = $('.news-title');
  $('#news .nav-pills a').on('click', function() {
    // 获取当前点击元素
    var $this = $(this);
    // 获取对应的title值
    var title = $this.data('title');
    // 将title设置到相应的位置
    $newTitle.text(title);
  });
```

```css
/* 新闻 */

#news {
  padding: 50px 0;
  border-bottom: 1px solid #c0c0c0;
}

#news .news-title {
  padding: 15px 0;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  border-bottom: 1px dashed #c0c0c0;
  position: relative;
  margin-right: 10px;
}

#news .news-title::after {
  content: ' ';
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  border: 1px solid #c0c0c0;
  position: absolute;
  bottom: -5px;
  right: -10px;
}


/*#news .nav-pills a i {
  font-size: 50px;
}*/

.icon-news01:before {
  content: "\e90e";
  font-size: 28px;
  color: #EAEAEA;
}

.icon-news02:before {
  content: "\e90f";
  font-size: 28px;
  color: #EAEAEA;
}

.icon-news03:before {
  content: "\e910";
  font-size: 28px;
  color: #EAEAEA;
}

.icon-news04:before {
  content: "\e911";
  font-size: 28px;
  color: #EAEAEA;
}

@media (max-width: 768px) {
  #news .nav-stacked > li {
    float: left;
    margin-right: 20px;
  }
}
```



### 9.1.Tab选项卡



### 9.2.响应式偏移



## 10.合作伙伴

```html
<!--合作伙伴-->
<footer class="wjs_partner">
    <div class="container">
        <h3 class="text-center">合作伙伴</h3>
        <ul>
            <li><a href="#"><span class="wjs_icon wjs_icon_partner01"></span></a></li>
            <li><a href="#"><span class="wjs_icon wjs_icon_partner02"></span></a></li>
            <li><a href="#"><span class="wjs_icon wjs_icon_partner03"></span></a></li>
            <li><a href="#"><span class="wjs_icon wjs_icon_partner04"></span></a></li>
            <li><a href="#"><span class="wjs_icon wjs_icon_partner05"></span></a></li>
            <li><a href="#"><span class="wjs_icon wjs_icon_partner06"></span></a></li>
            <li><a href="#"><span class="wjs_icon wjs_icon_partner07"></span></a></li>
            <li><a href="#"><span class="wjs_icon wjs_icon_partner08"></span></a></li>
            <li><a href="#"><span class="wjs_icon wjs_icon_partner09"></span></a></li>
        </ul>
    </div>
</footer>
```

```css
/*合作伙伴*/

#hzhb {
  padding: 30px 0;
}

#hzhb ul {
  padding: 0;
  list-style: none;
  width: 818px;
  /*清除浮动*/
  position: relative;
  overflow: hidden;
}

#hzhb ul li {
  float: left;
}

#hzhb ul li + li {
  border-left: 1px dashed #e0e0e0;
}

#hzhb ul li a {
  padding: 10px 20px;
  font-size: 50px;
  color: #888;
}

#hzhb ul li a:hover {
  text-decoration: none;
}

.icon-uniE930:hover {
  color: #df3232;
}

.icon-uniE930:before {
  content: "\e946";
}

.icon-uniE92F:hover {
  color: #e8380d;
}

.icon-uniE92F:before {
  content: "\e92f";
}

.icon-uniE92E:hover {
  color: #ed6f00;
}

.icon-uniE92E:before {
  content: "\e92e";
}

.icon-uniE92A:hover {
  color: #159f69;
}

.icon-uniE92A:before {
  content: "\e92a";
}

.icon-uniE929:hover {
  color: #07569e;
}

.icon-uniE929:before {
  content: "\e929";
}

.icon-uniE931:hover {
  color: #004098;
}

.icon-uniE931:before {
  content: "\e931";
}

.icon-uniE92C:hover {
  color: #d32019;
}

.icon-uniE92C:before {
  content: "\e92c";
}

.icon-uniE92B:hover {
  color: #3eac4a;
}

.icon-uniE92B:before {
  content: "\e92b";
}

.icon-uniE92D:hover {
  color: #2bb289;
}

.icon-uniE92D:before {
  content: "\e92d";
}
```



### 10.1.相邻兄弟选择器



## 11.登录对话框

### 11.1模态框

```html
<a href="#" class="btn btn-link btn-sm" data-toggle="modal" data-target="#login_form">登录</a>
```

```html
<!-- Modal -->
  <div class="modal fade" id="login_form" tabindex="-1" role="dialog" aria-labelledby="login_form_title">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="login_form_title">登录</h4>
        </div>
        <div class="modal-body">
          <form class="form-horizontal">
            <div class="form-group">
              <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
              <div class="col-sm-10">
                <input type="email" class="form-control" id="inputEmail3" placeholder="请输入邮箱">
              </div>
            </div>
            <div class="form-group-lg">
              <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
              <div class="col-sm-10">
                <input type="password" class="form-control" id="inputPassword3" placeholder="请输入密码">
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-offset-2 col-sm-10">
                <div class="checkbox">
                  <label>
                    <input type="checkbox"> 
                      Remember me
                  </label>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-offset-2 col-sm-10">
                <button type="submit" class="btn btn-default">Sign in</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
```



### 11.2表单样式



## 12.导航吸顶

### 12.1affix组件

```html
<nav class="navbar navbar-itcast navbar-static-top" data-spy="affix" data-offset-top="260" data-offset-bottom="200">
```



## 13.深度自定义

### 13.1.http://v3.bootcss.com/customize

### 13.2通过 Less 文件修改




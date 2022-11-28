# escapeFromDeath边做边复习



## relative 和 absolute中的top、bottom、left、right的区别

- relative中的top、bottom、left、right是相对于其自身原来的位置进行位移
- absolute中的top、bottom、left、right是相对于其父元素进行的位移：例如bottom:0：则是在父元素的底部向上0px；left：100px，则是在父元素的左侧向右100px；



## 让子元素水平垂直居中的方法

### 单元素水平

- 外边距居中法：利用将上下外边距设置为0，左右外边距设置为auto（自动）的方式来得到元素居中的效果 margin:0 auto;
- 行内元素水平居中：如果元素是行内元素(可以改变为行内元素)，利用 text-align: center 可以实现在块级元素内部的行内元素水平居中。此方法对inline、inline-block、inline-table和inline-flex元素水平居中都有效。
- 使用绝对定位+transform：先将父元素设置为相对定位，再将子元素设置为绝对定位，向右移动子元素，移动距离为父容器的一半，最后通过向左移动子元素的一半宽度以达到水平居中。  `*为什么用绝对定位？=> 因为觉度定位进行位移时是根据父元素相对位移的，而relative是根据自身的位置进行位移的。*`
- 使用flex+justify-content：...

### 多块级元素水平居中

- 利用flex布局/grid布局
- 利用inline-block

## 让子元素垂直居中的方法

### 内联元素垂直居中

- 单行内联元素垂直居中可以使用line-height：200%
- 多行内联元素垂直居中利用flex布局（flex）

### 块级元素垂直居中

- 已知宽度高度：使用absolute+负margin：绝对定位元素距离顶部50%，并设置margin-top向上偏移元素高度的一半，就可以实现了
- 未知宽度高度：使用absolute+transform：可以借助CSS3中的transform属性向Y轴反向偏移50%的方法实现垂直居中；transform改变的是自己的位置
- 使用flex+align-items：
- ​


























































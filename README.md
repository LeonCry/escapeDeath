HTML CSS 补充



relative 和 absolute中的top、bottom、left、right的区别

- relative中的top、bottom、left、right是相对于其自身原来的位置进行位移
- absolute中的top、bottom、left、right是相对于其父元素进行的位移：例如bottom:0：则是在父元素的底部向上0px；left：100px，则是在父元素的左侧向右100px；

让子元素水平垂直居中的方法

单元素水平

- 外边距居中法：利用将上下外边距设置为0，左右外边距设置为auto（自动）的方式来得到元素居中的效果 margin:0 auto;
- 行内元素水平居中：如果元素是行内元素(可以改变为行内元素)，利用 text-align: center 可以实现在块级元素内部的行内元素水平居中。此方法对inline、inline-block、inline-table和inline-flex元素水平居中都有效。
- 使用绝对定位+transform：先将父元素设置为相对定位，再将子元素设置为绝对定位，向右移动子元素，移动距离为父容器的一半，最后通过向左移动子元素的一半宽度以达到水平居中。  *为什么用绝对定位？=> 因为觉度定位进行位移时是根据父元素相对位移的，而relative是根据自身的位置进行位移的。*
- 使用flex+justify-content：...

多块级元素水平居中

- 利用flex布局/grid布局
- 利用inline-block

让子元素垂直居中的方法

内联元素垂直居中

- 单行内联元素垂直居中可以使用line-height：200%
- 多行内联元素垂直居中利用flex布局（flex）

块级元素垂直居中

- 已知宽度高度：使用absolute+负margin：绝对定位元素距离顶部50%，并设置margin-top向上偏移元素高度的一半，就可以实现了
- 未知宽度高度：使用absolute+transform：可以借助CSS3中的transform属性向Y轴反向偏移50%的方法实现垂直居中；transform改变的是自己的位置
- 使用flex+align-items：



nth-child和nth-of-type

:nth-child(n)选择器用于匹配父元素索引为n的子元素，即选取属于其父元素的第N个子元素，不论元素的类型。

说明：n可以是数字、关键词（Odd 和 even）或公式。

:nth-of-type(n)选择器匹配属于父元素的特定类型的第N个子元素，对元素类型有限制；n可以是数字、关键词或公式，先分类型后数是第几个。

补充：

          选择器        	作用                                      
     :first-child    	所有标签中的第一个,并且要符合设定的标签类型                  
      :last-child    	所有标签中的最后一个,并且要符合设定的标签类型                 
     :nth-child()    	符合指定顺序的标签.()当中可写内容:一个数值,表示指定的顺序;英文单词odd奇数标签even偶数标签.公式:a*n +/- b,公式没有固定的写法,完全根据需求而定,a,b是根据需求自行设定的数字,n是css3系统规定的,从0开始的整数,将n赋值,是从0开始的整数,再根据公式计算出数值,按照数值给指定顺序的符合设定的标签添加样式效果
   nth-last-child()  	与nth-child()的所有语法都相同,只是计算顺序,是从最后一位开始,例如:nth-last-child(3)
    :first-of-type   	所有符合设定类型的标签中的第一个                        
     :last-of-type   	所有符合设定类型的标签中的最后一个                       
    :nth-of-type()   	符合指定顺序的标签,()当中可写内容:一个数值表示指定的顺序,英文单词odd奇数标签、even偶数标签.公式a*n +/- b公式没有固定的写法,完全根据需求而定a,b是根据需求自行设定的数字n是css3系统规定的,从0开始的整数将n赋值,是从0开始的整数,再根据公式计算出数值,按照数值给指定顺序的符合设定的标签添加样式效果
  :nth-last-of-type()	与nth-of-type()的所有语法都相同,只是计算顺序,是从最后一位开始,例如:nth-last-of-type(3),所有符合设定类型的标签中的倒数第三个标签
                     	                                        























































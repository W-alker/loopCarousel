# LoopCarousel
解决需要通过无限滚动动画展示一组图片或者其他列表的需求。

图片或列表的每一项的宽度可以不固定。

提供JS动画和CSS动画两种方式。

## install
```ps
npm install loop-carousel -S
```

## import

这个包只是一个方法，生产版本在`/dist`目录下:
```js
const loopCarousel = require('loop-carousel')
/* or */
import loopCarousel from 'loop-carousel/dist'
```

## use
首先我们需要一个容器并设置了`overflow:hidden`，然后这个展示列表作为唯一子元素在其中，同时这个展示列表最好是个弹性盒，例如: 
```html
<div class="loop-carousel-wrapper" style="overflow:hidden;">
    <div class="loop-carousel-list" style="display:flex;">
        <img src=""><img src=""><img src=""><img src="">
    </div>
</div>
```
因为只需要简单的设置两个属性，所以就不额外写CSS文件了，展示列表的子项可以自行通过margin等方式设置间隔。    


最基础的只需要这样使用，就可以看到动画了:    
```js
const el = document.querySelector('.loop-carousel-list')
loopCarousel(el)
```
该方法会根据这个展示列表的子元素大小和视口大小自动拷贝适量的DOM元素追加至其后。

其他配置参数:
```js
/**
 * @param {HTMLDivElement} el 必须,一个块DOM
 * @param {number} spaceBetween 如果通过margin或者其他方式设置了子元素之间的间隔,请传入这个间隔的px值,默认0
 * @param {number} duration 每次滚动展示完成的时间,默认8s
 * @param {boolean} useJs 是否使用JS动画,默认false
 * @param {string} timingFn 动画函数,同CSSs的'animation-timing-function',使用JS动画的情况下无效只允许默认值'linear'
 * @returns {object} 
 */
```

使用该方法返回的对象提供了一些属性和两个方法`stopAnimation`和`runAnimation`用来控制停止和活动，这在一些情况下比较适用:
```js
const el = document.querySelector('.loop-carousel-list')
const obj = loopCarousel(el)
obj.stopAnimation() // 停止动画,使用JS动画会停在当前位置,而CSS动画则会重置到起始位置
obj.runAnimation() // 继续执行动画
```
class LoopCarousel {
    constructor(el, spaceBetween = 0, duration = 8, useJs = false, timingFn = 'linear') {
        // 打标记
        el.dataset.loopCarousel = 'true'
        this.el = el
        this.scrollWidth = el.scrollWidth
        this.spaceBetween = spaceBetween || 0
        this.duration = duration || 8
        this.timingFn = timingFn || 'linear'

        if (useJs) {
            this.useJs = true
            this.jsAni = null
            this.runPx = 0
            this.jsAniIsStop = false
        }
    }

    appendNode() {
        let screenWidth = document.documentElement.clientWidth

        const childsW = Array.from(this.el.children).map(v => v.clientWidth)
        for (let i = 0; i < childsW.length; i++) {
            screenWidth -= childsW[i]
            this.el.append(this.el.children[i].cloneNode())
            if (screenWidth <= 0)
                break
        }
    }

    createJSAni() {
        const secondMove = this.scrollWidth / this.duration / 180
        this.jsAni = () => {
            if (this.runPx >= this.scrollWidth) this.runPx = 0
            else this.runPx += secondMove
            this.el.style.transform = `translateX(-${this.runPx}px)`
            if (!this.jsAniIsStop) window.requestAnimationFrame(this.jsAni)
        }
    }

    createCSSAni() {
        const moveLong = this.scrollWidth + this.spaceBetween / 2
        const frames = `@keyframes loopCarousel_x_${this.scrollWidth} { to { transform: translateX(${-moveLong}px); } }`
        const style = document.querySelector('style')[0] || document.createElement('style');
        style.innerHTML += frames;
        document.querySelector('style')[0] ? null : document.querySelector('head').appendChild(style);
    }

    createAnimation() {
        this.useJs ? this.createJSAni() : this.createCSSAni()
    }

    runAnimation() {
        if (this.useJs) {
            this.jsAniIsStop = false
            return this.jsAni()
        }

        let aniStr = `loopCarousel_x_${this.scrollWidth} ${this.duration}s infinite ${this.timingFn}`
        this.el.style.animation = aniStr
    }

    stopAnimation() {
        if (this.useJs) this.jsAniIsStop = true
        else this.el.style.animation = ''
    }
}

/**
 * 无限滚动列表
 * @param {HTMLDivElement} el 必须,一个块DOM
 * @param {number} spaceBetween 如果通过margin设置了子元素之间的间隔,请传入这个间隔的px值,默认0
 * @param {number} duration 每次滚动展示完成的时间,默认8s
 * @param {boolean} useJs 是否使用JS动画,默认false
 * @param {string} timingFn 动画函数,同CSS的'animation-timing-function',使用JS动画的情况下只允许默认值'linear'
 * @returns {object} 
 */
function loopCarousel(el, spaceBetween = 0, duration = 8, useJs = false, timingFn = 'linear') {
    if (el.dataset.loopCarousel) return
    const obj = new LoopCarousel(el, spaceBetween, duration, useJs, timingFn)
    obj.appendNode()
    obj.createAnimation()
    obj.runAnimation()
    return obj
}

export { LoopCarousel, loopCarousel }
export default loopCarousel
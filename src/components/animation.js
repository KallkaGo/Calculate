import { gsap } from "gsap"
import CSSRulePlugin from "gsap/CSSRulePlugin"
gsap.registerPlugin(CSSRulePlugin)

import { data } from "./data"
import { css } from "./css"

class Animation {
    btnPress(dom) {
        if (dom) {

            dom.classList.remove('mousedown')
            dom.classList.add('mousedown')
        } else {
            console.log(`can not find btn dom`)
        }
    }
    btnRelease(dom) {
        if (dom) {
            dom.classList.remove('mousedown')
        } else {
            console.log(`can not find btn dom`)
        }
    }
    /* 切换主题 */
    switchTheme({ toDark = true, switchBtnDuration = 0, backgroundDuration = 0, calculatorDuration = 0, cdelay = 0 }) {
        if (toDark) {
            this.switchbtnToDark({ duration: switchBtnDuration })
            this.switchbdToDark({ duration: backgroundDuration })
            this.switchcalculatorcolorToDark({ duration: calculatorDuration, delay: cdelay })

        } else {
            this.switchbtnToLight({ duration: switchBtnDuration })
            this.switchbdToLight({ duration: backgroundDuration })
            this.switchcalculatorcolorToLight({ duration: calculatorDuration, delay: cdelay })
        }

    }
    /* 按键切换深色 */
    switchbtnToDark({ tween = gsap.timeline(), duration = 0 }) {

        tween.to(`#moon`, {
            duration, ease: "power2", y: 40, opacity: 0,
            display: "none"
        })
        tween.to(`#sun`, {
            duration: 0, ease: "power2", y: -40, opacity: 0,
            display: "none"
        })
        tween.to(`#sun`, {
            duration, ease: "power2", y: -0, opacity: 1,
            display: "block"
        })
    }
    /* 按键切换浅色 */

    switchbtnToLight({ tween = gsap.timeline(), duration = 0 }) {

        tween.to(`#sun`, {
            duration, ease: "power2", y: 40, opacity: 0,
            display: "none"
        })
        tween.to(`#moon`, {
            duration: 0, ease: "power2", y: -40, opacity: 0,
            display: "none"
        })
        tween.to(`#moon`, {
            duration, ease: "power2", y: -0, opacity: 1,
            display: "block"
        })

    }
    /* 背景切换浅色 */
    switchbdToLight({ tween = gsap.timeline(), duration = 0 }) {
        tween.to('body', { duration, background: css.lightPrimaryColor })
    }
    /* 背景切换深色 */
    switchbdToDark({ tween = gsap.timeline(), duration = 0 }) {
        tween.to('body', { duration, background: css.darkPrimaryColor })
    }
    /* 计算器切换浅色 */
    switchcalculatorcolorToLight({ tween = gsap.timeline(), duration = 0, delay = 0 }) {
        this.switchcalculatorbtncolorToLight({ tween, duration, delay })
        this.switchcalculatorbgcolorToLight({ tween, duration })
    }
    /* 计算器切换深色 */
    switchcalculatorcolorToDark({ tween = gsap.timeline(), duration = 0, delay = 0 }) {
        this.switchcalculatorbtncolorToDark({ tween, duration, delay })
        this.switchcalculatorbgcolorToDark({ tween, duration })
    }
    /* 计算器背景转浅色 */
    switchcalculatorbgcolorToLight({ tween = gsap.timeline(), duration = 0 }) {
        tween.to('.calculator', { duration, boxShadow: css.lightCalculatorBgShadow })
    }
    /* 计算器背景转深色 */
    switchcalculatorbgcolorToDark({ tween = gsap.timeline(), duration = 0 }) {
        tween.to('.calculator', { duration, boxShadow: css.darkCalculatorBgShadow })
    }
    /* 计算器按钮转浅色 */
    switchcalculatorbtncolorToLight({ tween = gsap.timeline(), duration = 0, delay = 0 }) {
        [...data.orderList].reverse().forEach((btninfo, index) => {
            /* 底座 */
            this.switchcalculatorgroundToLight({ btninfo, duration, delay: index * delay })
            /* 上层 */
            this.switchcalculatorBeforeToLight({ btninfo, duration, delay: index * delay })
        });
    }
    /* 计算器按钮转深色 */
    switchcalculatorbtncolorToDark({ tween = gsap.timeline(), duration = 0, delay = 0 }) {
        [...data.orderList].reverse().forEach((btninfo, index) => {
            /* 底座 */
            this.switchcalculatorgroundToDark({ btninfo, duration, delay: index * delay })
            /* 上层 */
            this.switchcalculatorBeforeToDark({ btninfo, duration, delay: index * delay })
        });
    }
    /* 计算器底座转浅色 */
    switchcalculatorgroundToLight({ btninfo, tween = gsap.timeline(), duration = 0, delay = 0 }) {

        const id = `#${btninfo.id}`
        let background = css.lightSpanBackgroundLinear
        switch (btninfo.id) {
            case "clear":
                background = css.clearColor
                break;
            case "delete":
                background = css.deleteDeepColor
                break;
            case "equal":
                background = css.equalColor
        }

        tween.to(id, { duration, delay, background })

    }
    /* 计算器底座转深色 */
    switchcalculatorgroundToDark({ btninfo, tween = gsap.timeline(), duration = 0, delay = 0 }) {

        const id = `#${btninfo.id}`
        let background = css.darkSpanBackgroundLinear
        switch (btninfo.id) {
            case "clear":
                background = css.clearDeepColor
                break;
            case "delete":
                background = css.deleteDeepColor
                break;
            case "equal":
                background = css.equalDeepColor
        }

        tween.to(id, { duration, delay, background })

    }
    /* 计算器上层转浅色 */
    switchcalculatorBeforeToLight({ btninfo, tween = gsap.timeline(), duration = 0, delay = 0 }) {
      
            const id = CSSRulePlugin.getRule(`#${ btninfo.id }::before`)
            tween.to(id, {
                duration,delay,
                color: css.lightTextColor,
                textShadow: css.lightTextShadow,
                background: css.lightSpanBeforeBackgroundLinear,
                boxShadow: css.lightSpanBeforeBoxShadow,
                borderTop: css.lightSpanBeforeBorder,
                borderBottom: css.lightSpanBeforeBorder,
                borderLeft: css.lightSpanBeforeBorder
            })
            

        
    }
    /* 计算器上层转深色 */
    switchcalculatorBeforeToDark({ btninfo, tween = gsap.timeline(), duration = 0, delay = 0 }) {
        const id = CSSRulePlugin.getRule(`#${ btninfo.id }::before`)
            tween.to(id, {
                duration,delay,
                color: css.darkTextColor,
                textShadow: css.darkTextShadow,
                background: css.darkSpanBeforeBackgroundLinear,
                boxShadow: css.darkSpanBeforeBoxShadow,
                borderTop: css.darkSpanBeforeBorder,
                borderBottom: css.darkSpanBeforeBorder,
                borderLeft: css.darkSpanBeforeBorder
            })
    }

}

const animation = new Animation()
export { animation }
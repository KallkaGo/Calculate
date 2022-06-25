import './style.css'

import { data } from './src/components/data'
import { dom } from './src/components/dom'
import { animation } from './src/components/animation'

console.log(data)
console.log(dom)
/* 为按钮赋值 */
data.info.forEach(element => {
    if (dom.haveByID(element.id)) {
        document.styleSheets[0].insertRule(`#${element.id}::before{
            content:"${element.tag}"
        }`)
    }
});
/* 添加动画效果-鼠标 */
dom.button.forEach((btn) => {

    btn.addEventListener('mousedown', () => {
        animation.btnPress(btn)
    })
    btn.addEventListener('mouseup', () => {
        animation.btnRelease(btn)
    })
    btn.addEventListener('mouseout', () => {
        animation.btnRelease(btn)
    })
})
/* 添加动画效果-键盘 */
data.info.forEach((info) => {
    window.addEventListener('keydown', (event) => {
        info.key.forEach((key) => {
            if (event.key == key && dom.getByID(info.id)) {
                animation.btnPress(dom.getByID(info.id))
            }
        })
    })
    window.addEventListener('keyup', (event) => {
        info.key.forEach((key) => {
            if (event.key == key && dom.getByID(info.id)) {
                animation.btnRelease(dom.getByID(info.id))
            }
        })
    })

})

/* 切换主题的动画效果 */
animation.switchTheme({ toDark: true });
dom.toggle.sun.addEventListener('click', () => {
    animation.switchTheme({ toDark: false, switchBtnDuration: 1, backgroundDuration: 1.5, calculatorDuration: 0.5, cdelay: 0.05 })
})

dom.toggle.moon.addEventListener('click', () => {
    animation.switchTheme({ toDark: true, switchBtnDuration: 1, backgroundDuration: 1.5, calculatorDuration: 0.5, cdelay: 0.05 })
})
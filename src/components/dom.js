import { data } from "./data"

class Dom {
    text = {
        show: null,
        input: null
    }
    toggle = {
        sun: null,
        moon: null
    }
    number = []
    order = []
    button = []
    constructor(params) {
        this._getTextAreaDom()
        this._getToggleDom()
        this._getNumberDom()
        this._getOrderDom()
        this._getCalculationDom()
    }
    _getTextAreaDom() {
        this.text.show = this.getByID('show')
        this.text.input = this.getByID('input')
    }
    _getToggleDom() {
        this.toggle.sun = this.getByID('sun')
        this.toggle.moon = this.getByID('moon')
    }
    _getNumberDom() {
       
        const numberList = data.number.sort((a, b) => {
            return a.number - b.number
        })
        numberList.forEach(num => {
            this.number.push(this.getByID(num.id))
        });
    }
    _getOrderDom() {
        const orderList = data.orderList.sort((a, b) => {
            return a.order - b.order
        })
        orderList.forEach(num => {
            this.order.push(this.getByID(num.id))
        });
    }
    _getCalculationDom() {
        this.button = this.getAll('.calculator span')
    }
    getByID(id) {
        return document.getElementById(id)
    }
    getAll(info) {
        return document.querySelectorAll(info)
    }
    get(info){
        return document.querySelector(info)
    }
    have(info){
        return !!this.get(info)
    }
    haveByID(id){
        return !!this.getByID(id) 
    }
}
const dom = new Dom();
export { dom }
import{Info} from "../data/db.json"

class Data{
    constructor(info){
        this.info = info
        this.init()
    }
    init(){
        
        this._getOperator()
        this._getPureOperator()
        this._getInvisible()
        this._getNumber()
        this._getOrder()
    }

    _getOperator(){
        this.operator =this._getProperty("property")
        
        this.operatorID = []
        this.operator.forEach((info)=>{
         return info.tag ? this.operatorID.push(info.id):null
        })
    }
    _getPureOperator(){
        this.pureOperator =this._getProperty("pureOperator")
        this.pureOperatorTag = []
        this.pureOperator.forEach((info)=>{
            info.tag ? this.pureOperatorTag.push(info.tag):null
        })
    }
    _getInvisible(){
        this.invisible =this._getProperty("invisible")
       
    }
    _getNumber(){
        this.number =this._getProperty("number")
    }
    _getOrder(){
        this.orderList = this.info.filter((info)=>(info.order)).sort((a,b)=>(a.order-b.order))
    }
    _getProperty(p){
     return this.info.filter((info)=>{
        
       return info.property.includes(p)

      })
    }
}

const data = new Data(Info)
export {data}
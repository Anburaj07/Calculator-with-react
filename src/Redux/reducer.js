import { IncBy1Action } from "./action"
import { ADD, DECREBY1, DIV, INCREBY1, MUL, SUB } from "./actionTypes"

export const reducer=(state,{type,payload})=>{
    switch(type){
        case INCREBY1:{
            return{...state,count:state.count+payload}
        }case DECREBY1:{
            return{...state,count:state.count-payload}
        }

        case ADD:{
            return{...state,count:state.count+payload}
        }
        case SUB:{
            return{...state,count:state.count-payload}
        }
        case MUL:{
            return{...state,count:state.count*payload}
        }
        case DIV:{
            return{...state,count:state.count/payload}
        }
        default:
            return state
    }
}
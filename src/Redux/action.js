import { ADD, DECREBY1, DIV, INCREBY1, MUL, SUB } from "./actionTypes"

export const IncBy1Action=()=>{
    return {type:INCREBY1,payload:1}
}
export const DecBy1Action=()=>{
    return {type:DECREBY1,payload:1}
}

export const AddAction=(val)=>{
    return {type:ADD,payload:val}
}
export const SubAction=(val)=>{
    return {type:SUB,payload:val}
}
export const MultiplyAction=(val)=>{
    return {type:MUL,payload:val}
}
export const DivideAction=(val)=>{
    return {type:DIV,payload:val}
}
import { DECREMENT, INCREMENT } from "./Actionstypes"


export const plus =()=>{
    return{
        type:INCREMENT
    }
}

export const moin =()=>{
    return{
        type:DECREMENT
    }
}
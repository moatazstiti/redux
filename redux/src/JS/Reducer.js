import { DECREMENT,INCREMENT } from "./Actionstypes";

const intialstate = {
    counter : 0
}
const counterReducer = (state=intialstate , action ) => {
    console.log(state)
    switch (action.type)
    {
        case INCREMENT :
            return {...state, counter:state.counter+1}
        case DECREMENT :
            return {...state , counter:state.counter > 0 ? state.counter -1 : 0}
        default :
              return state ;
    }
}
export default counterReducer










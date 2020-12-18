import *as actionType from "constants/action-types"
import { initial } from "lodash";
const initialstate={
  data:[]
}

export const HomeProductReducer=(state=initialstate,action)=>{
    switch(action.type){
        
        case actionType.PRODUCT_GET:
          return {
            ...state,
            data:action.data   
          }
        default:
          return {...state};
        
     }
    
}

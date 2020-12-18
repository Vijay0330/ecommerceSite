import *as actionType from "constants/action-types"


export const loginReducer=(state={},action)=>{
    switch(action.type){
        
        case actionType.LOGIN_RESPONSE_ERROR:
            return {
              ...state,
            data:action.data            
        }
        case actionType.REMOVE_LOGIN_RESPONSE:
          return action.data
        
        case actionType.LOGIN_RESPONSE:
          return {
            ...state,
            data:action.data   
          }
        default:
          return {...state};
        
     }
    
}

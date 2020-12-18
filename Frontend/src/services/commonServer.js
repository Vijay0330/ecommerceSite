import axios from 'axios';
import *as actionType from 'constants/action-types';
export const Server = (methodType,endpoint, payload,action ) => {
    return async dispatch =>{
        dispatch({
            type : actionType.PRODUCT_GET_STARTED,
        }) 
        await axios({
            method: methodType,
            url: endpoint,
            data: {
              ...payload
            }
          })
        .then(res=> {         
            let data =res.data;                                        
            dispatch({
                type : action,
                data:data
            })
        }).catch(err=> {
            dispatch({
                type : actionType.PRODUCT_FETCH_FAILED,
                data:err
            })
        })
             
    }
}
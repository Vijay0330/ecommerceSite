import axios from 'axios';
import *as Action from "../redux/actions/loginActions"

export const loginHandler = (methodType,endpoint, payload ) => {
    return async dispatch =>{
        await axios({
            method: methodType,
            url: endpoint,
            data: {
              ...payload
            }
        })
        .then(res=> {         
            let data =res.data;                                        
            dispatch(Action.loginSucess(data));
        })
        .catch(err => {
            let data =err.response.data;   
            dispatch(Action.loginError(data));
        })          
    }
}

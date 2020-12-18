import axios from 'axios';
import *as Action from "../redux/actions/loginActions"

export const passwordResetHandler = (endpoint, payload,token ) => {
    return async dispatch =>{
        await axios.post(endpoint,payload,{
            headers: {
                'Authorization': `Bearer ${token}`
            },
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

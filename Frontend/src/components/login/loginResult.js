import React from "react";
import *as JSX from "components/commons/loader"
import {useSelector} from 'react-redux';
import {Link} from "react-router-dom";
import PasswordReset from "./passwordReset"

const LoginResult =(props)=>{
    let apiResult =useSelector(state=>state.loginResult);
    apiResult =apiResult.data;
    const ServerResponse =[];
    console.log(apiResult)
    
    if(apiResult){
        let status = apiResult.status;
        let message = apiResult.message;
        if(status){
           if(message ==="User created successfullly"){
               //signup sucessfull
               ServerResponse.push(
                   <div className="aln_center" >
                       <ul>follow the steps to complete login
                        <li>1) confirm the verification link sent to your email address</li>
                        <li>2) click <Link to={"/login"}>here</Link> to signin with your email and password</li>
                       </ul>
                   </div>
               )
           }
           else if(message ==="User signin successfull"){
                //user login sucessfull
                let token =apiResult.token;
                localStorage.setItem("userToken",token);
                props.history.push("/home"); 
           }
           else if(message ==="Kindly check your email for further instructions"){
            ServerResponse.push(
            <div className="center_aln" >
            <ul>Kindly check your email for reset token                             
                <PasswordReset />   
            </ul>
        </div>)
          }
          else if(message ==="Password reset is successful."){
            ServerResponse.push(
                <div className="aln_center" >
                <ul>{message}
                 <li>2) click <Link to={"/login"}>here</Link> to signin with your New password</li>
                </ul>
            </div>
            )
          }
           else{
                ServerResponse.push(
                    <div className="aln_center" >
                       <ul>{message}
                        <li>2) click <Link to={"/login"}>here</Link> to try again </li>
                       </ul>
                   </div>
                )
           }
        }
        else{
            if(message === "Invalid user credentials."){
                //user credentials not exist in db
                ServerResponse.push(
                    <div className="aln_center" >
                       <ul>{message}
                        <li>2) click <Link to={"/login"}>here</Link> to try again</li>
                       </ul>
                   </div>
                )
            }
            else{
                ServerResponse.push(
                    <div className="aln_center" >
                       <ul>{message}
                        <li>2) click <Link to={"/login"}>here</Link> to Try again </li>
                       </ul>
                   </div>
                )
            }
        }        
    }
    else{
        ServerResponse.push(JSX.Loader);
    }
    
    return(
        <div className="loginResult">
           {ServerResponse}
        </div>
    )
}
export default LoginResult;
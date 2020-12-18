/**react dependencies */
import React, { useEffect,useState } from "react";
import {AuthorizedRoutes,UnAuthorizedRoutes} from "./routes"
import {useLocation } from "react-router-dom"

const App = ()=> {
  const [logIn, setLogStatus] = useState();
  const location = useLocation().pathname;
  const token = localStorage.getItem("userToken");

  useEffect(() => {
      if(token){
        setLogStatus(true);
      }
      else{
        setLogStatus(false);
      }
  },[location]);

    return (
      <React.Fragment>
        { logIn == true ?
          <AuthorizedRoutes />
          :
          <UnAuthorizedRoutes />
        }
      </React.Fragment>
    );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";

/**components */
import MainFrame from "./components/MainFrame/MainFrame";

import { Router} from "react-router-dom";
import history from './components/history'
import { ToastContainer } from "react-toastify";
/**stype imports */
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import "./styles/common.scss";
import 'three-dots/dist/three-dots.min.css'
import 'react-toastify/dist/ReactToastify.css';

// import * as serviceWorker  from "./serviceWorker";

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router history={history} >
      <MainFrame />
      <ToastContainer />
    </Router>
  </Provider>,
  document.getElementById("root")
);
// serviceWorker();

import React from 'react'
import Sidebar from "./components/menu/Sidebar";
import Topbar from "./components/menu/Topbar";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
const LayoutAuth = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={matchProps => (
            <div>
                <Topbar />
                <div className="container">
                    <Sidebar />
                    <Component {...matchProps} />
                </div>
            </div>
        )}
      />
    );
  };

export default LayoutAuth
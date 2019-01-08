import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import pspec from "./Prodspec";
import Product from "./Product";
import App from "./App";


class router extends Component {
    render (){
        return (
            <BrowserRouter>
                    <Switch>
                <Route path="/product/:id" component={pspec} />
                    <Route path="/" component={App}  />
                    </Switch>
            </BrowserRouter>
        )
    }
}

export default router;
import React from 'react';
import LoginPage from "./components/LoginPage/LoginPage";
import {Redirect, Route, Switch, Router} from "react-router-dom";
import {history} from './utils/url'
import RegistrationPage from "./components/RegistrationPage/RegistrationPage";
import Test from "./test";
import EthernetShops from "./components/Projects/EthernetShops";
import BasketPage from "./components/Projects/EthernetShops/BasketPage/BasketPage";


export default class App extends React.Component {
    render() {
        return <Router history={history}>
            <Switch>
                <Route path={'/login'} component={LoginPage}/>
                <Route path={'/registration'} component={RegistrationPage}/>
                <Route path={'/test'} component={Test}/>
                <Route exact path={'/ethernet-shops'} component={EthernetShops}/>
                <Route path={'/ethernet-shops/basket'} component={BasketPage}/>
                <Redirect to="/login"/>
            </Switch>
        </Router>
    }
}


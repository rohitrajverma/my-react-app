import React from "react";
import { Route, Switch } from "react-router-dom"
import ProductList from "./containers/ProductList";
import Demo from "./Demo/Demo";
import ErrorPage from "./components/ErrorPage";
import Checkout from "./containers/Checkout";
import Login from "./containers/Login";
import PrivateRoute from "./components/PrivateRoute";

function AppRouter(props) {
    return (
        <Switch>
            <Route path="/" component={Demo} exact={true} />
            <Route path="/products" component={ProductList} />
            <PrivateRoute path="/form/:id" component={Checkout} />
            <Route path="/login" component={Login} />
            <Route component={ErrorPage} />
        </Switch>
    )
}
export default AppRouter
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import TopBar from "./TopBar";
import Home from '../components/Home';
import Places from "./Places";
import Menu from "./Menu";
import Cart from "./Cart";
import PaymentMock from "./PaymentMock";
import OrderStatus from "./OrderStatus";

const App = () => (
    <Router>
        <TopBar/>
        <Switch>
            {/*--- dev only ---*/}
            <Route path="/payment-mock">
                <PaymentMock />
            </Route>
            {/*--- dev only end ---*/}
            <Route path="/lokale/:searchValue">
                <Places />
            </Route>
            <Route path="/menu/:placeId">
                <Menu />
            </Route>
            <Route path="/cart">
                <Cart />
            </Route>
            <Route path="/order-status">
                <OrderStatus />
            </Route>

            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </Router>
);

export default App;

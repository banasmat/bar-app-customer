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

const App = () => (
    <Router>
        <TopBar/>
        <Switch>
            <Route path="/lokale/:searchValue">
                <Places />
            </Route>
            <Route path="/menu/:placeId">
                <Menu />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </Router>
);

export default App;

import React from 'react';
import './app.css';
import ShopHeader from '../shop-header';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';

const App = () => {
    return (
        <main role="main" className="container">
            <ShopHeader />
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/cart" component={CartPage} />
            </Switch>
        </main>
    )
}

export default App;
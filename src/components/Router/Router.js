import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import WalletPicker from '../WalletPicker/WalletPicker';
import App from '../../App.js';
import FourOhFour from '../FourOhFour/FourOhFour';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={WalletPicker}/>
            <Route path="/wallet/:walletId" component={App} />
            <Route component={FourOhFour} />
        </Switch>
    </BrowserRouter>
);

export default Router;
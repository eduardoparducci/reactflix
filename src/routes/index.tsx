import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home/Home';

function Routes() {
return (
<Switch>
    <Route path="/" exact>
        <Home />
    </Route>
</Switch>
);
}

export default Routes;

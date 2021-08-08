import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Favorites from '../pages/favorites/Favorites';

function Routes() {
return (
<Switch>
    <Route path="/" exact>
        <Home />
    </Route>
    <Route path="/favorites" exact>
        <Favorites />
    </Route>
    
</Switch>
);
}

export default Routes;

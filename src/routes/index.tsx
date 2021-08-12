import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import MovieDetail from '../pages/movieDetail/MovieDetail';

function Routes() {
return (
<Switch>
    <Route path="/" exact>
        <Home />
    </Route>
    <Route path="/movie/:id">
        <MovieDetail />
    </Route>    
</Switch>
);
}

export default Routes;

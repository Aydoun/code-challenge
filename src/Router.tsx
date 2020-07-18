import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Main } from 'components/Main';
import { Markets } from 'pages/markets';
import { Home } from 'pages/home';

export const Router: React.FC = () => (
  <BrowserRouter>
    <Main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/markets" component={Markets} />
      </Switch>
    </Main>
  </BrowserRouter>
);

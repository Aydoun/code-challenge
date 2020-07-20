import React from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'utils/theme';
import { GlobalStyles } from 'utils/global';
import { Main } from 'components/Main';
import { Markets } from 'pages/markets';
import { Details } from 'pages/details';
import { Home } from 'pages/home';
import { NotFound } from 'pages/notfound';
import { Filter } from 'components/Filter';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

export default () => (
  <BrowserRouter>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Filter />
      <Main />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:symbolId" component={Markets} />
        <Route exact path="/:symbolId/:symbol" component={Details} />

        <Route component={NotFound} />
      </Switch>
    </ThemeProvider>
  </BrowserRouter>
);

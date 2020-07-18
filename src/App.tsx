import React from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'utils/theme';
import { GlobalStyles } from 'utils/global';
import { Main } from 'components/Main';
import { Markets } from 'pages/markets';
import { Home } from 'pages/home';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

export default () => (
  <BrowserRouter>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/markets" component={Markets} />
        </Switch>
      </Main>
    </ThemeProvider>
  </BrowserRouter>
);

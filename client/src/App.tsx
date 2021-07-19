import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalProvider } from './context/globalContext';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import HomePage from './pages/HomePage';
import ResourcesPage from './pages/ResourcesPage';
import PathsPage from './pages/PathsPage';
import PathDetailsPage from './pages/PathDetailsPage';
import AccountPage from './pages/AccountPage';

import CustomMenu from "./components/customMenu";

function App() {
  return (
    <GlobalProvider>
      <div className="App spacing-top">
        <Container>
          <Router>
            <Grid columns="equal">
              <Grid.Column width={3}>
                <CustomMenu />
              </Grid.Column>

              <Grid.Column width={11}>
                <Switch>
                  <Route exact path="/" component={HomePage}/>
                  <Route exact path="/resources" component={ResourcesPage}/>
                  <Route exact path="/paths" component={PathsPage}/>
                  <Route path="/paths/:pathId" component={PathDetailsPage}/>
                  <Route exact path="/account" component={AccountPage}/>
                </Switch>
              </Grid.Column>
            </Grid>
          </Router> 
        </Container>
      </div>
    </GlobalProvider>
  );
}

export default App;

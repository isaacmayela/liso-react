import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/homePage';
import ProviderListPage from './pages/providerListPage';
import OwnerListPage from './pages/ownerListPage';
import CompanyDetailsPage from './pages/companyDetails';

function App() {

  return (
    <>

      <Router>
        <Switch>
          <Route exact path={"/"}>
            <HomePage/>
          </Route>

          <Route exact path={"/providerList"}>
            <ProviderListPage/>
          </Route>

          <Route exact path={"/ownerList"}>
            <OwnerListPage/>
          </Route>

          <Route exact path={"/companyDetails"}>
            <CompanyDetailsPage/>
          </Route>

        </Switch>
      </Router>

    </>
  )
}

export default App

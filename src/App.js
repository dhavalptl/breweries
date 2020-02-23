import React, { lazy, Suspense, useReducer } from 'react';
import './App.css';
import Header from './components/Header';
import {
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import {reducer} from './reducer';
import {AuthContext} from './AuthContext';
// Lazy loading for router use Suspense and lazy
const Breweries = lazy(() => import('./components/Breweries'));
const BreweryDetails = lazy(() => import('./components/BreweryDetails'));
const Admin = lazy(() => import('./components/Admin'));
const Login = lazy(() => import('./components/Login'));

function App() {
  const [isLogin, dispatch] = useReducer(reducer, false);
  return (
    <AuthContext.Provider value={{
      isLogin,
      dispatch
    }}>
      <div className="App">
        <Header />
        <div className="content">
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/breweries/:id">
                <BreweryDetails />
              </Route>
              <Route path="/breweries">
                <Breweries />
              </Route>
              <PrivateRoute path="/admin">
                <Admin />
              </PrivateRoute>
              <Route path="/" >
                <Home />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </div>
    </AuthContext.Provider>
  );
}

export default App;

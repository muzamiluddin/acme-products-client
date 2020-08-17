import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import Home from './components/home';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Store } from "./context/store";

function App() {
  return (
    // Wrap the whole application in context provider
    <Store>
      <BrowserRouter>
        <Header />
        <div className="main-container">
          <Switch>
            <Route path="/" component={Home} exact />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </Store>
  );
}

export default App;

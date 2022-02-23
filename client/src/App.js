import React, { lazy, Suspense }from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";

import "./App.css";

// Import pages
const HomePage = lazy( () => import( "./pages/homePage" ) );

// Import components
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <div className="App">
      <Suspense
          fallback={
            <div className="col text-center p-5">
              Page loading...
            </div>
          }
      >
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ HomePage }/>
          </Switch>
        </BrowserRouter>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;

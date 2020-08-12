import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import HomeGuest from "./components/HomeGuest";
import Footer from "./components/Footer";
import Terms from "./components/Terms";
import About from "./components/About";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path="/about-us" component={About} />
        <Route path="/terms" component={Terms} />
        <Route path="/" exact component={HomeGuest} />
      </Switch>

      <Footer />
    </BrowserRouter>
  );
};

export default App;

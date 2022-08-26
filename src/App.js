import React from "react";

import { About, Contact, Header, Skills, Work } from "./container";
import { Navbar, Footer } from "./components";
import "./App.scss";

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Contact />
    <Footer />
  </div>
);

export default App;

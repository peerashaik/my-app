import React from "react";
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Works from './components/Works';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/skills" component={Skills} />
      <Route path="/experience" component={Experience} />
      <Route path="/works" component={Works} />
      <Route path="/contact" component={Contact} />
    </Switch>
    <Footer />
    </>
  );
}

export default App;
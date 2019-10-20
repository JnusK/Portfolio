import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './components/common/navigation';
import Home from './components/home/home';
import Tech from './components/tech/tech';
import Contact from './components/contact/contact';
import Footer from './components/common/footer';
import Travel from './components/travel/travel';
import ScrollTop from './components/common/scroll-top';
import TravelBlog from "./components/travel/travel-blog";
import { MainApp } from './components/common/main-styled';
import Catnip from "./components/tech/catnip";

const App = () => {
  return (
    <BrowserRouter>
      <MainApp>
        <Navigation />
        <Route exact path="/" component={ Home } />
        <Route path="/tech" component={ Tech } />
        <Route path="/contact" component={ Contact } />
        <Route exact path='/travel' component={ Travel } />
        <Route path='/travel/:year/:trip' component={TravelBlog} />
        <Route exact path='/tech/catnip' component={Catnip} />
        <Footer />
        <ScrollTop />
      </MainApp>
    </BrowserRouter>
  );
};

export default App;

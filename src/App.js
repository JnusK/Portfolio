import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './components/common/Navigation';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Contacts from './components/contacts/Contacts';
import Footer from './components/common/Footer';
import Travels from './components/travels/Travels';
import ScrollTop from './components/common/ScrollTop';
import { MainApp } from './components/common/Main-styled';

const App = () => {
  return (
    <BrowserRouter>
      <MainApp>
        <Navigation />
        <Route exact path="/" component={ Home }/>
        {/*OR use the one below to pass props into the component*/}
        {/* <Route exact path="/" render={() => <Home lpTitle="Janus Kiong" />}/> */}
        <Route path="/projects" component={ Projects }/>
        <Route path="/contacts" component={ Contacts }/>
        <Route path='/travels' component={ Travels } />
        <Footer />
        <ScrollTop />
      </MainApp>
    </BrowserRouter>
  );
}

export default App;

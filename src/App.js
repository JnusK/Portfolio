import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './components/common/navigation';
import Home from './components/home/home';
import Projects from './components/projects/projects';
import Contacts from './components/contacts/contacts';
import Footer from './components/common/footer';
import Travels from './components/travels/travels';
import ScrollTop from './components/common/scroll-top';
import { MainApp } from './components/common/main-styled';

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

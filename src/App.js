//Import pages
import GlobalStyle from './components/GlobalStyle';
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork'
import ContactUs from './pages/ContactUs'
import Nav from './components/Nav'; 
import MovieDetail from './pages/MovieDetail';


//Router
import { Switch, Route, useLocation} from 'react-router-dom';

//Animation
import {AnimatePresence, animatePresence} from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <div>
      <GlobalStyle/>
      <Nav/>
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
      <Route path="/" exact>
         <AboutUs/>
      </Route>
      <Route path="/work" exact>
         <OurWork/>
      </Route>
      <Route path='/work/:id'>
        <MovieDetail/>
      </Route>
      <Route path="/contact">
         <ContactUs/>
      </Route>
      </Switch>
      </AnimatePresence>
    </div>
    
  );
}

export default App;
//Import pages
import GlobalStyle from './components/GlobalStyle';
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork'
import ContactUs from './pages/ContactUs'
import Nav from './components/Nav'; 
import MovieDetail from './pages/MovieDetail';


//Router
import { Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Nav/>
      <Switch>
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
    </div>
    
  );
}

export default App;
//Import pages
import GlobalStyle from './components/GlobalStyle';
import AboutUs from './pages/AboutUs';
import Nav from './components/Nav'; 

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Nav/>
      <AboutUs/>
    </div>
    
  );
}

export default App;
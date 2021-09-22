import Home from './pages/Home';
import { HashRouter as Router,Switch,Route} from 'react-router-dom';
import AboutUs from './pages/AboutUs/AboutUs';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
function App() {
  return (
   <>
  <Router>
    <Switch>
      <Route exact path="/">
      <Home />
      </Route>
      <Route path="/Aboutus">
       <AboutUs />
      </Route>
      <Route path="/Login">
        <LoginPage />
      </Route>
      <Route path="/signup">
        <SignUpPage />
      </Route>
    </Switch>
  </Router>
 
   </>
  );
}

export default App;

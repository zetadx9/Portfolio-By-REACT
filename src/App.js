import {Switch, Route} from 'react-router-dom'
import './App.css';
import Nav from './components/Nav/Nav';
import Skills from './components/Skills/Skills';
import Accomplishments from './components/Accomplishments/Accomplishments';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Project from './container/ProjectContainer/Project'
import Home from './container/HomeContainer/Home'
import Resume from './container/ResumeContainer/Resume'

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/project' component={Project} />
        <Route exact path='/resume' component={Resume} />
      </Switch>
      <Skills />
      <Accomplishments />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

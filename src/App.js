import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Structure from './structure';
import PhotoDisplay from './photo-portion';
import Bio from './bio';
import Project from './projects';
import Petunia from './petunia';
import Corco from './corco';
import Wuter from './wuter';
import Yapon from './yapon';

function App() {
  return (
    <Router>
      <Structure>

        <Route path='/' exact component={PhotoDisplay} />
        <Route path='/projects' component={Project} />
        <Route path='/bio' component={Bio} />
        <Route path='/petunia' component={Petunia} />
        <Route path='/corco' component={Corco} />
        <Route path='/wuter' component={Wuter} />
        <Route path='/yapon' component={Yapon} />


      </Structure>
    </Router>
  );
}

export default App;

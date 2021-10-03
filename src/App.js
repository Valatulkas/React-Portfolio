import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Structure from './structure';
import PhotoDisplay from './photo-portion';
import Bio from './bio';
import Project from './projects';
import Petunia from './petunia';
import Corco from './corco';

function App() {
  return (
    <Router>
      <Structure>

        <Route path='/' exact component={PhotoDisplay} />
        <Route path='/projects' component={Project} />
        <Route path='/bio' component={Bio} />
        <Route path='/petunia' component={Petunia} />
        <Route path='/corco' component={Corco} />

      </Structure>
    </Router>
  );
}

export default App;

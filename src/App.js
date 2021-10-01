import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Structure from './structure';
import PhotoDisplay from './photo-portion';
import Bio from './bio';
import Petunia from './petunia';
import Project from './projects';

function App() {
  return (
    <Router>
      <Structure>
        <Project />
        <PhotoDisplay />
        <Petunia />
          
        <Bio />
      </Structure>
    </Router>
  );
}

export default App;

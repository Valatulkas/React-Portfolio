import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Structure from './structure';
import PhotoDisplay from './photo-portion';
import Bio from './bio';
import Project from './projects';

function App() {
  return (
    <Router>
      <Structure>
        <Project />
        <PhotoDisplay />
          
        <Bio />
      </Structure>
    </Router>
  );
}

export default App;

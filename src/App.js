import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Structure from './structure';
import PhotoDisplay from './photo-portion';
import Bio from './bio';

function App() {
  return (
    <Router>
      <Structure>
        <PhotoDisplay />
          
        <Bio />
      </Structure>
    </Router>
  );
}

export default App;

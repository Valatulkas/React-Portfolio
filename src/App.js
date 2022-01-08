import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Structure from './structure';
import IntroDisplay from './photo-portion';
import Petunia from './hobby/petunia';
import Corco from './hobby/corco';
import Wuter from './hobby/wuter';
import Yapon from './hobby/yapon';
import Sugoi from './hobby/sugoi';
import Snake from './sneaky/snake';
import Htmlprojects from './academia/htmlprojects';
import Jsprojects from './academia/jsprojects';
import Railsprojects from './academia/railsprojects';

function App() {
  return (
    <Router>
      <Structure>

        <Route path='/' exact component={IntroDisplay} />
        <Route path='/htmlprojects' component={Htmlprojects} />
        <Route path='/jsprojects' component={Jsprojects} />
        <Route path='/railsprojects' component={Railsprojects} />
        <Route path='/petunia' component={Petunia} />
        <Route path='/corco' component={Corco} />
        <Route path='/wuter' component={Wuter} />
        <Route path='/yapon' component={Yapon} />
        <Route path='/sugoi' component={Sugoi} />
        <Route path='/snake' component={Snake} />

      </Structure>
    </Router>
  );
}

export default App;

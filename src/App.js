import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Structure from './structure';
import IntroDisplay from './photo-portion';
import Petunia from './petunia';
import Corco from './corco';
import Wuter from './wuter';
import Yapon from './yapon';
import Sugoi from './sugoi';
import Htmlprojects from './htmlprojects';
import Jsprojects from './jsprojects';
import Railsprojects from './railsprojects';

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

      </Structure>
    </Router>
  );
}

export default App;

import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './Pages/Home';
import Fundraiser from './Pages/Fundraiser';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/fund" element={<Fundraiser/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;

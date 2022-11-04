import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Signup from './Components/signup/signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="/create" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

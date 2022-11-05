import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Signup from "./Components/signup/signup";
import VerifyPhone from "./Components/verify-phonenumber/verifyPhone";
import Signin from "./Components/Signin/Signin";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/create" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/verify-phone" element={<VerifyPhone />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import { useState } from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import "./App.css";
import { darkTheme, lightTheme } from "./Utils/Theme";

import Signup from "./Components/signup/signup";
import VerifyPhone from "./Components/verify-phonenumber/verifyPhone";
import Signin from "./Components/Signin/Signin";
import Profile from "./Components/CreateProfile/Profile.jsx";

const Wrapper = styled.div`
  display: flex;
  background: ${({ theme }) => theme.bg};
  height: auto;
`;

function App() {
    const [darkMode, setDarkMode] = useState(true);

  return (
  <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <div className="App">

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/create" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/verify-phone" element={<VerifyPhone />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
    </ThemeProvider>
  );
}

export default App;

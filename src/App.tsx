import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import PageNavigator from "./components/PageNavigator/PageNavigator";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Offers from "./components/Offers/Offers";
import Contact from "./components/Contact/Contact";

import "./styles/index.css";

const App = () => {
  return (
    <Router>
      <Nav />
      <PageNavigator />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  );
};

export default App;

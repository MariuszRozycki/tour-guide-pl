import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import PageNavigator from "./components/PageNavigator/PageNavigator";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Offers from "./components/Offers/Offers";
import Contact from "./components/Contact/Contact";

import "./styles/index.css";
import AbroadTrip from "./components/Offers/AbroadTrip";
import DomesticTrip from "./components/Offers/DomecticTrip";
import BussTrip from "./components/Offers/BussTrip";
import PlaneTrip from "./components/Offers/PlaneTrip";
import OneDayTrip from "./components/Offers/OneDayTrip";
import TwoDayTrip from "./components/Offers/TwoDaysTrip";
import ThreeDaysTrip from "./components/Offers/ThreeDaysTrip";
import FiveDaysTrip from "./components/Offers/FiveDaysTrip";

const App = () => {
  return (
    <Router>
      <Nav />
      <PageNavigator />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/offers/abroad" element={<AbroadTrip />} />
        <Route path="/offers/domestic" element={<DomesticTrip />} />
        <Route path="/offers/buss" element={<BussTrip />} />
        <Route path="/offers/plane" element={<PlaneTrip />} />
        <Route path="/offers/one-day" element={<OneDayTrip />} />
        <Route path="/offers/two-days" element={<TwoDayTrip />} />
        <Route path="/offers/three-days" element={<ThreeDaysTrip />} />
        <Route path="/offers/five-days" element={<FiveDaysTrip />} />
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  );
};

export default App;

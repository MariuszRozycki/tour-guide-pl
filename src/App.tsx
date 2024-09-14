import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav/Nav";
import PageNavigator from "./components/PageNavigator/PageNavigator";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Offers from "./components/Offers/Offers";
import Contact from "./components/Contact/Contact";
import AbroadTrip from "./components/Offers/AbroadTrip";
import DomesticTrip from "./components/Offers/DomesticTrip";
import BussTrip from "./components/Offers/BussTrip";
import PlaneTrip from "./components/Offers/PlaneTrip";
import OneDayTrip from "./components/Offers/OneDayTrip";
import CrossBorder from "./components/Offers/CrossBorder";
import ThreeDaysTrip from "./components/Offers/ThreeDaysTrip";
import FourDaysTrip from "./components/Offers/FourDaysTrip";
import FiveDaysTrip from "./components/Offers/FiveDaysTrip";
import KayakTrip from "./components/Offers/KayakTrip";
import Footer from "./components/Footer/Footer";

import "./styles/index.css";
import BtnScrollToTop from "./utils/BtnScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Nav />
      <PageNavigator />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/offers/abroad" element={<AbroadTrip />} />
        <Route path="/offers/domestic" element={<DomesticTrip />} />
        <Route path="/offers/buss-trip" element={<BussTrip />} />
        <Route path="/offers/plane" element={<PlaneTrip />} />
        <Route path="/offers/kayak" element={<KayakTrip />} />
        <Route path="/offers/one-day" element={<OneDayTrip />} />
        <Route path="/offers/cross-border" element={<CrossBorder />} />
        <Route path="/offers/three-days" element={<ThreeDaysTrip />} />
        <Route path="/offers/four-days" element={<FourDaysTrip />} />
        <Route path="/offers/five-days" element={<FiveDaysTrip />} />
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
      <BtnScrollToTop />
    </Router>
  );
};

export default App;

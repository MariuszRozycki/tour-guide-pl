import { useNavigate, useLocation } from "react-router-dom";

const PageNavigator = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    navigate(-1);
  };

  const goHome = () => {
    navigate("/");
  };

  const goAbout = () => {
    navigate("/about");
  };

  const goOffers = () => {
    navigate("/offers");
  };

  const goContact = () => {
    navigate("/contact");
  };

  const goOffersAbroad = () => {
    navigate("/offers/abroad");
  };

  const goOffersDomestic = () => {
    navigate("/offers/domestic");
  };

  const goOffersOneDay = () => {
    navigate("/offers/one-day");
  };

  const goOffersTwoDays = () => {
    navigate("/offers/two-days");
  };

  const goOffersThreeDays = () => {
    navigate("/offers/three-days");
  };

  const goOffersFiveDays = () => {
    navigate("/offers/five-days");
  };

  const goOffersKayak = () => {
    navigate("/offers/kayak");
  };

  const goOffersBuss = () => {
    navigate("/offers/buss-trip");
  };

  const goOffersPlane = () => {
    navigate("/offers/plane");
  };

  const isHome = location.pathname === "/";
  const isAbout = location.pathname === "/about";
  const isOffers = location.pathname === "/offers";
  const isContact = location.pathname === "/contact";
  const isOffersAbroad = location.pathname === "/offers/abroad";
  const isOffersDomestic = location.pathname === "/offers/domestic";
  const isOffersOneDay = location.pathname === "/offers/one-day";
  const isOffersTwoDays = location.pathname === "/offers/two-days";
  const isOffersThreeDays = location.pathname === "/offers/three-days";
  const isOffersFiveDays = location.pathname === "/offers/five-days";
  const isOffersKayak = location.pathname === "/offers/kayak";
  const isOffersBuss = location.pathname === "/offers/buss-trip";
  const isOffersPlane = location.pathname === "/offers/plane";

  let goBackBtn;

  if (!isHome) {
    goBackBtn = (
      <li className="arrow-wrapper">
        <button className="PageNavigator-buttons" onClick={goBack}>
          <img className="bo-back-arrow" src="/icons/go-back-arrow.svg" alt="Go back arrow" />
          <p>Poprzednia</p>
        </button>
      </li>
    );
  }

  let buttonToShow;

  if (isHome) {
    buttonToShow = (
      <li>
        <button className="PageNavigator-buttons go-about-btn active" onClick={goHome}>
          Home
        </button>
      </li>
    );
  } else if (isAbout) {
    buttonToShow = (
      <li>
        <button className="PageNavigator-buttons go-home-btn active" onClick={goAbout}>
          O mnie
        </button>
      </li>
    );
  } else if (isOffers) {
    buttonToShow = (
      <li>
        <button className="PageNavigator-buttons go-contact-btn active" onClick={goOffers}>
          Oferty
        </button>
      </li>
    );
  } else if (isContact) {
    buttonToShow = (
      <li>
        <button className="PageNavigator-buttons go-offers-btn active" onClick={goContact}>
          Kontakt
        </button>
      </li>
    );
  } else if (isOffersAbroad) {
    buttonToShow = (
      <li>
        <button className="PageNavigator-buttons go-contact-btn active">Zagraniczne</button>
      </li>
    );
  }

  const onSideText = (
    <li>
      <p>Jestes na: </p>
    </li>
  );

  return (
    <div>
      <div className="container">
        <ul className="PageNavigator-buttons-wrapper">
          {goBackBtn}
          {onSideText}
          {buttonToShow}
        </ul>
      </div>
    </div>
  );
};

export default PageNavigator;

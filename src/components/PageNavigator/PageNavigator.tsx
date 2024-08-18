import { useNavigate, useLocation } from "react-router-dom";

const PageNavigator = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    navigate(-1);
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
          <img className="go-back-arrow" src="/icons/go-back-arrow.svg" alt="Go back arrow" />
          <p>Poprzednia</p>
        </button>
      </li>
    );
  }

  let currentPageToShow;

  if (isHome) {
    currentPageToShow = (
      <li>
        <p className="PageNavigator-element active">Home</p>
      </li>
    );
  } else if (isAbout) {
    currentPageToShow = (
      <li>
        <p className="PageNavigator-element active">O mnie</p>
      </li>
    );
  } else if (isOffers) {
    currentPageToShow = (
      <li>
        <p className="PageNavigator-element active">Oferty</p>
      </li>
    );
  } else if (isContact) {
    currentPageToShow = (
      <li>
        <p className="PageNavigator-element active">Kontakt</p>
      </li>
    );
  } else if (isOffersAbroad) {
    currentPageToShow = (
      <li>
        <p className="PageNavigator-element active">Zagraniczne</p>
      </li>
    );
  } else if (isOffersDomestic) {
    currentPageToShow = (
      <li>
        <p className="PageNavigator-element active">Krajowe</p>
      </li>
    );
  } else if (isOffersOneDay) {
    currentPageToShow = (
      <li>
        <p className="PageNavigator-element active">Jednodniowe</p>
      </li>
    );
  } else if (isOffersTwoDays) {
    currentPageToShow = (
      <li>
        <p className="PageNavigator-element active">Dwudniowe</p>
      </li>
    );
  } else if (isOffersThreeDays) {
    currentPageToShow = (
      <li>
        <p className="PageNavigator-element active">Trzydniowe</p>
      </li>
    );
  } else if (isOffersFiveDays) {
    currentPageToShow = (
      <li>
        <p className="PageNavigator-element active">Pieciodniowe</p>
      </li>
    );
  } else if (isOffersKayak) {
    currentPageToShow = (
      <li>
        <p className="PageNavigator-element active">Spływy kajakowe</p>
      </li>
    );
  } else if (isOffersBuss) {
    currentPageToShow = (
      <li>
        <p className="PageNavigator-element active">Autokarowe</p>
      </li>
    );
  } else if (isOffersPlane) {
    currentPageToShow = (
      <li>
        <p className="PageNavigator-element active">Samolotowe</p>
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
          {currentPageToShow}
        </ul>
      </div>
    </div>
  );
};

export default PageNavigator;

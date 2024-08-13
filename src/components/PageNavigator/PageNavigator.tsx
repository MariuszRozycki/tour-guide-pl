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

  const isHome = location.pathname === "/";
  const isAbout = location.pathname === "/about";
  const isOffers = location.pathname === "/offers";
  const isContact = location.pathname === "/contact";

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
        <button className="PageNavigator-buttons go-contact-btn active" onClick={goContact}>
          Kontakt
        </button>
      </li>
    );
  } else if (isContact) {
    buttonToShow = (
      <li>
        <button className="PageNavigator-buttons go-offers-btn active" onClick={goOffers}>
          Oferty
        </button>
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

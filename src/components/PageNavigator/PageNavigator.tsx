import { useNavigate, useLocation } from "react-router-dom";

const PageNavigator = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    navigate(-1);
  };

  const goOffers = () => {
    navigate("/offers");
  };

  const pages = [
    { path: "/", label: "Strona główna" },
    { path: "/about", label: "O mnie" },
    { path: "/offers", label: "Oferty" },
    { path: "/contact", label: "Kontakt" },
    { path: "/offers/abroad", label: "Zagraniczne" },
    { path: "/offers/domestic", label: "Krajowe" },
    { path: "/offers/one-day", label: "Jednodniowe" },
    { path: "/offers/cross-border", label: "Transgraniczne" },
    { path: "/offers/three-days", label: "Trzydniowe" },
    { path: "/offers/four-days", label: "Czterodniowe" },
    { path: "/offers/five-days", label: "Pięciodniowe" },
    { path: "/offers/kayak", label: "Spływy kajakowe" },
    { path: "/offers/buss-trip", label: "Autokarowe" },
    // { path: "/offers/plane", label: "Samolotowe" },
  ];

  const currentPage = pages.find((page) => page.path === location.pathname);
  const isOffersPage = location.pathname.startsWith("/offers");

  const allOffersBtn =
    isOffersPage && location.pathname !== "/offers" ? (
      <li className="PageNavigator-element">
        <button className="PageNavigator-button" onClick={goOffers}>
          <img className="icon" src="/icons/list-interface-symbol.png" alt="List icon" />
          <p>Wszystkie oferty</p>
        </button>
      </li>
    ) : null;

  const previousPageBtn =
    !currentPage || currentPage.path !== "/" ? (
      <li className="icon-wrapper PageNavigator-element">
        <button className="PageNavigator-button" onClick={goBack}>
          <img className="icon" src="/icons/go-back-arrow.svg" alt="Icon arrow" />
          <p>Poprzednia</p>
        </button>
      </li>
    ) : null;

  const currentPageBtn = (
    <>
      <li>
        <p>Jesteś na:</p>
      </li>
      {currentPage ? (
        <li>
          <p className="PageNavigator-element-paragraph active">{currentPage.label}</p>
        </li>
      ) : null}
    </>
  );

  return (
    <div>
      <div className="container">
        <ul className="PageNavigator-buttons-wrapper">
          {currentPageBtn}
          {allOffersBtn}
          {previousPageBtn}
        </ul>
      </div>
    </div>
  );
};

export default PageNavigator;

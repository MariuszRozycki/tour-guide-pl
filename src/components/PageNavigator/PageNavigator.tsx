import { useNavigate, useLocation } from "react-router-dom";

const PageNavigator = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    navigate(-1);
  };

  const pages = [
    { path: "/", label: "Home" },
    { path: "/about", label: "O mnie" },
    { path: "/offers", label: "Oferty" },
    { path: "/contact", label: "Kontakt" },
    { path: "/offers/abroad", label: "Zagraniczne" },
    { path: "/offers/domestic", label: "Krajowe" },
    { path: "/offers/one-day", label: "Jednodniowe" },
    { path: "/offers/two-days", label: "Dwudniowe" },
    { path: "/offers/three-days", label: "Trzydniowe" },
    { path: "/offers/five-days", label: "Pięciodniowe" },
    { path: "/offers/kayak", label: "Spływy kajakowe" },
    { path: "/offers/buss-trip", label: "Autokarowe" },
    { path: "/offers/plane", label: "Samolotowe" },
  ];

  const currentPage = pages.find((page) => page.path === location.pathname);

  return (
    <div>
      <div className="container">
        <ul className="PageNavigator-buttons-wrapper">
          {!currentPage || currentPage.path !== "/" ? (
            <li className="arrow-wrapper">
              <button className="PageNavigator-buttons" onClick={goBack}>
                <img className="go-back-arrow" src="/icons/go-back-arrow.svg" alt="Go back arrow" />
                <p>Poprzednia</p>
              </button>
            </li>
          ) : null}
          <li>
            <p>Jesteś na:</p>
          </li>
          {currentPage ? (
            <li>
              <p className="PageNavigator-element active">{currentPage.label}</p>
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default PageNavigator;

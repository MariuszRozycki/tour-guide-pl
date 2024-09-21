import { NavLink } from "react-router-dom";

const OffersNav = () => {
  const categories = [
    { name: "Zagraniczne", type: "abroad", imgSrc: "/public/pictures/berlin-1897125_1280.jpg" },
    { name: "Krajowe", type: "domestic", imgSrc: "/public/pictures/trip-domestic.jpg" },
    { name: "Transgraniczne", type: "cross-border", imgSrc: "/public/pictures/trip-cross-border.jpg" },
    { name: "Wycieczki 1-dniowe", type: "one-day", imgSrc: "/public/pictures/trip-one-day.jpg" },
    { name: "Wycieczki 3-dniowe", type: "three-days", imgSrc: "/public/pictures/trip-three-days.jpg" },
    { name: "Wycieczki 4-dniowe", type: "four-days", imgSrc: "/public/pictures/trip-four-days.jpg" },
    { name: "Wycieczki 5-dniowe", type: "five-days", imgSrc: "/public/pictures/trip-five-days.jpg" },
    { name: "Spływy kajakowe", type: "kayak", imgSrc: "/public/pictures/trip-kayak.jpg" },
    { name: "Autokarowe", type: "buss-trip", imgSrc: "/public/pictures/trip-bus.jpg" },
    // { name: "Samolotowe", type: "plane" },
  ];

  return (
    <nav className="offers-navigator">
      <ul>
        {categories.map((category) => (
          <li key={category.type}>
            <NavLink to={`/offers/${category.type}`} className={({ isActive }) => (isActive ? "active" : "")}>
              <div className="img-wrapper">
                <img src={category.imgSrc} alt={`Wycieczki ${category.name}`} />
              </div>
              <p>{category.name}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default OffersNav;

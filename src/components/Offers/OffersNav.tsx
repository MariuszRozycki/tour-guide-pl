import { NavLink } from "react-router-dom";

const OffersNav = () => {
  const categories = [
    { name: "Zagraniczne", type: "abroad", imgSrc: "/pictures/berlin-1897125_1280.jpg" },
    { name: "Krajowe", type: "domestic", imgSrc: "/pictures/trip-domestic.jpg" },
    { name: "Transgraniczne", type: "cross-border", imgSrc: "/pictures/trip-cross-border.jpg" },
    { name: "1-dniowe", type: "one-day", imgSrc: "/pictures/trip-one-day.jpg" },
    { name: "3-dniowe", type: "three-days", imgSrc: "/pictures/trip-three-days.jpg" },
    { name: "4-dniowe", type: "four-days", imgSrc: "/pictures/trip-four-days.jpg" },
    { name: "5-dniowe", type: "five-days", imgSrc: "/pictures/trip-five-days.jpg" },
    { name: "Spływy kajakowe", type: "kayak", imgSrc: "/pictures/trip-kayak.jpg" },
    { name: "Autokarowe", type: "buss-trip", imgSrc: "/pictures/trip-bus.jpg" },
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

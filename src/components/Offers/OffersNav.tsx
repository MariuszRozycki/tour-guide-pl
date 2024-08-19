import { NavLink } from "react-router-dom";

const OffersNav = () => {
  const categories = [
    { name: "Zagraniczne", type: "abroad" },
    { name: "Krajowe", type: "domestic" },
    { name: "Wycieczki 1-dniowe", type: "one-day" },
    { name: "Wycieczki 2-dniowe", type: "two-days" },
    { name: "Wycieczki 3-dniowe", type: "three-days" },
    { name: "Wycieczki 5-dniowe", type: "five-days" },
    { name: "Spływy kajakowe", type: "kayak" },
    { name: "Autokarowe", type: "buss-trip" },
    { name: "Samolotowe", type: "plane" },
  ];

  return (
    <nav className="offers-navigator">
      <ul>
        {categories.map((category) => (
          <li key={category.type}>
            <NavLink to={`/offers/${category.type}`} className={({ isActive }) => (isActive ? "active" : "")}>
              <p>{category.name}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default OffersNav;

import { NavLink } from "react-router-dom";
import MainHeading from "../MainHeading/MainHeading";

const Offers = () => {
  // Lista kategorii oparta na danych
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
    <div className="container">
      <MainHeading />
      <h2>Oferty dla Ciebie</h2>

      <nav className="offers-navigator">
        {categories.map((category) => (
          <NavLink key={category.type} to={`/offers/${category.type}`} className={({ isActive }) => (isActive ? "active" : "")}>
            <p>{category.name}</p>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Offers;

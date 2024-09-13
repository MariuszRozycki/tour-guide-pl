import { NavLink } from "react-router-dom";

const HomeAboutText = () => {
  return (
    <ul className="about-text">
      <li>
        <p>
          Nazywam się Tomasz Zdunek i jestem właścicielem oraz głównym przewodnikiem w biurze podróży Tour Guide. Nasze biuro działa
          nieprzerwanie od 2008 roku, oferując naszym klientom niezapomniane wycieczki po najpiękniejszych zakątkach Polski i Europy.
          Jako pasjonat podróży, przygody i aktywnego wypoczynku, osobiście dbam o każdy szczegół organizowanych wyjazdów, aby
          zapewnić naszym klientom najwyższą jakość usług i niezapomniane wspomnienia...
          <span>
            <NavLink to="/about">
              <img className="icon" src="/icons/right-arrow.png" alt="Icon right arrow" />
              Przeczytaj wiecej w sekcji "O MNIE"
            </NavLink>
          </span>
        </p>
      </li>
      <li className="owner-signature">
        <p>Z wyrazami szacunku,</p>
        <p>Tomasz Zdunek Właściciel Tour Guide</p>
      </li>
    </ul>
  );
};

export default HomeAboutText;

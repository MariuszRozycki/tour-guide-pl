import { NavLink } from "react-router-dom";

const HomeAboutText = () => {
  return (
    <>
      <div className="about-text">
        <p>
          Nazywam się Tomasz Zdunek i jestem właścicielem oraz głównym przewodnikiem w biurze podróży Tour Guide. Nasze biuro działa
          nieprzerwanie od 2008 roku, oferując naszym klientom niezapomniane wycieczki po najpiękniejszych zakątkach Polski i Europy.
          Jako pasjonat podróży, przygody i aktywnego wypoczynku, osobiście dbam o każdy szczegół organizowanych wyjazdów, aby
          zapewnić naszym klientom najwyższą jakość usług i niezapomniane wspomnienia...
        </p>
        <p>
          <NavLink to="/about">Więcej w sekcji "O mnie"</NavLink>
        </p>
      </div>
      <div className="owner-signature">
        <p>Z wyrazami szacunku,</p>
        <p>Tomasz Zdunek</p>
      </div>
    </>
  );
};

export default HomeAboutText;

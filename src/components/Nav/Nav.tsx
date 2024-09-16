import { useNavLogic } from "../../hooks/useNavLogic";
import HamburgerMenu from "./HamburgerMenu";
import NavMainList from "./NavMainList";

const Nav = () => {
  const { hamburgerMenuRef, navMainListRef, navMainRef, barOneRef, barTwoRef, barThreeRef, toggleMenu, closeModal } = useNavLogic();

  return (
    <nav className="nav" ref={navMainRef}>
      <div className="container">
        <a href="/" className="logo-component">
          <div className="nav-logo-wrapper">
            <a href="/">
              <img src="/pictures/logo.png" alt="logo" />
            </a>
          </div>
          <ul className="logo-header">
            <li>Tour Guide</li>
            <li>Kraftowe wyjazdy</li>
          </ul>
        </a>
        <HamburgerMenu
          ref={hamburgerMenuRef}
          barOneRef={barOneRef}
          barTwoRef={barTwoRef}
          barThreeRef={barThreeRef}
          toggleMenu={toggleMenu}
        />
        <NavMainList ref={navMainListRef} closeModal={closeModal} />
      </div>
    </nav>
  );
};

export default Nav;

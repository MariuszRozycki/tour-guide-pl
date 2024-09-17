import { useNavLogic } from "../../hooks/useNavLogic";
import Logo from "../Logo/Logo";
import HamburgerMenu from "./HamburgerMenu";
import NavMainList from "./NavMainList";

const Nav = () => {
  const { hamburgerMenuRef, navMainListRef, navMainRef, barOneRef, barTwoRef, barThreeRef, toggleMenu, closeModal } = useNavLogic();

  return (
    <nav className="nav" ref={navMainRef}>
      <div className="container">
        <Logo />
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

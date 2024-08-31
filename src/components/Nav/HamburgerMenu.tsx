import React from "react";

interface HamburgerMenuProps {
  toggleMenu: () => void;
  barOneRef: React.Ref<HTMLDivElement>;
  barTwoRef: React.Ref<HTMLDivElement>;
  barThreeRef: React.Ref<HTMLDivElement>;
}

const HamburgerMenu = React.forwardRef<HTMLDivElement, HamburgerMenuProps>((props, ref) => {
  const { toggleMenu, barOneRef, barTwoRef, barThreeRef } = props;

  return (
    <div id="hamburger-menu" className="hamburger-menu" ref={ref} onClick={toggleMenu}>
      <span id="bar-one" className="bars" ref={barOneRef}></span>
      <span id="bar-two" className="bars" ref={barTwoRef}></span>
      <span id="bar-three" className="bars" ref={barThreeRef}></span>
    </div>
  );
});

export default HamburgerMenu;

import { useRef, useState, useEffect } from "react";

export const useNavLogic = () => {
  const hamburgerMenuRef = useRef<HTMLDivElement | null>(null);
  const navMainListRef = useRef<HTMLUListElement | null>(null);
  const navMainRef = useRef<HTMLDivElement | null>(null);
  const barOneRef = useRef<HTMLDivElement | null>(null);
  const barTwoRef = useRef<HTMLDivElement | null>(null);
  const barThreeRef = useRef<HTMLDivElement | null>(null);

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeModal = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navMainRef.current &&
        !navMainRef.current.contains(event.target as Node) &&
        hamburgerMenuRef.current &&
        !hamburgerMenuRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (navMainListRef.current) {
      navMainListRef.current.classList.toggle("show", isMenuOpen);
    }
    if (navMainRef.current) {
      navMainRef.current.classList.toggle("background-action", isMenuOpen);
    }
    if (barOneRef.current) {
      barOneRef.current.classList.toggle("bar-one", isMenuOpen);
    }
    if (barTwoRef.current) {
      barTwoRef.current.classList.toggle("bar-two", isMenuOpen);
    }
    if (barThreeRef.current) {
      barThreeRef.current.classList.toggle("bar-three", isMenuOpen);
    }
  }, [isMenuOpen]);

  return {
    hamburgerMenuRef,
    navMainListRef,
    navMainRef,
    barOneRef,
    barTwoRef,
    barThreeRef,
    isMenuOpen,
    toggleMenu,
    closeModal,
  };
};

import { useState, useEffect, CSSProperties } from "react";

const BtnScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      <button
        onClick={scrollToTop}
        style={{
          ...styles.button,
          opacity: isVisible ? 1 : 0,
          pointerEvents: isVisible ? "auto" : "none",
        }}
      >
        <img style={{ ...styles.img }} src="/public/icons/up.png" alt="arrow up" />
      </button>
    </div>
  );
};

const styles: { button: CSSProperties; img: CSSProperties } = {
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    bottom: "50px",
    right: "50px",
    width: "40px",
    height: "40px",
    backgroundColor: "var(--white-color)",
    border: "none",
    borderRadius: "50%",
    padding: "10px",
    cursor: "pointer",
    fontSize: "24px",
    opacity: 0,
    transform: "translateY(20px)",
    transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
  },
  img: {
    width: "100%",
    height: "100%",
    color: "var(--white-color)",
  },
};

export default BtnScrollToTop;

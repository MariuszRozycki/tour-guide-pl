const Logo = () => {
  return (
    <>
      <div className="logo-component">
        <a className="logo-img-wrapper" href="/">
          <img src="/pictures/logo.png" alt="logo" />
        </a>
        <ul className="logo-text">
          <li>Tour Guide</li>
          <li>Kraftowe wyjazdy</li>
        </ul>
      </div>
    </>
  );
};

export default Logo;
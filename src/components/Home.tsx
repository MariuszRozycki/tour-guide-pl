// src/components/Home.tsx
import React from "react";

import "./Home.css";

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="h1-home-page">
        Tour Guide <span>Kraftowe Wyjazdy</span>
      </h1>
      <h2>O mnie</h2>
      <div className="about-wrapper">
        <div className="img-wrapper">
          <img src="../../public/pictures/TomekZ.webp" alt="Tomek Z. avarat" />
        </div>
        <p className="about-text">
          Nazywam się Tomasz Zdunek i jestem właścicielem oraz głównym przewodnikiem w biurze podróży Tour Guide. Nasze biuro działa
          nieprzerwanie od 2008 roku, oferując naszym klientom niezapomniane wycieczki po najpiękniejszych zakątkach Polski i Europy.
          Jako pasjonat podróży, przygody i aktywnego wypoczynku, osobiście dbam o każdy szczegół organizowanych wyjazdów, aby
          zapewnić naszym klientom najwyższą jakość usług i niezapomniane wspomnienia. Dzięki mojemu wieloletniemu doświadczeniu i
          głębokiej znajomości regionów, które odwiedzamy, mogę zagwarantować, że każda wycieczka z Tour Guide będzie wyjątkowym
          doświadczeniem. Dlaczego warto podróżować z Tour Guide? Profesjonalizm i doświadczenie: Od lat zajmujemy się organizacją
          wycieczek, co pozwala nam oferować sprawdzone i atrakcyjne programy wyjazdów. Pasja do turystyki: Każda wycieczka to dla
          nas okazja do dzielenia się naszą pasją i wiedzą o odwiedzanych miejscach. Indywidualne podejście: Stawiamy na bezpośredni
          kontakt z klientem i dostosowanie oferty do jego potrzeb. Kompleksowa organizacja: Zajmujemy się wszystkimi aspektami
          wycieczki – od transportu, przez zakwaterowanie, aż po atrakcje turystyczne. Bezpieczeństwo: Dbamy o bezpieczeństwo naszych
          klientów, współpracując tylko z zaufanymi przewoźnikami i obiektami noclegowymi. Atrakcyjne ceny: Oferujemy konkurencyjne
          ceny, zapewniając jednocześnie wysoki standard usług. Zapraszam do odkrywania świata z Tour Guide – podróżuj z pasjonatami!
          Z wyrazami szacunku, Tomasz Zdunek Właściciel Tour Guide
        </p>
      </div>
    </div>
  );
};

export default Home;

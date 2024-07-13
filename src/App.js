import React from "react";
import "./App.css";
const sendCondolences = () => {
  window.location.href =
    "mailto:kanesanobituary@gmail.com?subject=Condolences for Mr. Ganapathipillai Ganesan&body=Dear Family,%0D%0A%0D%0AI am deeply saddened to hear about the passing of Mr. Ganapathipillai Ganesan. Please accept my heartfelt condolences during this difficult time.%0D%0A%0D%0ASincerely,%0D%0A[Your Name]";
};
const App = () => {
  return (
    <div className="container">
      <h1 className="main-heading">Obituary Notice</h1>
      <div className="obituary-card">
        <div className="image-section">
          <img src="/lamp.png" alt="Lamp" className="side-lamp" />
          <div className="image-frame">
            <img
              src="/periyappa.jpg"
              alt="Mr. Ganapathipillai Ganesan"
              className="obituary-image"
            />
          </div>
          <img src="/lamp.png" alt="Lamp" className="side-lamp" />
        </div>
        <h3 className="occasion-subtitle">
          The late Mr. Kanapathipillai Kanesan
        </h3>
        <p className="obituary-dates">
          Born in Kapar, Malaysia - Passed away on Friday, July 12, 2024
        </p>

        <p className="obituary-text">
          The late Mr. Kanapathipillai Kanesan, a retired manager (co-op
          Nelliady), was born in Kapar, Malaysia, and resided in Vatuwattai
          Alwaai(Point Petro). He passed away on Friday, July 12, 2024.
        </p>
        <p className="obituary-text">
          He is eldest son of the late Kanapathipillai Maheshwari and dear
          son-in-law of the late Mr. Visivalingam, he was the beloved husband of
          Thiriphuvaneshwari(Vevi).
        </p>
        <p className="obituary-text">
          He was a dear brother to Parvathidevi, Subramaniam, Sirbalakrishnan,
          Kumarasamy, Deivanayake, Navaneethakrishnan, and Parameshwari.
        </p>
        <p className="obituary-text">
          He was also the brother-in-law of Sivagangai, the late Chelladurai,
          Parvathavarthini, Arulmolirani, the late Sivashankaranathan, the late
          Jenaranjini, and Kugathasan.
        </p>
        <p className="obituary-text">
          Beloved by the late Sri Balaganesamurthy, the late Sivapakyam, and
          Thilakavathy, he was also the brother-in-law of Padmalokini,
          Sivaprakasam, and Singha Mappanar.
        </p>
        <p className="obituary-text">
          Annar's last cremation rites will be held on Sunday, July 14, 2024, at
          10:00 AM at his residence, with the cremation taking place at
          Karukamban (Near Peru Moodi Madam) Hindu Cemetery.
        </p>
        <p className="obituary-text">
          We kindly request all relatives and friends to accept this
          announcement.
        </p>
        <p className="obituary-text">
          For further information, please contact: Thiriphuvaneshwari (Wife)
          Tel:075043797(SL)
        </p>

        <div className="buttons">
          <a
            className="live-button"
            href="Tel:009475043797"
            target="_blank"
            rel="noopener noreferrer"
          >
            Call
          </a>

          <button className="condolences-button" onClick={sendCondolences}>
            Send Condolences
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

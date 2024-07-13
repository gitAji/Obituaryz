import React, { useEffect } from "react";
import "./App.css";

const sendCondolences = () => {
  window.location.href =
    "mailto:kanesanobituary@gmail.com?subject=Condolences for Mr. Kanapathipillai Kanesan&body=Dear Family,%0D%0A%0D%0AI am deeply saddened to hear about the passing of Mr. Kanapathipillai Kanesan. Please accept my heartfelt condolences during this difficult time.%0D%0A%0D%0ASincerely,%0D%0A[Your Name]";
};

const App = () => {
  useEffect(() => {
    const createFlower = () => {
      const flower = document.createElement("div");
      flower.classList.add("flower");
      flower.style.left = Math.random() * 100 + "vw";
      flower.style.animationDuration = Math.random() * 2 + 3 + "s";
      document.body.appendChild(flower);

      setTimeout(() => {
        flower.remove();
      }, 5000);
    };

    const interval = setInterval(createFlower, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1 className="main-heading">Obituary Notice</h1>
      <div className="obituary-card">
        <div className="image-section">
          <img src="/lamp.png" alt="Lamp" className="side-lamp" />
          <div className="image-frame">
            <img
              src="/periyappa.jpg"
              alt="Mr. Kanapathipillai Kanesan"
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
          Tel:0094773867798 Viber:009475043797
        </p>

        <div className="buttons">
          <a
            className="live-button"
            href="https://www.youtube.com/live/bGtxM9SRoew"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Stream
          </a>

          <a
            className="call-button"
            href="Tel:0094773867798"
            target="_blank"
            rel="noopener noreferrer"
          >
            Call
          </a>

          <a
            className="viber-button"
            href="viber://contact?number=+9475043797"
            target="_blank"
            rel="noopener noreferrer"
          >
            Viber Call
          </a>

          <button className="condolences-button" onClick={sendCondolences}>
            Send Condolences
          </button>
        </div>
      </div>
      <audio autoPlay loop>
        <source src="/public/om.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default App;

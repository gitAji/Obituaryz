import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import "./index.css"; // Assuming this file contains global styles

const sendCondolences = () => {
  window.location.href =
    "mailto:kanesanobituary@gmail.com?subject=Condolences for Mr. Kanapathipillai Kanesan&body=Dear Family,%0D%0A%0D%0AI am deeply saddened to hear about the passing of Mr. Kanapathipillai Kanesan. Please accept my heartfelt condolences during this difficult time.%0D%0A%0D%0ASincerely,%0D%0A[Your Name]";
};

const App = () => {
  const [language, setLanguage] = useState("en"); // Default language is English

  // Function to toggle between English and Tamil
  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ta" : "en"; // Toggle between English ("en") and Tamil ("ta")
    setLanguage(newLanguage);
  };

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
      {/* Language toggle button */}
      <div className="language-btn">
        <div
          className={`language-toggle ${
            language === "en" ? "english" : "tamil"
          }`}
          onClick={toggleLanguage}
        >
          {language === "en" ? "Switch to Tamil" : "ஆங்கிலத்தில் மாற்று"}
        </div>{" "}
      </div>

      <h1 className="main-heading">
        {language === "en" ? "Obituary Notice" : "மரண அறிவித்தல்"}
      </h1>
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
          {language === "en"
            ? "The late Mr. Kanapathipillai Kanesan"
            : "அமரர் திரு. கணபதிப்பிள்ளை கணேசன்"}
        </h3>
        <p className="obituary-dates">
          {language === "en"
            ? "Born in Kapar, Malaysia - Passed away on Friday, July 12, 2024"
            : "மலேசியா காப்பாறை (Kapar) பிறப்பிடமாகவும், வட்டுவத்தை அல்வாலையை வசிப்பிடமாகவும், கொண்ட "}
        </p>

        <p className="obituary-text">
          {language === "en"
            ? "The late Mr. Kanapathipillai Kanesan, a retired manager (co-op Nelliady), was born in Kapar, Malaysia, and resided in Vatuwattai Alwaai (Point Petro). He passed away on Friday, July 12, 2024."
            : "திரு கணபதிப்பிள்ளை கணேசன் ஓய்வு பெற்ற முகாமையாளர் (ப.நோ.கூ சங்கம் நெல்லியடி) அவர்கள் 12-07-2024 வெள்ளிக்கிழமை அன்று காலமானார்."}
        </p>

        <p className="obituary-text">
          {language === "en"
            ? "He is the eldest son of the late Kanapathipillai Maheshwari and dear son-in-law of the late Mr. Visivalingam, and the beloved husband of Thiriphuvaneshwari (Vevi)."
            : "அன்னார், காலஞ்சென்றவர்களான திரு/திருமதி கணபதிப்பிள்ளை மகேஸ்வரி, தம்பதிகளின் சிரேஷ்ட  புத்திரனும், காலம் சென்றவர்களான திரு விசிவலிங்கம் தம்பதிகளின்  பாசமிகு மருமகனும்.திரிபுவனேஸ்வரி அவர்களின்   அன்புக் கணவரும்."}
        </p>

        <p className="obituary-text">
          {language === "en"
            ? "He was a dear brother to Parvathidevi, Subramaniam, Sirbalakrishnan, Kumarasamy, Deivanayake, Navaneethakrishnan, and Parameshwari."
            : "அவர்கள் பார்வதிதேவி,  சுப்பிரமணியம், பாலகிருஷ்ணன், குமாரசாமி, தெய்வநாயகி, நவநீதகிருஷ்ணன், பரமேஸ்வரி  ஆகியோரின் அன்புச்  சகோதரரும்."}
        </p>

        <p className="obituary-text">
          {language === "en"
            ? "He was also the brother-in-law of Sivagangai, the late Chelladurai, Parvathavarthini, Arulmolirani, the late Sivashankaranathan, the late Jenaranjini, and Kugathasan."
            : "அவர்கள் சிவகங்கை, காலம் சென்ற செல்லதுரை,  பார்வதவர்த்தினி, அருள்மொழிராணி, சிவசங்கரநாதன், காலம் சென்ற ஜெனரஞ்சினி,மற்றும் குகதாசன்  ஆகியோரின்  மைத்துணரும்,"}
        </p>

        <p className="obituary-text">
          {language === "en"
            ? "Beloved by the late Sri Balaganesamurthy, the late Sivapakyam, and Thilakavathy, he was also the brother-in-law of Padmalokini, Sivaprakasam, and Singha Mappanar."
            : "அவர் காலம் சென்ற ஸ்ரீ பாலகணேசமூர்த்தி, காலம் சென்ற சிவபாக்கியம், மற்றும் திலகவதி ஆகியோரின்  பாசமிகு  அத்தானும்,  பத்மலோகினி, சிவப்பிரகாசம், சிங்க மாப்பாணர்  ஆகியோரின் மைத்துணருமாவார்."}
        </p>

        <p className="obituary-text">
          {language === "en"
            ? "Annar's last cremation rites will be held on Sunday, July 14, 2024, at 10:00 AM at his residence, with the cremation taking place at Karukamban (Near Peru Moodi Madam) Hindu Cemetery."
            : "அன்னாரின் இறுதிக்கிரியை 14-07-2024 ஞாயிற்றுக்கிழமை அன்று மு.ப 10:00 மணியளவில் அவரது இல்லத்தில் நடைபெற்று பின்னர் மடத்தடி   கருகம்பன்( பெரு மூடி மடத்துக்கு அருகாமையில்) இந்து மயானத்தில் பூதவுடல் தகனம் செய்யப்படும்."}
        </p>

        <p className="obituary-text">
          {language === "en"
            ? "We kindly request all relatives and friends to accept this announcement."
            : "இவ் அறிவித்தலை உற்றார்,உறவினர், நண்பர்கள் அனைவரும் ஏற்றுக்கொள்ளுமாறு கேட்டுக்கொள்கின்றோம்."}
        </p>
        <p className="obituary-text">
          {language === "en"
            ? "For further information, please contact: Thiriphuvaneshwari (Wife) Tel:0094773867798 Viber:009475043797"
            : "தகவல் குடும்பத்தினர் || தொடர்புகளுக்கு:திரிபுவனேஸ்வரி (மனைவி) கைபேசி:0094773867798 வைபர்:009475043797"}
        </p>
        <div className="buttons">
          <a
            className="live-button"
            href="https://www.youtube.com/live/bGtxM9SRoew"
            target="_blank"
            rel="noopener noreferrer"
          >
            {language === "en" ? "Live Stream" : "நேரடி ஒளிபரப்பு"}
          </a>

          <a
            className="call-button"
            href="Tel:0094773867798"
            target="_blank"
            rel="noopener noreferrer"
          >
            {language === "en" ? "Call" : "அழை"}
          </a>

          <a
            className="viber-button"
            href="viber://contact?number=+9475043797"
            target="_blank"
            rel="noopener noreferrer"
          >
            {language === "en" ? "Viber Call" : "வைபர் அழைப்பு"}
          </a>

          <button className="condolences-button" onClick={sendCondolences}>
            {language === "en" ? "Send Condolences" : "அனுதாபங்களை அனுப்ப"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

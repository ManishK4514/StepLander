import React, { useState, useEffect } from 'react';
import './App.css';

const images = [
  'https://i.ibb.co/frJ84st/pngegg.png',
  'https://i.ibb.co/jDR4RtM/pngwing-com.png',
  'https://i.ibb.co/frJ84st/pngegg.png',
  'https://i.ibb.co/jDR4RtM/pngwing-com.png',
];

const rotationAngles = [20, 20, 20, 20, 20];

const App = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const currentRotation = rotationAngles[currentImageIndex];

  const imageStyle = {
    transform: `rotate(${currentRotation}deg)`,
  };

  return (
    <div className="container">
      <div className="nav">
        <div className="logo logo-animation">StepLander</div>
        <div className="links">
          <div>
            <span><i className="ri-search-line"></i></span>
          </div>
          <div>
            ENG <span><i className="ri-arrow-drop-down-fill"></i></span>
          </div>
          <div>
            INR <span><i className="ri-arrow-drop-down-fill"></i></span>
          </div>
          <div>
            ACCOUNT <span><i className="ri-arrow-drop-down-fill"></i></span>
          </div>
          <div className="shopping__cart"><i className="ri-shopping-bag-line"></i></div>
        </div>
      </div>
      <div className="content">
        <div className="image">
          <img
            src={images[currentImageIndex]}
            alt="shoes"
            style={imageStyle}
          />
        </div>
        <div className="header">
          <h1 className='logo-animation'>Shoes 2023</h1>
          <p>BUY NOW</p>
        </div>
        <div className="featured__item">
          <h4>FEATURED</h4>
          <p>ITEM FOR MEN AND WOMEN</p>
        </div>
        <div className="contact">
          <span><i className="ri-phone-fill"></i></span> 9065129628
        </div>
      </div>
      <div className="footer">
        <div className="socials">
          <span>Facebook</span>
          <span>Twitter</span>
          <span>Google</span>
        </div>
        <div className="slides">02<span>/05</span></div>
      </div>
    </div>
  );
};

export default App;

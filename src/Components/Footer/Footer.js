import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(true);

  const closeFooter = () => {
    setIsVisible(false);
  };

  return (
    <footer className={`disclaimer-premium ${isVisible ? '' : 'hidden'}`}>
      <div className="text-container">
        <div className="text">
          <p className="disclaimer-premium__title">Testar o Premium de graça</p>
          <p className="disclaimer-premium__subtitle">
            Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa de cartão de
            crédito.
          </p>
        </div>
      </div>
      <div className="button">
        <button type="button">Inscreva-se grátis</button>
      </div>
      <span onClick={closeFooter}>
        <i className="fas fa-times"></i>
      </span>
    </footer>
  );
};

export default Footer;
import React, { useEffect, useState } from 'react';
import './ScrollToTopButton.css'; // Ensure the path is correct

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // Show button after scrolling down 300px
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = (event) => {
    event.preventDefault(); // Prevent default link behavior
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <a
      id="edgtf-back-to-top"
      href="#"
      className={showButton ? 'show' : ''}
      onClick={scrollToTop}
    >
      <i className="fa fa-arrow-up"></i> {/* Font Awesome icon */}
    </a>
  );
};

export default ScrollToTopButton;

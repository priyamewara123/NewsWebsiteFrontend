import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const YourReactComponent = () => {
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderSticky(window.scrollY > 90);
      setShowBackToTop(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const toggleNavbarMethod = () => {
      if (window.innerWidth > 768) {
        document.querySelectorAll('.navbar .dropdown').forEach((dropdown) => {
          dropdown.addEventListener('mouseover', () => {
            const toggle = dropdown.querySelector('.dropdown-toggle');
            if (toggle) {
              toggle.click();
            }
          });

          dropdown.addEventListener('mouseout', () => {
            const toggle = dropdown.querySelector('.dropdown-toggle');
            if (toggle) {
              toggle.click();
              toggle.blur();
            }
          });
        });
      } else {
        document.querySelectorAll('.navbar .dropdown').forEach((dropdown) => {
          dropdown.removeEventListener('mouseover', null);
          dropdown.removeEventListener('mouseout', null);
        });
      }
    };

    toggleNavbarMethod();
    window.addEventListener('resize', toggleNavbarMethod);

    return () => {
      window.removeEventListener('resize', toggleNavbarMethod);
    };
  }, []);

  useEffect(() => {
    const cnSlider = document.querySelector('.cn-slider');
    if (cnSlider) {
      new Slider(cnSlider, {
        autoplay: false,
        infinite: true,
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
    }
  }, []);

  const handleBackToTopClick = () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  return (
    <div>
      <header className={`header ${isHeaderSticky ? 'header-sticky' : ''}`}>
        {/* Your header content */}
      </header>

      {showBackToTop && (
        <div className="back-to-top" onClick={handleBackToTopClick}>
          {/* Back-to-top button content */}
        </div>
      )}

      <div className="cn-slider">
        {/* Slider content */}
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<YourReactComponent />);

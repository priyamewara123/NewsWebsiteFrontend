import React from "react";
import "../App.css";
import Category from "./Category";
import MainNews from "./MainNews";
import topNews1 from "./img/top-news-1.jpg";
import topNews2 from "./img/top-news-2.jpg";
import topNews3 from "./img/top-news-3.jpg";
import topNews4 from "./img/top-news-4.jpg";
import topNews5 from "./img/top-news-5.jpg";

// Import category images
import catNews1 from "./img/cat-news-1.jpg";
import catNews2 from "./img/cat-news-2.jpg";
import catNews3 from "./img/cat-news-3.jpg";
import catNews4 from "./img/cat-news-4.jpg";
import catNews5 from "./img/cat-news-5.jpg";
import catNews6 from "./img/cat-news-6.jpg";
import catNews7 from "./img/cat-news-7.jpg";
import catNews8 from "./img/cat-news-8.jpg";
import catNews9 from "./img/cat-news-9.jpg";
import catNews10 from "./img/cat-news-10.jpg";
import catNews11 from "./img/cat-news-11.jpg";
import catNews12 from "./img/cat-news-12.jpg";

// Define the Home component
const Home = () => {
  // Sports news array
  const sportsNews = [
    {
      image: catNews1,
      date: "05-Feb-2020",
      dateLink: "#",
      title: "Cras sed semper puru vitae lobortis velit",
      titleLink: "#",
    },
    {
      image: catNews2,
      date: "05-Feb-2020",
      dateLink: "#",
      title: "Vestibulum ante ipsum primis",
      titleLink: "#",
    },
    // Add more sports news items as needed
  ];

  // Technology news array
  const techNews = [
    {
      image: catNews4,
      date: "05-Feb-2020",
      dateLink: "#",
      title: "Vivamus vel felis nec magna",
      titleLink: "#",
    },
    {
      image: catNews5,
      date: "05-Feb-2020",
      dateLink: "#",
      title: "Phasellus vitae fermentum est",
      titleLink: "#",
    },
    // Add more technology news items as needed
  ];

  // Business news array
  const businessNews = [
    {
      image: catNews7,
      date: "05-Feb-2020",
      dateLink: "#",
      title: "Interdum et malesuada fames ac ante",
      titleLink: "#",
    },
    {
      image: catNews8,
      date: "05-Feb-2020",
      dateLink: "#",
      title: "Mauris non ligula eget ante sagittis",
      titleLink: "#",
    },
    // Add more business news items as needed
  ];

  // Entertainment news array
  const entertainmentNews = [
    {
      image: catNews10,
      date: "05-Feb-2020",
      dateLink: "#",
      title: "Ut laoreet justo non ornare",
      titleLink: "#",
    },
    {
      image: catNews11,
      date: "05-Feb-2020",
      dateLink: "#",
      title: "Proin a nulla ut enim feugiat",
      titleLink: "#",
    },

    // Add more entertainment news items as needed
  ];

  return (
    <div className="top-news">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 tn-left">
            <div className="tn-img">
              <img src={topNews1} alt="Top News 1" />
              <div className="tn-content">
                <div className="tn-content-inner">
                  <a className="tn-date" href="">
                    <i className="far fa-clock"></i>05-Feb-2020
                  </a>
                  <a className="tn-title" href="">
                    Lorem ipsum dolor sit amet adipiscing elit
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 tn-right">
            <div className="row">
              <div className="col-md-6">
                <div className="tn-img">
                  <img src={topNews2} alt="Top News 2" />
                  <div className="tn-content">
                    <div className="tn-content-inner">
                      <a className="tn-date" href="">
                        <i className="far fa-clock"></i>05-Feb-2020
                      </a>
                      <a className="tn-title" href="">
                        Integer faucibus pharetra odio
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="tn-img">
                  <img src={topNews3} alt="Top News 3" />
                  <div className="tn-content">
                    <div className="tn-content-inner">
                      <a className="tn-date" href="">
                        <i className="far fa-clock"></i>05-Feb-2020
                      </a>
                      <a className="tn-title" href="">
                        Nulla vitae pharetra ligula
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="tn-img">
                  <img src={topNews4} alt="Top News 4" />
                  <div className="tn-content">
                    <div className="tn-content-inner">
                      <a className="tn-date" href="">
                        <i className="far fa-clock"></i>05-Feb-2020
                      </a>
                      <a className="tn-title" href="">
                        Ut ac euismod tellus a blandit
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="tn-img">
                  <img src={topNews5} alt="Top News 5" />
                  <div className="tn-content">
                    <div className="tn-content-inner">
                      <a className="tn-date" href="">
                        <i className="far fa-clock"></i>05-Feb-2020
                      </a>
                      <a className="tn-title" href="">
                        Cras ac egestas sem nec euismod
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Displaying news categories */}
      <div className="row">
        <Category categoryName="Sports" newsItems={sportsNews} />
        <Category categoryName="Technology" newsItems={techNews} />
      </div>

      <div className="row">
        <Category categoryName="Business" newsItems={businessNews} />
        <Category categoryName="Entertainment" newsItems={entertainmentNews} />
      </div>
      <MainNews />
    </div>
  );
};

export default Home;

import React from "react";
import "../App.css";
import imgLatestNews from "./img/latest-news.jpg";
import imgPopularNews from "./img/popular-news.jpg";
import imgAd1 from "./img/adds-1.jpg";
import imgAd2 from "./img/adds-2.jpg";

const MainNews = () => {
  return (
    <div className="main-news">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-12">
                <h2>
                  <i className="fas fa-align-justify"></i>Latest News
                </h2>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mn-img">
                      <img src={imgLatestNews} alt="Latest News" />
                    </div>
                    <div className="mn-content">
                      <a className="mn-title" href="#">
                        Cras commodo sem ut porta laoreet
                      </a>
                      <a className="mn-date" href="#">
                        <i className="far fa-clock"></i>05-Feb-2020
                      </a>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus sed porta dui. Class aptent taciti sociosqu ad
                        litora torquent per conubia nostra inceptos...
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mn-list">
                      <div className="mn-img">
                        <img src={imgLatestNews} alt="Latest News" />
                      </div>

                      <div className="mn-content">
                        <a className="mn-title" href="#">
                          Pellentesque sit amet rutrum lacus
                        </a>
                        <a className="mn-date" href="#">
                          <i className="far fa-clock"></i>05-Feb-2020
                        </a>
                      </div>
                    </div>
                    <div className="mn-list">
                      <div className="mn-img">
                        <img src={imgLatestNews} alt="Latest News" />
                      </div>

                      <div className="mn-content">
                        <a className="mn-title" href="#">
                          Pellentesque sit amet rutrum lacus
                        </a>
                        <a className="mn-date" href="#">
                          <i className="far fa-clock"></i>05-Feb-2020
                        </a>
                      </div>
                    </div>
                    <div className="mn-list">
                      <div className="mn-img">
                        <img src={imgLatestNews} alt="Latest News" />
                      </div>

                      <div className="mn-content">
                        <a className="mn-title" href="#">
                          Pellentesque sit amet rutrum lacus
                        </a>
                        <a className="mn-date" href="#">
                          <i className="far fa-clock"></i>05-Feb-2020
                        </a>
                      </div>
                    </div>
                    <div className="mn-list">
                      <div className="mn-img">
                        <img src={imgLatestNews} alt="Latest News" />
                      </div>

                      <div className="mn-content">
                        <a className="mn-title" href="#">
                          Pellentesque sit amet rutrum lacus
                        </a>
                        <a className="mn-date" href="#">
                          <i className="far fa-clock"></i>05-Feb-2020
                        </a>
                      </div>
                    </div>
                    <div className="mn-list">
                      <div className="mn-img">
                        <img src={imgLatestNews} alt="Latest News" />
                      </div>

                      <div className="mn-content">
                        <a className="mn-title" href="#">
                          Pellentesque sit amet rutrum lacus
                        </a>
                        <a className="mn-date" href="#">
                          <i className="far fa-clock"></i>05-Feb-2020
                        </a>
                      </div>
                    </div>
                    {/* Repeat the mn-list structure as needed */}
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <h2>
                  <i className="fas fa-align-justify"></i>Popular News
                </h2>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="mn-img">
                      <img src={imgPopularNews} alt="Popular News" />
                    </div>
                    <div className="mn-content">
                      <a className="mn-title" href="#">
                        Phasellus gravida metus vitae laoreet aliquam
                      </a>
                      <a className="mn-date" href="#">
                        <i className="far fa-clock"></i>05-Feb-2020
                      </a>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus sed porta dui. Class aptent taciti sociosqu ad
                        litora torquent per conubia nostra inceptos...
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mn-list">
                      <div className="mn-img">
                        <img src={imgPopularNews} alt="Popular News" />
                      </div>
                      <div className="mn-content">
                        <a className="mn-title" href="#">
                          Nullam risus ante sempe
                        </a>
                        <a className="mn-date" href="#">
                          <i className="far fa-clock"></i>05-Feb-2020
                        </a>
                      </div>
                    </div>
                    <div className="mn-list">
                      <div className="mn-img">
                        <img src={imgPopularNews} alt="Popular News" />
                      </div>
                      <div className="mn-content">
                        <a className="mn-title" href="#">
                          Nullam risus ante sempe
                        </a>
                        <a className="mn-date" href="#">
                          <i className="far fa-clock"></i>05-Feb-2020
                        </a>
                      </div>
                    </div>
                    <div className="mn-list">
                      <div className="mn-img">
                        <img src={imgPopularNews} alt="Popular News" />
                      </div>
                      <div className="mn-content">
                        <a className="mn-title" href="#">
                          Nullam risus ante sempe
                        </a>
                        <a className="mn-date" href="#">
                          <i className="far fa-clock"></i>05-Feb-2020
                        </a>
                      </div>
                    </div>
                    <div className="mn-list">
                      <div className="mn-img">
                        <img src={imgPopularNews} alt="Popular News" />
                      </div>
                      <div className="mn-content">
                        <a className="mn-title" href="#">
                          Nullam risus ante sempe
                        </a>
                        <a className="mn-date" href="#">
                          <i className="far fa-clock"></i>05-Feb-2020
                        </a>
                      </div>
                    </div>
                    <div className="mn-list">
                      <div className="mn-img">
                        <img src={imgPopularNews} alt="Popular News" />
                      </div>
                      <div className="mn-content">
                        <a className="mn-title" href="#">
                          Nullam risus ante sempe
                        </a>
                        <a className="mn-date" href="#">
                          <i className="far fa-clock"></i>05-Feb-2020
                        </a>
                      </div>
                    </div>

                    {/* Repeat the mn-list structure as needed */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="sidebar">
              <div className="sidebar-widget">
                <h2>
                  <i className="fas fa-align-justify"></i>Category
                </h2>
                <div className="category">
                  <ul className="fa-ul">
                    <li>
                      <span className="fa-li">
                        <i className="far fa-arrow-alt-circle-right"></i>
                      </span>
                      <a href="">National</a>
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="far fa-arrow-alt-circle-right"></i>
                      </span>
                      <a href="">International</a>
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="far fa-arrow-alt-circle-right"></i>
                      </span>
                      <a href="">Economics</a>
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="far fa-arrow-alt-circle-right"></i>
                      </span>
                      <a href="">Politics</a>
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="far fa-arrow-alt-circle-right"></i>
                      </span>
                      <a href="">Lifestyle</a>
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="far fa-arrow-alt-circle-right"></i>
                      </span>
                      <a href="">Technology</a>
                    </li>
                    <li>
                      <span className="fa-li">
                        <i className="far fa-arrow-alt-circle-right"></i>
                      </span>
                      <a href="">Trades</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="sidebar-widget">
                <h2>
                  <i className="fas fa-align-justify"></i>Tags
                </h2>
                <div className="tags">
                  <a href="">National</a>
                  {/* ... (Repeat tags as needed) */}
                  <a href="">International</a>
                  <a href="">Economics</a>
                  <a href="">Politics</a>
                  <a href="">Lifestyle</a>
                  <a href="">Technology</a>
                  <a href="">Trades</a>
                  <a href="">National</a>
                  <a href="">International</a>
                  <a href="">Economics</a>
                  <a href="">Politics</a>
                  <a href="">Lifestyle</a>
                  <a href="">Technology</a>
                  <a href="">Trades</a>
                </div>
              </div>

              <div className="sidebar-widget">
                <h2>
                  <i className="fas fa-align-justify"></i>Ads 1 column
                </h2>
                <div className="image">
                  <a href="#">
                    <img src={imgAd1} alt="Ad 1" />
                  </a>
                </div>
              </div>

              <div className="sidebar-widget">
                <h2>
                  <i className="fas fa-align-justify"></i>Ads 2 column
                </h2>
                <div className="image">
                  <div className="row">
                    <div className="col-sm-6">
                      <a href="#">
                        <img src={imgAd2} alt="Ad 2" />
                      </a>
                    </div>
                    <div className="col-sm-6">
                      <a href="#">
                        <img src={imgAd2} alt="Ad 2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNews;

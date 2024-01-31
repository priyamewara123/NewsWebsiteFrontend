import React from "react";
import "../App.css";

const Category = ({ categoryName, newsItems }) => {
  return (
    <div className="cat-news">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            {" "}
            {/* Use col-md-12 to take full width */}
            <h2>
              <i className="fas fa-align-justify"></i>
              {categoryName}
            </h2>
            <div className="row cn-slider">
              {newsItems.map((item, index) => (
                <div className="col-md-6" key={index}>
                  <div className="cn-img">
                    <img
                      src={item.image}
                      alt={`${categoryName} News ${index + 1}`}
                    />
                    <div className="cn-content">
                      <div className="cn-content-inner">
                        <a className="cn-date" href={item.dateLink}>
                          <i className="far fa-clock"></i>
                          {item.date}
                        </a>
                        <a className="cn-title" href={item.titleLink}>
                          {item.title}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;

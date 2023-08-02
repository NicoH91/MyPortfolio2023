import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Link } from "react-router-dom";
import { BsFillBriefcaseFill } from "react-icons/bs";
import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.jpg";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.jpg";
import ImageFive from "../../images/image5.jpg";
import ImageSix from "../../images/image6.jpg";
import ImageTen from "../../images/image10.jpg";
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "Ecommerce",
    image: ImageOne,
    link: "",
  },
  {
    id: 3,
    name: "Todo App",
    link: "https://nicoh91.github.io/ToDolist/",
    image: ImageTwo,
  },
  {
    id: 2,
    name: "Supplier Design",
    image: ImageThree,
    link: "",
  },

  {
    id: 3,
    name: "Travel Beach",
    image: ImageTen,
    link: "https://nicoh91.github.io/VacationBeach/",
  },
  {
    id: 2,
    name: "Photo Portfolio",
    image: ImageSix,
    link: "https://nicoh91.github.io/photoportfolio/index.html",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Developement",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={< BsFillBriefcaseFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    {item.link && (
                      // Utilizar Link en lugar de a
                      <Link to={item.link} target="_blank" rel="noopener noreferrer">
                        <button>Visit</button>
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
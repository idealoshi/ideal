import React, { useEffect, useState } from "react";
import styles from "./Slider.module.css";
import img2 from "../images/T1.jpg";
import img1 from "../images/sc1.jpeg";
import img3 from "../images/roadPic2.jpg";

import { Link } from "react-router-dom";

const Slider = () => {
  const [items, setItems] = useState([
    { name: "Geramny", image: `${img1}`, des: "lorem" },
    { name: "Kosovo", image: `${img2}`, des: "lorem ipsum" },
    { name: "Kosovo", image: `${img3}`, des: "lorem ipsum 25" },
    { name: "Kosovo", image: `${img2}`, des: "lorem ipsuim 32123" },
  ]);

  const [currentIndex] = useState(0);

  const nextSlide = () => {
    setItems((prevItems) => [...prevItems.slice(1), prevItems[0]]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <div className={styles.container}>
        <Link to="/project">
          <div className={styles.slide}>
            {items.map((item, index) => (
              <div
                className={`${styles.item} ${
                  index === currentIndex ? styles.active : ""
                }`}
                key={index}
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className={styles.content}>
                  <div className={styles.name}>{item.name}</div>
                  <div className={styles.des}>{item.des}</div>
                  <Link to="/project">
                    <button>See More</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Link>
      </div>
    </>
  );
};

export default Slider;

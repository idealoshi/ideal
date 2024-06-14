import React from "react";
import AppNav from "../../components/AppNav";
import img1 from "../../images/bridge.jpg";
import img2 from "../../images/bridge2.jpg";
import img3 from "../../images/bridge3.jpg";
import BridgeSlider from "./BridgeSlider";

import styles from "./ProjectBridge.module.css";

export default function ProjectBridge() {
  const slides = [
    {
      url: `${img1}`,
      title: "image 1",
    },
    {
      url: `${img2}`,
      title: "image 2",
    },
    {
      url: `${img3}`,
      title: "image 3",
    },
  ];

  return (
    <div>
      <div className={styles.containerStyles}>
        <div className={styles.app}>
          <AppNav />
        </div>
        <BridgeSlider slides={slides} />
      </div>
    </div>
  );
}

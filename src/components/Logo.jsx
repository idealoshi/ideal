import React from "react";
import logo from "../images/newlogo.png";
import styles from "./Logo.module.css";

export default function Logo() {
  return <img src={logo} alt="IdealLogo" className={styles.logo} />;
}

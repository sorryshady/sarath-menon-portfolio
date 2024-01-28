// Poetry.js

import React from "react";
import { data } from "./data";
import styles from "./poetry.module.css";

const Poetry = () => {
  return (
    <div className={styles.main}>
      {data.map((item) => (
        <div key={item.id}>
          <h1 className={styles.title}>{item.title}</h1>
          <div className={styles.poemContainer}>
            <div className={styles.poemimage}>
              <img src={item.src} alt={item.title}></img>
            </div>
            <div className={styles.poem}>{item.poem}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Poetry;

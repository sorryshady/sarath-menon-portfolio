import React from "react";
import styles from "./poetry.module.css";
import Link from "next/link";
const Poetry = () => {
  return (
    <>
      <section className={styles.poemSection}>
        <div className={styles.heading} id="poems">
          <h1>POETRY</h1>
        </div>
        <div className={styles.main}>
          <div className={styles.contentWrapper}>
            <div className={styles.image}></div>
            <div className={styles.poem}>
              <p className={styles.content}>
                To know more about Sarath's inner world and the depth at which
                he exists, read some of his poems he looks forward to publish.
              </p>
              <div className={styles.linkdiv}>
                <Link href="/poems" className={styles.link}>
                  <span className={styles.viewmore}> View More</span>
                  <span className={styles.arrow}>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Poetry;

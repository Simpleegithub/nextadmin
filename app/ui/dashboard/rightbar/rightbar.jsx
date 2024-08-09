import React from "react";
import styles from "./rightbar.module.css";
import Image from "next/image";
import { MdPlayCircle, MdPlayCircleFilled } from "react-icons/md";

function Rightbar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="" fill className={styles.bg} />
        </div>
        <div className={styles.text}>
          <span className={styles.notifications}>🔥 Available Now</span>
          <h3 className={styles.title}>How to use the new version of admin dashboard?</h3>
          <span className={styles.subtitle}>Take 4 miniutes to learn </span>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ipsa consectetur explicabo necessitatibus, mollitia ullam ratione eveniet laudantium iure dolorem.</p>
          <button className={styles.button}>
            <MdPlayCircleFilled/>
            Watch
          </button>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="" fill className={styles.bg} />
        </div>
        <div className={styles.text}>
          <span className={styles.notifications}>🔥 Available Now</span>
          <h3 className={styles.title}>How to use the new version of admin dashboard?</h3>
          <span className={styles.subtitle}>Take 4 miniutes to learn </span>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ipsa consectetur explicabo necessitatibus, mollitia ullam ratione eveniet laudantium iure dolorem.</p>
          <button className={styles.button}>
            <MdPlayCircleFilled/>
            Watch
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rightbar;

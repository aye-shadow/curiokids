import type { NextPage } from "next";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div className={[styles.homeInner, className].join(" ")}>
      <header className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameWrapper}>
          <div className={styles.buttonParent}>
            <div className={styles.button}>
              <img className={styles.starIcon} alt="" src="/star.svg" />
              <img className={styles.starIcon} alt="" src="/x.svg" />
              <h2 className={styles.curio}>Curio</h2>
            </div>
            <div className={styles.button1}>
              <img className={styles.starIcon} alt="" src="/star.svg" />
              <img className={styles.starIcon} alt="" src="/x.svg" />
              <h2 className={styles.kids}>Kids</h2>
            </div>
          </div>
        </div>
        <img
          className={styles.hiconLinearMenuCheesesb}
          loading="lazy"
          alt=""
          src="/hicon--linear--menu-cheesesburger.svg"
        />
      </header>
    </div>
  );
};

export default FrameComponent;

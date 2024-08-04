import type { NextPage } from "next";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section
      className={[styles.socialMediaIconsHereParent, className].join(" ")}
    >
      <div className={styles.socialMediaIconsContainer}>
        <p className={styles.social}>Social</p>
        <p className={styles.social}>Media</p>
        <p className={styles.social}>{`Icons `}</p>
        <p className={styles.social}>Here</p>
      </div>
      <div className={styles.animations}>animations</div>
      <div className={styles.navigationLinksParent}>
        <div className={styles.navigationLinks}>
          <div className={styles.home}>Home</div>
          <div className={styles.homeAboutContact}>
            <div className={styles.aboutUs}>About us</div>
          </div>
          <div className={styles.homeAboutContact1}>
            <div className={styles.contactUs}>Contact us</div>
          </div>
          <div className={styles.learn}>Learn</div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.animationsWrapper}>
              <div className={styles.animations1}>Animations</div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.curiokidsParent}>
                  <h1 className={styles.curiokids}>CurioKids</h1>
                  <div className={styles.button}>
                    <img className={styles.starIcon} alt="" src="/star2.svg" />
                    <img className={styles.starIcon} alt="" src="/x2.svg" />
                    <h1 className={styles.curio}>Curio</h1>
                  </div>
                  <div className={styles.button1}>
                    <img className={styles.starIcon} alt="" src="/star2.svg" />
                    <img className={styles.starIcon} alt="" src="/x2.svg" />
                    <h1 className={styles.kids}>Kids</h1>
                  </div>
                </div>
              </div>
              <div className={styles.curioKids}>
                <p className={styles.social}>2024 @ curio kids</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;

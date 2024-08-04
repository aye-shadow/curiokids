import type { NextPage } from "next";
import FrameComponent from "../components/frame-component";
import FrameComponent1 from "../components/frame-component1";
import styles from "./index.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <FrameComponent />
      <section className={styles.homeInner}>
        <div className={styles.frameParent}>
          <div className={styles.yourChildsPersonalizedLearWrapper}>
            <h1 className={styles.yourChildsPersonalizedContainer}>
              <p className={styles.yourChilds}>Your Child’s</p>
              <p className={styles.yourChilds}>{`Personalized `}</p>
              <p className={styles.yourChilds}>Learning Platform</p>
            </h1>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.buttonWrapper}>
                    <button className={styles.button}>
                      <img className={styles.starIcon} alt="" src="/star.svg" />
                      <div className={styles.getStarted}>Get Started</div>
                      <img className={styles.starIcon} alt="" src="/x.svg" />
                    </button>
                  </div>
                  <div className={styles.frameParent1}>
                    <div className={styles.frameWrapper1}>
                      <div className={styles.teacher2Parent}>
                        <img
                          className={styles.teacher2Icon}
                          loading="lazy"
                          alt=""
                          src="/teacher-2@2x.png"
                        />
                        <div className={styles.message3Wrapper}>
                          <img
                            className={styles.message3Icon}
                            loading="lazy"
                            alt=""
                            src="/message-3@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.trackYourProgressParent}>
                      <div className={styles.trackYourProgress}>
                        Track Your Progress
                      </div>
                      <div className={styles.trackYourProgress}>
                        24/7 Assistance
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameParent2}>
                  <div className={styles.buttonContainer}>
                    <button className={styles.button1}>
                      <img
                        className={styles.starIcon1}
                        alt=""
                        src="/star.svg"
                      />
                      <div className={styles.learnMore}>Learn More</div>
                      <img className={styles.starIcon1} alt="" src="/x.svg" />
                    </button>
                  </div>
                  <div className={styles.frameParent1}>
                    <div className={styles.frameWrapper2}>
                      <div className={styles.vuesaxbulkbrushParent}>
                        <img
                          className={styles.vuesaxbulkbrushIcon}
                          loading="lazy"
                          alt=""
                          src="/vuesaxbulkbrush.svg"
                        />
                        <div className={styles.calendar3Wrapper}>
                          <img
                            className={styles.calendar3Icon}
                            loading="lazy"
                            alt=""
                            src="/calendar-3@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent4}>
                      <div className={styles.kidFriendlyUiWrapper}>
                        <div className={styles.kidFriendlyUi}>
                          Kid-Friendly UI
                        </div>
                      </div>
                      <div className={styles.trackYourProgress}>
                        Encourages Goal Setting
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.wereDedicatedToMakeLearniWrapper}>
                <h2 className={styles.wereDedicatedTo}>
                  We’re dedicated to make learning fun for every child. Get all
                  our resources free - !
                </h2>
              </div>
              <button className={styles.button2}>
                <img className={styles.starIcon} alt="" src="/star1.svg" />
                <div className={styles.signUp}>Sign Up</div>
                <img className={styles.starIcon} alt="" src="/x1.svg" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent1 />
      <img className={styles.brush4Icon} alt="" src="/brush-4@2x.png" />
    </div>
  );
};

export default Home;

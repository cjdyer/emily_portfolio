import ImageCarousel from "./ImageCarousel";
import Links from "./Links";
import { css, cx } from "@emotion/css";
import Measurements from "./Measurements";
import { palette } from "./types";

const getStyles = () => ({
  app: css({
    backgroundColor: palette.background,
    padding: "2vh 4vw",
  }),

  topbar: css({
    height: "10vh",
    minHeight: "50px",
  }),

  logoImg: css({
    maxHeight: "80%",
    maxWidth: "80%",
    width: "auto",
    height: "auto",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    paddingLeft: "1vw",
    margin: "auto",
  }),

  bar: css({
    backgroundColor: palette.bar,
    position: "relative",
  }),

  visualComponent: css({
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  }),

  bottomSpacing: css({
    marginBottom: "2vh",
  }),
});

function App() {
  const styles = getStyles();

  return (
    <div className={styles.app}>
      <div
        className={cx(
          styles.topbar,
          styles.bar,
          styles.visualComponent,
          styles.bottomSpacing
        )}
      >
        <img
          src="./assets/logo.png"
          alt="Model Logo"
          draggable="false"
          className={styles.logoImg}
        />
        <Links />
      </div>
      <div className={cx(styles.visualComponent, styles.bottomSpacing)}>
        <ImageCarousel />
      </div>
      {/* <div className={cx(styles.bar, styles.visualComponent, styles.bottomSpacing)}>
        <Blurb />
      </div> */}
      <div className={cx(styles.bar, styles.visualComponent)}>
        <Measurements />
      </div>
    </div>
  );
}

export default App;

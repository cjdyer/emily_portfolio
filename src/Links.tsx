import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBookmark, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { css } from "@emotion/css";
import { palette } from "./types";

const getStyles = () => ({
  container: css({
    maxHeight: "40%",
    maxWidth: "40%",
    width: "auto",
    height: "auto",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    paddingRight: "1vw",
    margin: "auto",
    textAlign: "center",
  }),

  icon: css({
    color: palette.accent,
    transition: "color 0.3s ease",
    ":hover": {
      color: palette.highlight,
    },
    height: "100%",
  }),

  anchor: css({
    paddingLeft: "5px",
    paddingRight: "5px",
    height: "100%",
    display: "inline-block",
  }),
});

const Links: React.FC = () => {
  const styles = getStyles();

  return (
    <div className={styles.container}>
      <a
        href="https://www.instagram.com/emily.l.baron/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.anchor}
      >
        <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
      </a>
      <a href="mailto:booking@tamblynmodels.com.au" className={styles.anchor}>
        <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
      </a>
      <a
        href="https://www.tamblynmodelling.com.au/emily-baron"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.anchor}
      >
        <FontAwesomeIcon icon={faBookmark} className={styles.icon} />
      </a>
    </div>
  );
};

export default Links;

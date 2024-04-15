import ImageCarousel from './ImageCarousel';
import Links from './Links';
import Blurb from './Blurb';
import { css, cx } from '@emotion/css';

const getStyles = () => ({
  app: css({
    paddingBottom: '1vh'
  }),

  topbar: css({
    height: '10vh',
    marginTop: '2vh'
  }),

  logoImg: css({
    maxHeight: '80%',
    maxWidth: '80%',
    width: 'auto',
    height: 'auto',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    paddingLeft: '1vw',
    margin: 'auto',
  }),

  bar: css({
    boxShadow: '-0.5vh 1.5vh #333',
    backgroundColor: '#f9d5a7',
    position: 'relative'
  }),
  
  visualComponent: css({
    marginBottom: '5vh',
    marginLeft: '5vw',
    marginRight: '5vw',
  })
});

function App() {
  const styles = getStyles();

  return (
    <div className={styles.app}>
      <div className={cx(styles.topbar, styles.bar, styles.visualComponent)}>
        <img src="./assets/logo.png" alt="Model Logo" draggable='false' className={styles.logoImg} />
        <Links />
      </div>
      <div className={styles.visualComponent}>
        <ImageCarousel />
      </div>
      <div className={cx(styles.bar, styles.visualComponent)}>
        <Blurb />
      </div>
    </div>
  );
}

export default App;

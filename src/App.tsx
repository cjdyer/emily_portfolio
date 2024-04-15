import ImageCarousel from './ImageCarousel';
import Footer from './Footer';
import Blurb from './Blurb';
import { css } from '@emotion/css';

const getStyles = () => ({
  app: css({
    textAlign: 'center',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }),

  sidebar: css({
    position: 'fixed',
    left: '5vw',
    top: 0,
    boxShadow: '-0.5vw 1.5vw #333',
    backgroundColor: '#f9d5a7',
    height: '100vh',
    width: '25vw',
    zIndex: 20,
  }),

  logoImg: css({
    paddingTop: '2vh',
    width: '50%',
    minWidth: '80px',
    maxWidth: '20vh'
  })
});

function App() {
  const styles = getStyles();

  return (
    <div className={styles.app}>
      <div className={styles.sidebar}>
        <img src="./assets/logo.png" alt="Model Logo" draggable='false' className={styles.logoImg} />
        <Blurb />
        <Footer />
      </div>
      <ImageCarousel />
    </div>
  );
}

export default App;

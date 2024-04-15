import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { css } from '@emotion/css';

const getStyles = () => ({
    container: css({
        maxHeight: '40%',
        maxWidth: '40%',
        width: 'auto',
        height: 'auto',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        paddingRight: '1vw',
        margin: 'auto',
        textAlign: 'center'
    }),

    icon: css({
        color: '#333',
        transition: 'color 0.3s ease',
        ":hover": {
            color: '#FFFFFF'
        },
        height: '100%',
    }),
    
    anchor: css({
        paddingLeft: '0.5em',
        paddingRight: '0.5em',
        height: '100%',
        display: 'inline-block'
    })
});

const Links: React.FC = () => {
    const styles = getStyles();

    return (
        <div className={styles.container}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.anchor} >
                <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
            </a>
            <a href="mailto:your.email@example.com" className={styles.anchor}>
                <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.anchor}>
                <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
            </a>
        </div>
    );
};

export default Links;
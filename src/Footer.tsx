import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { css } from '@emotion/css';

const getStyles = () => ({
    footer: css({
        position: 'absolute',
        width: '100%',
        bottom: 0,
        paddingBottom: '1rem',
        textAlign: 'center',
        alignSelf: 'center'
    }),

    icon: css({
        fontSize: '2em',
        paddingLeft: '0.35em',
        paddingRight: '0.35em',
        textShadow: '0 0 8px rgba(255, 255, 255, 0.7)',
        color: '#333',
        transition: 'color 0.3s ease',
        ":hover": {
            color: '#FFFFFF'
        }
    }),
});

const Footer: React.FC = () => {
    const styles = getStyles();

    return (
        <footer className={styles.footer}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
            </a>
            <a href="mailto:your.email@example.com">
                <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
            </a>
        </footer>
    );
};

export default Footer;
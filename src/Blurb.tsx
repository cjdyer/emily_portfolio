import React from "react";
import { css } from '@emotion/css';

const getStyles = () => ({
    container: css({
        color: '#333',
        position: 'relative',
        zIndex: 10,
        height: '100%',
        padding: '20px',
    }),

    paragraph: css({
        overflow: 'hidden',
        textAlign: 'center',
        color: '#333',
        height: '60vh',
        userSelect: 'none',
        fontSize: 'calc(1.5vw + 0.75vh)',
    }),

    header: css({
        fontSize: 'calc(2vw + 1vh)',
        userSelect: 'none'
    }),
});

const Blurb: React.FC = () => {
    const styles = getStyles();

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Modeling Portfolio</h1>
            <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio laudantium, aliquid molestiae quasi, reiciendis eum est veritatis sed error perferendis corrupti eos suscipit consequatur quidem saepe quod, deserunt distinctio neque.</p>
        </div>
    );
};

export default Blurb;

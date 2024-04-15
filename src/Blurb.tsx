import React from "react";
import { css } from '@emotion/css';

const getStyles = () => ({
    container: css({
        color: '#333',
        position: 'relative',
        padding: '4vw',
    }),
    
    paragraph: css({
        overflow: 'hidden',
        textAlign: 'center',
        color: '#333',
        userSelect: 'none',
        margin: '4vh 0'
    }),
    
    header: css({
        color: '#333',
        textAlign: 'center',
        userSelect: 'none',
        margin: 0
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

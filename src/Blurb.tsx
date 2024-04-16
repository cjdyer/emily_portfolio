import React from "react";
import { css } from '@emotion/css';
import { palette } from "./types";

const getStyles = () => ({
    container: css({
        position: 'relative',
        padding: '4vh 4vw',
    }),
    
    paragraph: css({
        overflow: 'hidden',
        textAlign: 'center',
        color: palette.accent,
        userSelect: 'none',
        margin: '4vh 0'
    }),
    
    header: css({
        color: palette.accent,
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
            <p className={styles.paragraph}></p>
        </div>
    );
};

export default Blurb;

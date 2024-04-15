import React from 'react';
import Slider from 'react-slick';
import { css } from '@emotion/css';

const getStyles = () => ({
    item: css({
        userSelect: 'none',
    }),

    image: css({
        height: '100vh',
        width: '32vw',
        objectFit: 'cover',
        display: 'block',
    }),

    container: css({
        top: '20vh',
        height: '60vh',
        overflow: 'hidden'
    })
});

const ImageCarousel: React.FC = () => {
    const styles = getStyles();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true
    };

    return (
        <Slider {...settings} className={styles.container}>
            <div className={styles.item}>
                <img src="./assets/EmilyBaron-0205.jpeg" alt="Emily Baron Still 1" className={styles.image} />
            </div>
            <div className={styles.item}>
                <img src="./assets/EmilyBaron-0361.jpeg" alt="Emily Baron Still 2" className={styles.image} />
            </div>
            <div className={styles.item}>
                <img src="./assets/EmilyBaron-0436.jpeg" alt="Emily Baron Still 3" className={styles.image} />
            </div>
            <div className={styles.item}>
                <img src="./assets/EmilyBaron-0559.jpeg" alt="Emily Baron Still 4" className={styles.image} />
            </div>
            <div className={styles.item}>
                <img src="./assets/EmilyBaron-0645.jpeg" alt="Emily Baron Still 5" className={styles.image} />
            </div>
        </Slider>
    );
};

export default ImageCarousel;

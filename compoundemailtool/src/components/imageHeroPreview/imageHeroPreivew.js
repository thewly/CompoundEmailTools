import React from 'react';
import styles from './imageHeroPreview.module.css'

const imageHero = (props) => {
    return (
        <div>
            <img className={styles.Spacing} src={"http://via.placeholder.com/600x300?text=" + props.image} alt="Main Header" />
        </div>
    )
}

export default imageHero;




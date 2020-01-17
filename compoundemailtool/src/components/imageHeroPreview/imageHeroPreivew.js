import React from 'react';
import styles from './imageHeroPreview.module.css'

const imageHero = (props) => {
    return (
        <div>
            <img onClick={props.click} className={styles.Spacing} src={"http://via.placeholder.com/560x300?text=" + "hero-" + props.schoolName + ".jpg"} alt="Main Header" />
        </div>
    )
}

export default imageHero;




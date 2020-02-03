import React from 'react';
import styles from './EESSKSRO_ImageHeroPreview.module.css'

const EESSKSRO_ImageHeroPreview = (props) => {
    return (
        <div>
            <img onClick={props.click} className={styles.Spacing} src={"http://via.placeholder.com/560x300?text=1-hero_" + props.schoolName + ".jpg"} alt="Main Header" />
        </div>
    )
}

export default EESSKSRO_ImageHeroPreview;
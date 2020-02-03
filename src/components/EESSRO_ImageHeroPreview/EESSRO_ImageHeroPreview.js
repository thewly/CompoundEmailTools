import React from 'react';
import styles from './EESSRO_ImageHeroPreview.module.css'

const EESSRO_ImageHeroPreview = (props) => {
    return (
        <div>
            <img onClick={props.click} className={styles.Spacing} src={"http://via.placeholder.com/560x300?text=hero-" + props.schoolName + ".jpg"} alt="Main Header" />
        </div>
    )
}

export default EESSRO_ImageHeroPreview;
import React from 'react';
import styles from './EESSRO_ImagePanelPreview.module.css'

const EESSRO_ImagePanelPreview = (props) => {
    return (
        <div>
            <img onClick={props.click} className={styles.Spacing} src={"http://via.placeholder.com/560x150?text=panel-" + props.schoolName + ".jpg"} alt="EESSGIAE Panel" />
        </div>
    )
}

export default EESSRO_ImagePanelPreview;
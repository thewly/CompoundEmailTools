import React from 'react';
import styles from './EESSKSRO_ImagePanelPreview.module.css'

const EESSKSRO_ImagePanelPreview = (props) => {
    return (
        <div>
            <img onClick={props.click} className={styles.Spacing} src={"http://via.placeholder.com/560x150?text=2-panel_" + props.schoolName + ".jpg"} alt="EESSKSRO Panel" />
        </div>
    )
}

export default EESSKSRO_ImagePanelPreview;
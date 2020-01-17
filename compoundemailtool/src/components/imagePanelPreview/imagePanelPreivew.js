import React from 'react';
import styles from './imagePanelPreview.module.css'

const imagePanel = (props) => {
    return (
        <div>
            <img onClick={props.click} className={styles.Spacing} src={"http://via.placeholder.com/560x150?text=" + "panel-" + props.schoolName + ".jpg"} alt="Panel Image" />
        </div>
    )
}

export default imagePanel;




import React from 'react';
import styles from './imagePanelPreview.module.css'

const imagePanel = (props) => {
    return (
        <div>
            <img className={styles.Spacing} src={"http://via.placeholder.com/600x150?text=" + props.image} alt="Panel Image" />
        </div>
    )
}

export default imagePanel;




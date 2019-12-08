import React from 'react';
import styles from './timePreview.module.css'

const timePreview = (props) => {
    return (
        <div>
            <p className={styles.timePreview}>{props.time}</p>
        </div>
    )
}

export default timePreview;
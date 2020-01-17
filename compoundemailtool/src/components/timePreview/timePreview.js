import React from 'react';
import styles from './timePreview.module.css'

const timePreview = (props) => {
    return (
        <div>
            <p className={styles.timePreview}>{props.startTime} &ndash; {props.endTime}</p>
        </div>
    )
}

export default timePreview;
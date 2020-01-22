import React from 'react';
import styles from './timePreview2.module.css'

const timePreview2 = (props) => {
    return (
        <div>
            <p className={styles.timePreview}>{props.startTime} &ndash; {props.endTime}</p><br/>
        </div>
    )
}

export default timePreview2;
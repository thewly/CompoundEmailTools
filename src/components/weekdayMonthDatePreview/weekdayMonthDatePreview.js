import React from 'react';
import styles from './weekdayMonthDatePreview.module.css'

const weekdayMonthDatePreview = (props) => {
    return (
        <div>
            <p className={styles.weekdayMonthDatePreview}>{props.weekdayMonthDate}</p>
        </div>
    )
}

export default weekdayMonthDatePreview;
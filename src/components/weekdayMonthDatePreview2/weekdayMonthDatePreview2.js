import React from 'react';
import styles from './weekdayMonthDatePreview2.module.css'

const weekdayMonthDatePreview2 = (props) => {
    return (
        <div>
            <br/><p className={styles.weekdayMonthDatePreview}>{props.weekdayMonthDate}</p>
        </div>
    )
}

export default weekdayMonthDatePreview2;
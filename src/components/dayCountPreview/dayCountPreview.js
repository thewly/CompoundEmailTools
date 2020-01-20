import React from 'react';
import styles from './dayCountPreview.module.css'

const dayCountPreview = (props) => {
    return (
        <div>
            <p className={styles.subhead}>{props.subhead}</p>
        </div>
    )
}

export default dayCountPreview;
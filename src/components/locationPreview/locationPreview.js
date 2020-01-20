import React from 'react';
import styles from './locationPreview.module.css'

const locationPreview = (props) => {
    return (
        <div>
            <p className={styles.locationPreview}>{props.location}</p>
        </div>
    )
}

export default locationPreview;
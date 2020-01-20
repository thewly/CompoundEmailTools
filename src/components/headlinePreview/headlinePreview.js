import React from 'react';
import styles from './headlinePreview.module.css'

const headlinePreview = (props) => {
    return (
        <div>
            <p className={styles.headlineStyle}>{props.headline}</p>
        </div>
    )
}

export default headlinePreview;
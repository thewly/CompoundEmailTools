import React from 'react';
import styles from './headlineEESSGIAEPreview.module.css'

const headlineEESSGIAEPreview = (props) => {
    return (
        <div>
            <p className={styles.headlineStyle}>{props.headline}</p>
        </div>
    )
}

export default headlineEESSGIAEPreview;
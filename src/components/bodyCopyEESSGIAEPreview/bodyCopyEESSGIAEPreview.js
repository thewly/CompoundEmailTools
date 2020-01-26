import React from 'react';
import styles from './bodyCopyEESSGIAEPreview.module.css'

const bodyCopyEESSGIAEPreview = (props) => {
    return (
        <div>
            <p className={styles.bodyCopy}>{props.bodyCopy}</p>
        </div>
    )
}

export default bodyCopyEESSGIAEPreview;
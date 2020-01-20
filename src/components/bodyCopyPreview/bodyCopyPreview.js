import React from 'react';
import styles from './bodyCopyPreview.module.css'

const bodyCopyPreview = (props) => {
    return (
        <div>
            <p className={styles.bodyCopy}>{props.bodyCopy}</p>
        </div>
    )
}

export default bodyCopyPreview;
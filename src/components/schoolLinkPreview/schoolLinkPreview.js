import React from 'react';
import styles from './schoolLinkPreview.module.css'

const schoolLinkPreview = (props) => {
    return (
        <div className={styles.spacing}>
            <button onClick={props.click} type="button" style={{color: props.font, backgroundColor: props.buttonColor}} className="btn-lg">
                School Link Test
            </button>
        </div>
    )
}

export default schoolLinkPreview;
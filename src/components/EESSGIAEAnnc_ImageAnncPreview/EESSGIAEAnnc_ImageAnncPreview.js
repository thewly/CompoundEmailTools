import React from 'react';
import styles from './EESSGIAEAnnc_ImageAnncPreview.module.css'

const EESSGIAEAnnc_ImageAnncPreview = (props) => {
    return (
        <div className="row">
            <div className="col-md-6" style={{backgroundColor: props.color}}>
                <div className={styles.container1}>
                    <p>5-announcements_{props.schoolName}.jpg</p>
                </div>
            </div>
            <div className="col-md-6" style={{backgroundColor: props.color}}>
                <div className={styles.container2}>
                    <p className={styles.headlineStyle}>Graduation Announcements</p>
                    <p className={styles.bodyCopy}>Order your announcements in time for graduation!</p>
                    <button onClick={props.click} type="button" style={{color: props.font, backgroundColor: props.buttonColor}} className="btn-lg">
                        Order Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EESSGIAEAnnc_ImageAnncPreview;
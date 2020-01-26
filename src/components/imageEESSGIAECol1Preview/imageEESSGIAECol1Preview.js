import React from 'react';
import styles from './imageEESSGIAECol1Preview.module.css'

const imageEESSGIAECol1 = (props) => {
    return (
        <div className="col-md-6">
            <div className={styles.Spacing}>
            <img onClick={props.click} src={"http://via.placeholder.com/250x250?text=3-col1_" + props.schoolName + ".jpg"} alt="Col1" /><br/><br/>
            <p className={styles.headlineStyle}>{props.headline}</p>
            <p className={styles.bodyCopy}>{props.bodyCopy}</p>
            <button onClick={props.click2} type="button" style={{color: props.font, backgroundColor: props.buttonColor}} className="btn-lg">
                Shop Alumni
            </button><br/><br/>
            </div>
        </div>
    )
}

export default imageEESSGIAECol1;
import React from 'react';
import styles from './imageEESSGIAECol2Preview.module.css'

const imageEESSGIAECol2 = (props) => {
    return (
        <div className="col-md-6">
            <img onClick={props.click} className={styles.Spacing} src={"http://via.placeholder.com/250x250?text=4-col2_" + props.schoolName + ".jpg"} alt="Col1" /><br/><br/>
            <p className={styles.headlineStyle}>{props.headline}</p>
            <p className={styles.bodyCopy}>{props.bodyCopy}</p>
            <button onClick={props.click2} type="button" style={{color: props.font, backgroundColor: props.buttonColor}} className="btn-lg">
                Shop Rings
            </button><br/><br/>
        </div>
    )
}

export default imageEESSGIAECol2;
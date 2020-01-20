import React from 'react';
import styles from './image2Col2Preview.module.css'

const image2Col2 = (props) => {
    return (
        <div className="col-md-6">
            <img onClick={props.click} className={styles.Spacing} src={"http://via.placeholder.com/250x250?text=3-col2_" + props.schoolName + ".jpg"} alt="Col1" /><br/><br/>
            <p className={styles.headlineStyle}>{props.headline}</p>
            <p className={styles.bodyCopy}>{props.bodyCopy}</p>
            <button onClick={props.click} type="button" style={{backgroundColor: props.buttonColor}} className="btn-lg">
                Shop Rings
            </button><br/><br/>
        </div>
    )
}

export default image2Col2;
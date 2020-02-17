import React from 'react';
import styles from './image2Col1Preview.module.css'

const image2Col1 = (props) => {
    return (
        <div className="col-md-6">
            <div className={styles.Spacing}>
            <img onClick={props.click} src={"http://via.placeholder.com/250x250?text=2-col1_" + props.schoolName + ".jpg"} alt="Col1" /><br/><br/>
            <p className={styles.headlineStyle}>{props.headline}</p>
            <p className={styles.bodyCopy}>{props.bodyCopy}</p>
            <button onClick={props.click} type="button" style={{color: props.font, backgroundColor: props.buttonColor}} className="btn-lg">
                SHOP PHOTO GIFTS
            </button><br/><br/>
            </div>
        </div>
    )
}

export default image2Col1;
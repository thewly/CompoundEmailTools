import React from 'react';
import styles from './EESSGIAE_Body_Preview.module.css'

const EESSGIAE_Body_Preview = (props) => {
    return (
        <div>
            <p className={styles.headlineStyle}>{props.headline}</p>
            <p className={styles.bodyCopy}>{props.bodyCopy}</p>
            <h5>Or visit your on-campus representative:</h5>
            <p className={styles.subhead}>{props.subhead}</p>
            <p className={styles.weekdayMonthDatePreview}>{props.weekdayMonthDate}</p>
            <p className={styles.timePreview}>{props.startTime} &ndash; {props.endTime}</p>
            {props.oneDTP ? null : (
                <div>
                    <br/><p className={styles.weekdayMonthDatePreview}>{props.weekdayMonthDate2}</p>
                    <p className={styles.timePreview}>{props.startTime2} &ndash; {props.endTime2}</p><br/>
                </div>
            )}
            <p className={styles.locationPreview}>{props.location}</p>
            <br/><img onClick={props.click} className={styles.Spacing} src={"http://via.placeholder.com/560x150?text=2-logo_" + props.schoolName + ".jpg"} alt="EESSRO Panel" />
        </div>
    )
}

export default EESSGIAE_Body_Preview;
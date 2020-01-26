import React from 'react';
import styles from './EESSRO_Body_Preview.module.css'

const EESSRO_Body_Preview = (props) => {
    return (
        <div>
            <p className={styles.headlineStyle}>{props.headline}</p>
            <p className={styles.bodyCopy}>{props.bodyCopy}</p>
            <div className={styles.spacing}>
                <button onClick={props.click} type="button" style={{color: props.font, backgroundColor: props.buttonColor}} className="btn-lg">
                    School Link Test
                </button>
            </div>
            <h5>Or visit your on-campus representative:</h5>
            <p className={styles.subhead}>{props.subhead}</p>
            <p className={styles.weekdayMonthDatePreview}>{props.weekdayMonthDate}</p>
            <p className={styles.weekdayMonthDatePreview}>{props.startTime} &ndash; {props.endTime}</p>
            {props.oneDTP ? null : (
                <div>
                    <br/><p className={styles.weekdayMonthDatePreview}>{props.weekdayMonthDate2}</p>
                    <p className={styles.timePreview}>{props.startTime2} &ndash; {props.endTime2}</p><br/>
                </div>
            )}
            <p className={styles.locationPreview}>{props.location}</p>
        </div>
    )
}

export default EESSRO_Body_Preview;
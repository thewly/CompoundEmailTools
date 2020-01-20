import React from 'react';
import styles from './dayCount.module.css';

const dayCount = (props) => {
    return (
        <div className="row">
            <div className="col-md-3">
                <h5 className={styles.spacing}>Day Count:</h5>
            </div>
            <div className="col-md-9">
                <input
                    className="form-control"
                    type="text"
                    onChange={props.change}
                    value={props.value}
                    name="subhead"
                />
            </div>
        </div>
    )
}

export default dayCount;
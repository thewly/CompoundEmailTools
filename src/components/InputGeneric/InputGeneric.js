import React from 'react';
import styles from './InputGeneric.module.css';

const inputGeneric = (props) => {
    return (
        <div className="row">
            <div className="col-md-3">
                <h5 className={styles.spacing}>{props.name}</h5>
            </div>
            <div className="col-md-9">
                <input
                    className="form-control"
                    type="text"
                    onChange={props.change}
                    value={props.value}
                    name={props.value}
                />
            </div>
        </div>
    )
}

export default inputGeneric;
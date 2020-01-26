import React from 'react';
import styles from './InputGeneric.module.css';

const inputGeneric = (props) => {
    return (
        <div className={styles.space}>
            <div className="row">
                <div className="col-md-4">
                    <h5 className={styles.spacing}>{props.headline}</h5>
                </div>
                <div className="col-md-8">
                    <textarea
                        className="form-control"
                        type="text"
                        onChange={props.change}
                        value={props.value}
                        name={props.name}
                        rows={props.rows}
                    />
                </div>
            </div>
        </div>
    )
}

export default inputGeneric;
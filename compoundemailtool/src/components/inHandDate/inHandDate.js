import React from 'react';

const inHandDate = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <h5>In Hand Date:</h5>
                </div>
                <div className="col-md-9">
                    <input
                        className="form-control"
                        type="text"
                        onChange={props.change}
                        value={props.value}
                        name="inHandDate"
                    />
                </div>
            </div>
        </div>
    )
}

export default inHandDate;
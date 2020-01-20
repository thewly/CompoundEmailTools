import React from 'react';

const schoolName = (props) => {
    return (
        <div className="row">
            <div className="col-md-3">
                <h5>School Name:</h5>
            </div>
            <div className="col-md-9">
                <textarea
                    className="form-control"
                    type="text"
                    onChange={props.change}
                    value={props.value}
                    rows="2"
                    name="schoolName"
                />
            </div>
        </div>
    )
}

export default schoolName;
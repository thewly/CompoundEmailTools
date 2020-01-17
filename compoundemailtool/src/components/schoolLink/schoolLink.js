import React from 'react';

const schoolLink = (props) => {
    return (
        <div className="row">
            <div className="col-md-3">
                <h5>School Link:</h5>
            </div>
            <div className="col-md-9">
                <input
                    className="form-control"
                    type="text"
                    onChange={props.change}
                    value={props.value}
                    name="schoolLink"
                />
            </div>
        </div>
    )
}

export default schoolLink;
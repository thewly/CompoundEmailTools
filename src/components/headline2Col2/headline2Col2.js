import React from 'react';

const headline = (props) => {
    return (
        <div className="row">
            <div className="col-md-3">
                <h5>C2 Head:</h5>
            </div>
            <div className="col-md-9">
                <textarea
                    className="form-control"
                    type="text"
                    onChange={props.change}
                    value={props.value}
                    rows="1"
                    name="col2Headline"
                />
            </div>
        </div>
    )
}

export default headline;
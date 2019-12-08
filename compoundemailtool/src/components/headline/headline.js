import React from 'react';

const headline = (props) => {
    return (
        <div className="row">
            <div className="col-md-3">
                <h5>Headline:</h5>
            </div>
            <div className="col-md-9">
                <textarea
                    className="form-control"
                    type="text"
                    onChange={props.change}
                    value={props.value}
                    rows="2"
                    name="headline"
                />
            </div>
        </div>
    )
}

export default headline;
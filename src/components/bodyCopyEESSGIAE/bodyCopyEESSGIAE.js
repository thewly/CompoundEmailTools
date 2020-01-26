import React from 'react';

const bodyCopyEESSGIAE = (props) => {
    return (
        <div className="row">
            <div className="col-md-3">
                <h5>Body Copy:</h5>
            </div>
            <div className="col-md-9">
                <textarea
                    className="form-control"
                    type="text"
                    onChange={props.change}
                    value={props.value}
                    name="bodyCopyEESSGIAE"
                    rows="3"
                />
            </div>
        </div>
    )
}

export default bodyCopyEESSGIAE;
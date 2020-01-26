import React from 'react';

const bodyCopy2Col1 = (props) => {
    return (
        <div className="row">
            <div className="col-md-3">
                <h5>C1 Copy:</h5>
            </div>
            <div className="col-md-9">
                <textarea
                    className="form-control"
                    type="text"
                    onChange={props.change}
                    value={props.value}
                    name="col1BodyCopy"
                    rows="3"
                />
            </div>
        </div>
    )
}

export default bodyCopy2Col1;
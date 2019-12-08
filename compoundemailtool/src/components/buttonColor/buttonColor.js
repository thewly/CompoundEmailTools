import React from 'react';

const buttonColor = (props) => {
    return (
        <div className="row">
            <div className="col-md-3">
                <h5>Btn Hex:</h5>
            </div>
            <div className="col-md-9">
                <input
                    className="form-control"
                    type="text"
                    onChange={props.change}
                    value={props.value}
                    name="buttonColor"
                />
            </div>
        </div>
    )
}

export default buttonColor;
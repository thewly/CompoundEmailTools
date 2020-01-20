import React from 'react';

const SMI = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <h5>SMI:</h5>
                </div>
                <div className="col-md-9">
                    <input
                        className="form-control"
                        type="text"
                        onChange={props.change}
                        value={props.value}
                        name="SMI"
                    />
                </div>
            </div>
        </div>
    )
}

export default SMI;
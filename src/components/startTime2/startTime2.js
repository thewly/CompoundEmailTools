import React from 'react';

const startTime2 = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <h5>2nd Start Time:</h5>
                </div>
                <div className="col-md-9">
                    <input
                        className="form-control"
                        type="text"
                        onChange={props.change}
                        value={props.value}
                        name="startTime2"
                    />
                </div>
            </div>
        </div>
    )
}

export default startTime2;
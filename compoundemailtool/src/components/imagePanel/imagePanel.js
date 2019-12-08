import React from 'react';

const imagePanel = (props) => {
    return (
        <div className="row">
            <div className="col-md-3">
                <h5>Panel Img Filename:</h5>
            </div>
            <div className="col-md-9">
                <textarea
                    className="form-control"
                    type="text"
                    onChange={props.change}
                    value={props.value}
                    rows="2"
                    name="imagePanelName"
                />
            </div>
        </div>
    )
}

export default imagePanel;
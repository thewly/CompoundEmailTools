import React from 'react';

const imageHero = (props) => {
    return (
        <div className="row">
            <div className="col-md-3">
                <h5>Hero Img Filename:</h5>
            </div>
            <div className="col-md-9">
                <textarea
                    className="form-control"
                    type="text"
                    onChange={props.change}
                    value={props.value}
                    rows="2"
                    name="imageHeroName"
                />
            </div>
        </div>
    )
}

export default imageHero;
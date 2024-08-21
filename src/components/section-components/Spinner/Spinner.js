import React from 'react';

const Spinner = (props) => {
    let {color1, color2, size} = props;
    return (
        <div className="loader"
             style={{
                 borderTopColor: color1,
                 borderRightColor: color1,
                 borderBottomColor: color1,
                 borderLeftColor: color2,
                 width: size === "sm" ? "6em" : size === "md" ? "10em" : "10em",
                 height: size === "sm" ? "6em" : size === "md" ? "10em" : "10em",
             }}
        />
    );
};

export default Spinner;
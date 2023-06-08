import React from 'react';

const Button = (props) => {
    const {children, style}= props
    return (
        <button style={style}>{children}</button>
    );
};

export default Button;
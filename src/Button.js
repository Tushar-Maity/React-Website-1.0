import React from 'react';
import './Button.css'

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide'];

const COLOR = ['primary', 'blue', 'red', 'green'];

const Button = ({ 
    children,
    onClick, 
    type, 
    buttonStyle, 
    buttonSize, 
    buttonColor
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : COLOR[0];

    return(
        <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`} onClick={onClick} type={type}>{children}</button>
    )
}

export default Button
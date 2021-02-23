import PropTypes from 'prop-types'

const Button = ({className, backgroundColor , color, text, onClick}) => {
    return (
        <button 
            className={`button ${className}`}
            style= {{
                color : color ,
                backgroundColor : backgroundColor
            }}
            
            onClick = {onClick}
        >
            {text}
        </button>
    )
}
Button.defaultProps = {
    color: "white",
    backgroundColor: "black", 
    text: "Add"

}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button

const FormInput = ({className, label, type, placeholder, value, onChange, ...otherProps }) => {
    return (
        <div className={`form-control ${className}`} >
            <label>{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                {...otherProps}
            />
        </div>
    )
}

export default FormInput

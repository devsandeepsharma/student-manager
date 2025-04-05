import "./button.css";

const Button = ({className, children, icon, ...props}) => {
    return (
        <button className={`flex-container btn ${className}`} {...props}>
            {icon}
            {children}
        </button>
    )
}

export default Button;
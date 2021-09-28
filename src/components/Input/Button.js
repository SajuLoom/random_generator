import classes from "./Button.module.css"

const Button = (props) =>{

    return(
        <button type="submit" className={classes.button} onClick={props.onClick}>{props.label}</button>
    );
}

export default Button;
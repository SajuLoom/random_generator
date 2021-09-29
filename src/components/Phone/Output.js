import Button from "../Input/Button";
import Card from "../Input/Card";
import classes from "./Output.module.css"

const OutputPhone = (props)=>{
    return(
        <section className={classes.gphone}>
            <Card>
                <p>Make a Call at Your Own Risk.Company won't take resposibilities😗</p>
                <h1>{props.phone}</h1>
                <p>Got Caught Try Calling the Number🤦‍♂️? Lets get you another one</p>
                <div className = {classes.buttonB}>
                    <Button label = "Generate Again" onClick ={props.onGenerate}></Button>
                </div>
            </Card>
        </section>
    );
}

export default OutputPhone
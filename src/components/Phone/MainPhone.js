import Button from "../Input/Button";
import Card from "../Input/Card";
import classes from "./MainPhone.module.css"


const MainPhone =(props)=>{
    return(
        <section className={classes.phone}>
            <Card>
            <h1>Random Number Generator</h1>
            <p>Looking for random phone number rather than 123456789? We got you.</p>
            <div className ={classes.button}>
                <Button label = "Generate Number" onClick = {props.onGenerate}></Button>
            </div>
            </Card>
        </section>
    );
}


export default MainPhone
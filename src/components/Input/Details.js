import React from "react";
import classes from "./Details.module.css"
import Button from "./Button";
import Card from "./Card";

const Details =(props) =>{

    return(
        <section className ={classes.details}>
        <Card>
            <h1>Random Name Generator</h1>
            <p>Let me suggest a Awesome Name for you unless you are not a terrorist,are you?</p>
            <div className ={classes.button}>
                <Button label = "Generate Name" onClick = {props.onGenerate}></Button>
            </div>
            
        </Card>
        </section>
    );
}

export default Details;
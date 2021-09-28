import React from "react";
import Button from "../Input/Button";
import Card from "../Input/Card";
import classes from "./GeneratedName.module.css"


const GeneratedName = (props) =>{
    return(
        <section className={classes.generated}>
            <Card>
                <p>We Hope this name sounds great on you</p>
                <h1>{props.name}</h1>
                <p>What? Really are you thinking about Generate Again? Go Ahead. But I heard this is Best.</p>
                <div className = {classes.buttonB}>
                    <Button label = "Generate Again" onClick ={props.onGenerate}></Button>
                </div>
            </Card>
        </section>
    );
}

export default GeneratedName
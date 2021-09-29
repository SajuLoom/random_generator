import React, { useState } from "react";
import classes from "./GneratedPhones.module.css"
import MainPhone from "./MainPhone";
import OutputPhone from "./Output";

const GeneratedPhone =()=>{

    const [isGenerate, setIsGenerated] = useState(false);
    const [randomPhone, setrandomPhone] = useState('');

    const GenerateHandler =() =>{
        setIsGenerated(!isGenerate);
        if(isGenerate){
            setrandomPhone(Math.floor(Math.random() * 9000000000) + 1000000000);
        }
    }


    return(
        <div className={classes.generate}>
            {!isGenerate && <MainPhone onGenerate = {GenerateHandler}/>}
            {isGenerate && <OutputPhone onGenerate = {GenerateHandler} phone ={randomPhone}></OutputPhone>}
        </div>
    );
}

export default GeneratedPhone
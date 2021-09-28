import React, { useState } from "react";
import GeneratedName from "../Generated Name/GeneratedName";
import Details from "./Details";
import classes from "./Generator.module.css";
import Name from "../../models/RandomNames"




const Generator =(props) =>{
    
    const [isGenerate, setIsGenerate] = useState(false);
    const [randomName, setRandomName] = useState();

    const onGenerateHandler =() =>{
        setIsGenerate(!isGenerate);
        console.log(isGenerate);
        if(!isGenerate){
            RandomGenerator();
            console.log(randomName);
        }
        
        
        
    }

    const RandomGenerator =()=>{
        setRandomName(Name[Math.ceil(Math.floor(Math.random() * (1001)))]);
    }
    

    return(
        <div className = {classes.generator}>
        {!isGenerate && <Details onGenerate = {onGenerateHandler}></Details>}
        {isGenerate && <GeneratedName onGenerate ={onGenerateHandler} name = {randomName}></GeneratedName>}
        </div>
    );
}

export default Generator
import classes from "./Navigation.module.css";
import { AiOutlineUser, AiOutlinePhone, AiOutlineMail, AiOutlineFileImage} from "react-icons/ai"

const Navigation =(props)=>{

    const Handler =(event)=>{
        props.onNavigate(parseInt(event.target.id));
    }
    return(
        <div className={classes.navigation}>
            <AiOutlineUser size={40}  className={classes.icons}  onClick={Handler} id ={1}/>
            <AiOutlinePhone size={40} className={classes.icons} onClick={Handler} id ={2}/>
            <AiOutlineMail size={40} className={classes.icons} onClick={Handler} id ={3}/>
            <AiOutlineFileImage size={40} className={classes.icons} onClick={Handler} id ={4}/>
        </div>
    );
}

export default Navigation;
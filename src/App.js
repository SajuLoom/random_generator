import { Fragment, useState } from "react";
import Generator from "./components/Input/Generator"
import Navigation from "./components/Navigation/Navigation";
import GeneratedPhone from "./components/Phone/GeneratedPhone";

function App() {

  const [navigator, setNavigator] = useState(1);
  
  const NavigatorHandler =(index)=>{
    console.log(navigator)
    setNavigator(index);
    
  }

  return (
    <Fragment>
      <Navigation onNavigate ={NavigatorHandler}/>
    <div>
      {navigator === 1 && <Generator></Generator>}
      {navigator === 2 && <GeneratedPhone></GeneratedPhone>}
    </div>
    </Fragment>
  );
}

export default App;

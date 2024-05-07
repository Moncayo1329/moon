import './App.css'; 
import React from 'react'
import UseState from './usestate';
import Array from './array'
import Objectexample from './Objectexample'
import UseStateCounter from './useStateCounter';
import Usebasic from './useeffect';
import Cleanup from './Cleanup';



const App = () => {
return(
<React.Fragment>
<UseState />
<Array />
<Objectexample />
<UseStateCounter />
<Usebasic />
<Cleanup />


</React.Fragment>

)
}
export default App;

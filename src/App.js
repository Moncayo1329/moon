import './App.css'; 
import React from 'react'
import UseState from './usestate';
import Array from './array'
import Objectexample from './Objectexample'
import UseStateCounter from './useStateCounter';
import Usebasic from './useeffect';
import Cleanup from './Cleanup';
import Fetchargument from './Fetchdata';
import Multiple from './multiple';
import ShowHide from './showhide';
import Inputs from './form';
import UseRefBasic from './useref';



const App = () => {
return(
<React.Fragment>
<UseState />
<Array />
<Objectexample />
<UseStateCounter />
<Usebasic />
<Cleanup />
<Fetchargument />
<Multiple />
<ShowHide />
<Inputs />
<UseRefBasic />


</React.Fragment>

)
}
export default App;

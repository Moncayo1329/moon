import './App.css'; 
import React from 'react'
import UseState from './usestate';



const App = () => {
let title = 'random title';
const handleClick = () => {
title = 'hello people'
console.log(title);

};

return(
<React.Fragment>
<UseState />

</React.Fragment>

)
}
export default App;

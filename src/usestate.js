import React, { useState } from "react";
// useState = function 

function UseState()
{

const [text,setText] = useState('random title');
return (
<React.Fragment><h1>{text}</h1>





</React.Fragment>


)
};


export default UseState;
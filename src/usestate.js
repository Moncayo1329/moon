import React, { useState } from "react";
// useState = function 

function UseState()
{

const [text,setText] = useState('random title');

const handleClick = () => {
if( text === 'random title'){

setText('hello world') ;
}
else{
    setText('random title')
   
};
}
return (
<React.Fragment><h1>{text}</h1>
<button className="btn" onClick={handleClick}>
change title

</button>

</React.Fragment>


)
};


export default UseState;
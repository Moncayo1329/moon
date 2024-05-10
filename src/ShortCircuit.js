import React, {useState} from "react";
// 

function ShortCircuit(){
const [test,setText] = useState(''); 
const [isError, setIsError] = useState(false);
//const firstValue = text || 'hello world';
//const secondValue = text && 'hell0 world';

return (

<> 
{/*<h1>{firstValue}</h1>
<h1>Value:{secondValue}</h1>*/}
<h1>{text || 'john doe'}</h1>
<button className="btn" onClick={()=> setIsError(!isError)}>toggle error
</button>
{isError && <h1>Error...</h1>}
{isError ? (
<p>There is an error</p>

) : (
<div>
    <h2>There is no error</h2>
</div>
)}
</>

);

};


export default ShortCircuit;
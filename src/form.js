import React, {useState} from "react"; 
// js 
// const input = document.getElementByid('mytext');
// const inputValue = input.value
// React
// value, onchange 

function Inputs() {
return (
<article> 
    <form className="form">
        <div className="form-control">
 <label htmlFor="firstName"> Name:  </label>
 <input type="text" id="firstName" name="firstName"/>
</div> 
<div className="form-control">
 <label htmlFor="email"> email:  </label>
 <input type="text" id="email" name="email"/> 
 </div>   
 <button type="submit"> add person </button>


    </form>


</article>
)

};


export default Inputs;
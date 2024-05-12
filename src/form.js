import React, {useState} from "react"; 
// js 
// const input = document.getElementByid('mytext');
// const inputValue = input.value
// React
// value, onchange 

function Inputs() { 
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')

const handleSubmit  = (e) => {
    e.preventDefault();

console.log('hellow world')

}


return (
    <>
<article> 
    <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
 <label htmlFor="firstName"> Name:  </label>
 <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
</div> 
<div className="form-control">
 <label htmlFor="email"> email:  </label>
 <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/> 
 </div>   
 <button type="submit"> add person </button>


    </form>


</article>
</>
)

};


export default Inputs;
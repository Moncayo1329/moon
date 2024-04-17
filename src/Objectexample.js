import React, {useState} from "react";

function UseStateObject (){
const[person, setPerson] = useState({
name:'peter',
age: 24,

message:'random message',

});



const[name,setName] = useState('peter')
const[age,setAge] = useState('24')
const[Message,setMessage] = useState('random message')










const changeMessage = () => {
//setPerson({...person, message:'te odio araujo'});
setMessage('hello world')

};


return(

    <React.Fragment>
<h2>{name}</h2>
<h2>{age}</h2>
<h2>{Message}</h2>
<button className="btn" onClick={changeMessage}>
    change message
</button>


</React.Fragment>

)


};


export default UseStateObject
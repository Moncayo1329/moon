import React, {useState} from "react";

function UseStateObject (){
const[person, setPerson] = useState({
name:'peter',
age: 24,

message:'random message',

});

const changeMessage = () => {
setPerson({...person, message:'te odio araujo'});

};


return(

    <React.Fragment>
<h2>{person.name}</h2>
<h2>{person.age}</h2>
<h2>{person.message}</h2>
<button className="btn" onClick={changeMessage}>
    change message
</button>


</React.Fragment>

)


};


export default UseStateObject
import React, {useState, useReducer} from "react";
import Modal from './Modal';
import { data } from "./data";


const UseReducer = () => {
    const [name,setName] = useState('');
    const [people, setPeople] = useState(data);
    const [showModal, setShowModal] = useState(false);
    const handleSubmit = (e) => {
    e.preventDefault();
    };
    
    
    return (
<>

{showModal && <Modal />}
<form onSubmit={handleSubmit} className="form">
    <div>
<input 
type="text"
value={name}
onChange={(e) => setName(e.target.value)}
/>




    </div>

<button type="submit">add person</button>

</form>

</>
)
};



export default UseReducer;
import React,{useState, useEffect} from "react";

function Multiple(){
const [loading , setLoading] = useState(true) 
if(loading) {
    return <h2>loading...</h2>

}
return <h2>Multiple return</h2>;
};



export default Multiple
// useEffect-cleanup


import React, { useEffect, useState } from "react";

function Cleanup(){
const [size, setSize] = useState(window.innerWidth);
console.log(size);

const checkSize= () => {
setSize(window.innerWidth)
};

useEffect(() => {

console.log('useEffect');
window.addEventListener('resize', checkSize);

return() => {

console.log('cleanup');
window.removeEventListener('resize', checkSize)

};

}, []);

return(

    <>
    <h1>window</h1>
    <h2>{size} Px</h2>

    </>
)




}



export default Cleanup

import React, { useState, useEffect } from "react";

function UseBasic() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if(value>=1) {
    
    document.title = `New messages (${value})`; 
}
  },[value]);


  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click here
      </button>
    </>
  );
}

export default UseBasic;

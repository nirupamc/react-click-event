import React ,{useState} from "react";

const App =()=> { 
  
  const purple = "#8e44ad";
  const[bg,setBg]=useState(purple); 
  const[name, setName]=useState("Click Me");

  const bgChange=()=>{
      // console.log('clicked');
      let newBg= "#34495e";
      setBg(newBg);
      let newName = "ayo bsdk!!";
      setName(newName);
    
  }
  const bgBack =()=>{
    
    setBg(purple);
    setName("gaali kiu de raha bhosdike!!")

  }

  return (
    <> <div style={{backgroundColor:bg}}> 
    <button onClick={bgChange} onDoubleClick={bgBack}> {name} </button>
    </div>
     
    </>
  );
}

export default App;

import React,{useState,useRef, useEffect} from "react";




export default function Stopwatch() {
    const timerIdRef = useRef(0);
    const [count, setCount] = useState(0);
    const [min, setMin] = useState(0)
  
    const startHandler = () => {
      if (timerIdRef.current) {
        return;
      }
   
      timerIdRef.current = setInterval(() => setCount((c) => c + 1), 1000);
    };
  
    const stopHandler = () => {
      clearInterval(timerIdRef.current);
      timerIdRef.current = 0;
    };

    const resetHandler = ()=>{
        clearInterval(timerIdRef.current);
        timerIdRef.current = 0;
        setCount(0)
    }
  
    useEffect(() => {
      return () => clearInterval(timerIdRef.current);
    }, []);

   
    
  
    return (
      <div>
        <div>
        <div className="timer">
            {min} mins :Timer: {count}s</div>
        </div>
     
    
        <div>
          <button onClick={startHandler}>Start</button>
          <button onClick={stopHandler}>Stop</button>
          <button onClick={resetHandler}>Reset</button>
        </div>
      </div>
    );
  }
  
export {Stopwatch}

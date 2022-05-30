import React, { useState } from 'react';
import './calculator.css';

function Calculator() {
    let [sum,setSum]= useState("");
    let [result,setResult]=useState("");
    const operators= ["+","-","/","*","="];




    const handleSum = (value) =>{
        if(
            (operators.includes(value) && sum==="") || (operators.includes(value) && operators.includes(sum.slice(-1)))
            )
           { return}
        setSum(sum + value);
        if (!operators.includes(value)){
            setResult(eval(sum + value))
        }

    }
    const handledelete = () =>{
        if(sum=== ""){
            return
        }
        setSum(sum.slice(0,-1))
    }
  return (
    <div className='calculator'>
        <div className='calculator__screen'>
              <div className='calculator__screen_text'>
               {sum || "0"}
               </div>
               
                   {result ? (<div className='result'>= {result} </div>):("")}
              
        </div>
        <div className='calculator__numbers'> 
        <div className='calculator__number_row'>
            <span className="calculator__num" onClick={()=> handleSum("7")}>7</span>
            <span className="calculator__num" onClick={()=> handleSum("8")}>8</span>
            <span className="calculator__num" onClick={()=> handleSum("9")}>9</span>
            <span className='calculator__blue' onClick={()=> handleSum("*")}>*</span>
        </div>
        <div className='calculator__number_row'>
            <span className="calculator__num" onClick={()=> handleSum("4")}>4</span>
            <span className="calculator__num" onClick={()=> handleSum("5")}>5</span>
            <span className="calculator__num" onClick={()=> handleSum("6")}>6</span>
            <span className='calculator__blue' onClick={()=> handleSum("-")}>-</span>
        </div>
        <div className='calculator__number_row'>
            <span className="calculator__num" onClick={()=> handleSum("1")}>1</span>
            <span className="calculator__num" onClick={()=> handleSum("2")}>2</span>
            <span className="calculator__num" onClick={()=> handleSum("3")}>3</span>
            <span className='calculator__blue' onClick={()=> handleSum("+")}>+</span>
        </div>
        <div className='calculator__number_row'>
            <span className='calculator__red' onClick={()=> {setResult("");setSum("")}}>C</span>
            <span className="calculator__num" onClick={()=> handleSum("0")}>0</span>
            <span className='calculator__blue' onClick={()=> handleSum("/")}>/</span>
            <span className='calculator__blue' onClick={handledelete}>D</span>
        </div>
     
        </div>
    </div>
  )
}

export default Calculator;
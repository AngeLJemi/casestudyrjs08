import React,{useState} from 'react';
import './layout.css';
import  logo from '../assests/img/logo.png';
import Output from '../output';
const Layout =(props)=>{
    let[input,setInput]= useState('0')
    let[result,setResult]=useState('')
    const handleclick=(event)=>{
        const value= event.target.value;
        if(value === '='){
            if(input !== '.'){
                let res =''
                try{
                    res = eval(input)
                }
                catch{
                    setResult('MathError')
                }
            if(res === undefined){
                setResult('MathError')
            }
            else{
                setResult(input + '=')
                setInput(res)

            }        
        }
    }
    else if(value === 'C'){
        setInput('0')
        setResult('')
    }else if(value === 'DEL'){
        let str = input;
        str=str.substr(0,str.length-1)
        setInput(str)
    }
    else if(input === '0'){
        setInput(value)
    }
    else{
        setInput((input+=value))
    }
}
    return(
        <div className="frame">
            <div className="calculator">
                <br></br>
                <Output user={input} answer={result}/>
                <img src={logo} width='100px' style={{display:"block" , marginLeft:"Auto", marginRight:"auto"}}></img> 
                <div className="keys">
                    <input type="button" value={'C'} className="button clear" onClick={handleclick}></input>
                    <input type="button" value={'DEL'} className="button clear" onClick={handleclick}></input>
                    <input type="button" value={'%'} className="button operator" onClick={handleclick}></input>
                    <input type="button" value={'/'} className="button operator" onClick={handleclick}></input>

                    <input type="button" value={'7'} className="button " onClick={handleclick}></input>
                    <input type="button" value={'8'} className="button " onClick={handleclick}></input>
                    <input type="button" value={'9'} className="button " onClick={handleclick}></input>
                    <input type="button" value={'*'} className="button operator" onClick={handleclick}></input>

                    <input type="button" value={'4'} className="button " onClick={handleclick}></input>
                    <input type="button" value={'5'} className="button " onClick={handleclick}></input>
                    <input type="button" value={'6'} className="button " onClick={handleclick}></input>
                    <input type="button" value={'+'} className="button operator" onClick={handleclick}></input>

                    <input type="button" value={'1'} className="button " onClick={handleclick}></input>
                    <input type="button" value={'2'} className="button " onClick={handleclick}></input>
                    <input type="button" value={'3'} className="button " onClick={handleclick}></input>
                    <input type="button" value={'-'} className="button operator" onClick={handleclick}></input>

                    <input type="button" value={'0'} className="button " onClick={handleclick}></input>
                    <input type="button" value={'.'} className="button " onClick={handleclick}></input>
                    <input type="button" value={'='} className="button operator equal-sign" onClick={handleclick}></input>


                </div>
            </div>
        </div>
        )
};
export default Layout;
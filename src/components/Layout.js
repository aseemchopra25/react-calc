import React, {useState} from 'react';
import './layout.css'
import logo from '../assets/img/logo.png'
import Output from './Output';

const Layout = (props) => {
    let [input, setInput] = useState('0')
    let [result, setResult] = useState('')
    const handleClick =(event) =>{
        const value = event.target.value
        if (value === '='){
            if (input !== ''){
                let res = ''
                try{
                    // eslint-disable-next-line
                    res = eval(input)
                }catch(err){
                    setResult('Math error')
                }
                if (res === undefined){
                    setResult('Math error')
                }
                else {
                    setResult(input + '=')
                    setInput(res)
                }
            }
        }
        else if (value === 'C'){
            setInput('0')
            setResult('')
        }
        else if (value === 'DEL'){
            let str = input
            if(str.length === 1){
                setInput('0')
            }
            else{
            str = str.substr(0,str.length-1)
            setInput(str)
            }
        }
        else if (input === '0'){
            setInput(value)
        }
        else {
            setInput((input+=value))
        }
    }
    return(
        <div className="frame">
            <div className="calculator">
                <br></br>
                <Output user ={input} answer = {result} />
                <img alt="logo.png" src={logo} height='70px' width='200px' style={{display:'block', marginLeft: 'auto', marginRight: 'auto',paddingTop: '1px' }} />

                <div className="keys">
                    <input type="button" value={'C'} className='button clear' onClick={handleClick}></input>
                    <input type="button" value={'DEL'} className='button clear' onClick={handleClick}></input>
                    <input type="button" value={'%'} className='button operator' onClick={handleClick}></input>
                    <input type="button" value={'/'} className='button operator' onClick={handleClick}></input>

                    <input type="button" value={'7'} className='button ' onClick={handleClick}></input>
                    <input type="button" value={'8'} className='button ' onClick={handleClick}></input>
                    <input type="button" value={'9'} className='button ' onClick={handleClick}></input>
                    <input type="button" value={'*'} className='button operator' onClick={handleClick}></input>

                    <input type="button" value={'4'} className='button ' onClick={handleClick}></input>
                    <input type="button" value={'5'} className='button ' onClick={handleClick}></input>
                    <input type="button" value={'6'} className='button ' onClick={handleClick}></input>
                    <input type="button" value={'-'} className='button operator' onClick={handleClick}></input>
                    
                    <input type="button" value={'1'} className='button ' onClick={handleClick}></input>
                    <input type="button" value={'2'} className='button ' onClick={handleClick}></input>
                    <input type="button" value={'3'} className='button ' onClick={handleClick}></input>
                    <input type="button" value={'+'} className='button operator' onClick={handleClick}></input>

                    <input type="button" value={'0'} className='button ' onClick={handleClick}></input>
                    <input type="button" value={'.'} className='button ' onClick={handleClick}></input>
                    <input type="button" value={'='} className='button operator' onClick={handleClick}></input>


                </div>


            </div>
           
        </div>
    )
};
export default Layout;
import React,{useState} from 'react'
import PropTypes from 'prop-types'
export default function Textform(props) {
    const [text,setText]=useState('');
    const handelUpClick=()=>{
       let newText=text.toUpperCase();
       setText(newText);
    }
    const handelloClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
     }
     const reset=()=>{
        
        setText("");
        props.showAlert('success','Text Has Been Resetted')
     }
    const handelOnChange=(event)=>{
        setText(event.target.value);
    }

    const handelSpace=()=>{
        setText(text.trim().split(/\s+/).join(" "));
    }
    
  return (
    <>
    <div className='conatainer' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} rows="8" value={text} onChange={handelOnChange} placeholder="Enter your Text"></textarea>
        </div>
        <button type="button" className="btn btn-primary mx-2 my-4" onClick={handelUpClick}>Convert to Uppercase</button>
        <button type="button" className="btn btn-primary mx-2 my-4" onClick={handelloClick}>Convert to Lowercase</button>
        <button type="button" className="btn btn-primary mx-2 my-4" onClick={handelSpace}>Remove ExtraSpaces</button>

        <button type="reset" className="btn btn-primary mx-2 my-4" onClick={reset}>Reset</button>
    </div>
    <div className="container my-4"  style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Text Summary</h2>
        <p><b>Words:- </b>{(text.split(/\s+/).filter((a)=>{return a.length!==0;})).length}</p>
        <p><b>Characters:- </b>{text.length}</p> 
        <h2>Preview</h2>
        <p className='my-2'>{text.length>0 ?text:'Enter Some Text In TextBox To Preview'}</p>
    </div>

    </>
  )
}
Textform.propTypes={
    heading:PropTypes.string
}
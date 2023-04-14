import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');

    const handleUpClick = () =>{
        console.log("upper case clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    
    const handleOnChange = (event) =>{
        console.log("On change");
        setText(event.target.value);
    }
    
    return (
        <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="11" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
        <div className="container my-3">
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} min read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}

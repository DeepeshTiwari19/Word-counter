import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function Textform(props) {
    const handleUppercaseClick = () => {
        // console.log('Uppercase was clicked' + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Convert to Uppercase", "success")

    }
    const handleLowercaseClick = () => {
        // console.log('Uppercase was clicked' + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Convert to LowerCase", "primary")
    }
    const handleOnChange = (event) => {
        // console.log('On change');
        setText(event.target.value)
    }
    const clearText = () => {
        let newText = "";
        setText(newText)
        props.showAlert("Text Clear", "primary")
    }
    const capitalFirstLetter = () => {
        let words = text.split(" ")
        let uppercaseword = ' '
        words.forEach(element => {
            uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "
        });
        setText(uppercaseword)
        props.showAlert("First Alphabet upperCase", "primary")
    }

    const handleCopy = () => {
        // console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        // text.setselectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to Clipboard", "primary")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Clear all extra spaces", "primary")
    }


    const [text, setText] = useState('');
    // text = "New Text";//wrong way 
    // setText("This is New"); //correct way
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} >
                <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'gray', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUppercaseClick}>Conversion to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowercaseClick}>Conversion to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={clearText}>Clear</button>
                <button className="btn btn-primary mx-2" onClick={capitalFirstLetter}>First letter Capital</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Text Copy</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>



            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text summary</h2>
                <p>   {text.split(" ").length} word and {text.length} character</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2> Preview</h2>
                <p>{text.length > 0 ? text : "Enter Something in the textbox above to preview"}</p>
                <p>{text.split(".").length} <b>Paragraph</b></p>
            </div>
        </>
    )
}
Textform.prototype = {
    heading: PropTypes.string
}





import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toLocaleUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        alert("Text is Copied Successfully");
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    // const handleSpeechClick = () => {
    //     let msg = new SpeechSynthesisUtterance(text)
    //     window.speechSynthesis.speak(msg);
    // }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 className='mb-3'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} type="button" className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length === 0} type="button" className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to LowerCase</button>
                <button disabled={text.length === 0} type="button" className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
                {/* <button type="button" className="btn btn-primary mx-2 my-2" onClick={handleSpeechClick}>Text to Speech</button> */}
                <button disabled={text.length === 0} type="button" className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy to ClipBoard</button>
                <button disabled={text.length === 0} type="button" className="btn btn-danger mx-2 my-2" onClick={handleClearClick}>Clear Text</button>

            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary :</h2>
                <p>{text.split(' ').filter((element) => { return element.length !== 0 }).length} Words, {text.length} Characters</p>
                <p>{0.008 * text.trim().split(" ").filter((element) => { return element.length !== 0 }).length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to Preview !!!"}</p>
            </div>
        </>
    )
}

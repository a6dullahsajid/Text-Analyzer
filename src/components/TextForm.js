import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleCapClick = () => {
        let newText = text[0].toUpperCase();
        for (let index = 1; index < text.length; index++) {
            if (text[index - 1] === " " || text[index - 2] === "." || text[index - 1] === "\n") {
                newText += text[index].toUpperCase();
            } else {
                newText += text[index].toLowerCase();
            }
        }
        setText(newText);
    }
    const handleInvClick = () => {
        let newText = text[0].toUpperCase();
        for (let index = 1; index < text.length; index++) {
            if (text[index - 1] === " " || text[index - 2] === "." || text[index - 1] === "\n") {
                newText += text[index].toLowerCase();
            } else {
                newText += text[index].toUpperCase();
            }
        }
        setText(newText);
    }
    const handleAltClick = () => {
        let newText = "";
        let counter = 1;
        for (let index = 0; index < text.length; index++) {
            if (counter % 2 === 0) {
                newText += text[index].toLowerCase();
            }
            else {
                newText += text[index].toUpperCase();
            }
            counter++;
        }
        setText(newText);
    }
    const handleSenClick = () => {
        let newText = text[0].toUpperCase();
        for (let index = 1; index < text.length; index++) {
            if (text[index - 2] === "." || text[index - 1] === "\n") {
                newText += text[index].toUpperCase();
            } else {
                newText += text[index].toLowerCase();
            }
        }
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    // text= "Abdullah" //wrong way
    // setText("Abdullah");
    return (
        <>
            <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h1>
                    {props.heading}
                </h1>
                <div className="mb-3">
                    <textarea className={`form-control mb-4`} value={text} onChange={handleOnChange} id="myTextBox" rows="12"></textarea>
                    <div className="container">
                        <h5 className="converter mb-2">Convert to:</h5>
                        <div className="buttons">
                            <button className="btn btn-primary " onClick={handleUpClick}>UPPER CASE</button>
                            <button className="btn btn-success " onClick={handleLoClick}>lower case</button>
                            <button className="btn btn-warning " onClick={handleCapClick}>Capitalized Case</button>
                            <button className="btn btn-danger " onClick={handleAltClick}>aLtErNaTiNg CAsE</button>
                            <button className="btn btn-info " onClick={handleInvClick}>iNVERSE cASE</button>
                            <button className="btn btn-secondary " onClick={handleSenClick}>Sentence Case</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`container my-4 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h3>Text Summary</h3>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>Average {0.008 * text.split(" ").length} minutes reading time</p>
            </div>
        </>
    )
}

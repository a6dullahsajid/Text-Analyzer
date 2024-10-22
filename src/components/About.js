import React from 'react';

export default function About(props) {
    return (
        <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.aboutTexts}</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            UPPER CASE
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>UPPER CASE Button:</strong> This button converts all the text to uppercase. For example, "hello world" becomes "HELLO WORLD".
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            lower case
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>lower case Button:</strong> This button converts all the text to lowercase. For example, "HELLO WORLD" becomes "hello world".
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Capitalized Case
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Capitalized Case Button:</strong> This button capitalizes the first letter of each word or sentence, making the text easier to read. For example, "hello world" becomes "Hello World".
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            aLtErNaTiNg CAsE
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>aLtErNaTiNg CAsE Button:</strong> This button alternates between uppercase and lowercase for each character in the text. For example, "hello" becomes "HeLlO".
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            iNVERSE cASE
                        </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>iNVERSE cASE Button:</strong> This button inverses the case of each character. Uppercase letters become lowercase and lowercase letters become uppercase. For example, "Hello World" becomes "hELLO wORLD".
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                            Sentence Case
                        </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Sentence Case Button:</strong> This button converts the text to sentence case, meaning that the first letter of each sentence is capitalized, while the rest of the sentence is in lowercase. For example, "hello. how are you?" becomes "Hello. How are you?"
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

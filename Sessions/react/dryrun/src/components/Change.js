import React, { useState } from 'react'

const Change = () => {
    const [text, setText] = useState("FMA") 
    return (
        <div>
            <p id="text">{text}</p>
            <button onClick={() => setText("Future Minds Academy")}>
                Change
            </button>
        </div>
    )
}

export default Change;

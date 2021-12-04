import React, {useEffect, useRef, useState} from 'react';

const TextareaAutosize = () => {
    const textarea = useRef(null);
    const [input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    useEffect(() => {
        textarea.current.style.height = "30px"
        const scrollHeight = textarea.current.scrollHeight;
        textarea.current.style.height = scrollHeight + "px"
    }, [input])

    return (
        <div style={styles.content}>
            <h2>Autosize Textarea</h2>
            <textarea ref={textarea} onChange={handleChange}>
                {input}
            </textarea>
        </div>
    )
}

const styles = {
    content: {
        padding: 5,
        backgroundColor: 'white',
    }
}

export default TextareaAutosize;

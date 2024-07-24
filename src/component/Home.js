import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    }
    const handleClear = (e) => {
        setInput('');
    }
    const handleUpperCase = () => {
        var string = input;
        setInput(string.toUpperCase());
    }
    const handleLowerCase = () => {
        var string = input;
        setInput(string.toLocaleLowerCase());
    }
    const handleCopyText = () => {
        var copyText = document.getElementById("myInput");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        if (countWord(input) > 0) {
            toast.success('Text Copied!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            toast.error('Text not Copied! Please Enter Text First', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    const countWord = (input) => {
        return input.trim().split(/\s+/).filter(word => word.length > 0).length;
    }

  
    return (
        <div className={'container my-3'}>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Enter Text Here</Form.Label>
                    <Form.Control as="textarea" id='myInput' placeholder='enter text here' rows={3} value={input} onChange={handleChange} />
                </Form.Group>
                <Button variant="success" onClick={handleClear}>Clear Text</Button>
                <Button variant="success mx-2" onClick={handleUpperCase}>Uppercase Text</Button>
                <Button variant="success" onClick={handleLowerCase}>Lowercase Text</Button>
                <Button variant="success mx-2" onClick={handleCopyText}>Copy Text</Button>
            </Form>
            <div className="counter my-2" style={{ textAlign: 'left' }}>
                <p>{countWord(input)} words.</p>
            </div>
            <ToastContainer />
        </div>
    )
}

import React, { useState, useEffect } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };


    useEffect(() => {
        let test = false;
        debugger;
        test = !test;//"runs once"
        debugger;
        console.log("frist contact render");
    }, []);

    return (
        <div id="contact" className="contact-section">
              <h2>Contact Me</h2>
              <p>If you have any questions or would like to get in touch, please fill out the form below:</p>
            hiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
        </div>
        );



}


export default Contact;
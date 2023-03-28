import React from 'react';

function Contact() {

    // document.getElementById("submit").addEventListener("click", submitContact());

    // function submitContact() {
    //     console.log("submit");
    // };

    return (
        <section>
            <h1 className="text-center" id="contact">Contact Me</h1>

            <div className="row text-center contact-links">
                <div className="col"></div>
                <div className="col-3">Hello</div>
                <div className="col-3">Hello</div>
                <div className="col-3">Hello</div>
                <div className="col"></div>
            </div>

            <div className="row text-center">
                <div className="col-2"></div>
                <div className="col-8">
                    <h1>Or Message Me Directly Here:</h1>
                    <div className="form-floating my-3">
                        <input type="text" className="form-control" id="name" placeholder="Your name here"></input>
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating my-3">
                        <input type="email" className="form-control" id="address" placeholder="name@example.com"></input>
                        <label htmlFor="address">Email Address</label>
                    </div>
                    <div className="form-floating my-3">
                        <input type="text" className="form-control" id="message" placeholder="Message"></input>
                        <label htmlFor="message">Message</label>
                    </div>
                    <div id="button-container">
                        <button type="submit" id="submit">Submit</button>
                    </div>
                </div>
                <div className="col-2"></div>
            </div>
        </section>
    );
}

export default Contact;
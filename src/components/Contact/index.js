import React from 'react';

function Contact() {

    return (
        <section>
            <h1 className="text-center">Contact Me</h1>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
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
                </div>
                <div className="col-2"></div>
            </div>
        </section>
    );
}

export default Contact;
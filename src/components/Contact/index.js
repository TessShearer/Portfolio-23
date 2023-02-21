import React from 'react';

function Contact() {

    return (
        <section>
            <h1 class="text-center">Contact Me</h1>
            <div class="row">
                <div class="col-2"></div>
                <div class="col-8">
                    <div class="form-floating my-3">
                        <input type="text" class="form-control" id="name" placeholder="Your name here"></input>
                        <label for="name">Name</label>
                    </div>
                    <div class="form-floating my-3">
                        <input type="email" class="form-control" id="address" placeholder="name@example.com"></input>
                        <label for="address">Email Address</label>
                    </div>
                    <div class="form-floating my-3">
                        <input type="text" class="form-control" id="message" placeholder="Message"></input>
                        <label for="message">Message</label>
                    </div>
                </div>
                <div class="col-2"></div>
            </div>
        </section>
    );
}

export default Contact;
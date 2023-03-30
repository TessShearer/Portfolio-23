import React from 'react';

function Contact() {

    function contactSubmit() {
        console.log("submit");
    };

    return (
        <section>

            <div className="spacing"></div>
            <h1 className="text-center" id="contact">Contact Me</h1>

            <div className="row text-center contact-links">
                <div className="col"></div>
                <div className="col-3">
                    801-310-9809
                </div>
                <div className="col-3">
                    shearer.tess@gmail.com
                </div>
                <div className="col-3">
                    <a href="https://www.linkedin.com/in/tess-shearer-a343b2232/" target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
                <div className="col"></div>
            </div>

            <form className="row text-center" id="contact-form">
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
            </form>
        </section>
    );
}

export default Contact;

// import React from 'react';
// import axios from 'axios';
// class Contact extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       email: '',
//       message: ''
//     }
//   }
//   handleSubmit(e){
//     e.preventDefault();
//     axios({
//       method: "POST",
//       url:"http://localhost:3002/send",
//       data:  this.state
//     }).then((response)=>{
//       if (response.data.status === 'success') {
//         alert("Message Sent.");
//         this.resetForm()
//       } else if (response.data.status === 'fail') {
//         alert("Message failed to send.")
//       }
//     })
//   }
//   resetForm(){
//     this.setState({name: '', email: '', message: ''})
//   }
//   render() {
//     return(
//       <div className="Contact">
//         <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
//           <div className="form-group">
//               <label htmlFor="name">Name</label>
//               <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
//           </div>
//           <div className="form-group">
//               <label htmlFor="exampleInputEmail1">Email address</label>
//               <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
//           </div>
//           <div className="form-group">
//               <label htmlFor="message">Message</label>
//               <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
//           </div>
//           <button type="submit" className="btn btn-primary">Submit</button>
//         </form>
//       </div>
//     );
//   }
//   onNameChange(event) {
// 	  this.setState({name: event.target.value})
//   }
//   onEmailChange(event) {
// 	  this.setState({email: event.target.value})
//   }
//   onMessageChange(event) {
// 	  this.setState({message: event.target.value})
//   }
// }
// export default Contact;
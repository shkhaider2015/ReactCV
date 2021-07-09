import React from 'react'
import EmailJS from "emailjs-com";
import { ServiceID, TemplateID, UserID } from "../Config/EmailKey";

const ContactComp = () =>
{
  const [message, setMessage] = React.useState("");
  const handleSubmit = (ev:any) => 
  {
    ev.preventDefault();
    const data = {
      from_name : ev.target.name.value,
      from_email : ev.target.email.value,
      from_message : ev.target.message.value,
      to_name : "Shakeel Haider"
    }

    EmailJS.send(ServiceID, TemplateID, data , UserID )
    .then((result) => {
      setMessage("Your message sent successfully")
    })
    .catch((err) => {console.error(err)})

  }
    return <div>
    <div className="map" id="map">
    <iframe title="mymap" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d904.5166727054144!2d67.0169418!3d24.9297979!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ff3c6154119%3A0x1201ba9db9b05a81!2sMadina%20Masjid!5e0!3m2!1sen!2s!4v1605634646451!5m2!1sen!2s" width={870} height={380} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
  </div>
  <h2 className="title title--h3">Contact Form</h2> <p> {message} </p>
  <form onSubmit={e => handleSubmit(e) } >
    <div className="row">
      <div className="form-group col-12 col-md-6">
        <i className="font-icon icon-user" />
        <input type="text" className="input input__icon form-control name"  id="name" name="name" placeholder="Full name" required={true} autoComplete="on"  />
        <div className="help-block with-errors" />
      </div>
      <div className="form-group col-12 col-md-6">
        <i className="font-icon icon-envelope" />
        <input type="email" className="input input__icon form-control email"  id="email" name="email" placeholder="Email address" required={true} autoComplete="on"  />
        <div className="help-block with-errors" />
      </div>
      <div className="form-group col-12 col-md-12">
        <textarea className="textarea form-control message" id="message" name="message"  placeholder="Your Message" rows={4} required={true}  />
        <div className="help-block with-errors" />
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-md-6 order-2 order-md-1 text-center text-md-left">
        <div id="validator-contact" className="hidden" />
      </div>
      <div className="col-12 col-md-6 order-1 order-md-2 text-right">
        <button type="submit" name="submit" value="Send" className="btn"><i className="font-icon icon-send site-btn" /> Send Message</button>
      </div>
    </div>
  </form>
</div>
}

export {ContactComp};
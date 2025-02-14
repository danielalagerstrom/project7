import { Link } from "react-router-dom";
import { useState } from 'react';

function Contact() {
  
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');
const handleSubmit = (e) => {
e.preventDefault();
alert(`Message sent by ${name}`);
setName('');
setEmail('');
setMessage('');
};

return (
<section className="contact">
<h2 className="about">Location</h2>
      <p>Address: 456 Culinary Avenue Gourmet Town, 1010 Vienna, Austria</p>
      <h2 className="about">Opening hours</h2>
      <p>Monday-Friday 9:00-15:00</p>
      <h2 className="about">Telephone</h2>
      <p>+43 44 532 66</p>
      <h2 className="about">Email</h2>
      <p>hello@dishdelights.com</p>

<p className="feedback">Any questions or feedback? Feel free to send us a message! </p>
<p>If you wish us to get back to you, please include your contact details in the message.</p>
<form onSubmit={handleSubmit}>
<textarea className="input-area"
type="text"
value={name}
onChange={(e) => setName(e.target.value)}
placeholder="Name"
required
/>

<textarea className="input-area"
value={message}
onChange={(e) => setMessage(e.target.value)}
placeholder="Message"
required
/>
<button className="btn primary" type="submit">Send</button>
</form>
</section>
);
}

export default Contact;

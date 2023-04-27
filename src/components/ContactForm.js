import "./ContactFormStyles.css"

function ContactForm () {
    return (
        <div className="form-container">
            <h1>Send a message to us!</h1>
            <form>
                <input placeholder="Full Name" required/>
                <input placeholder="Email" required/>
                <input placeholder="Subject" required/>
                <textarea placeholder="Type a message" rows={4} required></textarea>
                <button>Send Message</button>
            </form>
        </div>
    )
}

export default ContactForm;
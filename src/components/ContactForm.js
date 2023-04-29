import "./ContactFormStyles.css";
import axios from "axios";
import React, { useState } from "react";

function ContactForm() {
  const [form, setForm] = useState({
    FullName: {
      placeholder: "Full Name",
      value: "",
    },
    Email: {
      placeholder: "Email",
      value: "",
    },
    Subject: {
      placeholder: "Subject",
      value: "",
    },
    Message: {
      placeholder: "Message",
      value: "",
    },
  });
  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      const mess = {
        email: form.Email.value,
        message: form.Message.value,
        subject: form.Message.value,
        name: form.FullName.value,
      };
      const { data } = await axios.post("http://localhost:3000/new", mess);
      console.log(data);
      console.log("successful");
    } catch (error) {
      console.log(error);
    }
  };
  const formOutput = Object.keys(form).map((item, id) => {
    return (
      <input
        key={id}
        placeholder={form[item].placeholder}
        value={form[item].value}
        onChange={(e) => {
          const val = e.target.value;
          setForm(() => {
            return {
              ...form,
              [item]: {
                ...form[item],
                value: val,
              },
            };
          });
        }}
        required
      />
    );
  });

  return (
    <div className="form-container">
      <h1>Send a message to us!</h1>
      <form>
        {formOutput}
        <button onClick={sendMessage}>Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;

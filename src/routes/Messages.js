import React, { useState } from "react";
import axios from "axios";

const Messages = () => {
  const [message, setMessages] = useState([]);
  const [password, setPassword] = useState("");
  const getMessages = async () => {
    try {
      const pass = {
        password,
      };
      const { data } = await axios.post("http://localhost:3000/get", pass);
      console.log(data);
      setMessages(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Messages on The Serve</h1>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <ol>
        {message.map((item) => {
          return <li>{item.message}</li>;
        })}
      </ol>
      <div>
        <button style={{ display: "block" }} onClick={getMessages}>
          Show mesages
        </button>
      </div>
    </div>
  );
};

export default Messages;

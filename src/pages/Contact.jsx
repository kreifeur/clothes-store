import axios from "axios";
import { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState({
    name: "",
    contact: "",
    message: "",
  });
  const sendmessage = () => {
    console.log(message);
    axios.post("https://kreifeur.pythonanywhere.com/api/messages/", message);
    setMessage({ name: "", contact: "", message: "" });
  };
  return (
    <div className="mt-[10vh] h-[83vh] w-[100%] flex items-center justify-center flex-col gap-4 p-4">
      <div className="text-center text-2xl font-bold">CONTACT US</div>
      <div className="md:w-[70%] w-[100%] h-[80%] border flex flex-col p-4 justify-between">
        <div className="flex justify-between flex-col md:flex-row gap-4 h-[20%] items-center">
          <input
          value={message.name}
            onChange={(e) => setMessage({ ...message, name: e.target.value })}
            className="px-4 py-2 border outline-none md:w-[40%] w-[100%] h-[35px]"
            placeholder="Full name"
            type="text"
          />
          <input
          value={message.contact}
            onChange={(e) =>
              setMessage({ ...message, contact: e.target.value })
            }
            className="px-4 pyonChange={(e)=>setMessage({...message , name:e.target.value})}-2 border outline-none md:w-[40%] w-[100%] h-[35px]"
            placeholder="Email or Phone number"
            type="text"
          />
        </div>
        <textarea
        value={message.message}
          onChange={(e) => setMessage({ ...message, message: e.target.value })}
          placeholder="Your message ..."
          className="px-4 py-1 border outline-none h-[60%]"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button
          onClick={sendmessage}
          className="px-4 py-2 border bg-black text-white w-[30%]"
        >
          {" "}
          Send
        </button>
      </div>
    </div>
  );
};

export default Contact;

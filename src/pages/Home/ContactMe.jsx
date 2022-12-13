import React, { useRef, useState } from "react";
import emailjs, { sendForm } from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactMe = () => {
  const [text, setText] = useState("font-normal");
  const handleOnfocus = (e) => {
    e.preventDefault();
    setText("font-bold");
  };
  const handleOnbluer = (e) => {
    e.preventDefault();
    setText("font-normal");
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t312ek2",
        "template_t8jcw2f",
        form.current,
        "2AnYbZ4lSoYEcCvyu"
      )
      .then(
        (result) => {
          toast.success("Successfully send");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="my-6 pb-6 px-6">
      <h1 className="text-4xl font-bold my-3  text-center uppercase">
        Contact Me
      </h1>
      <form className="my-10" ref={form} onSubmit={sendEmail}>
        <div className="grid md:grid-cols-2 gap-2">
          <input
            type="text"
            name="user_name"
            className="input rounded-none input-style w-full px-0"
            placeholder="NAME*"
            id=""
            required
          />
          <input
            type="email"
            name="user_email"
            className="input  w-full rounded-none input-style px-0"
            placeholder="EMAIL*"
            id=""
            required
          />
        </div>
        <textarea
          className={`textarea ${text} rounded-none input-style w-full my-3 py-10 px-0`}
          placeholder="MESSAGE*"
          name="message"
          required
          onFocus={handleOnfocus}
          onBlur={handleOnbluer}
        ></textarea>
        <div className="text-center ">
          <button
            type="submit"
            className="my-bg-red p-2 my-text font-semibold  px-6 text-center mt-3"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactMe;

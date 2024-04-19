import React, { useState } from "react";
import emailjs from "@emailjs/browser";

// COMPONENTS IMPORTS
import Footer from "../components/Footer";
import Input from "../components/Input";
import PrimaryBtn from "../components/PrimaryBtn";
import { Link } from "react-router-dom";

const Contact = () => {
  // STATES AND VARIABLE
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // FUNCTIONS
  const checkFormValidation = () => {
    if (
      formInput.name.length < 3 ||
      formInput.subject.length < 3 ||
      formInput.message.length < 3
    ) {
      alert("Please Properly fill the inputs");
      return false;
    }
    if (!formInput.email.includes("@") || formInput.email.length < 10) {
      alert("Please Enter Valid Email");
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  const sendEmail = () => {
    if (checkFormValidation()) {
      emailjs.init(import.meta.env.VITE_EMAIL_USER_ID);
      emailjs
        .send(
          import.meta.env.VITE_EMAIL_SERVICE_ID,
          import.meta.env.VITE_EMAIL_TEMPLATE_ID,
          formInput
        )
        .then(
          () => {
            alert("Email send successfuly");
            setFormInput({
              name: "",
              email: "",
              subject: "",
              message: "",
            });
          },
          (error) => {
            alert("FAILED...", error);
          }
        );
    }
  };

  return (
    <div className="xl:h-screen flex flex-col justify-between w-full bg-[#EEF5FF]">
      <div className="md:p-10 p-5 flex flex-col">
        <h3 className="mb-5 ml-5  text-xl md:text-2xl ">
          <Link className="hover:underline" to="/">
            Home
          </Link>
          {" /"}
          <span className="font-semibold decoration-hover text-brand underline cursor-pointer">
            Contact Us
          </span>
        </h3>
        <div className="flex flex-col md:flex-row ">
          <div className="md:w-1/2 bg-white p-5 rounded-lg shadow-lg m-5">
            <p className="text-xl lg:text-3xl font-semibold">
              Do you have more questions? Thoughts? Suggestions?
            </p>
            <p className="my-5">
              If you have any further questions, thoughts, or comments on our
              work, we would love to hear from you. There are a few different
              ways you can get in touch with us.
            </p>
            <div className="my-5 ">
              <span>You can </span>
              <a
                className="text-brand underline hover:text-hover"
                href=" https://calendly.com/mahis/dobb-e"
              >
                Schedule a call <i className="bi bi-telephone-plus-fill"></i>
              </a>
            </div>
            <div className="my-5 ">
              <span>Email Us: </span>
              <a
                className="underline text-brand hover:text-hover"
                href="mailto:Contact@OpenDroids.com"
              >
                Contact@OpenDroids.com
              </a>
            </div>
            <div className="my-5">
              <p className="font-bold">connect with us</p>
              <ul className="flex child-hover:text-brand my-3">
                <li>
                  <a
                    className="m-2 hover:underline"
                    href="https://twitter.com/notmahi"
                  >
                    <i className="bi bi-twitter-x"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="m-2 hover:underline"
                    href="https://www.linkedin.com/in/nshafiul/"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="m-2 hover:underline"
                    href="https://discord.gg/wzzZJxqKYC"
                  >
                    <i className="bi bi-discord"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="m-2 hover:underline"
                    href="https://www.instagram.com/thesecondsonofman/"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* -------------- CONTACT FORM CANCEL due to server side ------------------------- */}
          <div className="bg-white md:w-full rounded-lg shadow-md p-5 m-5">
            <p className="font-semibold text-xl mx-5">Send us a message</p>
            <form
              action="mailto:someone@example.com"
              encType="text/plain"
              className="flex flex-col"
            >
              <Input
                type="text"
                placeholder="Your Name"
                name="name"
                value={formInput.name}
                handleChange={handleChange}
              />
              <Input
                type="email"
                placeholder="Your Email"
                name="email"
                value={formInput.email}
                handleChange={handleChange}
              />
              <Input
                type="text"
                placeholder="Your Subject"
                name="subject"
                value={formInput.subject}
                handleChange={handleChange}
              />
              <textarea
                rows={5}
                type="text"
                placeholder="Your Message"
                name="message"
                value={formInput.message}
                onChange={handleChange}
                className="bg-[#EEF5FF] m-5 rounded-lg px-5 py-3 text-lg md:w-1/2 outline-brand"
              />
              <div className="m-5 w-1/2">
                <PrimaryBtn title="Submit" handleClick={sendEmail} />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
// <div className="bg-white md:w-1/3 rounded-lg shadow-md p-5 m-5">
//   <div>
//     <h3 className="font-semibold text-lg">Our Team</h3>
//     <ul>
//       <li><a href="https://mahis.life/">Mahi Shafiullah</a></li>
//       <li><a href="https://raianant.github.io/">Anant Rai</a></li>
//       <li><a href="https://haritheja.com/">Haritheja Etukuru</a></li>
//       <li><a href="https://www.linkedin.com/in/eva-liu-ba90a5209/">Yiqian Liu</a></li>
//     </ul>
//   </div>
//   <div>
//     <h3 className="font-semibold text-lg">Our Advisory</h3>
//     <ul>
//       <li><a href="https://imisra.github.io/">Ishan Misra</a></li>
//       <li><a href="https://soumith.ch/">Soumith Chintala</a></li>
//       <li><a href="https://www.lerrelpinto.com/">Lerrel Pinto</a></li>
//     </ul>
//   </div>
// </div>

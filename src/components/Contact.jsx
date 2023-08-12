import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#041C32] flex justify-center items-center p-4"
    >
      <form
        action="https://getform.io/f/c67eb23d-2a34-4f04-8ab1-8922dd75f2f1"
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#ec3434] text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below or shoot me an email - jhn4820@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 focus:outline-none shadow-sm shadow-black"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] focus:outline-none shadow-sm shadow-black"
          type="text"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2 focus:outline-none shadow-sm shadow-black"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-[#ec3434] hover:border-[#ec3434] px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collabrorate
        </button>
      </form>
    </div>
  );
};

export default Contact;

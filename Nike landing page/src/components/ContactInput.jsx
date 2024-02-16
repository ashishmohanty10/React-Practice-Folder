import React from "react";

const ContactInput = () => {
  return (
    <div>
      <form method="POST"
        action="https://formsubmit.co/rd209208@gmail.com"
        className="flex flex-col justify-center items-center space-y-5"
      >
        <input
          type="text" name="name"
          placeholder="name"
          className="w-[90%] p-4 rounded-sm outline-gray-400"
        />
        <input
          type="email" name="email"
          placeholder="E-mail"
          className="w-[90%] p-4 rounded-sm outline-gray-400"
        />

        <textarea
          name="text"
          id=""
          rows="10"
          placeholder="Description....."
          className="w-[90%] p-4 rounded-sm outline-gray-400"
        ></textarea>

        <button type="submit" className="py-2 px-4 bg-red-600 rounded-md shadow-sm text-sm text-slate-50 font-semibold">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactInput;

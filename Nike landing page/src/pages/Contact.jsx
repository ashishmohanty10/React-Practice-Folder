import React from "react";
import FAQ from "../components/FAQ";
import ContactInput from "../components/ContactInput";

const Contact = () => {
  return (
    <div name="contact" className="bg-slate-100 h-[100vh - 80px]">
      <div className="container py-10 space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-5 justify-center items-center">
        <div>
          <FAQ />
        </div>

        <div>
          <ContactInput />
        </div>
      </div>
    </div>
  );
};

export default Contact;

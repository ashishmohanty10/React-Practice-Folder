import React from "react";

const Location = () => {
  return (
    <div id="location" className="bg-slate-200 py-10">
      <div className="container flex flex-col justify-center items-center space-y-10">

      <h2 className="text-2xl font-semibold text-slate-900 border-b-2 border-red-600">
            Location
          </h2>
        
          <iframe className="w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6789.009481150431!2d-74.0024869509914!3d40.71449539886898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1703623436973!5m2!1sen!2sin"
            width="600"
            height="450"
            loading="lazy"
          />
        
      </div>
    </div>
  );
};

export default Location;

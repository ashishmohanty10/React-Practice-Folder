import React, { useState } from "react";
import Accordion from "./Accordion";

const FAQ = () => {
 
  return (
    <div>
      <h2 className=" text-2xl font-semibold text-slate-900 border-b-2 border-red-600 inline-flex mb-5">
        FAQ
      </h2>

      <div className="">
        <Accordion title="About Payment Issues" answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."/>

        <Accordion title="About Delivery Issues" answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."/>
      </div>
    </div>
  );
};

export default FAQ;

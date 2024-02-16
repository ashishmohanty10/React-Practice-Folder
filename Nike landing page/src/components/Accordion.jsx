import { useState } from "react";
import React from "react";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";

const Accordion = ({title,answer}) => {
  const [accordionOpen, setAccordionOPen] = useState(false);
  return (
    <div>
      <div
        onClick={() => setAccordionOPen(!accordionOpen)}
        className="flex justify-between items-center py-2 rounded-md"
      >
        <h3 className="text-lg font-medium ">{title}</h3>
        {accordionOpen ? <RxCaretDown /> : <RxCaretUp />}
      </div>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-800 text-sm ${
          accordionOpen
            ? "grid-rows=[1fr] opacity-100"
            : "grid-rows=[0fr] opacity-0"
        }`}
      >
        <p className="overflow-hidden font-normal">
          {answer}
        </p>
      </div>

    </div>
  );
};

export default Accordion;

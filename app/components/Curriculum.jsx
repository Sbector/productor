'use client'
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import ProducerExperience from "./ProducerExperience";


export default function Curriculum() {

  return (
    <Accordion selectionMode="multiple" className="
    px-0 pb-14
    " 
    showDivider='false'>
      <AccordionItem key="1" aria-label="Accordion 2" title="Curriculum" className="
                    text-base text-gray-50 font-bold
                    pb-3
                    md:text-lg
                    xl:text-xl
                    ">
        <ProducerExperience />
      </AccordionItem>
    </Accordion>
  );
}

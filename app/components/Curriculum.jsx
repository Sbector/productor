'use client'
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import ProducerExperience from "./ProducerExperience";
import ArtistExperience from "./ArtistExperience";

export default function Curriculum() {

  return (
    <Accordion selectionMode="multiple" className="
    px-0 pb-14
    " 
    showDivider='false'>
      <AccordionItem key="2" aria-label="Accordion 1" title="Artista contemporáneo" className="mb-2 text-green-200 hover:text-green-500">
        <ArtistExperience />
      </AccordionItem>
      <AccordionItem key="1" aria-label="Accordion 2" title="Productor de arte" className="mt-2 text-green-200 hover:text-green-500">
        <ProducerExperience />
      </AccordionItem>
    </Accordion>
  );
}

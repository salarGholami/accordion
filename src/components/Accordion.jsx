import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const data = [
  {
    id: 1,
    title: "Accordion one ",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit eligendi, vitae saepe amet dignissimos ducimus reiciendis nihil quaerat sed quod mollitia expedita quis eveniet doloribus nobis enim nemo possimus rerum.",
  },
  {
    id: 2,
    title: "Accordion two ",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit eligendi, vitae saepe amet dignissimos ducimus reiciendis nihil quaerat sed quod mollitia expedita quis eveniet doloribus nobis enim nemo possimus rerum.",
  },
  {
    id: 3,
    title: "Accordion three ",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit eligendi, vitae saepe amet dignissimos ducimus reiciendis nihil quaerat sed quod mollitia expedita quis eveniet doloribus nobis enim nemo possimus rerum.",
  },
];

function Accordion() {
  return (
    <div className="accordion">
      {data.map((item) => (
        <AccordionItem item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Accordion;

function AccordionItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`accordion-item ${isOpen ? "accordion__expanded" : ""}`}>
      <div
        className="accordion-item__header"
        onClick={() => setIsOpen((is) => !is)}
      >
        <div>{item.title}</div>
        <ChevronDownIcon
          className="accordion-item__chevron"
          // style={{
          //   width: "1.2rem",
          //   transition: "all 0.2s ease-out",
          //   rotate: isOpen ? "180deg" : "0deg",
          // }}
        />
      </div>
      <div className="accordion-item__content">{item.text}</div>
    </div>
  );
}

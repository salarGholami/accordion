import { useState } from "react";

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
        {item.title}
      </div>
      <div className="accordion-item__content">{item.text}</div>
    </div>
  );
}

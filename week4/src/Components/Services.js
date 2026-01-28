import React from 'react';
import Mycart from './Mycart';
import { FaTools, FaPlus, FaCog } from "react-icons/fa";

const cards = [
  {
    icon: FaTools,
    title: "Web Development",
    description: "I build modern web applications using React, Next.js, and more.",
    extra: "Frontend & Backend"
  },
  {
    icon: FaPlus,
    title: "UI/UX Design",
    description: "Designing beautiful and user-friendly interfaces for your projects.",
    extra: "Figma, Adobe XD"
  },
  {
    icon: FaCog,
    title: "Automation",
    description: "Automate your workflow and business processes with custom solutions.",
    extra: "Python, Node.js"
  }
];

export default function Services() {
  return (
    <div className="bg-[#0a0e2a] text-white w-full px-10 py-10">
      <h2 className="text-2xl font-bold mb-2">Services I Offer</h2>
      <p className="mb-6">
        Legendary assassin John Wick (Keanu Reeves) retired from his violent career after marrying the love of his life. Her sudden death leaves John in deep mourning. When sadistic mobster Iosef Tarasov (Alfie Allen) and his thugs steal John's prized car and kill the puppy that was a last gift from his wife, John unleashes the remorseless killing machine within and seeks vengeance. Meanwhile, Iosef's father (Michael Nyqvist) -- John's former colleague -- puts a huge bounty on John's head.
      </p>
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
        {cards.map((card, index) => (
          <Mycart 
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            extra={card.extra}
          />
        ))}
      </div>
    </div>
  );
}

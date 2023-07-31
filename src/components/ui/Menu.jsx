import { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";

export default function Menu({ title, items }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section>
      <nav className="grid gap-y-2 md:gap-y-4">
        <h6 className="text-lg text-primary-brand-color flex items-center justify-between">
          {title}
          <button className="grid md:hidden w-6 h-6 place-items-center rounded-lg bg-primary-brand-color bg-opacity-10 text-primary-brand-color">
            <span
              className={`transition-all transform ${
                isOpen ? "-rotate-180" : ""
              }`}
            >
              <IoIosArrowDown size={14} />
            </span>
          </button>
        </h6>

        <nav>
          <ul className="grid gap-y-1 md:gap-y-2">
            {items.map((item, key) => (
              <li key={key}>
                <a href="#" className="text-sm hover:text-brand-color">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </nav>
    </section>
  );
}

import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import ReactFlagsSelect from "react-flags-select";

function HerosectionInside() {
  const [selected, setSelected] = useState("TR");
  const phones = {
    US: "+1",
    DE: "+50",
    TR: "+90",
    IT: "+7",
    IN: "+15",
  };

  return (
    <div className="container flex justify-between items-center absolute top-0 left-0 md:left-1/2 translate-x-0 md:-translate-x-1/2 h-full z-20">
      <div className=" hidden md:block">
        <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" />
        <h3 className="text-4xl mt-8 font-semibold text-white">
          Dakikalar içinde <br /> kapınızda <br />
        </h3>
      </div>
      <div className="w-full md:w-[400px] rounded-lg bg-gray-50 p-6">
        <h4 className="text-primary-brand-color text-center font-semibold mb-4">
          Giriş yap veya kayıt ol
        </h4>
        <div class="grid gap-y-3">
          <div className="flex gap-x-2">
            <ReactFlagsSelect
              countries={Object.keys(phones)}
              customLabels={phones}
              onSelect={(code) => setSelected(code)}
              selected={selected}
              className="flag-select"
            />
            <label className="flex-1 relative group block cursor-pointer">
              <input
                required
                className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors group-hover:border-primary-brand-color focus:border-primary-brand-color outline-none peer text-sm pt-2"
              />
              <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">
                Telefon Numarası
              </span>
            </label>
          </div>
          <button className="bg-brand-yellow text-primary-brand-color transition-colors hover:bg-primary-brand-color hover:text-brand-yellow h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold ">
            Telefon numarası ile devam et
          </button>
          <hr className="h-[1px] bg-gray-300 my-2" />
          <button className="bg-blue-700 bg-opacity-10 text-blue-700 px-4 text-opacity-80 transition-colors hover:bg-blue-700 hover:text-white h-12 flex items-center rounded-md w-full text-sm font-semibold ">
            <FaFacebook size={24} />
            <span className="mx-auto">Facebook ile devam et</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HerosectionInside;
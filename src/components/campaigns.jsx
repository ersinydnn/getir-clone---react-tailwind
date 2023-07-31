import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Banners from "../api/banners.json";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function NextBtn({ onClick }) {
  return (
    <button
      className={`text-brand-color absolute top-1/2 -right-6 -translate-y-1/2`}
      onClick={onClick}
    >
      <IoIosArrowForward size={22} />
    </button>
  );
}

function PrevBtn({ onClick }) {
  return (
    <button
      className={`text-brand-color absolute top-1/2 -left-6 -translate-y-1/2`}
      onClick={onClick}
    >
      <IoIosArrowBack size={22} />
    </button>
  );
}

function Campaigns() {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    setBanners(Banners);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: "linear",
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto md:pt-8">
      <div className="hidden md:block">
        <h3 className="font-semibold text-sm mb-2">Kampanyalar</h3>
      </div>
      <Slider className="md:-mx-2" {...settings}>
        {banners.length &&
          banners.map((banner, index) => (
            <div key={banner.id}>
              <picture className="block md:px-2">
                <img src={banner.image} className="md:rounded-lg" />
              </picture>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default Campaigns;
<h3 className="font-semibold text-sm mb-2">Kampanyalar</h3>;

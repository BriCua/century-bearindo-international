import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../sanityClient";

export default function SpinCard() {
  const [services, setServices] = useState([]);
  const [index, setIndex] = useState(0);
  const [rotating, setRotating] = useState(false);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "service"] | order(_createdAt asc){
          _id,
          name,
          "images": image.asset->url,
          desc
        }`
      )
      .then((data) => setServices(data))
      .catch(console.error);
  }, []);

  const handleClick = () => {
    setRotating(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % services.length);
      setRotating(false);
    }, 300); // matches the spin duration
  };

  if (!services.length) {
    return <div>Loading...</div>;
  }

  const { name, desc, images, _id } = services[index];

  return (
    <div
      className="flipcard relative group w-80 cursor-pointer perspective overflow-visible float"
      onClick={handleClick}
    >
      <div
        className={`relative w-full h-full rounded-xl shadow-lg shadow-color transition-transform duration-300 transform-style-3d ${
          rotating ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Face */}
        <div className="absolute w-full h-full backface-hidden rounded-xl bg-[#f9f9f9] flex flex-col overflow-hidden">
          <img
            src={images}
            alt={name}
            className="h-60 w-full object-cover"
          />
          <div className="p-4 ">
            <div className="dash-grey">
              <div className="dash-red"></div>
            </div>
            <h3 className="nunito-sans flipcard-title font-bold text-lg">
              {name}
            </h3>
          
            <p className="flipcard-desc text-sm text-gray-600">{desc}</p>
          <div className="flex justify-between">
            <Link to={`/layanan?open=${_id}`} className="cta">
              Baca Selengkapnya
            </Link>
            <span className="hint delay-1000 place-self-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out text-gray-500 text-sm font-medium hint">Klik Kartu </span>
          </div>
          </div>
        </div>

        {/* Back Face (invisible but required for proper flip) */}
        <div className="absolute w-full h-full backface-hidden rounded-xl bg-[#f9f9f9] rotate-y-180 flex items-center justify-center">
          <img
            className="w-40 h-40 justify-self-center align-middle"
            src={`${
              import.meta.env.BASE_URL
            }identity/favicon-century-bearindo-international.webp`}
          />
        </div>
      </div>

      {/* Hint */}
      
      <div className="absolute left-1/2 -top-6 -translate-x-1/2 text-gray-500 text-sm font-medium">
      
      </div>
      
    </div>
  );
}



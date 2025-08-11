import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function BackButton({ target }) {
  return (
    <Link
      to={target}
      className="group overflow-hidden relative top-4 left-4  p-4 bg-[#f9f9f9] flex w-fit  shadow-md rounded-4xl items-center transition-all duration-500 ease-out after-effect"
    >
      <Icon icon="ic:round-arrow-back" className="z-2 w-6 h-6 group-hover:font-bold group-hover:text-white transition-all duration-500 ease-out" />
  <span className="z-2 w-0 opacity-0  origin-left scale-x-0  group-hover:scale-x-100 group-hover:opacity-100 group-hover:translate-x-0 group-hover:w-fit group-hover:ml-2 group-hover:mr-2 group-hover:font-bold group-hover:text-white transition-all duration-500 ease-out backbutton-kembali-mobile">
        Kembali
      </span>
    </Link>
  );
}

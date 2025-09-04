import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./back-button.css";

export default function BackButton({ target }) {
  return (
    <Link to={target} className="back-button-container">
      <Icon icon="ic:round-arrow-back" className="back-button-icon" />
      <span className="back-button-text">Kembali</span>
    </Link>
  );
}

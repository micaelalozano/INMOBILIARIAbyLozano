import { FaSpinner } from "react-icons/fa";
import "../estilos/spinner.css";

export function Spinner() {
  return (
    <div className="spinner">
      <FaSpinner className="spinning" size={50} />
    </div>
  );
}

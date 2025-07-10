import { Link } from "react-router-dom";
import { toggleTheme } from "../theme";

export default function Navbar() {
  return (
    <nav>
      <Link to="/"> Home</Link>
      <button onClick={toggleTheme}> Trocar Tema</button>
    </nav>
  );
}

import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Shop</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </header>
  );
}

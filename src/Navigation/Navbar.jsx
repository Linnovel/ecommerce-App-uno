import "./Navbar.css";
import { FiHeart } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav>
      <div className="nav container">
        <input
          className="search-input"
          type="text"
          placeholder="Search your desire product"
        />
      </div>
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
          <a href="#">
            <CiShoppingCart className="nav-icons" />
          </a>
          <a href="#">
            <AiOutlineUser className="nav-icons" />
          </a>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

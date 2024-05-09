import Price from "../Price/Price";
import Colors from "../colors/Colors";
import Category from "./Category";
import { TiShoppingCart } from "react-icons/ti";
import "./Sidebard.css";

const Sidebard = () => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>
            <TiShoppingCart />
          </h1>
        </div>
        <Category />
        <Price />
        <Colors />
      </section>
    </>
  );
};

export default Sidebard;

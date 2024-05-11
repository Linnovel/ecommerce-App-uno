import Button from "../data/components/Button";
import "./Recommended.css";

const Recommended = ({ handleButtons }) => {
  return (
    <>
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        <button className="btns">All Products</button>
        <Button onClickHandler={handleButtons} value="" title="All" />
        <Button onClickHandler={handleButtons} value="Nike" title="Nike" />
        <Button
          onClickHandler={handleButtons}
          value="Addidas"
          title="Addidas"
        />
        <Button onClickHandler={handleButtons} value="Puma" title="Puma" />
        <Button onClickHandler={handleButtons} value="Vans" title="Vans" />
      </div>
    </>
  );
};

export default Recommended;

import "@components/Checkbox/Checkbox.scss";

const Checkbox = ({ name, value, label}) => (
  <div className="checkbox">
    <label className="checkbox__label">
      <input
        className="checkbox__input"
        type="checkbox"
        name={name || "name"}
        value={value || "value"}
      ></input>
      <div className="checkbox__box"></div>
      {label || "Keep me logged in"}
    </label>
  </div>
);

export default Checkbox;

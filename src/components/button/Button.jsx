import "@components/Button/Button.scss";
import iconPlus from "@img/icon-plus.svg";
const Button = ({ type, value }) => {
  switch (type) {
    case "submit":
      return (
        <button className="button submit" type="submit">
          {value || "Create"}
        </button>
      );
    case "plus": 
        return (
          <button className="button plus" type="submit">
          <img src={iconPlus} alt="plus" />
          {value || "Create claim"}
        </button>
        )
    case "reset":
      return (
        <button className="button reset" type="reset">
          {value || "Decline"}
        </button>
      );
    case "cancel":
      return <button className="button cancel">{value || "Cancel"}</button>;
  }
};

export default Button;

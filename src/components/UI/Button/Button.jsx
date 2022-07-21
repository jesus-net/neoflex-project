import "@UI/Button/Button.scss";
import iconPlus from "@img/icon-plus.svg";

const Button = ({ type, value, onClick, name }) => {
  switch (type) {
    case "submit":
      return (
        <button
          className="button submit"
          type="submit"
          name={name}
          onClick={(e) => {
            e.preventDefault();
            onClick(e);
          }}
        >
          {value || "Create"}
        </button>
      );
    case "plus":
      return (
        <button
          className="button plus"
          type="submit"
          name={name}
          onClick={(e) => {
            e.preventDefault();
            onClick(e);
          }}
        >
          <img src={iconPlus} alt="plus" />
          {value || "Create claim"}
        </button>
      );
    case "declined":
      return (
        <button
          className="button reset"
          type="submit"
          name={name}
          onClick={(e) => {
            e.preventDefault();
            onClick(e);
          }}
        >
          {value || "Decline"}
        </button>
      );
    case "cancel":
      return (
        <button
          type="submit"
          className="button cancel"
          name={name}
          onClick={(e) => {
            e.preventDefault();
            onClick(e)}}
        >
          {value || "Cancel"}
        </button>
      );
  }
};

export default Button;

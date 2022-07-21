import "@UI/Button/Button.scss";
import iconPlus from "@img/icon-plus.svg";

export const Button = ({ type, value, ...props }) => {
  switch (type) {
    case "submit":
      return (
        <button
          className="button submit"
          type="submit"
          {...props}
        >
          {value || "Create"}
        </button>
      );
    case "plus":
      return (
        <button
          className="button plus"
          type="submit"
          {...props}
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
          {...props}
        >
          {value || "Decline"}
        </button>
      );
    case "cancel":
      return (
        <button
          type="submit"
          className="button cancel"
          {...props}
        >
          {value || "Cancel"}
        </button>
      );
  }
};

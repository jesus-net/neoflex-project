import "@pages/Post/Post.scss";

import FormIncoming from "@components/Form/Form-Incoming";
import FormCreate from "@components/Form/Form-Create";
import { useSelector } from "react-redux";

const NewClaim = () => {
  const role = useSelector((state) => state.user.role);
  return (
    <main className="new-claim">
      <div className="new-claim__container">
        {role === "admin" ? (
          <>
            <h1 className="title">Incoming claim</h1>
            <FormIncoming />
          </>
        ) : (
          <>
            <h1 className="title">Creating new claim</h1>
            <FormCreate />
          </>
        )}
      </div>
    </main>
  );
};

export default NewClaim;

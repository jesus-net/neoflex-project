import "@pages/Claim/Claim.scss";

import ClaimForm from "@components/ClaimForm/ClaimForm";

const Claim = ({onClickMain}) => {
    return (
         <main className="claim" onClick={onClickMain}>
         <div className="claim__container">
            <h1 className="title">Creating new claim</h1>
            <ClaimForm/>
         </div>
       </main>
    )
}

export default Claim;
import "@pages/Claim/Claim.scss";

import FormClaim from "@Form/FormClaim";

const Claim = ({onClickMain}) => {
   
    return (
         <main className="claim" onClick={onClickMain}>
         <div className="claim__container">
            <h1 className="title">Creating new claim</h1>
            <FormClaim/>
         </div>
       </main>
    )
}

export default Claim;
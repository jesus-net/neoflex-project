import "@pages/NewClaim/NewClaim.scss";

import  FormClaim from "@Form/FormClaim";

const NewClaim = ({onClickMain}) => {
   
    return (
         <main className="new-claim" onClick={onClickMain}>
         <div className="new-claim__container">
            <h1 className="title">Creating new claim</h1>
            <FormClaim/>
         </div>
       </main>
    )
}

export default NewClaim;
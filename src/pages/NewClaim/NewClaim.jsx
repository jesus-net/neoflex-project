import "@pages/NewClaim/NewClaim.scss";

import  FormClaim from "@components/Form/FormClaim";

const NewClaim = () => {
   
    return (
         <main className="new-claim">
         <div className="new-claim__container">
            <h1 className="title">Creating new claim</h1>
            <FormClaim/>
         </div>
       </main>
    )
}

export default NewClaim;
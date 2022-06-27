import "@pages/Claim/Claim.scss";
import Input from "@components/Input/Input";
import Button from "@components/Button/Button";
const Claim = () => {
    return (
         <main className="claim">
         <div className="claim__container">
            <h1 className="title">Creating new claim</h1>
            <form className="claim__form" action="">
            <Input type="textfield" label="title"/>
            <Input type="dropdown" label="type"/>
            <Input type="textfield" label="description" placeholder="Type claim description"/>
            <div className="claim__buttons">
            <Button type="cancel"/>
            <Button type="submit"/>
            </div>
            </form>
         </div>
       </main>
    )
}

export default Claim;
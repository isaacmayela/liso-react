import "./askContainer.css";
import ContainerTitle from "../container-title/containerTitle";
import AskItems from "../ask-container-items/askItems";

export default function AskContainer() {
    return (
        <>
            <div className="main-container__element-container__ask-container">
                <ContainerTitle title={"Demandes en cours"} description={"Liste des demandes en cours de traitement"}/>
                <AskItems/>
            </div>
        </>
    );
}
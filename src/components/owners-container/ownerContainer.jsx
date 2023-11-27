import "./ownerContainer.css";
import ContainerTitle from "../container-title/containerTitle";
import OwnerItems from "../owsners-tems/ownerItems";

export default function OwnerContainer() {
    return (
        <>
            <div className="main-container__element-container__owner-container">
                <ContainerTitle title={"Détenteurs d'instruments"} description={"Liste des détenteurs d'instruments de mésure"}/>
                <OwnerItems/>
            </div>
        </>
    );
}
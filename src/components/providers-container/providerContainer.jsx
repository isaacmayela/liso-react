import "./providerContainer.css";
import ContainerTitle from "../container-title/containerTitle";
import ProviderItems from "../providers-items/providerItems";

export default function ProviderContainer() {
    return (
        <>
            <div className="main-container__element-container__provider-container">
                <ContainerTitle title={"Préstataires agrées"} description={"Liste des prestataires agrées au ministère de l'industrie."}/>
                <ProviderItems/>
            </div>
        </>
    );
}
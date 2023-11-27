import { providerList } from "../../handle-list/handleProviderList";
import ItemsContainer from "../items-container/itemsContainer";
import AskTitleItems from "../ask-items-title/askItemsTitle";

export default function ProviderItems() {
    return (
        <>
            
            <div className="provider-items-container">
                <AskTitleItems titleList={["NOM DE LA SOCIETE","STATU","IDENTIFIANT LISO","CONFORMITE"]}/>
                <ItemsContainer itemList={providerList}/>
            </div>
        </>
    );
}
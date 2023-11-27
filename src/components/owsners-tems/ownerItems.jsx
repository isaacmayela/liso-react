import ItemsContainer from "../items-container/itemsContainer";
import { ownerList } from "../../handle-list/handleOwnerList";
import AskTitleItems from "../ask-items-title/askItemsTitle";

export default function OwnerItems() {
    return (
        <>
            <div className="provider-items-container">
                <AskTitleItems titleList={["NOM DE LA SOCIETE","STATU","IDENTIFIANT LISO","CONFORMITE"]}/>
                <ItemsContainer itemList={ownerList}/>
            </div>
        </>
    );
}
import "./askItems.css"
import AskTitleItems from "../ask-items-title/askItemsTitle";
import ItemsContainer from "../items-container/itemsContainer";
import { askList } from "../../handle-list/handleAskList";

export default function AskItems() {
    return (
        <>
            <div className="ask-items-container">
                <AskTitleItems titleList={["SOCIETE DEMANDEURE","SOCIETE CLIENTE","MOTIFS","DATE D'INTERVENTION"]}/>
                <ItemsContainer itemList={askList}/>
            </div>
        </>
    );
}
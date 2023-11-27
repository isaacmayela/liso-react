import "./askItemsTitle.css"

export default function AskTitleItems({titleList}) {
    return (
        <>
            <div className="items-title">
                <ul>
                    <li>{titleList[0]}</li>
                    <li>{titleList[1]}</li>
                    <li>{titleList[2]}</li>
                    <li>{titleList[3]}</li>
                </ul>
            </div>
        </>
    );
}

// SOCIETE DEMANDEURE SOCIETE CLIENTE  MOTIFS   DATE D'INTERVENTION
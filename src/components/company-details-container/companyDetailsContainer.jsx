  import "./companyDetailsContainer.css"
  import CompanyIdentity from "../company-identity/companyIdentity";
  import CompanyOfficialsDocuments from "../official-documents/officialDocuments";
  import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
  import { providerList } from "../../handle-list/handleProviderList";
  import { useState, useRef } from "react";
  
  export default function DetailsContainer() {
    
    const [nom, setNom] = useState("Identité de l'entreprise");
    const [id, setId] = useState(1);

    const myRef = useRef(null);

    const changeLinksColor = (event) => {
        event.preventDefault();
        const link = event.target;
        const otherLinks = myRef.current.querySelectorAll("a");
        otherLinks.forEach((element) => {
            element.className = ""
            if (element == link){
                element.className = "bg-gray"
            }
                
        });


    }

    const handleClick = (nom,id) => {
        changeLinksColor(event)
        setNom(nom);
        setId(id);
    };
    return (
        <>
            <div className='Details-container'>
                <div className="details-title">
                    <div className="comany-name">
                        <h1>KABUSHCOP SARL</h1>
                        <p>Identifiant LISO: 12MP3615XV</p>
                    </div>
                    <div className="infos">
                        <h4 className="infos--bg-purple infos--clr-purple border-purple">Prestataire</h4>
                        <h4 className="infos--bg-green infos--clr-green border-green">Conforme</h4>
                    </div>
                </div>

                <div className="details-navigation" ref={myRef}>
                    <a href="#" className="first-child--bg-gray" onClick={() => handleClick("Identité de l'entreprise",1)}>Identités de l'entreprise</a>
                    <a href="#" onClick={() => handleClick("Documents officiels",2)}>Documents officiels</a>
                    <a href="#" onClick={() =>handleClick("Conformités",3)}>Conformités</a>
                    <a href="#" onClick={() =>handleClick("Liste des instruments",4)}>Liste des instruments</a>
                </div>

                <div className="informations-container">
                    <CompanyIdentity identite={nom}/>
                </div>
            </div>

        </>
    );
}

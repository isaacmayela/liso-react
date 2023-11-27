import "./companyIdentity.css"

export default function CompanyIdentity({identite, id}) {

    return (
        <>
            <h2 id={id}>{identite}</h2>

            <div className="profile_container">
                
                <ul>
                    <li><h3>Renseignements</h3></li>
                    <li>
                        <p>Nom</p>
                        <p>KABUSHCOP SARL</p>
                        <p></p>
                    </li>
                    <li>
                        <p>Statu</p>
                        <p>Prestaire de service</p>
                        <p></p>
                    </li>
                    <li>
                        <p>Numero de telephone</p>
                        <p>0975486325</p>
                    </li>
                    <li>
                        <p>Adresse email</p>
                        <p>fatshi-beton@gmail.com</p>
                    </li>
                    <li>
                        <p>Enregistrée par</p>
                        <p>Marcel Tshipangila</p>
                        <p>Directeur général</p>
                    </li>
                    <li className="profile-hearders">
                        <h4>Numéros d'identifications</h4>
                    </li>
                    <li>
                        <p>Identifiant LISO</p>
                        <p>12MP3615XV</p>
                    </li>
                    <li>
                        <p>Numéro d'agrement</p>
                        <p>Cab/mini/2023/0056</p>
                    </li>
                    <li>
                        <p>Attestation d'agrement</p>
                        <a href="#" >Voir</a>
                    </li>
                    <li className="profile-hearders">
                        <h4>Conformités</h4>
                    </li>
                    <li>
                        <p>Conformité de l'entreprise</p>
                        <p>Non conforme</p>    
                        <div><a href="#" className="modify">Modifier</a></div>
                    </li>
                    <li>
                        <p>Conformité des instruments</p>
                        <p>Non conforme</p>
                        <a href="#">Liste des instruments</a>
                    </li>
                    <li className="profile-hearders">
                        <h4>Adressage complet</h4> 
                    </li>
                    <li>
                        <p>Première adresse</p>
                        <p>Barcelone</p>
                    </li>
                    <li>
                        <p>Province</p>
                        <p>Kinshasa</p>
                    </li>
                    <li>
                        <p>Ville</p>
                        <p>Kinshasa</p>
                    </li>
                    <li>
                        <p>Deuxième adresse</p>
                        <p>Paris saint germain</p>
                        <p>Paris saint germain</p>
                    </li>
                </ul>

            </div>
           
        </>
    );
}
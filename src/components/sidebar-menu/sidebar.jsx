import "./sidebar.css"

import { Link } from "react-router-dom";

import image from '/src/assets/drc_logo.png';

export default function SidebarMenu() {
    return (
        <>
            <div className="siderbar-menu">

            <div>
                
                <img src={image} alt="logo ministere de l'industrie" className="siderbar-menu__logo"/>
            </div>
            <div className="siderbar-menu__items-container">
                <h5>MENU</h5>
                <ul>
                    <li>
                        <Link to="/" className="vertical-center-align link">
                            <svg enableBackground="new 0 0 64 64" height="15" viewBox="0 0 64 64" width="15" xmlns="http://www.w3.org/2000/svg" className="board-icon"><path d="m26 35h-20c-1.657 0-3 1.343-3 3v20c0 1.657 1.343 3 3 3h20c1.657 0 3-1.343 3-3v-20c0-1.657-1.343-3-3-3zm0-32h-20c-1.657 0-3 1.343-3 3v20c0 1.657 1.343 3 3 3h20c1.657 0 3-1.343 3-3v-20c0-1.657-1.343-3-3-3zm32 0h-20c-1.657 0-3 1.343-3 3v20c0 1.657 1.343 3 3 3h20c1.657 0 3-1.343 3-3v-20c0-1.657-1.343-3-3-3zm0 32h-20c-1.657 0-3 1.343-3 3v20c0 1.657 1.343 3 3 3h20c1.657 0 3-1.343 3-3v-20c0-1.657-1.343-3-3-3z"/></svg>
                            Tableau de bord
                        </Link>
                    </li>
                    <li>
                        <ul>
                            <li><Link to="#" className="vertical-center-align link"><i className="fas fa-tools"></i>Demandes de prestation</Link></li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li><Link to="#" className="vertical-center-align link"><i className="fas fa-plus"></i>Ajouter un evenement</Link></li>
                            <li><Link to="#" className="vertical-center-align link"><i className="fas fa-file"></i>Consulter les rapports</Link></li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li><Link to="/providerList" className="vertical-center-align link"><i className="fa-solid fa-handshake"></i> Prestataires</Link></li>
                            <li><Link to="/ownerList" className="vertical-center-align link"><i className="fa-solid fa-building"></i>Detenteurs d'instruments</Link></li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li className="sub_list_item">
                                <Link to="#" className="space_betwen vertical-center-align link"><span><i className="fas fa-envelope"></i>Messages</span><i className="fas fa-angle-right"></i></Link>
                                <ul className="sous_menu">
                                    <li><Link to="#" className="vertical-center-align link"><i className="fas fa-envelope"></i>Messages</Link></li>
                                    <li><Link to="#" className="vertical-center-align link"><i className="fas fa-bell"></i>Notifications</Link></li>
                                </ul>
                            </li>
                            <li><Link to="#" className="vertical-center-align link"><i className="fas fa-cog"></i>Utilitaires</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>

            </div>
        </>
    );
  }
import "./informations.css"


export default function Informations() {
    return (
        <>
            <div className="informations">
                <div className="main-container__element-container__informations-container">
                    <div>
                        <div>
                            <h5 className="text-center">Demandes non traitées</h5>
                            <div className="description center-align">
                                <p className="number">40</p>
                                <span className="description__icon clr-red description__icon--bg-red center-align"><i className="fas fa-times"></i></span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="make-border">
                            <h5 className="text-center">Préstataires</h5>
                            <div className="description center-align">
                                <p className="number">5</p>
                                <span className="description__icon clr-purple description-icon--bg-purple center-align"><i className="fa-solid fa-handshake"></i></span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="make-border">
                            <h5 className="text-center">Détenteurs d'instruments</h5>
                            <div className="description center-align">
                                <p className="number">5</p>
                                <span className="description__icon clr-green description__icon--bg-green center-align"><i className="fas fa-tools"></i></span>
                            </div>
                        </div> 
                    </div>
                    <div>
                        <div className="make-border">
                            <h5 className="text-center">Statistiques</h5>
                            <div className="description center-align">
                                <p className="number">5</p>
                                <span className="description__icon clr-green description__icon--bg-green center-align"><i className="fas fa-tools"></i></span>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </>
    );
  }
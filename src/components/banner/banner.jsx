import "./banner.css"

import image from '/src/assets/logo-minin-blanc.png'


export default function Banner() {
    return (
        <>
            <div className="main-container__element-container__banner vertical-center-align">
                <img src={image} alt="logo ministere industries"/>
                <p className="liso-title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                {/* <p className="liso-title">LOGICIEL INFORMATIQUE DE SUIVI DES ORGANISMES</p> */}
            </div>
        </>
    );
  }
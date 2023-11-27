import "./navbar.css"

import imgage from '/src/assets/user-image.png'

export default function Navbar() {
    return (
        <>
            <div className="main-container__navbar">
                <div className="main-container__navbar">
                    <h2>Administration</h2>
                    <h2>Kinshasa</h2>

                    <div className="main-container__navbar__user-profile vertical-center-align">
                        <a href="#" className="vertical-center-align">
                            <i className="fas fa-bell"></i>
                        </a>
                        <a href="#" className="user-profile vertical-center-align">
                            <span><img src={imgage} alt="user_image" className="user-image"/></span>
                            <strong>John Doe</strong>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
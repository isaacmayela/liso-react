import "./mainContainer.css"


import Navbar from "../navigation/navbar";

export default function MainContainer(props) {
    return (
        <>
            <div className="main-container">
                <Navbar/>
                { props.children }
            </div>
        </>
    );
  }
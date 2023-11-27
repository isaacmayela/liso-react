import "./elementsContainer.css"

export default function ElementsContainer(props) {
    return (
        <div className="main-container__element-container">
            {props.children}       
        </div>
        
    );
  }
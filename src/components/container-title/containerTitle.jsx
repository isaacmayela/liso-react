import "./containerTitle.css"

export default function ContainerTitle({title, description}) {
    return (
        <>
            <div className="container-title">
                <div className="vertical-center-align">
                    {/* <i class="fa-solid fa-list prevision_icon"></i><*/}
                    <div>
                        <h3>{title}</h3>
                        <p  className="title-description">{description}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
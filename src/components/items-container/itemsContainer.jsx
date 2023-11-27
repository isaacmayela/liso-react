import "./itemsContainer.css"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ItemsContainer({itemList}) {

    const object = {itemList}

    const[list, setList] = useState(itemList)
    const[isLoading, setIsLoading] = useState(true)

    return (
        <>
            <div className="items-Container">
                <ul>
                    {
                        list.map((item) =>(
                            <li key={item.id}>
                            <Link className="item-link" to="/companyDetails">
                                <ul>
                                    <li>{item.prop1}</li>
                                    <li>{item.prop2}</li>
                                    <li>{item.prop3}</li>
                                    <li>{item.prop4}</li>
                                </ul>
                            </Link>
                        </li>
                        ))
                    }                    
                </ul>
            </div>
        </>
    );
}
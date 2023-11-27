import { useEffect, useState } from "react"

const UseFetch = (url) =>{

    const[data, setData] = useState(itemList)
    const[isLoading, setIsLoading] = useState(true);
    const[error, setError] = useState(null);

    useEffect( () => {
        fetch(url)
            .then( (response) => {
                if (!response.ok){
                    throw Error('Desole une erreur est survenu')
                }
                return response.json();
            } )
            .then( (data) => {
                setData(data);
                setIsloading(false);
                setError(null);
            } )
            .catch( err => {
                setError(err.message);
                setIsloading(false);
            })
    }, [url] )

    return {data, isLoading, error}
}

export default UseFetch
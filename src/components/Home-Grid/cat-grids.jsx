//React...
import { useEffect, useState } from "react"
import { useLocation, Link } from "react-router-dom";

//Data...
import dataCat from "./data"

//Styles...
import "../../style.scss"


const CatGrids = ({gridImg}) => {
    const location = useLocation();
    const path = location.pathname
    const [data, setData] = useState([]);

    useEffect(() => {
        switch(path) {
            case "/electronics": setData(dataCat.electronics)
                break;
            case "/jewelery": setData(dataCat.jewelery)
                break;
            case "/men's": setData(dataCat["men's"])
                break;
            case "/women's": setData(dataCat["women's"])
                break;
        }
    }, [path])

    return (
        <>
            <div className={`center ${gridImg}`}>
                <Link to="/Products">{path.slice(1)}</Link>
            </div>
            {
            data.map(item => {
                return (
                    <div className="center">
                        <img src={item} alt="picture of category"/> 
                    </div>  
                )
            })
            }
        </> 
    )
}

export default CatGrids
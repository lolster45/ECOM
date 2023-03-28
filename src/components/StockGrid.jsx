//Images...
import Vivo from "../images/vivo(fold).jpg"

const StockGrid = () => {
    return (
        <>
            <div className="center">
                <img src={Vivo} alt="picture of category"/> 
            </div>  
            <div className="center">
                <img src={new URL("https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg")} alt="picture of category"/> 
            </div>  
            <div className="center">
                <img src={new URL("https://cdn.thewirecutter.com/wp-content/media/2022/10/giftsforgamers-2048px-2863-2.jpg?auto=webp&quality=60&crop=1.91:1&width=1200")} alt="picture of category"/> 
            </div>  
            <div className="center">
                <img src={new URL("https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?cs=srgb&dl=pexels-designecologist-1779487.jpg&fm=jpg")} alt="picture of category"/> 
            </div>  
        </>
    )
}

export default StockGrid
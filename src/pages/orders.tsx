import './orders.css'
import { Link } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";

const orderList = JSON.parse(localStorage.getItem("ordersList"))
// console.log(orderList)

const Orders = () =>{
    return(
        <div>
            <h1 className = "orders-heading text-center mb-5">My Orders</h1>
            <Link to = "/tab1" className = "link-item">
                <FaArrowLeftLong className = "back-to-home"/>
            </Link>
            
            {orderList.map(each =>(
            <Link to = {`/order/${each.id}`} className='link-item' key = {each.id}>
                <div className = "orders-container mt-4">
                    <img src = {each.main_image} alt = "order-image" className = "order-image" />
                    <p className = "order-name">{each.name}</p>
                </div>
            </Link>
            ))}
            
            

        </div>
    )
}

export default Orders
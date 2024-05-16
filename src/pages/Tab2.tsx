import { useState } from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar} from '@ionic/react';
import './Tab2.css';
// import cartData from './cartData.json'
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';


const cartData = JSON.parse(localStorage.getItem("cartData"))
// console.log(cartData)

const Tab2: React.FC = () => {


const [data,setData] = useState(cartData)
let totalPrice = 0
data.forEach(each => totalPrice += each.price)

  const handleRemove = (item) =>{
    // console.log(item)
    const updatedData = data.filter(each => each.top_id !== item.top_id || each.length_id !== item.length_id);
    
    setData(updatedData)
  }

  const onCheckOut = () =>{
    localStorage.setItem("ordersList",JSON.stringify(data))
  }

  return (
    <><IonHeader>
      <IonToolbar>
        <IonTitle className="text-center">Cart</IonTitle>
      </IonToolbar>
    </IonHeader><IonContent>
      
      <div className="cart-container">
        <div>
          {data.length === 0 ?
            <div className = "items-not-found-container">
              <h1 className="items-not-found-heading">ITEMS NOT FOUND</h1>
                <div className = "d-flex flex-row justify-content-center">
                  <Link to = "/select_design/2">
                      <button className = "btn btn-primary custom-add-btn">Continue Shopping</button>
                  </Link>
              </div>
            </div> : ""}

          {data.map(each => <div className="cart-item-container" >
            <div className="d-flex">
              <img src={each.main_image} alt="cart-image" className="cart-item-image" />
              <p className = "cart-item-name">{each.price}</p>
            </div>
            <div>
              <button className="cart-item-remove-btn" onClick={() => handleRemove(each)}><MdDelete /></button>
            </div>

          </div>)}
        </div>

        {data.length !== 0 ? <div className = "check-out-container fixed-bottom">

        <div className = "d-flex flex-row justify-content-center mb-5">
              <Link to = "/select_design/2">
                  <button className = "btn btn-primary custom-add-btn">Add More Items</button>
              </Link>
          </div>

              <div className = "total-price">Total Amount : {totalPrice}</div>
              <Link to = "/orders" className = "link-item">
                <button className = "btn btn-primary w-100 checkout-button" onClick = {onCheckOut}>CheckOut</button>
              </Link>
          </div> : ""}

        </div>

      </IonContent></>
  );
};

export default Tab2;

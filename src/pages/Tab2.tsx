import { useState } from 'react';
import { IonContent} from '@ionic/react';
import './Tab2.css';
import cartData from './cartData.json'
import { MdDelete } from "react-icons/md";

const Tab2: React.FC = () => {

const [data,setData] = useState(cartData)

  const handleRemove = (item) =>{
    const updatedData = data.filter(each => each.top_id !== item.top_id || each.length_id !== item.length_id);
    
    setData(updatedData)
  }

  return (
    <IonContent>
        <div className = "cart-container">
            <h1 className = "cart-heading">Cart</h1>
            {data.length === 0 ? <h1 className = "items-not-found-heading">Items Not Found</h1>:null}

            {data.map(each =><div className = "cart-item-container" >
              <div className = "d-flex">
                <img src = {each.main_image} alt = "cart-image" className = "cart-item-image" />
                {/* <p className = "cart-item-name">{each.top_id}</p> */}
                </div>
                <div>
                  <button className = "cart-item-remove-btn" onClick={() => handleRemove(each)}><MdDelete /></button>
                </div>
            </div>)}
        </div>
    </IonContent>
  );
};

export default Tab2;

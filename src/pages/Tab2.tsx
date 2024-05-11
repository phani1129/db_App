import { useState } from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar} from '@ionic/react';
import './Tab2.css';
import cartData from './cartData.json'
import { MdDelete } from "react-icons/md";

const Tab2: React.FC = () => {

const [data,setData] = useState(cartData)

  const handleRemove = (item) =>{
    console.log(item)
    const updatedData = data.filter(each => each.top_id !== item.top_id || each.length_id !== item.length_id);
    
    setData(updatedData)
  }

  return (
    <><IonHeader>
      <IonToolbar>
        <IonTitle className="text-center">Cart</IonTitle>
      </IonToolbar>
    </IonHeader><IonContent>
        <div className="cart-container">
          {data.length === 0 ? <h1 className="items-not-found-heading">ITEMS NOT FOUND</h1> : null}

          {data.map(each => <div className="cart-item-container">
            <div className="d-flex">
              <img src={each.main_image} alt="cart-image" className="cart-item-image" />
              <p className = "cart-item-name">{each.top_id}</p>
            </div>
            <div>
              <button className="cart-item-remove-btn" onClick={() => handleRemove(each)}><MdDelete /></button>
            </div>
          </div>)}
        </div>
      </IonContent></>
  );
};

export default Tab2;

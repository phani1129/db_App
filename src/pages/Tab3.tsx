import { IonContent} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

import 'bootstrap/dist/css/bootstrap.css'
import { PiHandbagThin } from "react-icons/pi";
import { RiLoginCircleLine, RiLogoutCircleLine } from "react-icons/ri";
import { MdPrivacyTip } from "react-icons/md";
import { Link } from 'react-router-dom';

import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <>  
      <IonContent fullscreen>
      <div className = "">
            <div className = "my-account-container d-flex flex-column justify-content-center">
                <div className = "d-flex flex-row justify-content-center">
                    <h1 className = "user-profile-pic">B</h1>
                </div>
                <h2 className = "user-profile-name text-center mt-2">Bhaskar Potnuru</h2>    
            </div>

            <div className = "my-account-bottom-section-container">

                <div className = "user-profile-list-container d-flex">
                        <PiHandbagThin className = "my-orders-icon"/>
                    <h2 className = "my-orders ml-3">Your Orders</h2>
                </div>
                <hr className = "my-account-horizontal-line m-auto" />

                <div className = "user-profile-list-container d-flex">
                        <MdPrivacyTip className = "my-orders-icon"/>
                    <h2 className = "my-orders ml-3">Privacy & Security</h2>
                </div>
                <hr className = "my-account-horizontal-line m-auto" />

                <Link to = "/login" className = "link-item">
                <div className = "user-profile-list-container d-flex">
                        <RiLoginCircleLine className = "my-orders-icon"/>
                    <h2 className = "my-orders ml-3">Login</h2>
                </div>
                </Link>
                <hr className = "my-account-horizontal-line m-auto" />

                <div className = "user-profile-list-container d-flex">
                        <RiLogoutCircleLine className = "my-orders-icon"/>
                    <h2 className = "my-orders ml-3">Logout</h2>
                </div>
                <hr className = "my-account-horizontal-line m-auto" />
            </div>

        </div>
      </IonContent>
    </>
  );
};

export default Tab3;

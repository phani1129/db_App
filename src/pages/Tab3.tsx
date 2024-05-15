import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonNote, IonTitle, IonToolbar} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

import 'bootstrap/dist/css/bootstrap.css'
import { PiHandbagThin } from "react-icons/pi";
import { RiLoginCircleLine, RiLogoutCircleLine } from "react-icons/ri";
import { MdPrivacyTip } from "react-icons/md";
import { Link } from 'react-router-dom';
import {  listCircle } from 'ionicons/icons';
import { FaUserEdit } from "react-icons/fa";

import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <> <IonHeader>
    <IonToolbar>
      <IonTitle className="text-center">Profile</IonTitle>
    </IonToolbar>
  </IonHeader>
      <IonContent fullscreen>
      <div className = "my-account-container">
            <div className = " d-flex flex-column justify-content-center">
              <div className = "d-flex flex-row justify-content-end mr-3 mt-3">
                <Link to = "/edit-profile" className = "link-item">
                  <h1 className = "edit-profie">Edit <FaUserEdit className = "edit-icon mb-2"/></h1>
                </Link>
              </div>
              
                <div className = "d-flex flex-row justify-content-center">
                    <h1 className = "user-profile-pic">B</h1>
                </div>
                <h2 className = "user-profile-name text-center mt-2">Bhaskar Potnuru</h2>    
            </div>
            </div>

        <IonList inset={true}>
        <Link to = "/orders" className = "link-item">
          <IonItem button={true}>
            <IonIcon color="danger" slot="start" icon={listCircle} size="large"></IonIcon>
            <IonLabel>Orders</IonLabel>
            <IonNote slot="end">6</IonNote>
          </IonItem>
        </Link>

          <IonItem button={true}>
            <IonIcon color="tertiary" slot="start" icon={listCircle} size="large"></IonIcon>
            <IonLabel>Privacy & Policy</IonLabel>
          </IonItem>
    </IonList>
        
      </IonContent>
    </>
  );
};

export default Tab3;

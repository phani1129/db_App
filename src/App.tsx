import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
// import {home,cart,person} from 'ionicons/icons';
// import Tab1 from './pages/Tab1';
// import Tab2 from './pages/Tab2';
// import Tab3 from './pages/Tab3';
// import DesignSelection from './pages/selectDesigns';
import LoginForm from './pages/loginform';
// import Maniquin from './pages/maniquin';
import MainTabs  from './pages/MainTabs';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
// import RegisterForm from './pages/registerform';
import { useState } from 'react';

setupIonicReact();

const App: React.FC = () => {
  const [isLoggedIn,setisLoggedIn] = useState(true);
  return(
  <IonApp>
    <IonReactRouter>
    {isLoggedIn ? 
    <Route path="/" component={MainTabs } />  : 
    <Route path="/login" component={LoginForm}  />
    }
    {/* <Route path="/" component={isLoggedIn ? MainTabs : LoginForm} />  */}
    {/* <Route path="/" component={LoginForm}  /> */}
    </IonReactRouter>
  </IonApp>
  ) 
};

export default App;

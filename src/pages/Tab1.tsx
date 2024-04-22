import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import dressModelsData from './dressmodel.json'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel'


const Tab1: React.FC = () => {
 
  return (
    <><IonHeader>
      <IonToolbar>
        <IonTitle className = "text-center">DarjiBhai</IonTitle>
      </IonToolbar>
    </IonHeader><IonContent className="ion-padding">
      <div className = "dress-model-selection-container">

      <div>
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img src="https://res.cloudinary.com/dosckylqx/image/upload/v1705993528/fresh-pink-blossoms-adorn-budding-cherry-tree-generated-by-ai_dpqmix.jpg" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src="https://res.cloudinary.com/dosckylqx/image/upload/v1705998022/vibrant-hibiscus-blossom-elegance-nature-design-generated-by-ai_uikwpo.jpg" />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src="https://res.cloudinary.com/dosckylqx/image/upload/v1705998194/fresh-pink-blossoms-add-beauty-nature-growth-generated-by-ai_jmub3m.jpg" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </div>

          <div className = "model-container">
              {dressModelsData.map(eachModel =>(
                  <Link to = {`/select_design/${eachModel.id}`} key  = {eachModel.id} className = "link-item">
                      <div className = "dress-type-container">
                          <img src = {eachModel.imageUrl} alt = "design" className = "dress-image"/>
                          <p className = "dress-name">{eachModel.name}</p>
                      </div>
                  </Link>
              ))}
          </div>
      </div>
    </IonContent></>
  );
};

export default Tab1;

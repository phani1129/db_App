
import { useState } from 'react'
import './maniquin.css'
import { IonButton, IonContent, IonHeader, IonImg, IonItem, IonLabel, IonList, IonSegment, IonSegmentButton, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react'
import * as FaIcons from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import cartData from './cartData.json'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { headset } from 'ionicons/icons';
import maniquinData from './maniquindata.json'

const selectedData: string[] = []

const Maniquin = () =>{

    // maniquinData.map(e =>console.log(e))


    const [ind,setInd] = useState(0)
    const [Data,setManiquinData] = useState(maniquinData[0].main_maniquin)
    const [click,setClick] = useState(false)

    const [selectedTop,setselectedTop] = useState("")
    const [selectedLength,setselectedLength] = useState("")
    const [segmentName,setsegmentName] = useState('Tops')


    const [check1,setCheck1] = useState(false)
    const [check2,setCheck2] = useState(false)

    // const [cartData,setCartData] = useState([])
    // const [selectedData,setSelectedData] = useState([])

    let cartData = []

    const handleManiquin = () =>{
        setInd(ind+1)
        if(ind === Data.length-1){
            setInd(0)
        }
    }


    const handleAddItemBtn = () =>{
        setClick(!click)
    }

    const handleBarClose = () =>{
        setClick(false)
    }

    const onSelectTop = (item) =>{
        setselectedTop(item)
        setCheck1(true)

        if(selectedLength === ""){
            maniquinData.filter(e => e.tops?.map(each =>{
                if(each.top_id === item.top_id && each.length_id === item.length_id){
                    setManiquinData(each.maniquin_image)
                }
            }))
        }else{
            maniquinData.filter(e => e.combinations?.map(each =>{
                if(each.top_id === item.top_id && each.length_id === selectedLength.length){
                    setManiquinData(each.maniquin_image)
                }
            }))
        }
        
    }

    const onSelectLength = (item) =>{
        setselectedLength(item)
        setCheck2(true)

        if(selectedTop === ""){
            maniquinData.filter(e => e.lengths?.map(each =>{
                if(each.top_id === item.top_id && each.length_id === item.length_id){
                    setManiquinData(each.maniquin_image)
                }
            }))
        }else{
            maniquinData.filter(e => e.combinations?.map(each =>{
                if(each.top_id === selectedTop.top_id && each.length_id === item.length_id){
                    setManiquinData(each.maniquin_image)
                }
            }))
        }
       
    } 
    
    
    const handleApply = () =>{
        selectedData.push(selectedTop)
        selectedData.push(selectedLength)
        console.log(selectedData)
    }

    const handleAddToCart = () =>{
        if(selectedTop !== "" && selectedLength !== ""){
            cartData.push(selectedTop)
            cartData.push(selectedLength)
        }else if(selectedTop !== "" && selectedLength === ""){
            cartData.push(selectedTop)
        }else if(selectedTop === "" && selectedLength !== ""){
            cartData.push(selectedLength)
        }
        localStorage.setItem("cartData",JSON.stringify(cartData))
    }

    // const handleDisSelectItem = (item) =>{
    //     // console.log(selectedData)
    //     const updatedSelecteditems = selectedData.filter(each => each.id !== item.id)
    //     setSelectedData(updatedSelecteditems)
    // }
   

    function segmentChanged(e: any) {
        console.log(e.target.value)
        setsegmentName(e.target.value)
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3
      };

    return(
        <>
        <IonHeader>
        <IonToolbar>
          <IonTitle>Designs</IonTitle>
        </IonToolbar>
      </IonHeader>
      
        <IonContent>
            <div >
        <div className = "maniquin-bg-container">
            {/* <div className = "maniquin-add-item-container"><button className = "maniquin-add-item" onClick = {handleAddItemBtn}>Try 3D <br />Designs</button></div>  */}
            <div className = "maniquin-container">
                <img src = {Data[ind]} alt = "maniquin" className = "main-maniquin" onClick = {handleManiquin}/>
            </div>
           
            
        </div>
    
                {/* {selectedData.length > 0 ? <h1 className = "selected-items-maniquinn">Selected Items : </h1> :""}
                {selectedData.map(each =>{
                return <div className = "selected-items-container" >
                 <img  src = {each.main_image} alt="can't show image" className = "selected-item" />
                <div className = "selected-item-remove" onClick = {() => handleDisSelectItem(each)}> <MdCancel /> </div>
                </div>
            })} */}
        
        <IonSegment value="Tops" onClick={segmentChanged}>
        <IonSegmentButton value="Tops">
          <IonLabel>Tops</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="Bottoms">
          <IonLabel>Bottoms</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      {segmentName === 'Tops' ?
       <div className='w-3/4 m-auto'>
                        <div className="mt-4">
                            <Slider {...settings}>
                            
                            {maniquinData.map(e => e.tops?.map(each =>(    
                                <div  onClick={() => onSelectTop(each)} key={each.top_id}>
                                    <img src={each.main_image} alt="design" className={each === selectedTop? "selected" : "hands-design"} />
                                </div>
                            )))}
                       
                            </Slider>
                        </div>

                    </div>             
                    :(segmentName === 'Bottoms') ? <div className='w-3/4 m-auto'>
                        <div className="mt-4">
                            <Slider {...settings}>
                                {maniquinData.map(e => e.lengths?.map(each =>(
                                 <div  onClick = {() => onSelectLength(each)} key = {each.length_id}>
                                      <img src = {each.main_image} alt = "design" className = {each === selectedLength?"selected":"hands-design"} />
                                 </div>
                                 )))}
                       
                            </Slider>
                        </div>
                        <div >
                {/* <button className = "maniquin-apply-btn" onClick = {handleApply}>Apply</button> */}
                </div>
                    </div>
                    :''
     
      }
      { check1 === true || check2 === true ?
       <div className="class mt-1">
       <Link to = "/cart" className = "link-item ">
           <IonButton  expand="full"  size="large" onClick = {handleAddToCart} >Add to Cart</IonButton>
           {/* <button className = "add-item-btn" onClick = {handleAddToCart}>Add to Cart</button>   */}
           </Link>
       </div> 
        :''

      }
      
        </div>
        </IonContent>
        </>
    )
}

export default Maniquin
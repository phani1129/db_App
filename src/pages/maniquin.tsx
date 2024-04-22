
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
const mainTops = [
    {id : "top_01",
    imgUrl : "./Assets/main-tops/1.jpeg"
        360:[
            {
                "./Assets/yellow-top/1.jpeg",
   
            },
            { "./Assets/yellow-top/2.jpeg"},
            { "./Assets/yellow-top/3.jpeg"}
            
        }

           
        ]
    },
    {id : "top_02",
    imgUrl : "./Assets/main-tops/2.jpeg"
    },
    {id : "top_03",
    imgUrl : "./Assets/main-tops/3.jpeg"
    },
    {id : "top_04",
    imgUrl : "./Assets/main-tops/1.jpeg"
    },
    {id : "top_05",
    imgUrl : "./Assets/main-tops/2.jpeg"
    },
    {id : "top_06",
    imgUrl : "./Assets/main-tops/3.jpeg"
    }
  ]

const mainLengths = [
    {id : "length_01",
    imgUrl : "./Assets/main-lengths/1.jpeg"
    },
    {id : "length_02",
    imgUrl : "./Assets/main-lengths/2.jpeg"
    },
    {id : "length_03",
    imgUrl : "./Assets/main-lengths/3.jpeg"
    },
    {id : "length_04",
    imgUrl : "./Assets/main-lengths/1.jpeg"
    },
    {id : "length_05",
    imgUrl : "./Assets/main-lengths/2.jpeg"
    },
    {id : "length_06",
    imgUrl : "./Assets/main-lengths/3.jpeg"
    }
  ]
  const combinations = [
    {
        shirt:01,
        phant:03,
        image :'mail'
        360{
            6
        },
    }
  ]
const mainManiquin = [
    "./Assets/main-maniquinn/main-1.jpeg",
    "./Assets/main-maniquinn/main-2.jpeg",
    "./Assets/main-maniquinn/main-3.jpeg",
    "./Assets/main-maniquinn/main-4.jpeg",
    "./Assets/main-maniquinn/main-5.jpeg",
    "./Assets/main-maniquinn/main-6.jpeg"
  ]

  const yellowTop = [
    "./Assets/yellow-top/1.jpeg",
    "./Assets/yellow-top/2.jpeg",
    "./Assets/yellow-top/3.jpeg",
    "./Assets/yellow-top/4.jpeg",
    "./Assets/yellow-top/5.jpeg",
    "./Assets/yellow-top/6.jpeg"
  ]

  const pinkTop = [
    "./Assets/pink-top/1.jpeg",
    "./Assets/pink-top/2.jpeg",
    "./Assets/pink-top/3.jpeg",
    "./Assets/pink-top/4.jpeg",
    "./Assets/pink-top/5.jpeg",
    "./Assets/pink-top/6.jpeg"
  ]

  const blackTop = [
    "./Assets/black-top/1.jpeg",
    "./Assets/black-top/2.jpeg",
    "./Assets/black-top/3.jpeg",
    "./Assets/black-top/4.jpeg",
    "./Assets/black-top/5.jpeg",
    "./Assets/black-top/6.jpeg"
  ]
  const blueJean = [
    "./Assets/blue-jean/1.jpeg",
    "./Assets/blue-jean/2.jpeg",
    "./Assets/blue-jean/3.jpeg",
    "./Assets/blue-jean/4.jpeg",
    "./Assets/blue-jean/5.jpeg",
    "./Assets/blue-jean/6.jpeg"
  ]
  const blackJean = [
    "./Assets/black-jean/1.jpeg",
    "./Assets/black-jean/2.jpeg",
    "./Assets/black-jean/3.jpeg",
    "./Assets/black-jean/4.jpeg",
    "./Assets/black-jean/5.jpeg",
    "./Assets/black-jean/6.jpeg"
  ]
  const cottonJean = [
    "./Assets/cotton-jean/1.jpeg",
    "./Assets/cotton-jean/2.jpeg",
    "./Assets/cotton-jean/3.jpeg",
    "./Assets/cotton-jean/4.jpeg",
    "./Assets/cotton-jean/5.jpeg",
    "./Assets/cotton-jean/6.jpeg"
  ]

  const yellowAndCottonBlack = [
    "./Assets/yellow-cotton-jean/1.jpeg",
    "./Assets/yellow-cotton-jean/2.jpeg",
    "./Assets/yellow-cotton-jean/3.jpeg",
    "./Assets/yellow-cotton-jean/4.jpeg",
    "./Assets/yellow-cotton-jean/5.jpeg",
    "./Assets/yellow-cotton-jean/6.jpeg"
  ]
  
  const yellowAndBlack = [
    "./Assets/yellow-black-jean/1.jpeg",
    "./Assets/yellow-black-jean/2.jpeg",
    "./Assets/yellow-black-jean/3.jpeg",
    "./Assets/yellow-black-jean/4.jpeg",
    "./Assets/yellow-black-jean/5.jpeg",
    "./Assets/yellow-black-jean/6.jpeg"
  ]
  
  const yellowAndBlue = [
    "./Assets/yellow-blue-jean/1.jpeg",
    "./Assets/yellow-blue-jean/2.jpeg",
    "./Assets/yellow-blue-jean/3.jpeg",
    "./Assets/yellow-blue-jean/4.jpeg",
    "./Assets/yellow-blue-jean/5.jpeg",
    "./Assets/yellow-blue-jean/6.jpeg"
  ]
  
  const pinkAndCottonBlack = [
    "./Assets/pink-cotton-jean/1.jpeg",
    "./Assets/pink-cotton-jean/2.jpeg",
    "./Assets/pink-cotton-jean/3.jpeg",
    "./Assets/pink-cotton-jean/4.jpeg",
    "./Assets/pink-cotton-jean/5.jpeg",
    "./Assets/pink-cotton-jean/6.jpeg"
  ]
  
  const pinkAndBlack = [
    "./Assets/pink-black-jean/1.jpeg",
    "./Assets/pink-black-jean/2.jpeg",
    "./Assets/pink-black-jean/3.jpeg",
    "./Assets/pink-black-jean/4.jpeg",
    "./Assets/pink-black-jean/5.jpeg",
    "./Assets/pink-black-jean/6.jpeg"
  ]
  
  const pinkAndBlue = [
    "./Assets/pink-blue-jean/1.jpeg",
    "./Assets/pink-blue-jean/2.jpeg",
    "./Assets/pink-blue-jean/3.jpeg",
    "./Assets/pink-blue-jean/4.jpeg",
    "./Assets/pink-blue-jean/5.jpeg",
    "./Assets/pink-blue-jean/6.jpeg"
  ]
  
  const blackAndCottonBlack = [
    "./Assets/black-cotton-jean/1.jpeg",
    "./Assets/black-cotton-jean/2.jpeg",
    "./Assets/black-cotton-jean/3.jpeg",
    "./Assets/black-cotton-jean/4.jpeg",
    "./Assets/black-cotton-jean/5.jpeg",
    "./Assets/black-cotton-jean/6.jpeg"
  ]
  
  const blackAndBlack = [
    "./Assets/black-black-jean/1.jpeg",
    "./Assets/black-black-jean/2.jpeg",
    "./Assets/black-black-jean/3.jpeg",
    "./Assets/black-black-jean/4.jpeg",
    "./Assets/black-black-jean/5.jpeg",
    "./Assets/black-black-jean/6.jpeg"
  ]
  
  const blackAndBlue = [
    "./Assets/black-blue-jean/1.jpeg",
    "./Assets/black-blue-jean/2.jpeg",
    "./Assets/black-blue-jean/3.jpeg",
    "./Assets/black-blue-jean/4.jpeg",
    "./Assets/black-blue-jean/5.jpeg",
    "./Assets/black-blue-jean/6.jpeg"
  ]


const Maniquin = () =>{

    const [ind,setInd] = useState(0)
    const [ManiquinData,setManiquinnData] = useState(mainManiquin)
    const [click,setClick] = useState(false)

    const [className1,setClassName1] = useState(null)
    const [className2,setClassName2] = useState(null)
    const [segmentName,setsegmentName] = useState('Tops')
    const [check1,setCheck1] = useState(false)
    const [check2,setCheck2] = useState(false)

    // const [cartData,setCartData] = useState([])
    const [selectedData,setSelectedData] = useState([])

    const handleManiquin = () =>{
        setInd(ind+1)
        if(ind === ManiquinData.length-1){
            setInd(0)
        }
    }

    const handleAddItemBtn = () =>{
        setClick(!click)
    }

    const handleBarClose = () =>{
        setClick(false)
    }

    const onSelectNeck = (neck) =>{
        setClassName1(neck)

        setCheck1(true)

        // setCartData([])
        setSelectedData([])

        if(check2 === false){
        if(neck.id === "top_01"){
            setManiquinnData(yellowTop)
        }else if (neck.id === "top_02"){
            setManiquinnData(pinkTop)
        }else if (neck.id === "top_03"){
            setManiquinnData(blackTop)
        }
     }else{
        if(neck.id === "top_01" && className2.id === "length_01"){
            setManiquinnData(yellowAndBlack)
        }
        else if(neck.id === "top_01" && className2.id === "length_02"){
            setManiquinnData(yellowAndBlue)
        }
        else if(neck.id === "top_01" && className2.id === "length_03"){
            setManiquinnData(yellowAndCottonBlack)
        }
        else if(neck.id === "top_02" && className2.id === "length_01"){
            setManiquinnData(pinkAndBlack)
        } 
        else if(neck.id === "top_02" && className2.id === "length_02"){
            setManiquinnData(pinkAndBlue)
        }
        else if(neck.id === "top_02" && className2.id === "length_03"){
            setManiquinnData(pinkAndCottonBlack)
        }
        else if(neck.id === "top_03" && className2.id === "length_01"){
            setManiquinnData(blackAndBlack)
        }
        else if(neck.id === "top_03" && className2.id === "length_02"){
            setManiquinnData(blackAndBlue)
        }
        else if(neck.id === "top_03" && className2.id === "length_03"){
            setManiquinnData(blackAndCottonBlack)
        }
     }
    }

    const onSelectLength = (length) =>{
        setClassName2(length)

        // setCartData([])
        setSelectedData([])

        setCheck2(true)
        if(check1 === false){
            if(length.id === "length_01"){
                setManiquinnData(blackJean)
            }else if (length.id === "length_02"){
                setManiquinnData(blueJean)
            }else if (length.id === "length_03"){
                setManiquinnData(cottonJean)
            }
         }else{
            if(className1.id === "top_01" && length.id === "length_01"){
                setManiquinnData(yellowAndBlack)
            }
            else if(className1.id === "top_01" && length.id === "length_02"){
                setManiquinnData(yellowAndBlue)
            }
            else if(className1.id === "top_01" && length.id === "length_03"){
                setManiquinnData(yellowAndCottonBlack)
            }
            else if(className1.id === "top_02" && length.id === "length_01"){
                setManiquinnData(pinkAndBlack)
            } 
            else if(className1.id === "top_02" && length.id === "length_02"){
                setManiquinnData(pinkAndBlue)
            }
            else if(className1.id === "top_02" && length.id === "length_03"){
                setManiquinnData(pinkAndCottonBlack)
            }
            else if(className1.id === "top_03" && length.id === "length_01"){
                setManiquinnData(blackAndBlack)
            }
            else if(className1.id === "top_03" && length.id === "length_02"){
                setManiquinnData(blackAndBlue)
            }
            else if(className1.id === "top_03" && length.id === "length_03"){
                setManiquinnData(blackAndCottonBlack)
            }
         }
    } 
    
    
    const handleApply = () =>{
     
        if(check1 === true && check2 === true){
            console.log(className1,className2)
            selectedData.push(className1,className2)
        }
    }

    const handleAddToCart = () =>{
        // cartData.push(className1)
        if(check1 === true && check2 === true){
            console.log(className1,className2)
            selectedData.push(className1,className2)
        }
        cartData.push(...selectedData)
        console.log(cartData)
    }

    const handleDisSelectItem = (item) =>{
        // console.log(selectedData)
        const updatedSelecteditems = selectedData.filter(each => each.id !== item.id)
        setSelectedData(updatedSelecteditems)
    }
   

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
          <IonTitle>Header</IonTitle>
        </IonToolbar>
      </IonHeader>
      
        <IonContent>
            <div className='h-100 min-he' >
        <div className = "maniquin-bg-container">
            {/* {/* <div className = "maniquin-add-item-container"><button className = "maniquin-add-item" onClick = {handleAddItemBtn}>Try 3D <br />Designs</button></div>  */}
            <div className = "maniquin-container">
                <img src = {ManiquinData[ind]} alt = "maniquin" className = "main-maniquin" onClick = {handleManiquin}/>
            </div>
           
            
        </div>
    
                {/* {!selectedData.length ? <h1 className = "selected-items-maniquinn">Selected Items : </h1> : null}
                {selectedData.map(each =>{
                return <div className = "selected-items-container" >
                 <img key = {each.id} src = {each.imgUrl} alt="can't show image" className = "selected-item" />
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
                            
                            {mainTops.map((eachNeck) => (
                                <div  onClick={() => onSelectNeck(eachNeck)} key={eachNeck.id}>
                                    <img src={eachNeck.imgUrl} alt="design" className={eachNeck === className1 ? "selected" : "hands-design"} />
                                </div>
                            ))}
                       
                            </Slider>
                        </div>

                    </div>             
      :(segmentName === 'Bottoms') ? <div className='w-3/4 m-auto'>
                        <div className="mt-4">
                            <Slider {...settings}>
                                {mainLengths.map(eachLength =>(
                                 <div  onClick = {() => onSelectLength(eachLength)} key = {eachLength.id}>
                                      <img src = {eachLength.imgUrl} alt = "design" className = {eachLength === className2?"selected":"hands-design"} />
                                 </div>
                                 ))}
                       
                            </Slider>
                        </div>
                        <div >
                    {/* <button className = "maniquin-apply-btn" onClick = {handleApply}>Apply</button> */}
                </div>
                    </div>
                    :''
     
      }
      { check1 === true && check2 === true ?
       <div className="class mt-5">
       <Link to = "/cart" className = "link-item ">
           <IonButton  expand="full"  size="large" onClick = {handleAddToCart} >Add to Cart</IonButton>
           {/* {/* <button className = "add-item-btn" onClick = {handleAddToCart}>Add to Cart</button>   */}
           </Link>
       </div> 

      :''

      }
      
        
        {/* <div className = "maniquin-item-container"> 

                <h2 className = "tops-heading">Tops</h2>
               

                <h2 className = "tops-heading">Bottoms</h2>
               
                
                <div className = "maniquin-apply-btn-container">
                    <button className = "maniquin-apply-btn" onClick = {handleApply}>Apply</button>
                </div>

              </div> */}
        {/* {click ? <div className = {click ? "a active": "a"}>
            
              <button className = "close" onClick = {handleBarClose}><FaIcons.FaWindowClose /></button>
              <div className = "maniquin-item-container">
                <h2 className = "tops-heading">Tops</h2>
                <div className = "side-bar-data-container">
                    {mainTops.map((eachNeck) =>( 
                        <div className = "hands-design-container" onClick = {() =>onSelectNeck(eachNeck)} key = {eachNeck.id}>                        
                            <img src = {eachNeck.imgUrl} alt = "design" className = {eachNeck === className1?"selected":"hands-design"}/>
                        </div>        
                    ))}
                    </div>

                <h2 className = "tops-heading">Bottoms</h2>
                <div className = "side-bar-data-container">
                {mainLengths.map(eachLength =>(
                        <div className = "hands-design-container" onClick = {() => onSelectLength(eachLength)} key = {eachLength.id}>
                            <img src = {eachLength.imgUrl} alt = "design" className = {eachLength === className2?"selected":"hands-design"} />
                        </div>
                    ))}
                </div>
                
                <div className = "maniquin-apply-btn-container">
                    <button className = "maniquin-apply-btn" onClick = {handleApply}>Apply</button>
                </div>

              </div>

            
        </div> : null}  */}
        </div>
        </IonContent>
        </>
    )
}

export default Maniquin
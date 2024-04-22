import { useState } from 'react'
import './topdesign.css'
import { IonContent } from '@ionic/react'

const selectedData = []

const mainTops = [
  {id : "top_01",
  imgUrl : "./Assets/main-tops/1.jpeg"
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

const mainManiquinn = [
  "./Assets/main-maniquinn/main-1.jpeg",
  "./Assets/main-maniquinn/main-2.jpeg",
  "./Assets/main-maniquinn/main-3.jpeg",
  "./Assets/main-maniquinn/main-4.jpeg",
  "./Assets/main-maniquinn/main-5.jpeg",
  "./Assets/main-maniquinn/main-6.jpeg"
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





const TopSelection = () => {

  const [ind,setInd] = useState(0)

  const [select1,setSelect1] = useState(true)
  const [select2,setSelect2] = useState(false)

  const [className1,setClassName1] = useState(null)
  const [className2,setClassName2] = useState(null)

  const [check1,setCheck1] = useState(false)
  const [check2,setCheck2] = useState(false)

  const [btn,setBtn] = useState(false)
  const [errorMsg,setErrorMsg] = useState("")

  const [maniquinnData,setManiquinnData] = useState(mainManiquinn)

  const onSelectNeck = (neck) =>{
    setClassName1(neck)
    setCheck1(true)
    setErrorMsg("")
}

const onSelectLength = (length) =>{
    setClassName2(length)
    setCheck2(true)
    setErrorMsg("")
}
  
  const handleImg = () =>{
      setInd(ind+1)
      if(ind === mainManiquinn.length-1){
          setInd(0)
      }
  }

  const onNeckBtn = () =>{
    setSelect1(true)
    setSelect2(false)
    setBtn(false)
}

const onLengthsBtn = () =>{
    setSelect2(true) 
    setSelect1(false)
}

const onNextBtn = () =>{
  if(select1 && check1){
      setSelect2(true)
      setSelect1(false)
      setBtn(true)
  }else{
    if(check1 === true && check2 === true){
      if(className1.id === "top_01" && className2.id === "length_01"){
          setManiquinnData(yellowAndBlack)
      }
      else if(className1.id === "top_01" && className2.id === "length_02"){
          setManiquinnData(yellowAndBlue)
      }
      else if(className1.id === "top_01" && className2.id === "length_03"){
          setManiquinnData(yellowAndCottonBlack)
      }
      else if(className1.id === "top_02" && className2.id === "length_01"){
          setManiquinnData(pinkAndBlack)
      } 
      else if(className1.id === "top_02" && className2.id === "length_02"){
          setManiquinnData(pinkAndBlue)
      }
      else if(className1.id === "top_02" && className2.id === "length_03"){
          setManiquinnData(pinkAndCottonBlack)
      }
      else if(className1.id === "top_03" && className2.id === "length_01"){
          setManiquinnData(blackAndBlack)
      }
      else if(className1.id === "top_03" && className2.id === "length_02"){
          setManiquinnData(blackAndBlue)
      }
      else if(className1.id === "top_03" && className2.id === "length_03"){
          setManiquinnData(blackAndCottonBlack)
      }



      selectedData.push(className1,className2)
      console.log(selectedData)
    }else{
        setErrorMsg("*Please Select an Item")
    }
    
  }
  
}

return(
  <>
  <IonContent>
    <div className = "tops-bg-container">
  <div className = "tops-section-main-container">
      <img src = {maniquinnData[ind]} alt = "design" className="image-design" onClick = {handleImg}/>
      </div>
      <div className = "">
                    <div className = "tab-container">
                        <button className = "tab-btn" onClick = {onNeckBtn}>Tops</button>
                        <button className = "tab-btn" onClick = {onLengthsBtn}>Bottoms</button>
                    </div>
                        <div>
                        {select1? <div className = "">
                            {/* <h1 className = "design-type-name">Neck Designs</h1> */}
                        <div className = "design-container">
                    {mainTops.map((eachNeck) =>( 
                        <div className = "hands-design-container" onClick = {() =>onSelectNeck(eachNeck)} key = {eachNeck.id}>
                            <img src = {eachNeck.imgUrl} alt = "design" className = {eachNeck === className1?"selected":"hands-design"}/>
                        </div>        
                    ))}
                    </div>
                    </div> :null}

                    {select2 ?<div>
                    {/* <h1 className = "design-type-name">Lengths Designs</h1> */}
                    <div className = "design-container">
                    {mainLengths.map(eachLength =>(
                        <div className = "hands-design-container" onClick = {() => onSelectLength(eachLength)} key = {eachLength.id}>
                            <img src = {eachLength.imgUrl} alt = "design" className = {eachLength === className2?"selected":"hands-design"} />
                        </div>
                    ))}
                    </div>
                    </div>:null}

                    </div>

                    <div className = "tops-next-design-button-container">
                        {btn ? <button className = "next-design-button" onClick = {onNextBtn}>Apply</button>:
                          <button className = "next-design-button" onClick = {onNextBtn}>Next</button>}
                          
                    </div>
                    <p className = "tab-next-error-msg">{errorMsg}</p>
                </div>
                </div>
        </IonContent>

  </>
)

}
export default TopSelection
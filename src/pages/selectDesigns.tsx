import React from 'react'
import { useState } from 'react'
import partsData from './dressparts.json'
import { Link } from 'react-router-dom'
import selectedData from './selectedData.json'
import './selectDesigns.css'
import { IonContent } from '@ionic/react'

const DesignSelection = () => {

    const [data,setData] = useState(selectedData)

    const [select1,setSelect1] = useState(true)
    const [select2,setSelect2] = useState(false)
    const [select3,setSelect3] = useState(false)

    const [className1,setClassName1] = useState(null)
    const [className2,setClassName2] = useState(null)
    const [className3,setClassName3] = useState(null)

    const [check1,setCheck1] = useState(false)
    const [check2,setCheck2] = useState(false)
    const [check3,setCheck3] = useState(false)

    const [item,setItem] = useState(false)

    const onSelectNeck = (neck) =>{
        setClassName1(neck)
        setCheck1(true)
    }

    const onSelectHand = (hand) =>{
        setClassName2(hand)
        setCheck2(true)
    }
    
    const onSelectLength = (length) =>{
        setClassName3(length)
        setCheck3(true)
    }


    const onNeckBtn = () =>{
        setSelect1(true)
        setSelect2(false)
        setSelect3(false)
    }
    const onHandsBtn = () =>{
        setSelect2(true) 
        setSelect1(false)
        setSelect3(false)
    }
    const onLengthsBtn = () =>{
        setSelect3(true) 
        setSelect1(false)
        setSelect2(false)
    }

    // const onNeckTab = () =>{
    //     setSelect1(true)
    // }

    // const onHandsTab = () =>{
    //     setSelect2(true)
    // }

    // const onLengthsTab = () =>{
    //     setSelect3(true)
    // }

    const onNextBtn = () =>{
        if(select1 && check1){
            setSelect2(true)
            setSelect1(false)
            setSelect3(false)
        }else if(select2 && check2){
            setSelect3(true)
            setSelect1(false)
            setSelect2(false)
        }else if(select3 && check3){
            setItem(true)
            data.push(className1,className2,className3)
            // console.log(selectedData)
        }
        
    }

    const clearAllData = () =>{
        setData([])
        // console.log(selectedData)
        setItem(false)
        setSelect1(true)
        setSelect2(false)
        setSelect3(false)
        setClassName1(null)
        setClassName2(null)
        setClassName3(null)
        setCheck1(false)
        setCheck2(false)
        setCheck3(false)
    }


    return(
        <>
        <IonContent>
        <div className = "model-section-main-container d-flex flex-column">
            
            <div className = "model-selection-container">
                <img src = "https://res.cloudinary.com/dosckylqx/image/upload/v1706693086/Vertical_Image_qbwe0g.svg" className = "model-selection-image" alt = "model-selection"/>
                <div className = "neck"><span className = "hover-text">Neck</span><button className = "part-button" onClick = {onNeckBtn}>1</button></div>
                <div className = "hands"><span className = "hover-text">Hands</span><button className = "part-button" onClick = {onHandsBtn}>2</button></div>
                <div className = "bottom"><span className = "hover-text">Lengths</span><button className = "part-button" onClick = {onLengthsBtn}>3</button></div>
            </div>
            
           

            {item ?
                    <div className = "dress-design-preview-main-container">
                        <h1 className = "dress-design-preview-heading">Preview :</h1>
                        <div className = "dress-design-preview-container">
                        {selectedData.map(each =>(
                            <div key = {each.id}>
                                <img src = {each.imageUrl} className = "dress-design-preview-image" alt = "design-preview"/>
                            </div>
                        ))} 
                        </div > 
                        <div className = "dress-design-buttons">
                            <button className = "dress-design-clearall-button" onClick = {clearAllData}>Clear all</button>
                            <Link to = "/measurements" className = "link-item">
                                <button className = "dress-design-next-button">Next</button> 
                            </Link>
                        </div>
                    </div>

                :
                
                <div className = "design-bottom-section">
                    <div className = "tab-container mb-5">
                        <button className = "tab-btn" onClick = {onNeckBtn}>Neck</button>
                        <button className = "tab-btn" onClick = {onHandsBtn}>Hands</button>
                        <button className = "tab-btn" onClick = {onLengthsBtn}>Lengths</button>
                    </div>
                        <div>
                        {select1? <div className = "">
                            {/* <h1 className = "design-type-name">Neck Designs</h1> */}
                        <div className = "design-container">
                    {partsData.neck.map((eachNeck) =>( 
                        <div className = "hands-design-container" onClick = {() =>onSelectNeck(eachNeck)} key = {eachNeck.id}>
                            <img src = {eachNeck.imageUrl} alt = "design" className = {eachNeck === className1?"selected":"hands-design"}/>
                        </div>        
                    ))}
                    </div>
                    </div> :null}

                    {select2 ? <div>
                    {/* <h1 className = "design-type-name">Hands Designs</h1> */}
                    <div className = "design-container">
                    {partsData.hands.map(eachHand =>(
                        <div className = "hands-design-container" onClick = {() => onSelectHand(eachHand)} key = {eachHand.id}>
                            <img src = {eachHand.imageUrl} alt = "design" className = {eachHand === className2?"selected":"hands-design"} />
                        </div>
                    ))}
                    </div>
                    </div> :null }

                    {select3 ?<div>
                    {/* <h1 className = "design-type-name">Lengths Designs</h1> */}
                    <div className = "design-container">
                    {partsData.lengths.map(eachLength =>(
                        <div className = "hands-design-container" onClick = {() => onSelectLength(eachLength)} key = {eachLength.id}>
                            <img src = {eachLength.imageUrl} alt = "design" className = {eachLength === className3?"selected":"hands-design"} />
                        </div>
                    ))}
                    </div>
                    </div>:null}

                    </div>
                    

                    <div className = "next-design-button-container">
                        <button className = "next-design-button" onClick = {onNextBtn}>Next</button>
                    </div>

                </div> }   

                
                    </div>
            </IonContent>
        </>
    )
}

export default DesignSelection
import React from 'react'
import './invoice.css'
import { useParams } from 'react-router'
import { IonContent } from '@ionic/react'



const userData = JSON.parse(localStorage.getItem("registrationData"))[0]
// const time = new Date()
// console.log(time)

const orderList = JSON.parse(localStorage.getItem("ordersList"))
// console.log(orderList)
// console.log(orderList)

const Invoice = () =>{
    
    const {id} = useParams()
    console.log(id)
    const order = orderList.find((each) => each.id === id)  
    const {name,price} = order

    return(
        <IonContent>
        <div className = "invoice-main-container">
            <div className = "invoice-container">
                <h1 className = "invoice-heading">INVOICE</h1>

                    <div className = "invoice-details-container">

                        <div className = "invoice-top-container">
                        <div>
                            <h1 className = "invoice-brand-name-heading">DarjiBhai</h1>
                            <p className = "invoice-darjiBhai-address">D.No # 14-199, Horizon Enclave, <br /> Nowroji Rd, Daspalla Hills, <br /> Maharani Peta, Visakhapatnam, <br /> Andhra Pradesh Pin-530002.</p>
                        </div>
                            <h1 className = "invoice-darjibhai-brand-logo">DB</h1>
                        </div>

                        <hr className = "invoice-horizontal-line"/>

                        <div className = "mb-5">
                        <p className = "invoice-customer-data"><span className = "invoice-customer-details">Customer ID : </span>{userData.id}</p>
                            <p className = "invoice-customer-data"><span className = "invoice-customer-details">Customer Name : </span>{userData.username}</p>
                            <p className = "invoice-customer-data"><span className = "invoice-customer-details">Mobile Number : </span>{userData.phonenumber}</p>
                            <p className = "invoice-customer-data"><span className = "invoice-customer-details">Date & Time : </span>{new Date().toLocaleString()}</p>
                        </div>
                        <hr className = "invoice-horizontal-line"/>
                        {/* <div className = "invoice-measurement-table-data mt-4">
                            <table>
                            <thead>
                                <tr>
                                    <th>Measurement Name</th>
                                    <th>Measurement Size in(cm)</th>
                                </tr>
                            </thead>

                            <tbody>
                                {measurementData.map(each =>(
                                    <tr key = {each.id}>
                                        <td>{each.name}</td>
                                        <td>{each.size}</td>
                                    </tr>
                                ))}
                            </tbody>
                            
                            </table>

                            <div className = "mt-4">
                                <h1 className = "dress-design-preview-heading mt-3">Selected Designs :</h1>
                                <div className = "dress-design-preview-container">
                                {selectedData.map(each =>(
                                    <div key = {each.id}>
                                        <img src = {each.imageUrl} className = "dress-design-preview-image" alt = "design-preview"/>
                                    </div>
                                ))} 
                                </div >
                            </div>
                        </div> */}

                        <div className = "invoice-order-details">
                        <p className = "invoice-customer-data"><span className = "invoice-customer-details">Order Item Name : </span>{name}</p>
                        <p className = "invoice-customer-data"><span className = "invoice-customer-details">Total Amount : </span>{price}</p>
                        </div>

                        <hr className = "invoice-horizontal-line"/>
                        <h1 className = "invoice-footer">Thank you! Visit Again!</h1>
                        <p className = "invoice-footer-brand-name">@DarjiBhai</p>

                    </div>

                </div>
                
                </div>
            </IonContent>
    )
}

export default Invoice
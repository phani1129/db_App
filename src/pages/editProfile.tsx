import React,{Component} from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import './editProfile.css'
import { IonContent } from "@ionic/react";
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";


var userData = []

let registeredData = JSON.parse(localStorage.getItem("registrationData"))


class EditProfile extends Component{

    state = {userDetails : {},username : registeredData[0].username,firstname: "",lastname: "",gender: "",dob:"", email: "", phonenumber: registeredData[0].phonenumber, password : registeredData[0].password,recreatepassword : "",jwtToken:"",
    usernameErrorMsg : "",
    firstnameErrorMsg : "",
    lastnameErrorMsg : "",
    emailErrorMsg : "",
    phonenumberErrorMsg : "",
    passwordErrorMsg : "",
    errorMsg: "",
    DOBerrorMsg : "",
    onHide : false,
    textType : "password"
    }

    onPasswordHideAndShow = () =>{
        const {onHide} = this.state
        this.setState({onHide : !onHide})
        if(onHide){
            this.setState({textType : "password"})
        }else{
            this.setState({textType : "text"})
        }
    }


    onChangeUsername = event =>{
        this.setState({username : event.target.value})
    }


    onChangeFirstname = event =>{
        this.setState({firstname : event.target.value})
    }

    onChangeLastname = event =>{
        this.setState({lastname : event.target.value})
    }

    

    onChangeMail = event =>{
        this.setState({email : event.target.value})
    }
    onChangePhonenumber = event =>{
        this.setState({phonenumber : event.target.value})
    }
    onChangePassword = event =>{
        this.setState({password : event.target.value})
    }

    // onChangeReCreatePassword = event =>{
    //     this.setState({recreatepassword : event.target.value})
    // }

    validateUsername = event => {
        if(event.target.value === ""){
            this.setState({usernameErrorMsg:"*Required"})
        }else if(event.target.value.length < 3){
            this.setState({usernameErrorMsg:"*Please enter Valid Name"})
        }
        else{
            this.setState({usernameErrorMsg:""})
        }
    }

    validateFirstName = event => {
        if(event.target.value === ""){
            this.setState({firstnameErrorMsg:"*Required"})
        }else if(event.target.value.length < 3){
            this.setState({firstnameErrorMsg:"*Please enter Valid Name"})
        }
        else{
            this.setState({firstnameErrorMsg:""})
        }
    }

    validateLastName = event => {
        if(event.target.value === ""){
            this.setState({lastnameErrorMsg:"*Required"})
        }else if(event.target.value.length < 3){
            this.setState({lastnameErrorMsg:"*Please enter Valid Name"})
        }
        else{
            this.setState({lastnameErrorMsg:""})
        }
    }

    validateDOB = event =>{
        if(event.target.value === ""){
            this.setState({DOBerrorMsg:"*Required"})
        }
        else{
            this.setState({DOBerrorMsg:""})
        }
    }

    validateEmail = event => {
        const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
        if(event.target.value.match(pattern)){
        this.setState({emailErrorMsg:""})
        this.setState({email:event.target.value})
        }else if(event.target.value === ""){
            this.setState({emailErrorMsg:"*Required"})
        }
        else{
            this.setState({emailErrorMsg:"*Invalid email"})
        }
        
    }
    validatePhonenumber = event => {
        if(event.target.value === ""){
            this.setState({phonenumberErrorMsg:"*Required"})
        }else if(event.target.value.length !== 10){
            this.setState({phonenumberErrorMsg:"*Invalid Phone number"})
        }
        else{
            this.setState({phonenumberErrorMsg:""})
        }
    }
    validatePassword = event => {
        if(event.target.value === ""){
            this.setState({passwordErrorMsg:"*Required"})
        }else if(event.target.value.length < 8){
            this.setState({passwordErrorMsg:"*Use minimum 8 characters in your password"})
        }
        else{
            this.setState({passwordErrorMsg:""})
        }
    }

    onSubmitRegisterForm = event =>{
        console.log(registeredData[0].id)
        const {userDetails,username,firstname,lastname,gender,dob,email,phonenumber,password} = this.state
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
        event.preventDefault()
        
        if(firstname.length > 2 && email.match(emailPattern) && phonenumber.length === 10 && password.length > 7){
            userDetails.id = registeredData[0].id
            userDetails.username = username
            userDetails.firstname = firstname
            userDetails.lastname = lastname
            userDetails.gender = gender
            userDetails.dob = dob
            userDetails.email = email
            userDetails.phonenumber = phonenumber
            userDetails.password = password
            userDetails.jwtToken = firstname+password+lastname+dob
            userData.push(userDetails)
            localStorage.setItem("registrationData",JSON.stringify(userData))
            this.setState({errorMsg : ""})
            // this.setState({firstname:""})
            // this.setState({lastname:""})
            // this.setState({gender:""})
            // this.setState({dob:""})
            // this.setState({email:""})
            // this.setState({phonenumber:""})
            // this.setState({password:""})
            this.setState({userDetails:{}})
        }else{
            this.setState({errorMsg : "*Please fill Validate details"})
        }
        
    }

    render(){
        const {username,firstname,lastname,password,email,phonenumber,usernameErrorMsg,firstnameErrorMsg,lastnameErrorMsg,emailErrorMsg,phonenumberErrorMsg,passwordErrorMsg,errorMsg,DOBerrorMsg,onHide,textType} = this.state
        return(
        <IonContent>
        <div className = "edit-register-form-main-container">
            <form className = "edit-register-form-container" onSubmit = {this.onSubmitRegisterForm}>
                <h1 className = "edit-form-heading mb-3">Register Here</h1>
            <div className = "edit-register-container">


            <div className = "edit-input-container">
                <div className = "edit-input-values-container">
                    <div>
                        <label className="edit-input-label" htmlFor="firstname">
                            USER NAME
                        </label> <br />
                        <input type="text" id="username" className="edit-input-filed" value = {username} onChange = {this.onChangeUsername} onBlur={this.validateUsername} placeholder = "Username" />
                        <p className = "edit-validation-details">{usernameErrorMsg}</p>
                    </div>
                </div>
            </div>


                <div className = "edit-input-container">

                    <div className = "edit-input-values-container">
                        <div>
                            <label className="edit-input-label" htmlFor="firstname">
                                FIRST NAME
                            </label> <br />
                            <input type="text" id="firstname" className="edit-input-filed" value = {firstname || ""} onChange = {this.onChangeFirstname} onBlur={this.validateFirstName} placeholder = "Firstname" />
                            <p className = "edit-validation-details">{firstnameErrorMsg}</p>
                        </div>

                        <div>
                            <label className="edit-input-label" htmlFor="lastname">
                                LAST NAME
                            </label> <br />
                            <input type="text" id="lastname" className="edit-input-filed" value = {lastname || ""} onChange = {this.onChangeLastname} onBlur={this.validateLastName} placeholder = "Lastname"/>
                            <p className = "validation-details">{lastnameErrorMsg}</p>
                        </div>
                    </div>
                </div>


                <div className = "edit-input-container">

                    <div className = "edit-input-values-container">
                        <div className = "edit-input-gender-container mb-3 mt-2">
                            <label className="edit-input-label mb-1" htmlFor="gender">
                                GENDER
                            </label> <br />
                            <div className = "mb-3">
                                <input type="radio" name="gender-male" id = "gender1" className = "radio-input mr-2" value = "Male" onChange = {e => this.setState({gender: e.target.value})}/>
                                <label htmlFor = "gender1" className = "radio-input-label">Male</label>
                                <input type="radio" name="gender-female" id = "gender2" className = "radio-input ml-4 mr-2" value = "Female" onChange = {e => this.setState({gender: e.target.value})}/>
                                <label htmlFor = "gender2" className = "radio-input-label">Female</label>
                            </div>
                        </div>

                        <div >
                            <label className="edit-input-label" htmlFor="dob">
                                DATE OF BIRTH
                            </label> <br />
                            <input type="date" id="dob" className="edit-input-filed" onChange = {e => this.setState({dob: e.target.value})} onBlur={this.validateDOB}/>
                            <p className = "edit-validation-details">{DOBerrorMsg}</p>
                        </div>
                    </div>
                </div>


                <div className = "edit-input-container">
                    <div className = "edit-input-values-container">
                        <div>
                            <label className="edit-input-label" htmlFor="mail">
                                EMAIL
                            </label> <br />
                            <input type="mail" id="mail" className="edit-input-filed" value = {email || ""} onChange = {this.onChangeMail} onBlur={this.validateEmail} placeholder = "Email"/>
                            <p className = "edit-validation-details">{emailErrorMsg}</p>
                        </div>

                        <div>
                            <label className="edit-input-label" htmlFor="phonenumber">
                                PHONE NUMBER
                            </label> <br />
                            <input type="tel" id="phonenumber" className="edit-input-filed" value = {phonenumber} onChange = {this.onChangePhonenumber} onBlur={this.validatePhonenumber} placeholder = "Phone number"/>
                            <p className = "edit-validation-details">{phonenumberErrorMsg}</p>
                        </div>
                    </div>    
                </div>


                <div className = "edit-input-container">
                    <div className = "edit-input-values-container">
                        <div>
                            <label className="edit-input-label" htmlFor="create-password">
                                PASSWORD
                            </label>< br/>
                            <input type={textType} id="create-password" className="edit-input-filed" value = {password} onChange = {this.onChangePassword} onBlur={this.validatePassword} placeholder = "password"/>
                            {onHide ? <IoIosEyeOff className = "edit-password-hide-and-show" onClick = {this.onPasswordHideAndShow}/> : <IoMdEye className = "edit-password-hide-and-show" onClick = {this.onPasswordHideAndShow}/>}
                            <p className = "edit-validation-details">{passwordErrorMsg}</p>
                        </div>
                    </div>    
                </div>


                <div className = "text-center mt-3">
                    <button type="submit" className="edit-register-button">
                        Update
                    </button>
                    <p className = "edit-validation-details">{errorMsg}</p>
                    <p className = "edit-already-have-account">Already have an account? <Link to = "/login" className = "login-now-link">Login now</Link></p>
                </div> 
            </div>
            </form>
        </div>
        </IonContent>
        )
    }
}

export default EditProfile
import React,{Component} from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import './registerform.css'
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

var userData = []

class RegisterForm extends Component{
    
    state = {userDetails : {},username: "",phonenumber: "", password : "",
    usernameErrorMsg : "",
    phonenumberErrorMsg : "",
    passwordErrorMsg : "",
    errorMsg: "",
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

    onChangeusername = event =>{
        this.setState({username : event.target.value})
    }

    onChangePhonenumber = event =>{
        this.setState({phonenumber : event.target.value})
    }
    onChangePassword = event =>{
        this.setState({password : event.target.value})
    }


    validateusername = event => {
        if(event.target.value === ""){
            this.setState({usernameErrorMsg:"*Required"})
        }else if(event.target.value.length < 3){
            this.setState({usernameErrorMsg:"*Please enter Valid Name"})
        }
        else{
            this.setState({usernameErrorMsg:""})
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
        const {userDetails,username,phonenumber,password} = this.state
        event.preventDefault()
        
        if(username.length > 2 && phonenumber.length === 10 && password.length > 7){
            userDetails.id = "darjibhai_"+username+"?db@2023"+`user_?${phonenumber}`
            userDetails.username = username
            userDetails.phonenumber = phonenumber
            userDetails.password = password
            userData.push(userDetails)
            localStorage.setItem("registrationData",JSON.stringify(userData))
            this.setState({username:""}) 
            this.setState({phonenumber:""})
            this.setState({password:""})
            this.setState({userDetails:{}})
            this.setState({errorMsg : ""})
        }else{
            this.setState({errorMsg : "*Please fill Validate details"})
        }
        
    }

    render(){
        const {username,password,phonenumber,usernameErrorMsg,phonenumberErrorMsg,passwordErrorMsg,errorMsg,onHide,textType} = this.state
        return(
            
        <div className = "register-form-main-container">
            
            <form className = "register-form-container" onSubmit = {this.onSubmitRegisterForm}>
                <h1 className = "form-heading mb-3">Register Here</h1>
            <div className = "register-container">

                <div className = "input-container">

                        <div>
                            <label className="input-label" htmlFor="username">
                                USER NAME
                            </label> <br />
                            <input type="text" id="username" className="input-filed" value = {username || ""} onChange = {this.onChangeusername} onBlur={this.validateusername} placeholder = "username"/>
                            <p className = "validation-details">{usernameErrorMsg}</p>
                        </div>

                        <div>
                            <label className="input-label" htmlFor="phonenumber">
                                PHONE NUMBER
                            </label> <br />
                            <input type="tel" id="phonenumber" className="input-filed" value = {phonenumber || ""} onChange = {this.onChangePhonenumber} onBlur={this.validatePhonenumber} placeholder = "Phone number"/>
                            <p className = "validation-details">{phonenumberErrorMsg}</p>
                        </div>

                        <div>
                            <label className="input-label" htmlFor="create-password">
                                PASSWORD
                            </label>< br/>    
                            <input type={textType} id="create-password" className="input-filed" value = {password || ""} onChange = {this.onChangePassword} onBlur={this.validatePassword} placeholder = "password"/>
                            {onHide ? <IoIosEyeOff className = "password-hide-and-show" onClick = {this.onPasswordHideAndShow}/> : <IoMdEye className = "password-hide-and-show" onClick = {this.onPasswordHideAndShow}/>}
                            <p className = "validation-details">{passwordErrorMsg}</p>
                        </div>
                </div>


                <div className = "text-center mt-3">
                    <button type="submit" className="register-button">
                        Register
                    </button>
                    <p className = "validation-details">{errorMsg}</p>
                    <p className = "already-have-account">Already have an account? <Link to = "/login" className = "login-now-link">Login now</Link></p>
                </div> 
            </div>
            </form>
            </div>
        )
    }
}

export default RegisterForm
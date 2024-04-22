import {Component} from 'react'
import { Link, Redirect } from 'react-router-dom'
// import Cookies from 'js-cookie'
import './loginform.css'
import { IonContent } from '@ionic/react'


const userData = JSON.parse(localStorage.getItem("data"))

class LoginForm extends Component {

    state = {
      mobileNumber: "",
      password: "",
      showSubmitError : false,
      errorMsg : ""
    }
  
    onChangeMobileNumber = event => {
      this.setState({mobileNumber: event.target.value})
    }
  
    onChangePassword = event => {
      this.setState({password: event.target.value})
    }
  
    renderPasswordField = () => {
      const {password} = this.state
      return (
        <>
          <label className="input-label" htmlFor="password">
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            className="password-input-filed"
            value={password}
            onChange={this.onChangePassword}
            placeholder = "Password"
          />
        </>
      )
    }
  
    renderMobileNumberField = () => {
      const {mobileNumber} = this.state
      return (
        <>
          <label className="input-label" htmlFor="mobilenumber">
            MOBILE NUMBER
          </label>
          <input
            type="tel"
            id="mobilenumber"
            className="username-input-filed"
            value={mobileNumber}
            onChange={this.onChangeMobileNumber}
            placeholder = "Mobile Number"
          />
        </>
      )
    }
  
    onSubmitSuccess = (jwt_token) =>{
    //   Cookies.set("jwt_token",jwt_token,{expires : 30})
      const {history} = this.props
      history.replace("/")
    }
  
    onSubmitFailure = () =>{
      const {mobileNumber,password} = this.state
      if(mobileNumber !== "" && password !== ""){
      const errorMsg = "Mobile number and Password didn,t match"
      this.setState({showSubmitError:true, errorMsg})
      }
    }
  
    onSubmitForm = async (event) =>{
      event.preventDefault()
      const {mobileNumber,password} = this.state
      if(mobileNumber === "" && password === ""){
        const errorMsg = "Please Enter Mobile number and Password"
        this.setState({showSubmitError:true, errorMsg})
      }
      const user = userData.map(eachUser =>(eachUser.phonenumber === mobileNumber && eachUser.password === password))
      
      if(user.find(eachValue=>eachValue === true)){
        const user = userData.filter(eachUser =>(eachUser.phonenumber === mobileNumber && eachUser.password === password))
        const jwt_token = user[0].jwtToken
        this.onSubmitSuccess(jwt_token)
      }else{
          this.onSubmitFailure()
      }  
      
    }
  
    render() {
      const {showSubmitError,errorMsg} = this.state
  
    //   const jwt = Cookies.get("jwt_token")
    //       if(jwt !== undefined){
    //           return <Redirect to = "/" />
    //       }
          
      return (
        <>
        
            <div className="login-form-container">
            <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
                className="login-image"
    
                alt="website login"
            />
            
            <form className="form-container" onSubmit = {this.onSubmitForm}>
                <h1 className="login-website-heading">DARJIBHAI</h1>
                <div className = "d-flex flex-column justify-content-center">
                <div className="input-container">{this.renderMobileNumberField()}</div>
                <div className="input-container">{this.renderPasswordField()}</div>
                </div>
                <button type="submit" className="login-button">
                Login
                </button>
                {showSubmitError && <p className = "error-msg">*{errorMsg}</p>}
                <p className = "dont-have-account">Don't have an account?  {<Link to = "/register" className = "register-now-link">Create Account</Link>}</p> 
            </form>
            </div>
        
        </>
      )
    }
  }
  
  export default LoginForm
  
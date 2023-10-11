import Axios from "axios"
import { useState } from "react"
import { useNavigate } from 'react-router-dom';


function SignIn(){
  const navigate = useNavigate()
  //Récupération des logs 
  const [userName, setUserName] = useState("")
  const userNameUpdate = (e) => {
    setUserName(e.target.value)
  }
  const [password, setPassword] = useState("")
  const passwordUpdate = (e) => {
    setPassword(e.target.value)
  }
  //Envoie de la requete de connexion a l'API avec récupération du token + mise du token dans le local storage
  function handleSubmit(event){
    event.preventDefault()
    console.log(userName, password)
    const logs = {
      email: userName,
      password: password
    }
    Axios.post('http://localhost:3001/api/v1/user/login', logs)
      .then(response => {
        localStorage.setItem("token", response.data.body.token)
        navigate("/user")
      })
      .catch(error => {
        console.error(error)
      })
  }
    return (
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="mail" id="username" onChange={userNameUpdate}/>
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={passwordUpdate}/>
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button onClick={handleSubmit} className="sign-in-button">
              Sign In
            </button>
          </form>
        </section>
      </main>
    )
}

export default SignIn
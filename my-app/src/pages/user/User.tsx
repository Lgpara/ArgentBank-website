import { useEffect, useState } from "react"
import getToken from "../../scripts/index.js"
import Axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { sendStore } from "./UserSlice.js"

function User() {
  const dispatch = useDispatch()
  const [responseData, setResponseData] = useState({})
  useEffect(() => {
    const token = getToken()
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    }
    if (token) {
      Axios.post("http://localhost:3001/api/v1/user/profile", {}, { headers })
        .then((response) => {
          if (response.status === 200) {
            const data = response.data.body
            setResponseData(data)
          }
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }, [])
  // Send user data to store
  useEffect(()=>{
    const data = responseData
    const userData = {
      id: data.id,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      userName: data.userName
    }
    dispatch(sendStore(userData))
    
  },[responseData])
  
  const user = useSelector((state) => state.userData);
  console.log(user)
  // Get user data from store
  // const user = useSelector((state)=> state.userDataReducer)


  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {user.firstName} {user.lastName}!
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  )
}

export default User

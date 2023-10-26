import { useEffect } from "react"
import getToken from "../../scripts/getToken.js"
import Axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { sendStore } from "../../app/storeSlice/userDataSlice.js"



export default function StoreHandler(){
    const dispatch = useDispatch()
    useEffect(() => {
      const token = getToken()
      async function tokenForId() {
        const headers = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        }
        try {
          const response = await Axios.post("http://localhost:3001/api/v1/user/profile", {}, { headers });
          if (response.status === 200) {
            const data = response.data.body;
            const userData = {
              id: data.id,
              email: data.email,
              firstName: data.firstName,
              lastName: data.lastName,
              userName: data.userName
            }
            dispatch(sendStore(userData))
          }
        } catch (error) {
          console.error("Une erreur s'est produite lors de la récupération des données.", error);
        }
      }
  
      if (token) {
        tokenForId()
      }
    }, [])
    const user = useSelector((state) => state.userData);
    return(
        <></>
    )
}
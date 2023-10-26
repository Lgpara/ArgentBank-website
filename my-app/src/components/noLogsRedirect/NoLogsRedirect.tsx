import getToken from "../../scripts/getToken"
import {useNavigate} from "react-router-dom"
import {useEffect} from "react"


function NoLogsRedirect(){
    const token = getToken()
    const navigate = useNavigate()
    useEffect(()=>{
        if(token === null){
            navigate("/")
        }else {
            console.log("User token retrieved")
        }
    },[])
    return(
        <></>
    )
}

export default NoLogsRedirect
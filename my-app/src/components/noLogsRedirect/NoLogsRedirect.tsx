import getToken from "../../scripts/getToken"
import {useNavigate} from "react-router-dom"
import {useEffect} from "react"


function NoLogsRedirect(){
    const token = getToken()
    const navigate = useNavigate()
    useEffect(()=>{
        console.log(token)
        if(token === null){
            navigate("/")
        }else {
            console.log("User token retrieved")
        }
        console.log("nologs usefxt called")
    },[])
    return(
        <></>
    )
}

export default NoLogsRedirect
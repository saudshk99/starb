import { createContext,useState,useEffect} from "react";
import axios from 'axios';
import jwt_decode from "jwt-decode";
// import { useNavigate } from "react-router-dom";


const AuthContext= createContext()

export default AuthContext

export const AuthProvider=({children})=>{
    // const navigate = useNavigate();

    let[authTokens,setAuthTokens]=useState(sessionStorage.getItem('Token')?sessionStorage.getItem('Token'): null    )
    let[user,setUser]=useState(sessionStorage.getItem('Token')? jwt_decode(sessionStorage.getItem('Token')):null)

    console.log(authTokens)
    console.log(user)


    const loginUser=async(e,data)=>{
        e.preventDefault()
        const response= await axios.post('http://127.0.0.1:8000/api/token/',data)


        if(response.status===200){
            setAuthTokens(response.data)
            setUser(jwt_decode(response.data.access))
            
            console.log(user,'usersssssssss')

            await sessionStorage.setItem('Token',JSON.stringify(response.data))

            return true
            
        }else{
            return false
        }
    }
    let contextData={
        user:user,
        loginUser:loginUser
    }
    return(
        <AuthContext.Provider value={contextData}>

        {children}
        </AuthContext.Provider>

    )

}
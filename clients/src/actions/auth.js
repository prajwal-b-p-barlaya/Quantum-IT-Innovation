import * as api from '../api'
import { setCurrentUser } from "./currentUser";

export const signup=(authData,navigate)=>async (dispatch)=>{
    // const navigate = useNavigate();
  
    try{
        const{data}=await api.signUp(authData)
        dispatch({type:'AUTH',data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
        navigate("/");
    }
    catch(error){
         console.log(error)
    }
}

// const navigate = useNavigate();

export const login=(authData,navigate)=>async (dispatch)=>{
    // const navigate = useNavigate();
    try{
        const{data}=await api.logIn(authData)
        dispatch({type:'AUTH',data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
        navigate("/")
    }
    catch(error){
         console.log(error)
    }
}

// import * as api from '../api';

// export const signup = (authData, history) => async (dispatch) => {
//     try {
//         const { data } = await api.signUp(authData);
//         dispatch({ type: 'AUTH', data });
//         history('/');
//     } catch (error) {
//         console.log(error);
//     }
// };

// export const login = (authData, history) => async (dispatch) => {
//     try {
//         const { data } = await api.logIn(authData);
//         dispatch({ type: 'AUTH', data });
//         history('/');
//     } catch (error) {
//         console.log(error);
//     }
// };


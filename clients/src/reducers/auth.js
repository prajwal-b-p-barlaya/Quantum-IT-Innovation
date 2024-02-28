const authReducer = (state={data:null},action)=>{
// if(actions==='')
// instaed we can use switch

switch(action.type){
    case 'AUTH':
        localStorage.setItem('Profile',JSON.stringify({ ...action?.data}))

        // we are using  ...action ? bez if data is present then it will take or else it will be leave  if we use onlt ...action then when data is not present the it ill return an error
        return {...state, data:action?.data}
        
        case 'LOGOUT':
            localStorage.clear();
            return{...state,data:null}
        default:
            return state;
}
}

export default authReducer
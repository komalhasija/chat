import {createSlice} from "@reduxjs/toolkit"

const userSlice=createSlice({
    name:"user",
    initialState:{
        authUser:null,
        otherUsers:[],
        selectedUsers:null,
    },
    reducers:{
        SetauthUser:(state,action)=>{
            state.authUser=action.payload;
        },
        SetotherUsers:(state,action)=>{
            state.otherUsers=action.payload;
        },
        SetselectedUsers:(state,action)=>{
            state.selectedUsers=action.payload;
        }
    }
})
export const {SetauthUser,SetotherUsers,SetselectedUsers} =userSlice.actions;
export default userSlice.reducer;

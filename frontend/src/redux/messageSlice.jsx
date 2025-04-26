import {createSlice} from "@reduxjs/toolkit"

const messageSlice=createSlice({
    name:"message",
    initialState:{
        messages:[],
        selectedConversation:null,
    },
    reducers:{
        setMessages:(state,action)=>{
            state.messages=action.payload;
        },
        setSelectedConversation:(state,action)=>{
            state.selectedConversation=action.payload;
        }
    }
});
export const {setMessages,setSelectedConversation}=messageSlice.actions;
export default messageSlice.reducer;
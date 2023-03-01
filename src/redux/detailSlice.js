import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// Gümvcelleme Kalıcı olmadığı için yorum satırına aldım.
// export const getDetailPost=createAsyncThunk('post/getDetailPost',async (id)=>{
//     const res=await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     return res.data
// })
export const getComments=createAsyncThunk('post/getComments',async (id)=>{
    const res=await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    return res.data
})

const detailSlice=createSlice({
    name:"post",
    initialState:{
        isLoading:false,
        // detailPosts:[],
        comments:[],
   
    },
    reducers:{},
    extraReducers:(builder)=>{
        //  //Get Detail
        // builder.addCase(getDetailPost.pending,(state)=>{ state.isLoading=true})
        // builder.addCase(getDetailPost.fulfilled,(state,action)=>{
        //     state.detailPosts = action.payload
        //     state.isLoading=false
        // })
        // builder.addCase(getDetailPost.rejected,(state,action)=>{
        //     console.log(action.error.message);
        //     state.isLoading=false
        // })

        //Get Comments
        builder.addCase(getComments.pending,(state)=>{ state.isLoading=true})
        builder.addCase(getComments.fulfilled,(state,action)=>{
          
            state.comments = action.payload

            state.isLoading=false
        })
        builder.addCase(getComments.rejected,(state,action)=>{
            console.log(action.error.message);
            state.isLoading=false
        })
       
     
    }
})

export default detailSlice.reducer
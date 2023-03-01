import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from 'react-hot-toast';

export const getPostAsync=createAsyncThunk('post/getPostAsync',async ()=>{
    const res=await axios.get('https://jsonplaceholder.typicode.com/posts')
    return res.data
})
export const postPostAsync = createAsyncThunk('post/postPostAsync', async ({title,body}) => {
    const res = await axios.post('https://jsonplaceholder.typicode.com/posts', { 
        "title": title,
        "body":body,
        "userId":1
 })
    console.log(res.data);
    return res.data
})
export const getDeletePost=createAsyncThunk('post/getDeletePost',async ({id})=>{
    const res=await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`)
    console.log(res);
    return res.data
})
export const getUpdatePost=createAsyncThunk('post/getUpdatePost',async ({id,title,body})=>{
    const res=await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        id,
        title,
        body,
        "userId":1
})
   
    return res.data
})

const postSlice=createSlice({
    name:"post",
    initialState:{
        isLoading:false,
        posts:null,
        userPosts:null,
        detailPost:[],
        id:100
    },
    reducers:{
        detailPostFn:(state,action)=>{
            state.detailPost=state.posts.find(item=>item.id==action.payload)
        }
    },
    extraReducers:(builder)=>{
         //Get 
        builder.addCase(getPostAsync.pending,(state)=>{ state.isLoading=true})
        builder.addCase(getPostAsync.fulfilled,(state,action)=>{
            state.posts = action.payload
            state.userPosts=action.payload.filter(post => post.userId==1)
            state.isLoading=false
        })
        builder.addCase(getPostAsync.rejected,(state,action)=>{
            console.log(action.error.message);
            state.isLoading=false
        })
        //Post 
        builder.addCase(postPostAsync.pending,(state)=>{ state.isLoading=true
          toast.loading('Wait....',{position:"top-right"})
       })
        builder.addCase(postPostAsync.fulfilled,(state,action)=>{
 
            state.posts.push({...action.payload,"id":state.id+1})
        
            state.userPosts.push({...action.payload,"id":state.id+1})
           
            state.id+=1
            toast.dismiss()
            toast.success('Registration Successful',{position:"top-right"})
            state.isLoading=false
        })
        builder.addCase(postPostAsync.rejected,(state,action)=>{
            toast.error(action.error.message)
            console.log(action.error.message);
            state.isLoading=false
        })
         //Delete
    builder.addCase(getDeletePost.pending,()=>{toast.loading("Wait...",{position:"top-right"})})
    builder.addCase(getDeletePost.fulfilled,(state,action)=>{
        toast.dismiss()
        state.posts=state.posts.filter(item=>item.id!=action.payload.id)
        state.userPosts=state.userPosts.filter(item=>item.id!=action.payload.id)
        toast.success("Successfully Delete",{position:"top-right"})})
    builder.addCase(getDeletePost.rejected,(state,action)=>{
            toast.error(action.error.message)
            console.log(action.error.message);
            state.isLoading=false
        })  
    //Update
    builder.addCase(getUpdatePost.pending,()=>{toast.loading("Wait...",{position:"top-right"})})
    builder.addCase(getUpdatePost.fulfilled,(state,action)=>{
        console.log(action.payload);
        const {id,body,title}=action.payload
        console.log(body);
        const index = state.posts.findIndex(item => item.id === id)
        state.posts[index].body = body
        state.posts[index].title = title
        const indexUser = state.userPosts.findIndex(item => item.id === id)
        state.userPosts[index].body = body
        state.userPosts[index].title = title

        toast.dismiss()
        toast.success("Successfully Updated",{position:"top-right"})})
    builder.addCase(getUpdatePost.rejected,(state,action)=>{
            toast.error(action.error.message)
            console.log(action.error.message);
            state.isLoading=false
        })    
    }
})
export const {detailPostFn}=postSlice.actions
export default postSlice.reducer
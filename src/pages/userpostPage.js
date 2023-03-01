import { useEffect } from "react";
import Card from "../components/card";
import { useDispatch,useSelector } from "react-redux";
import { getPostAsync } from "../redux/postSlice";
import { Link } from "react-router-dom";
import Spinner from "../components/spinner";

function UserPostPage() {
    const user=useSelector(state=>state.post.userPosts)
    const dispatch= useDispatch()

    useEffect(()=>{

        if(!user){
            dispatch(getPostAsync())
        }

      },[]);
      let isLoading=useSelector(state=>state.post.isLoading)
      if(isLoading){
        return(
          <div className="flex bg-gray-200 justify-center items-center h-screen">
          <Spinner/>
          </div>
        )
      }
  return (
    <>
    <div className="text-right ">
        <Link to="../new">
         <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">+ New Post</button>
         </Link>
     
         </div>
   
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center  ">
       
    {user && user.map(item=>(
        <Card key={item.id} title={item.title} body={item.body}
        id={item.id}/>
    ))}
   </div>
   </>
  )
}
export default UserPostPage
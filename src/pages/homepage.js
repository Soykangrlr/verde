import { getPostAsync } from "../redux/postSlice";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import Card from "../components/card";
import Spinner from "../components/spinner";
function HomePage() {
    const dispatch= useDispatch()
    const posts=useSelector(state=>state.post.posts)
  useEffect(()=>{
   
    if(!posts){
      dispatch(getPostAsync())
  }
  },
  []);
  let isLoading=useSelector(state=>state.post.isLoading)
  if(isLoading){
    return(
      <div className="flex bg-gray-200 justify-center items-center h-screen">
      <Spinner/>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center   ">
    {posts && posts.map(item=>(
        <Card key={item.id} title={item.title} body={item.body} id={item.id}/>
    ))}
   </div>
  )
}
export default HomePage
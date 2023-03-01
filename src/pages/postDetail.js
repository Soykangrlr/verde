import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import Spinner from "../components/spinner"
import { getComments } from "../redux/detailSlice"
// import { getDetailPost } from "../redux/detailSlice"
import { detailPostFn } from "../redux/postSlice"

function PostDetail() {
    let {id}=useParams()
    const image=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH57YywVQR_XO6lxGYLboLgDVFs1ZdliXHVA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX64p6X6bWbEC_TlCu1FkjM5MEDVkgDL0EJw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSURLuABZ8K0pzRu0S2hi16OkRnVQZKUF-gug&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqbuzSUT0lm2Md0l52I7Gh3NlKZATPROqhww&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX64p6X6bWbEC_TlCu1FkjM5MEDVkgDL0EJw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSURLuABZ8K0pzRu0S2hi16OkRnVQZKUF-gug&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqbuzSUT0lm2Md0l52I7Gh3NlKZATPROqhww&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX64p6X6bWbEC_TlCu1FkjM5MEDVkgDL0EJw&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSURLuABZ8K0pzRu0S2hi16OkRnVQZKUF-gug&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqbuzSUT0lm2Md0l52I7Gh3NlKZATPROqhww&usqp=CAU",]
    const dispatch=useDispatch()
    useEffect(()=>{
       dispatch( detailPostFn(id))
      dispatch(getComments(id))
    },[])
    let detail=useSelector(state=>state.post.detailPost)
    let comments=useSelector(state=>state.detail.comments)
    let isLoading=useSelector(state=>state.detail.isLoading)
    if(isLoading){
      return(
        <div className="flex bg-gray-200 justify-center items-center h-screen">
        <Spinner/>
        </div>
      )
    }

  return (
    <div className="p-6">
        <div className="flex items-center gap-x-5 p-4 border border-blue-500 relative ">
            <img  className="h-32 w-32 object-cover rounded-full" src={image[detail.userId-1]} alt="" />
            <div className="">
                <h4 className="text-xl font-semibold mb-2">{detail.title}</h4>
                <p className="">{detail.body}</p>
                {detail.userId==1 && <Link to={`../update/${id}`}>
         <button type="button" className="absolute  top-2 right-2  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-lg text-xs px-2 py-1 ">Update or Delete</button>
         </Link>}
            </div>
        </div>
        <div className="p-3">
          <h2 className="font-bold text-2xl">Comments</h2>
          {comments.map(item=>(
            <div key={item.id} className="p-5 mb-2 border-b-2 border-blue-700">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-xs text-stone-500 mb-1">{item.email}</p>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
    </div>
  )
}
export default PostDetail
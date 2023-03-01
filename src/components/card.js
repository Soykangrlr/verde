import { Link } from "react-router-dom"

function Card({title,body,id}) {
  return (

   <div className=" max-w-sm w-full items-center max-h-52 p-6 bg-white border  border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer"><Link to={`../postDetail/${id}`}>
      <p className="mb-2 leading-snug  text-lg font-bold tracking-tighter text-gray-900">{title}</p>
      <p className="font-normal text-sm text-gray-700">{body.split(" ").slice(0, 14).join(" ")}  ...</p>
    </Link> 
</div>

  )
}
export default Card
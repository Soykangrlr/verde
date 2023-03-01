import {AiFillBell,AiTwotoneAppstore} from "react-icons/ai"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Header() {
  const user=useSelector(state=>state.post.userPosts)
  return (
    <header>
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex  flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/">
           <div className="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap">Arbit Blog</span>
                </div>
                </Link>
                <div className="flex items-center font-semibold text-gray-600 gap-x-2">
                  <Link to="userPost">
                    <div className="relative flex p-2">
                    <h5>Posts</h5>
                    <span className="absolute  top-0 right-1 rounded-full bg-blue-200 text-center text-xs">{user?user.length:""}</span>
                    </div>
                    </Link>
                    <AiFillBell size="20"/>
                    <AiTwotoneAppstore size="20"/>
                    <img className="w-6 h-6 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH57YywVQR_XO6lxGYLboLgDVFs1ZdliXHVA&usqp=CAU" alt="photo" />
           </div>
           </div>
          
    </nav>
</header>
  )
}
export default Header
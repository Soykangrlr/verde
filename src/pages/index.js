import {
    Route,
    Routes,
  } from "react-router-dom";
import ErrorPage from "./errorpage";
import HomePage from "./homepage";
import NewPost from "./newPost";
import PostDetail from "./postDetail";
import UserpostPage from "./userpostPage";

  function Index() {
    return (
      <div className="bg-white p-5 min-h-screen">
               <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="userPost" element={<UserpostPage/>}/>
        <Route path="postDetail/:id" element={<PostDetail/>}/>
        <Route path="new" element={<NewPost/>}/>
        <Route path="update/:id" element={<NewPost/>}/>
        <Route  path="*" element={<ErrorPage/>}/>
      </Routes>
      </div>
 
    )
  }
  export default Index
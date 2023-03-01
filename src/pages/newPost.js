import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { postPostAsync, getDeletePost,getUpdatePost, detailPostFn } from "../redux/postSlice";
import { getComments, getDetailPost  } from "../redux/detailSlice";
import toast from 'react-hot-toast';
function NewPost() {
  let { id } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();

  let detail = useSelector((state) => state.post.detailPost);
  useEffect(() => {
    if(id){
        dispatch(detailPostFn(id));
        dispatch(getComments(id));
    }

   
  }, []);
  useEffect(() => {
  
    if(id){
        setTitle(detail.title);
    setBody(detail.body);
    }else{     setTitle("");
        setBody("");}
    
  }, [detail]);

  const navigate = useNavigate();
  const newPost = async () => {
    if(title.trim().length>=3 && body.trim().length>=3){
    await dispatch(postPostAsync({ title, body }));
    setTitle("")
    setBody("")
    navigate("/userPost")
  }else{
    toast.error("Title and detail must be at least 3 characters")
  }
    
  };
  const updatePost = async () => {
    await dispatch(getUpdatePost({ title, body,id }));
   back()
   
  };
  const deletePost = async () => {
    await dispatch(getDeletePost({ id }));
    setTitle("")
    setBody("")
 navigate("/userPost")
  };
  const back = () => {
    navigate(-1);
  };
  return (
    <div className="">
      <div className="flex items-center gap-x-2 mb-2">
        <AiOutlineArrowLeft
          onClick={back}
          className="w-10 h-10 hover:cursor-pointer rounded-full bg-gray-300 p-2"
        />
        <span className="font-semibold text-2xl">Post</span>
        <span className="text-2xl">
          {id ? "(Update/Delete)" : "(New Post)"}
        </span>
      </div>
      <div className="md:mx-11 lg:mx-24 flex flex-col gap-y-5">
        <div>
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Title
          </label>
          <textarea
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            id="title"
            rows="3"
            className="block p-2.5 w-full text-xl font-semibold text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Write your title here..."
          ></textarea>
        </div>

        <div>
          <label
            htmlFor="Detail"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Detail
          </label>
          <textarea
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
            id="Detail"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Write your detail here..."
          ></textarea>
        </div>
        <div className="flex justify-end items-center gap-3">
          {id ? (
            <>
              <button
                onClick={deletePost}
                type="button"
                className="text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              >
                Delete
              </button>
              <button
                onClick={updatePost}
                type="button"
                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              >
                Update
              </button>
            </>
          ) : (
            <>
              <button
          onClick={back}
                type="button"
                className="text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              >
                Cancel
              </button>
              <button
                onClick={newPost}
                type="button"
                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              >
                Save
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default NewPost;

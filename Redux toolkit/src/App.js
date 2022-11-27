import "./App.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./Redux/Features/PostSlice";

function App() {
  const dispatch = useDispatch();
  // const { posts, loading } = useSelector((state) => state.posts);
  // const posts = useSelector((state) => state.posts);
  // const [data, setData] = useState(useSelector((state) => state.posts));

  const { posts, loading } = useSelector((state) => state.posts);
  console.log("loading =========>", loading);
  const { local } = useSelector((state) => state.local);

  console.log("posts", posts);

  // console.log(posts);
  // console.log(data);

  useEffect(() => {
    callAPI();
  }, []);

  const callAPI = () => {
    dispatch(getPosts());
  };

  const setToLocalStorage = () => {
    localStorage.setItem("posts", JSON.stringify(posts.map((data) => data)));
  };

  const gotFromLocalStorage = () => {
    console.log("local ===================> ", local);
  };
  return (
    <div>
      hello world
      <button onClick={setToLocalStorage}>button</button>
      <button onClick={gotFromLocalStorage}>get From Local Storage</button>
      {loading ? <h3> LOADING</h3> : null}
      {!loading && (
        <div>
          {posts.map((items) => {
            return <h3 key={items.id}> {items.title}</h3>;
          })}
        </div>
      )}
      <div></div>
    </div>
  );
}

export default App;

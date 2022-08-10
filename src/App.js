import React, { useState} from "react";
import './style/app.scss'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', description: 'JavaScript - это язык программирования'},
    {id: 2, title: 'HTML', description: 'HTML - это язык разметки'},
    {id: 3, title: 'CSS', description: 'CSS - это язык стилей'}
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '16px 0'}}/>
      <div>
        <MySelect
          defaultValue='Сортировка по'
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'description', name: 'По описанию'}
          ]}
        />
      </div>
      {posts.length
          ? <PostList remove={removePost} posts={posts} title={'Список постов'}/>
          : <h1 style={{textAlign: 'center'}}>Постов нет</h1>
      }
    </div>
  );
}

export default App;
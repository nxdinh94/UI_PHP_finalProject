import { Fragment } from 'react';
import Counter from './features/counter/Counter';
import { PostsList } from './features/posts/PostsList';
import { AddPostForm } from './features/posts/AddPostForm';

import { useSelector } from 'react-redux';



function App() {
  const count = useSelector((state) => state.counter.value);

  return (
    <div className="App">
      <Fragment>
        <h1>{count}</h1>
        <Counter/>
        <AddPostForm/>
        <PostsList/>
      </Fragment>
      
    </div>
  );
}

export default App;

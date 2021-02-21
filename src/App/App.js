import './App.scss';
import { Switch, Route } from 'react-router-dom';
import PostsLayout from './Posts/PostsLayout/PostsLayout';
import PostDetailsWrapper from './Posts/PostDetailsWrapper/PostDetailsWrapper';
import { postsStore } from '../App/Posts/store';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" render={(params) => {
          return <PostsLayout {...params} postsStore={postsStore} />
        }}/>
        <Route path='/posts/:postId' render={({ match }) => {
          return (
            <PostDetailsWrapper postId={match.params.postId}/>
          )
        }} />
      </Switch>
    </div>
  );
}

export default App;

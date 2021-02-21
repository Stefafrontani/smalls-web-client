import './App.scss';
import { Switch, Route } from 'react-router-dom';
import PostsLayout from 'posts/ui/PostsLayout/PostsLayout';
import PostDetailsWrapper from 'posts/ui/PostDetailsWrapper/PostDetailsWrapper';
import { postsStore } from 'posts/store';

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

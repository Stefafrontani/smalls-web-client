import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import PostDetails from '../PostDetails/PostDetails';
import PostsList from '../PostsList/PostsList';
import Tabs from '../Tabs/Tabs';
import Loader from '../../../shared/components/Loader/Loader';
import usePostsUrlParam from '../../../shared/hooks/usePostsUrlParam';
import './PostsLayout.scss';

const PostsLayout = observer(({ postsStore }) => {
  const [postToRead, setPostToRead] = useState({})

  useEffect(() => {
    postsStore.getAllPosts();
  }, []);

  usePostsUrlParam();

  const handlePostClick = (post) => {
    setPostToRead(post)
  }

  const posts = postsStore.filteredByFav
    ? postsStore.filteredPosts
    : postsStore.posts

  return (
    <React.Fragment>
      <Tabs />
      <main className='postsLayout'>
        <section className='postsLayout__postsList'>
          {postsStore.isLoadingPosts 
            ? <Loader /> 
            : <PostsList posts={posts} postBeenFavvedId={postsStore.postBeenFavvedId} handlePostClick={handlePostClick}/>
          }
        </section>
        <aside className={`postsLayout__postDetails ${postToRead && postToRead.id ? 'postsLayout__postDetails--active' : ''}`}>
          <div>
            <PostDetails post={postToRead} postBeenFavvedId={postsStore.postBeenFavvedId}/>
          </div>
        </aside>
      </main>
    </React.Fragment>
  )
});

export default PostsLayout;
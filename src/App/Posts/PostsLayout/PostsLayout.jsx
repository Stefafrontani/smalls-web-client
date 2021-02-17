import React from 'react';
import './PostsLayout.scss';
import PostDetails from '../PostDetails/PostDetails';
import PostsList from '../PostsList/PostsList';
import useUrlParamSearch from '../../../shared/hooks/useUrlParamSearch';
import Tabs from '../Tabs/Tabs';

const PostsLayout = () => {
  const { urlParamValue } = useUrlParamSearch('postId');
  return (
    <React.Fragment>
      <Tabs />
      <main className='postsLayout'>
        <section className='postsLayout__postsList'>
          <PostsList />  
        </section>
        <aside className={`postsLayout__postDetails ${urlParamValue ? 'postsLayout__postDetails--active' : ''}`}>
          <div>
            <PostDetails />
          </div>
        </aside>
      </main>
    </React.Fragment>
  )
}

export default PostsLayout;
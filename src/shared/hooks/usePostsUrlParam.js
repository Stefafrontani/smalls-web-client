import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { postsStore } from '../../App/Posts/store';

const usePostsUrlParam = () => {
  const history = useHistory();
  useEffect(() => {
    const stringUrlSearchParams = history.location.search;
    let urlSearchParams = new URLSearchParams(stringUrlSearchParams);
    let urlParamValueFound = urlSearchParams.get('posts');
    switch (urlParamValueFound) {
      case '':
      case 'all':
          postsStore.restoreFilteredPosts()
        break;
      case 'favs':
          postsStore.filterFavPosts();
        break;
      default:
        break;
     }
    }, [history.location.search])
}

export default usePostsUrlParam;
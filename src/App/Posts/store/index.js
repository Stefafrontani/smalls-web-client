import { makeObservable, observable, runInAction, action } from 'mobx';
import postApi from '../api';

class PostsStore {
  posts = [];
  filteredPosts = [];
  filteredByFav = false;
  isLoadingPosts = false;
  postBeenFavvedId = '';
  api
  
  constructor(api) {    
    this.isLoadingPosts = false;
    this.api = api;
    makeObservable(this, {
      posts: observable,
      filteredPosts: observable,
      filteredByFav: observable,
      isLoadingPosts: observable,
      startLoading: action.bound,
      endLoading: action.bound,
      getPosts: action.bound,
      getFavPosts: action.bound,
      filterFavPosts: action.bound,
      postBeenFavvedId: observable,
      addToFavs: action.bound,
      startFavving: action.bound,
      endFavving: action.bound,
    })
  }

  async getAllPosts () {
    const posts = await this.getPosts();
    const favPosts = await this.getFavPosts();
    
    let newPostsList = [];
    posts.forEach((post) => {
      const foundPost = favPosts.find(favPost => favPost.redditPostId === post.id);
      if (foundPost) {
        newPostsList = [ ...newPostsList, { ...post, isFav: true } ];
      } else {
        newPostsList = [ ...newPostsList, post ];
      }
    });

    runInAction(() => {
      this.posts = newPostsList
    })
  }

  getPosts() {
    this.startLoading()
    return this.api.getPosts()
    .then((_posts) => {
      const posts = (_posts && _posts.length > 0 ) && _posts.map((post) => {
        return ({
          id: post.id,
          redditPostId: post.id,
          title: post.author_fullname,
          author: post.author,
          body: post.selftext,
          numComments: post.num_comments,
          createdUtc: post.created_utc,
          image: post.thumbnail, 
          isFav: false
        })
      })
      return posts.length > 0 ? posts : []
    })
    .finally(() => {
      this.endLoading();
    })
  }

  getFavPosts() {
    this.startLoading();
    return this.api.getFavPosts()
    .then((favPosts) => {
      return favPosts
    })
    .finally(() => {
      this.endLoading();
    })
  }

  startLoading() {
    runInAction(() => {
      this.isLoadingPosts = true;
    })
  }
  endLoading() {
    runInAction(() => {
      this.isLoadingPosts = false;
    })
  }

  restoreFilteredPosts() {
    runInAction(() => {
      this.filteredByFav = false
    })
  }
  filterFavPosts() {
    runInAction(() => {
      this.filteredByFav = true;
      this.filteredPosts = this.posts.filter((post) => post.isFav);
    })
  }

  addToFavs(postToFav) {
    const { id: postToFavId } = postToFav;
    this.startFavving(postToFavId)
    this.api.addToFavs(postToFav).then((response) => {
      runInAction(() => {
        this.posts = this.posts.map((post) => {
          if (post.id === postToFavId) {
            return {
              ...post,
              isFav: true
            }
          } else {
            return post
          }
        })
        this.endFavving();
      })
    })
  }
  startFavving(postId) {
    this.postBeenFavvedId = postId;
  };
  endFavving() {
    this.postBeenFavvedId = null;
  }

  removeFromFavs = (postId) => {
    this.startUnfavving(postId)
    this.api.removeFromFavs(postId).then((response) => {
      runInAction(() => {
        this.posts = this.posts.map((post) => {
          if (post.id === postId) {
            return {
              ...post,
              isFav: false
            }
          } else {
            return post
          }
        })
        this.filteredPosts = this.filteredPosts.filter(post => post.id !== postId)
        this.endFavving();
      })
    })
  }
  startUnfavving(postId) {
    this.postBeenUnfavvedId = postId;
  };
  endUnfavving() {
    this.postBeenUnfavvedId = null;
  }

  dismissPost = (postId) => {
    this.posts = this.posts.filter((post) => post.id !== postId);
  }
}

const postsStore = new PostsStore(postApi);

export { postsStore };

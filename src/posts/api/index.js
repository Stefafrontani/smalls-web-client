import { translateObject } from 'shared/utils/translations';

function getPosts() {
  return fetch('https://www.reddit.com/r/redditdev/top.json')
  .then(res => res.json(), handleBadConnection)
  .then(normalizeRedditDataStructure, (response) => { console.log('response in catch >> ', response) })
}

function getFavPosts() {
  return fetch('http://localhost:8000/posts')
  .then(res => res.json(), handleBadConnection)
  .then(translateData, (response) => { console.log('response in catch >> ', response) })
}

function addToFavs(post) {
  const requestConfig = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post)
  };
  return fetch('http://localhost:8000/posts/', requestConfig)
  .then(res => res, handleBadConnection)
  .then(handleResponse, (response) => { console.log('response in catch >> ', response) })
}

function removeFromFavs(postId) {
  const requestConfig = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: postId
  };
  return fetch('http://localhost:8000/posts/', requestConfig)
  .then(res => res, handleBadConnection)
  .then(handleResponse, (response) => { console.log('response in catch >> ', response) })
}

function handleBadConnection(error) {
  return Promise.reject('Can not connect to service')
}

function handleResponse(response) {
  // Check response.status, response.ok, etc. 
  return response
}

function normalizeRedditDataStructure(response) {
  const posts = response.data.children.map((element) => {
    const post = element.data;
    return post;
  })
  return posts;
}

function translateData (response) {
  const translatedFavPosts = response.map(post => translateObject(post, 'toFE'))
  return translatedFavPosts
}


export default {
  getPosts,
  getFavPosts,
  addToFavs,
  removeFromFavs
}

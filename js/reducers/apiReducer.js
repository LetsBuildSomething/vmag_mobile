import {
  GET_POSTS,
  GET_PHOTOS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CONNECTION_ERROR,
  SET_FINAL_ISSUE,
  ADD_FAVORITE_VIDEO_SUCCESS,
  ADD_WATCHED_VIDEO_SUCCESS,
  FETCH_COMMENTS_SUCCESS
} from '../actions/api';

import sampleData from './sampleData.json';

export type State = {
  posts: array,
  photos: array
}

const initialState = {
  posts: [],
  photos: []
};

export default function apiReducer(state: State = initialState, action) {

  // //console.log(action);
  // //console.log("______________________________________");
  // //console.log(state);
  // //console.log("______________________________________");
  // //console.log("______________________________________");
  if (action.type === GET_POSTS) {
    return {
      ...state,
      // posts: action.data,
      // company: sampleData.company,
      // cover: sampleData.cover,
      // playlists: sampleData.playlists
    };
  }

  if (action.type === GET_PHOTOS) {
    return {
      ...state,
      // photos: action.data,
    };
  }
  if (action.type === LOGIN_SUCCESS) {
    //console.log(action.data.token)
    return {
      ...state,
      connectionError: false,
      loginError: false,
      user: action.data.user,
      token: action.data.token,
    }
  }
  if (action.type === LOGIN_FAIL) {
    //console.log(action.data.token)
    return {
      ...state,
      loginError: true
    }
  }
  if (action.type === CONNECTION_ERROR) {
    //console.log(action.data.token)
    return {
      ...state,
      connectionError: true
    }
  }
  if (action.type === SET_FINAL_ISSUE) {
    return {
      ...state,
      finalIssue: action.data,
      cover: action.data.cover_video,
      playlists: action.data.playlists,
      connectionError: false,
    }
  }
  if (action.type === ADD_WATCHED_VIDEO_SUCCESS) {
    return {
      ...state,
      user: {...state.user, watchedVideos:action.watchedVideos}
    }
  }
  if (action.type === ADD_FAVORITE_VIDEO_SUCCESS) {
    return {
      ...state,
      user: {...state.user, favoriteVideos:action.favoriteVideos}
    }
  }
  if (action.type === FETCH_COMMENTS_SUCCESS) {
    return {
      ...state,
      user: {...state.user, current_video_comments:action.comments}
    }
  }


  return state;
}

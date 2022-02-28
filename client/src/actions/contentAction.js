import axios from "axios";
import {
  ITEMS_LOADING,
  ARTICLE_LIST,
  ARTICLE_CONTENT,
  SEARCHED_ARTICLE
} from "./types";
//Get Articles
export const getArticles = () => dispatch => {
  dispatch(setItemsLoading());
  axios
    .get("/api/CMS/article")
    .then(res =>
      dispatch({
        type: ARTICLE_LIST,
        payload: res.data
      })
    );
};

//From articlew route
export const getSingleArticle = (id) => dispatch => {
  dispatch(setItemsLoading());
  axios
    .get(`/api/CMS/singleArticle/${id}`)
    .then(res =>
      dispatch({
        type: ARTICLE_CONTENT,
        payload: res.data
      })
    );
};

//Search for articles
export const searchArticle = (id) => dispatch => {
  dispatch(setItemsLoading());
  axios
    .get(`/api/CMS/search/${id}`)
    .then(res =>
      dispatch({
        type: SEARCHED_ARTICLE,
        payload: res.data
      })
    );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
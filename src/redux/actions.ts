import { Action, createAction, ThunkAction } from "@reduxjs/toolkit";
import axios from "axios";
import { newsFetchedAction, newsFetchingErrorAction } from "./reducers";

const api_key = '1e0cd58d8ba9491b94604bff1a8586fb';

export interface INews { 
  title: string,
  author: string,
  description: string,
  url: string,
  publishedAt: string,
  content: string,
}

export type RootState = {
  news: INews[],
  loading: boolean,
  fetchingState: string,
  error: null | boolean,
  newsItem: INews,
  removeMessage: string,
}

export const newsFetching = createAction('NEWS_FETCHING');

export const newsFetched = createAction<newsFetchedAction>('NEWS_FETCHED');

export const newsFetchingError = createAction<newsFetchingErrorAction>('NEWS_FETCHING_ERROR');

export const removeNewsItem = createAction<INews,string>('REMOVE_NEWS_ITEM');

export const getNewsItem = createAction<INews,string>('GET_NEWS_ITEM');

export const fetchNews = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
  dispatch(newsFetching());
  return axios.get(`https://newsapi.org/v2/everything?q=education&from=2022-02-02&sortBy=popularity&apiKey=${api_key}`)
              .then(data => {
                const news = data.data.articles;
                if (news) {
                  dispatch(newsFetched(news))
                }
              })
              .catch(error => {
                  dispatch(newsFetchingError(error.message))
              });

}
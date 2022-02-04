import { createReducer } from "@reduxjs/toolkit";
import { INews, newsFetched, newsFetching, newsFetchingError, removeNewsItem, RootState } from "./actions";

export const initialState: RootState = {
    news: [],
    loading: true,
    error: null,
    newsItem: {
        title: '',
        author: '',
        publishedAt: {
            day:  '',
            month: '',
            date: '',
            year: '',
        },
        description: '',
        content: '',
        url: '',
    },
};

export const rootReducer = createReducer(initialState, {
    [newsFetching.type]: (state) => {
        state.loading = true;
    },
    [newsFetched.type]: (state, action) => {
        state.news = action.payload;
        state.loading = false;
    },
    [newsFetchingError.type]: (state, action) => {
        state.error = action.payload;
        state.loading = false;
    },
    [removeNewsItem.type]: (state, action) => {
        state.news = state.news.filter((item: INews) => { return action.payload.url !== item.url });
        console.log(state.news);
    }, 
})
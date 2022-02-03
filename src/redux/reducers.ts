import { createReducer } from "@reduxjs/toolkit";
import { getNewsItem, INews, newsFetched, newsFetching, newsFetchingError, removeNewsItem, RootState } from "./actions";

export const initialState: RootState = {
    news: [],
    loading: true,
    error: null,
    removeMessage: '',
    fetchingState: 'none',
    newsItem: {
        title: '',
        author: '',
        publishedAt: '',
        description: '',
        content: '',
        url: '',
    },
};

export const rootReducer = createReducer(initialState, {
    [newsFetching.type]: (state) => {
        state.fetchingState = 'requesting';
        state.loading = true;
    },
    [newsFetched.type]: (state, action) => {
        state.fetchingState = 'success';
        state.news = action.payload;
        state.loading = false;
    },
    [newsFetchingError.type]: (state, action) => {
        state.fetchingState = 'failed';
        state.error = action.payload;
        state.loading = false;
    },
    [removeNewsItem.type]: (state, action) => {
        state.removeMessage = `new's item deleted from storage`;
        state.news = state.news.filter((item: INews) => { return action.payload.title !== item.title });
        console.log(state.removeMessage, state.news);
    },
    [getNewsItem.type]: (state, action) => {
        state.newsItem = action.payload;
    }    
})

export type newsRemoveAction = {
    type: string,
    payload: string;
}

export type getNewsItemAction = {
    type: string,
    payload: INews,
}

export type newsFetchedAction = {
    type: string,
    fetchingState: string;
    news: INews[]
}

export type newsFetchingErrorAction = {
    type: string,
    fetchingState: string;
    error: null | boolean; 
}
import {createSlice} from "@reduxjs/toolkit";
import {useSelector} from "react-redux";

const stories = createSlice({
        name: 'stories',
        initialState: {
            items: [],
            itemsCard: [],
            isLoading: true,
            itemsCommits: [],
            itemsOneStories: {},
            itemChildCommits: []
        },
        reducers: {
            setStories(state, action) {
                return {
                    ...state,
                    items: [...action.payload],
                    isLoading: false
                }
            },
            setStoriesCard(state, action) {
                return {
                    ...state,
                    itemsCard: action.payload ? [...action.payload] : [],
                    isLoading: false
                }
            },
            setIsLoading(state, action) {
                return {
                    ...state,
                    isLoading: action.payload
                }
            },

            setStoriesCommits(state, action) {
                return {
                    ...state,
                    itemsCommits: action.payload ? [...action.payload] : [],
                    isLoading: false
                }
            },

            setChildCommit(state, action) {
                return {
                    ...state,
                    itemChildCommits: action.payload ? [...action.payload] : [],
                    isLoading: false
                }
            },

            setOneStoriesItem(state, action) {
                return {
                    ...state,
                    itemsOneStories: action.payload ? {
                        ...action.payload
                    } : {},
                    isLoading: false
                }
            }
        }
    }
)

export default stories.reducer
export const {
    setIsLoading,
    setStories,
    setStoriesCard,
    setStoriesCommits,
    setOneStoriesItem,
} = stories.actions

export const useStoriesSelector = () => useSelector((state) => state.stories);

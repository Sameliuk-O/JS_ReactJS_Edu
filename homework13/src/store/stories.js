import {createSlice} from "@reduxjs/toolkit";


const stories = createSlice({
        name: 'stories',
        initialState: {
            items: [],
            itemsCard: [],
            isLoading: true,
            itemsCommits: [],
            itemsOneStories: {},
            itemChildCommits: []
            // isError: false
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
                // console.log(action)
                return {
                    ...state,

                    itemsCommits: action.payload ? [...action.payload] : [],
                    isLoading: false

                }
            },

            setChildCommit(state, action) {
                console.log(action)

                return {
                    ...state,

                    itemChildCommits: action.payload ? [...action.payload]: [],
                    isLoading: false
                }
            },

            setOneStoriesItem(state, action) {
                console.log(action)
                return {
                    ...state,
                    itemsOneStories: action.payload ? {...action.payload
            } : {},
                    isLoading: false
                }

            }
            // setIsError(state, action) {
            //     return{
            //         ...state,
            //         isLoading: action.payload
            //     }
            // }
        }

    }
)

export default stories.reducer
export const {setIsError, setIsLoading, setStories, setStoriesCard, setStoriesCommits, setOneStoriesItem, setChildCommit} = stories.actions


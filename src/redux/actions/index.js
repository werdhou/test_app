import axios from "axios"

const SET_DATA = 'SET_DATA'
const SET_LOADED = 'SET_LOADED'

export const setLoaded = (loading) => ({
    type: SET_LOADED,
    payload: loading
})

export const setData = (data) => ({
    type: SET_DATA,
    payload: data
})

export const fetchingData = () => async (dispatch) => {
    dispatch(setLoaded(true))
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
        dispatch(setData(data))
    }
    catch (error) {
        console.error(error)
    }
    finally {
        dispatch(setLoaded(false))
    }
}

export const onDeleteClick = ( data, idx, id) => async(dispatch) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        data.splice(idx, 1)
        dispatch(setData(data))
}

export const onSortClick = (data, value)  => dispatch => {
    const newData = [...data]
    newData.sort((a, b) => a[value] > b[value] ? 1 : -1)
    dispatch(setData(newData))
}
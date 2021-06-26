


const initialState = {
    data: [],
    loading: false
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DATA':
            return {
                ...state,
                data: action.payload
            }
        case 'SET_LOADED':
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}


export default dataReducer
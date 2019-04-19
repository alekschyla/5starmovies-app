export const makeFetchDuck = (name, url) => {
    const SET = `${name}/SET`
    const FETCH_START = `${name}/FETCH_START`
    const FETCH_END = `${name}/FETCH_END`
    const FETCH_FAILED = `${name}/FETCH_FAILED`

    const fetchAsyncActionCreator = (queryParams= '') => (dispatch, getState) => {
        dispatch(fetchStartActionCreator())

        fetch(url + queryParams)
            .then(r => r.json())
            .then(data => {
                dispatch(
                    setActionCreator(
                        data
                    )
                )
            })
            .catch(() => {
                dispatch(fetchFailedActionCreator())
            })
            .finally(() => {
                dispatch(fetchEndActionCreator())
            })

    }

    const setActionCreator = data => ({
        type: SET,
        data,
    })
    const fetchStartActionCreator = () => ({ type: FETCH_START })
    const fetchEndActionCreator = () => ({ type: FETCH_END })
    const fetchFailedActionCreator = () => ({ type: FETCH_FAILED })

    const initialState = {
        data: null,
        isLoading: false,
        isError: false,
    }

    const reducer = (state = initialState, action) => {
        switch (action.type) {
            case SET:
                return {
                    ...state,
                    data: action.data,
                }
            case FETCH_START:
                return {
                    ...state,
                    isLoading: true,
                    isError: false,
                }
            case FETCH_END:
                return {
                    ...state,
                    isLoading: false,
                }
            case FETCH_FAILED:
                return {
                    ...state,
                    isError: true,
                }
            default:
                return state
        }
    }

    return {
        fetchAsyncActionCreator,
        reducer,
    }
}

export default makeFetchDuck
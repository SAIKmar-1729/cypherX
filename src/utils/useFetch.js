import axios from "axios";
import { useReducer, useEffect } from "react";

const ACTIONS = {
    API_REQUEST: "api-request",
    FETCH_DATA: "fetch-data",
    ERROR: "error",
};

const initialState = {
    tickets: [],
    users: [],
    loading: true,
    error: null,
};

function reducer(state, { type, payload }) {
    switch (type) {
        case ACTIONS.API_REQUEST:
            return { ...state, tickets: [], users: [], loading: true, error: null }; // Reset data and error
        case ACTIONS.FETCH_DATA:
            return { ...state, tickets: payload.tickets, users: payload.users, loading: false, error: null };
        case ACTIONS.ERROR:
            return { ...state, tickets: [], users: [], loading: false, error: payload };
        default:
            return state;
    }
}

function useFetch(url) {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({ type: ACTIONS.API_REQUEST });
        axios
            .get(url)
            .then((res) => {
                dispatch({ type: ACTIONS.FETCH_DATA, payload: { tickets: res.data.tickets, users: res.data.users } });
            })
            .catch((e) => {
                dispatch({ type: ACTIONS.ERROR, payload: e.error });
            });
    }, [url]);

    return state;
}

export default useFetch;

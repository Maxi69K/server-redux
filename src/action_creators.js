import * as actionTypes from "./actionTypes"; 


export const START_ACTION = () => {
    return {
        type: actionTypes.START_ACTION
    }
}

export const FETCH_ACCOUNTS = () => {
    return function (dispatch) {
        dispatch(FETCH_USERS_REQUEST())
        fetch('https://raw.githubusercontent.com/Maxi69K/accounts_db/main/accounts.json')
          .then((response) => response.json())
          .then((data) => {
            // data = accounts
            dispatch(FETCH_USERS_SUCCESS(data))
          })
          .catch((error) => {
            dispatch(FETCH_USERS_ERROR(error))
          })
    }
}

export const FETCH_USERS_REQUEST = () => {  // creators for loading: false or true
    return {
        type: actionTypes.FETCH_USERS_REQUEST
    }
}

export const FETCH_USERS_SUCCESS = (accounts) => {  // creators for accounts: []
    return {
        type: actionTypes.FETCH_USERS_SUCCESS,
        payload: {accounts: accounts}
    }
}

export const FETCH_USERS_ERROR = (error) => {  // creators for error: null or string
    return {
        type: actionTypes.FETCH_USERS_ERROR,
        payload: {error: error}
    }
}

export const DISPLAY_ACCOUNTS_ACTION = () => {
    return {
        type: actionTypes.DISPLAY_ACCOUNTS_ACTION
    }
}

export const DISPLAY_ADD_ACCOUNTS_ACTION = () => {
    return {
        type: actionTypes.DISPLAY_ADD_ACCOUNTS_ACTION
    }
}

export const ADD_NEW_ACCOUNT_ACTION = (newAccount) => {
    return {
        type: actionTypes.ADD_NEW_ACCOUNT_ACTION,
        payload: {newAccount: newAccount}
    }
}

export const DELETE_ACCOUNT_ACTION = (id) => {
    return {
        type: actionTypes.DELETE_ACCOUNT_ACTION,
        payload: {id: id}
    }
}
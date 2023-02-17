import { accountsState } from './initialState'
import * as actions from "./actionTypes";

function accountsReducer(state = accountsState, action) {
    switch (action.type) {
      case actions.START_ACTION:
        return state
      case actions.FETCH_USERS_REQUEST:
        return {...state, loading: true}
      case actions.FETCH_USERS_SUCCESS:
        return {loading: false, accounts: action.payload.accounts, error: null}
      case actions.FETCH_USERS_ERROR:
        return {loading: false, accounts: [], error: action.payload.error}  
      case actions.ADD_NEW_ACCOUNT_ACTION:
        return {...state, accounts: [...state.accounts, action.payload.newAccount]}
      case actions.DELETE_ACCOUNT_ACTION:
        return {...state, accounts: state.accounts.filter(account => account.id !== parseInt(action.payload.id))}
      default:
        return state
    }
}

export default accountsReducer;
import * as APIUtil from '../util/session_api_util'

    // Action creators
    export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
    export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
    export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

    export const receiveCurrentUser = (currentUser) => (
        {
            type: RECEIVE_CURRENT_USER,
            currentUser,
        }
    );

    export const logoutCurrentUser = () => (
        {
            type: LOGOUT_CURRENT_USER,
        }
    );

    export const receiveErrors = (errors) => (
        {
            type: RECEIVE_SESSION_ERRORS,
            errors,
        }
    );

    // Thunk action creators
    export const login = (user) => dispatch => (
        APIUtil.login(user)
            .then(user => dispatch(receiveCurrentUser(user)),
                err => (dispatch(receiveErrors(err.responseJSON)))
            )   
    );

    export const signup = (user) => dispatch => (
        APIUtil.login(user)
            .then(user => dispatch(receiveCurrentUser(user)),
                err => (dispatch(receiveErrors(err.responseJSON)))
            )   
    );

    export const logout = () => dispatch => (
        APIUtil.logout(user)
            .then(user => dispatch(logoutCurrentUser()),
                err => (dispatch(receiveErrors(err.responseJSON)))
            )   
    );
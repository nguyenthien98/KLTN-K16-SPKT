import { accountConstants } from '../commons/constants';
import { userService } from '../services';

const loginUser = (username, password) => {
    return async (dispatch) => {
        dispatch(request());
        return userService.login(username, password)
            .then(res => {
                dispatch(success());
                dispatch(authSuccess(res.accessToken));
            })
            .catch(error => {
                dispatch(failure(error));
            });
    };
    function request() { return { type: accountConstants.LOGIN_LOADING } }
    function success() { return { type: accountConstants.LOGIN_SUCCESS } }
    function authSuccess(token) { return { type: accountConstants.AUTH_USER_SUCCESS, payload: token } }
    function failure(error) { return { type: accountConstants.LOGIN_FAILURE, payload: error } }
}

const logoutUser = () => {
    return async (dispatch) => {
        dispatch({ type: accountConstants.AUTH_USER_FAILURE });
    }
}

export const authActions = {
    loginUser,
    logoutUser
};
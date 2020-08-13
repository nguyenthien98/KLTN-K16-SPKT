import { getApiUrl } from "../configs/api.config";
import { ApiController } from "../commons/constants";
import axios from 'axios';

const accountUrl = getApiUrl(ApiController.Account);
const userUrl = getApiUrl(ApiController.User);

function login(username, password) {
    const data = {
        username: username,
        password: password
    };
    return new Promise((resolve, reject) => {
        axios.post(accountUrl + 'customer/login', data)
            .then(res => {
                if (res.data) {
                    resolve(res.data);
                } else {
                    reject(res);
                }
            })
            .catch(err => reject(err))
    });
}

function getInfoFromAccessToken(accessToken) {
    return new Promise((resolve, reject) => {
        const accessTokenJson = {
            accessToken: accessToken
        };

        axios.post(accountUrl + 'customer/get-info-from-access-token', accessTokenJson)
            .then(res => {
                if (res.data) {
                    resolve(res);
                } else {
                    reject(res);
                }
            })
            .catch(err => reject(err))
    });
}

const updatePassword = async (passwordViewModel) => {
    const response = await axios.put(accountUrl + 'change-password', passwordViewModel);
    return response.data;
}

const createAccount = async (userInfo) => {
    var response = await axios.post(accountUrl + 'customer/register', userInfo);
    return response.data;
}

const updateUserInfo = async (userInfo) => {
    var response = await axios.put(userUrl + 'update-information', userInfo);
    return response.data;
}

export const userService = {
    login,
    createAccount,
    updateUserInfo,
    updatePassword,
    getInfoFromAccessToken,
};
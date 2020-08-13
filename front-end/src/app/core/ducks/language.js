import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const actionTypes = {
    SetLanguage: "lang/SET_LANGUAGE"
};

const initialState = {
    lang: "en"
};

export const reducer = persistReducer(
    { storage, key: "app-language" },
    (state = initialState, action) => {
        switch (action.type) {
            case actionTypes.SetLanguage:
                return { ...state, lang: action.payload.lang };

            default:
                return state;
        }
    }
);

export const actions = {
    setLanguage: lang => ({ type: actionTypes.SetLanguage, payload: { lang } })
};

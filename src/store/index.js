import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../app/reducers";
import thunk from "redux-thunk";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["registration_session", "session"],
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store =
  process.env.REACT_ENV === "production"
    ? createStore(persistedReducer, applyMiddleware(thunk))
    : createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));

export const persistor = persistStore(store);

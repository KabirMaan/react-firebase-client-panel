import { createStore, combineReducers, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import firebase from "firebase";
import "firebase/firestore";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import { reduxFirestore, firestoreReducer } from "redux-firestore";
//Reducers
import notifyReducer from "./reducers/notifyReducer";
import settingsReducer from "./reducers/settingsReducer";

const firebaseConfig = {
  apiKey: "AIzaSyBwXR_oxFaAZrgNh1bNKMcxHUjYt87nUfk",
  authDomain: "react-client-panel-cf658.firebaseapp.com",
  databaseURL: "https://react-client-panel-cf658.firebaseio.com",
  projectId: "react-client-panel-cf658",
  storageBucket: "react-client-panel-cf658.appspot.com",
  messagingSenderId: "778098545703"
};

// react-redux-firebase-config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);
// Initialize firestore
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  notify: notifyReducer,
  settings: settingsReducer
});

// Create initial state
const initialState = {};

// Create store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  composeWithDevTools(reactReduxFirebase(firebase))
);

export default store;

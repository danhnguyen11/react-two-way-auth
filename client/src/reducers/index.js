import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import quoteReducer from './quoteReducer';


export default combineReducers({
    form: reduxForm,
    auth : authReducer,
    quoteReducer
})